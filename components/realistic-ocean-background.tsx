"use client"

import { useEffect, useRef } from "react"

const RealisticOceanBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameId = useRef<number | undefined>(undefined)
  const texturesLoadedRef = useRef<boolean>(true) // No external textures to load

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {
      console.error("Canvas element not found.")
      return
    }

    const gl = canvas.getContext("webgl2")
    if (!gl) {
      console.error("WebGL 2 not supported or context creation failed.")
      return
    }

    // Create framebuffers for multi-pass rendering
    const bufferAFramebuffer = gl.createFramebuffer()
    const bufferATexture = gl.createTexture()

    // Shader sources
    const vertexShaderSource = `#version 300 es
      in vec4 aPosition;
      void main() {
          gl_Position = aPosition;
      }`

    // Ultra-simple Buffer A shader - just sine waves, no raymarching
    const bufferAFragmentShaderSource = `#version 300 es
      precision highp float;

      uniform vec3 iResolution;
      uniform float iTime;
      uniform vec4 iMouse;
      out vec4 fragColor;

      // Very simple height function using just sine waves
      float getHeight(vec2 p, float t) {
        // Large, slow waves
        float h = 0.08 * sin(p.x * 0.5 + t * 0.5);
        h += 0.06 * sin(p.y * 0.7 + t * 0.4);
        
        // Medium waves
        h += 0.03 * sin(p.x * 1.2 + p.y * 0.9 + t * 0.8);
        
        // Small ripples (very subtle)
        h += 0.01 * sin(p.x * 3.0 + p.y * 2.5 + t * 1.2);
        
        return h;
      }

      // Simple normal calculation from height field
      vec3 getNormal(vec2 p, float t) {
        float eps = 0.01;
        float h = getHeight(p, t);
        float hx = getHeight(p + vec2(eps, 0.0), t);
        float hy = getHeight(p + vec2(0.0, eps), t);
        
        return normalize(vec3(h - hx, eps, h - hy));
      }

      void main() {
        // Normalized coordinates
        vec2 uv = gl_FragCoord.xy / iResolution.xy;
        
        // Scale to make the ocean look larger
        vec2 p = (uv * 2.0 - 1.0) * 5.0;
        p.x *= iResolution.x / iResolution.y; // Correct aspect ratio
        
        // Add camera movement based on mouse
        vec2 mouseOffset = vec2(0.0);
        if (iMouse.z > 0.0) { // If mouse is pressed
          mouseOffset = (iMouse.xy / iResolution.xy) * 2.0 - 1.0;
        }
        p += mouseOffset * 2.0;
        
        float t = iTime * 0.4; // Slow time down for gentler waves
        
        // Get height and normal at this point
        float h = getHeight(p, t);
        vec3 n = getNormal(p, t);
        
        // Base water color (deep blue)
        vec3 waterColor = vec3(0.0, 0.1, 0.2);
        
        // Lighter blue for wave peaks
        vec3 surfaceColor = vec3(0.1, 0.3, 0.5);
        
        // Blend based on height
        vec3 color = mix(waterColor, surfaceColor, h * 10.0 + 0.5);
        
        // Simple directional light from upper right
        vec3 lightDir = normalize(vec3(0.5, 0.8, 0.6));
        float diff = max(dot(n, lightDir), 0.0);
        color *= 0.5 + 0.5 * diff;
        
        // Add specular highlight
        vec3 viewDir = normalize(vec3(0.0, 0.0, 1.0));
        vec3 reflectDir = reflect(-lightDir, n);
        float spec = pow(max(dot(viewDir, reflectDir), 0.0), 32.0);
        color += vec3(0.3, 0.3, 0.4) * spec;
        
        // Simple fresnel effect
        float fresnel = pow(1.0 - max(dot(n, viewDir), 0.0), 3.0);
        color = mix(color, vec3(0.2, 0.4, 0.6), fresnel * 0.6);
        
        // Store depth in alpha for DoF in Image pass
        // Closer to camera = smaller value
        float depth = 0.5 - h * 3.0;
        
        fragColor = vec4(color, depth);
      }`

    // Image pass fragment shader for post-processing (DoF, color grading)
    const imageFragmentShaderSource = `#version 300 es
      precision highp float;

      uniform vec3 iResolution;
      uniform sampler2D iChannel0;
      out vec4 fragColor;

      void main() {
        vec2 uv = gl_FragCoord.xy / iResolution.xy;
        vec4 bufferA = texture(iChannel0, uv);
        
        // Extract color and depth
        vec3 color = bufferA.rgb;
        float depth = bufferA.a;
        
        // Depth of Field effect
        float focusDepth = 0.5; // Focus at mid-depth
        float dofAmount = abs(depth - focusDepth) * 2.0;
        
        // Apply blur based on depth difference
        if (dofAmount > 0.05) {
          vec3 blurColor = vec3(0.0);
          float totalWeight = 0.0;
          
          // Simple circular blur
          for (int i = 0; i < 12; i++) {
            float angle = float(i) * 3.14159 * 2.0 / 12.0;
            float radius = dofAmount * 0.02;
            vec2 offset = vec2(cos(angle), sin(angle)) * radius;
            
            // Sample with offset
            vec4 sampleColor = texture(iChannel0, uv + offset);
            
            // Weight by depth similarity (keep in-focus areas sharp)
            float weight = 1.0 - abs(sampleColor.a - depth) * 5.0;
            weight = max(weight, 0.1);
            
            blurColor += sampleColor.rgb * weight;
            totalWeight += weight;
          }
          
          // Normalize and blend
          blurColor /= totalWeight;
          color = mix(color, blurColor, min(dofAmount * 2.0, 0.8));
        }
        
        // Color grading for that "4K look"
        
        // 1. Increase contrast
        color = (color - 0.5) * 1.2 + 0.5;
        
        // 2. Vibrance (increase saturation of less-saturated areas)
        float luma = dot(color, vec3(0.299, 0.587, 0.114));
        vec3 chroma = color - luma;
        color = luma + chroma * 1.3;
        
        // 3. Subtle vignette
        float vignette = 1.0 - smoothstep(0.5, 1.5, length((uv - 0.5) * 1.8));
        color *= mix(0.8, 1.0, vignette);
        
        // 4. Subtle blue tint to shadows
        color = mix(vec3(0.0, 0.05, 0.1), color, pow(luma, 0.8));
        
        // 5. Gamma correction for display
        color = pow(max(color, 0.0), vec3(1.0 / 2.2));
        
        fragColor = vec4(color, 1.0);
      }`

    function createShader(glCtx: WebGL2RenderingContext, type: number, source: string) {
      const shader = glCtx.createShader(type)
      if (!shader) {
        console.error(`Unable to create shader type: ${type}`)
        return null
      }
      glCtx.shaderSource(shader, source)
      glCtx.compileShader(shader)
      if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
        console.error("Shader compile error:", glCtx.getShaderInfoLog(shader))
        glCtx.deleteShader(shader)
        return null
      }
      return shader
    }

    function createProgram(glCtx: WebGL2RenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader) {
      const program = glCtx.createProgram()
      if (!program) {
        console.error("Unable to create program")
        return null
      }
      glCtx.attachShader(program, vertexShader)
      glCtx.attachShader(program, fragmentShader)
      glCtx.linkProgram(program)
      if (!glCtx.getProgramParameter(program, glCtx.LINK_STATUS)) {
        console.error("Program link error:", glCtx.getProgramInfoLog(program))
        glCtx.deleteProgram(program)
        return null
      }
      return program
    }

    // Create vertex shader (shared by both passes)
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
    if (!vertexShader) return

    // Create fragment shaders for both passes
    const bufferAFragmentShader = createShader(gl, gl.FRAGMENT_SHADER, bufferAFragmentShaderSource)
    const imageFragmentShader = createShader(gl, gl.FRAGMENT_SHADER, imageFragmentShaderSource)
    if (!bufferAFragmentShader || !imageFragmentShader) return

    // Create shader programs
    const bufferAProgram = createProgram(gl, vertexShader, bufferAFragmentShader)
    const imageProgram = createProgram(gl, vertexShader, imageFragmentShader)
    if (!bufferAProgram || !imageProgram) return

    // Set up position buffer (shared by both passes)
    const positionBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)

    // Get attribute locations
    const bufferAPosAttribLocation = gl.getAttribLocation(bufferAProgram, "aPosition")
    const imagePosAttribLocation = gl.getAttribLocation(imageProgram, "aPosition")

    // Get uniform locations for Buffer A
    const bufferAUniforms = {
      resolution: gl.getUniformLocation(bufferAProgram, "iResolution"),
      time: gl.getUniformLocation(bufferAProgram, "iTime"),
      mouse: gl.getUniformLocation(bufferAProgram, "iMouse")
    }

    // Get uniform locations for Image pass
    const imageUniforms = {
      resolution: gl.getUniformLocation(imageProgram, "iResolution"),
      channel0: gl.getUniformLocation(imageProgram, "iChannel0")
    }

    // Set up framebuffer for Buffer A
    function setupFramebuffer(width: number, height: number) {
      // Set up Buffer A texture
      gl.bindTexture(gl.TEXTURE_2D, bufferATexture)
      
      // Try RGBA8 format which is widely supported
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)

      // Set up Buffer A framebuffer
      gl.bindFramebuffer(gl.FRAMEBUFFER, bufferAFramebuffer)
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, bufferATexture, 0)

      // Check framebuffer status
      const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER)
      if (status !== gl.FRAMEBUFFER_COMPLETE) {
        console.error("Framebuffer not complete:", status)
      }

      // Unbind framebuffer
      gl.bindFramebuffer(gl.FRAMEBUFFER, null)
    }

    // Mouse tracking
    let mouseX = 0, mouseY = 0, mousePressed = 0, mouseClick = 0
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = canvas.height - e.clientY
    }
    const handleMouseDown = () => {
      mousePressed = 1
      mouseClick = 1
    }
    const handleMouseUp = () => {
      mousePressed = 0
    }
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mousedown", handleMouseDown)
    canvas.addEventListener("mouseup", handleMouseUp)

    // Handle window resize
    function resizeCanvas() {
      if (!canvas || !gl) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      gl.viewport(0, 0, canvas.width, canvas.height)
      setupFramebuffer(canvas.width, canvas.height)
      mouseX = canvas.width / 2
      mouseY = canvas.height / 2
    }
    
    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    let startTime = Date.now()

    function renderLoop() {
      if (!gl) return
      
      const currentTime = (Date.now() - startTime) * 0.001

      // PASS 1: Render to Buffer A
      gl.bindFramebuffer(gl.FRAMEBUFFER, bufferAFramebuffer)
      gl.viewport(0, 0, canvas.width, canvas.height)
      gl.clearColor(0, 0, 0, 0)
      gl.clear(gl.COLOR_BUFFER_BIT)

      // Use Buffer A program
      gl.useProgram(bufferAProgram)

      // Set up vertex attributes
      gl.enableVertexAttribArray(bufferAPosAttribLocation)
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
      gl.vertexAttribPointer(bufferAPosAttribLocation, 2, gl.FLOAT, false, 0, 0)

      // Set uniforms for Buffer A
      gl.uniform3f(bufferAUniforms.resolution, canvas.width, canvas.height, 1.0)
      gl.uniform1f(bufferAUniforms.time, currentTime)
      gl.uniform4f(bufferAUniforms.mouse, mouseX, mouseY, mousePressed, mouseClick)
      
      // Reset mouseClick after it's been used
      mouseClick = 0

      // Draw Buffer A
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)

      // PASS 2: Render to screen using Buffer A as input
      gl.bindFramebuffer(gl.FRAMEBUFFER, null)
      gl.viewport(0, 0, canvas.width, canvas.height)
      gl.clearColor(0, 0, 0, 0)
      gl.clear(gl.COLOR_BUFFER_BIT)

      // Use Image program
      gl.useProgram(imageProgram)

      // Set up vertex attributes
      gl.enableVertexAttribArray(imagePosAttribLocation)
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
      gl.vertexAttribPointer(imagePosAttribLocation, 2, gl.FLOAT, false, 0, 0)

      // Set uniforms for Image pass
      gl.uniform3f(imageUniforms.resolution, canvas.width, canvas.height, 1.0)

      // Bind Buffer A texture as input for Image pass
      gl.activeTexture(gl.TEXTURE0)
      gl.bindTexture(gl.TEXTURE_2D, bufferATexture)
      gl.uniform1i(imageUniforms.channel0, 0)

      // Draw final image
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)

      animationFrameId.current = requestAnimationFrame(renderLoop)
    }

    animationFrameId.current = requestAnimationFrame(renderLoop)

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
      window.removeEventListener("resize", resizeCanvas)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mousedown", handleMouseDown)
      canvas.removeEventListener("mouseup", handleMouseUp)
      
      // Clean up WebGL resources
      gl.deleteProgram(bufferAProgram)
      gl.deleteProgram(imageProgram)
      gl.deleteShader(vertexShader)
      gl.deleteShader(bufferAFragmentShader)
      gl.deleteShader(imageFragmentShader)
      gl.deleteBuffer(positionBuffer)
      gl.deleteFramebuffer(bufferAFramebuffer)
      gl.deleteTexture(bufferATexture)
    }
  }, [])

  return <canvas ref={canvasRef} id="glCanvas" className="fixed top-0 left-0 w-full h-full -z-20" />
}

export default RealisticOceanBackground
