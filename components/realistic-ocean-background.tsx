"use client"

import { useEffect, useRef } from "react"

const RealisticOceanBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameId = useRef<number | undefined>(undefined)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {
      console.error("Canvas element not found.")
      return
    }

    const gl = canvas.getContext("webgl2")
    if (!gl) {
      console.error("WebGL 2 not supported or context creation failed.")
      alert("WebGL 2 is not supported by your browser. Please use a modern browser like Chrome or Firefox.")
      return
    }

    const vertexShaderSource = `#version 300 es
      in vec4 aPosition;
      void main() {
          gl_Position = aPosition;
      }`

    // User's provided fragment shader code, "as is"
    const fragmentShaderSource = `#version 300 es
      precision highp float;
      
      uniform vec3 iResolution;
      uniform float iTime;
      uniform vec4 iMouse;
      out vec4 fragColor;

      #define OCTAVES  5          // ↓ fewer octaves ⇒ cheaper noise
      #define MAX_STEPS  32       // ↓ fewer ray-march steps
      #define THRESHOLD .001      // ↑ looser hit-threshold => fewer iterations
      #define SHARP_MODE 0 // Just for fun.

      float rand(vec2 co){
         return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
      }

      float rand2(vec2 co){
         return fract(cos(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
      }

      float valueNoiseSimple(vec2 vl) {
         const vec2 helper = vec2(0., 1.);
          vec2 interp = smoothstep(vec2(0.), vec2(1.), fract(vl));
          vec2 grid = floor(vl);
          float rez = mix(mix(rand2(grid + helper.xx),
                              rand2(grid + helper.yx),
                              interp.x),
                          mix(rand2(grid + helper.xy),
                              rand2(grid + helper.yy),
                              interp.x),
                          interp.y);
      #if SHARP_MODE==1    
          return abs(rez*2. -1.);
      #else
          return rez;
      #endif
      }

      const mat2 unique_transform = mat2( 0.85, -0.65, 0.65, 0.85 );

      float fractalNoise(vec2 vl, out float mainWave) {
          
      #if SHARP_MODE==1
          const float persistance = 2.4;
          float frequency = 2.2;
          const float freq_mul = 2.2;
          float amplitude = .4;
      #else
          const float persistance = 3.0;
          float frequency = 2.3;
          const float freq_mul = 2.3;
          float amplitude = .7;
      #endif
          
          float rez = 0.0;
          vec2 p = vl;
          
          float mainOfset = (iTime + 40.)/ 2.;
          
          vec2 waveDir = vec2(p.x+ mainOfset, p.y + mainOfset);
          float firstFront = amplitude + 
                      (valueNoiseSimple(p) * 2. - 1.);
          mainWave = firstFront * valueNoiseSimple(p + mainOfset);
          
          rez += mainWave;
          amplitude /= persistance;
          p *= unique_transform;
          p *= frequency;
          
          float timeOffset = iTime / 4.;
          
          for (int i = 1; i < OCTAVES; i++) {
              waveDir = p;
              waveDir.x += timeOffset;
              rez += amplitude * sin(valueNoiseSimple(waveDir * frequency) * .5 );
              amplitude /= persistance;
              p *= unique_transform;
              frequency *= freq_mul;
              timeOffset *= 1.025;
              timeOffset *= -1.;
          }
          return rez;
      }

      float scene(vec3 a) {
         float mainWave;
         float zVal = fractalNoise(vec2(a.x - 5., a.z ), mainWave);
         return a.y + 0.2 + sin(zVal / 6.5);
      }

      float fractalNoiseLow(vec2 vl, out float mainWave) {
          #if SHARP_MODE==1
          const float persistance = 2.4;
          float frequency = 2.2;
          const float freq_mul = 2.2;
          float amplitude = .4;
      #else
          const float persistance = 3.0;
          float frequency = 2.3;
          const float freq_mul = 2.3;
          float amplitude = .7;
      #endif
          
          float rez = 0.0;
          vec2 p = vl;
          
          float mainOfset = (iTime + 40.)/ 2.;
          
          vec2 waveDir = vec2(p.x+ mainOfset, p.y + mainOfset);
          float firstFront = amplitude + 
                      (valueNoiseSimple(p) * 2. - 1.);
          mainWave = firstFront * valueNoiseSimple(p + mainOfset);
          
          rez += mainWave;
          amplitude /= persistance;
          p *= unique_transform;
          p *= frequency;
          
          float timeOffset = iTime / 4.;
          
          for (int i = 1; i < OCTAVES - 5; i++) {
              waveDir = p;
              waveDir.x += timeOffset;
              rez += amplitude * sin(valueNoiseSimple(waveDir * frequency) * .5 );
              amplitude /= persistance;
              p *= unique_transform;
              frequency *= freq_mul;
              timeOffset *= 1.025;
              timeOffset *= -1.;
          }
          return rez;
      }

      float sceneLow(vec3 a) {
         float mainWave;
         float zVal = fractalNoiseLow(vec2(a.x - 5., a.z ), mainWave);
         return a.y + 0.2 + sin(zVal / 6.5);
      }

      vec3 snormal(vec3 a) {
         vec2 e = vec2(.0001, 0.);
         float w = scene(a);
         return normalize(vec3(
             scene(a+e.xyy) - w,
             e.x,
             scene(a+e.yyx) - w));
      }

      float trace(vec3 O, vec3 D, out float hill) {
          float L = 0.;
          int steps = 0;
          float d = 0.;
          for (int i = 0; i < MAX_STEPS; ++i) {
              d = sceneLow(O + D*L);
              L += d;
              
              if (d < THRESHOLD*L)
                  break;
          }
          
          hill = d;
          return L;
      }

      float occluded(vec3 p, float len, vec3 dir) {
          return max(0., scene(p + len * dir));
      }

      float occlusion(vec3 p, vec3 normal) {
          vec3 rotZccw = vec3(-normal.y, normal.xz);
          vec3 rotZcw = vec3(normal.y, -normal.x, normal.z);
          
          vec3 rotXccw = vec3(normal.x, normal.z, -normal.y);
          vec3 rotXcw = vec3(normal.x, -normal.z, normal.y);
          
          vec3 rotYccw = vec3(normal.z, normal.y, -normal.x);
          vec3 rotYcw = vec3(-normal.z, normal.y, normal.x);
          
          float rez = 0.;
          float dst = .28;
          rez+= occluded(p, dst, normal);
          
          rez+= occluded(p, dst, rotXccw);
          rez+= occluded(p, dst, rotXcw);
          rez+= occluded(p, dst, rotYccw);
          rez+= occluded(p, dst, rotYcw);
          rez+= occluded(p, dst, rotZccw);
          rez+= occluded(p, dst, rotZcw);
          return (pow(min(rez, 1.), 4.5) - 0.13725) * 1.7;
      }

      vec3 enlight(vec3 p, vec3 normal, vec3 eye, vec3 lightPos) {
          vec3 dir = lightPos - p;
          vec3 eyeDir = eye - p;
          vec3 I = normalize(dir);
          const vec3 color0 = vec3(0.0470588, 0.1921569, 0.2980392);
          const vec3 color1 = vec3(0.0470588, 0.3450980, 0.4078431);
          const vec3 color2 = vec3(0.1294117, 0.5137254, 0.6901961);
          const vec3 color3 = vec3(0.1686274, 0.7176471, 0.8156863);
          vec3 diffuse = vec3(max(dot(normal, I), 0.));
          vec3 diffuse0 = clamp(diffuse * color0.rgb, 0., 1.);
          vec3 diffuse1 = clamp(diffuse * color1.rgb, 0., 1.);
          vec3 diffuse2 = clamp(diffuse * color2.rgb, 0., 1.);
          vec3 diffuse3 = clamp(diffuse * color3.rgb, 0., 1.);
          vec3 refl = normalize(-reflect(I, normal));
          float spec = max(dot(refl, normalize(eyeDir)), 0.);
          const vec3 spec_clr = vec3(.8, .9, 1.);
          float dst = clamp(length(eyeDir),1. , 500.);
          spec = pow(spec, 0.3 * 300.)* pow(.85, dst);
          spec = clamp(spec, 0., 1.);
          
          vec3 Ispec = spec * spec_clr;
          
          float dist = length(eyeDir);
          float atten = pow(0.93, dist * 7. );
          float deep = occlusion(p, normal) * atten;
          const float one_of_third = 1./3.;
          
          // Some logic workaround, hard to say what is better from performance reason
          float third1 = max(0., sign(one_of_third - deep));
          float third2 = (1. - third1) * max(0., sign(2. * one_of_third - deep));
          float third3 = (1. - third1) * (1. - third2);
              
          return Ispec + third1 * mix(diffuse0, diffuse1, deep * 3.) + 
              third2 * mix(diffuse1, diffuse2, (deep - one_of_third) * 3.) +
              third3 * mix(diffuse2, diffuse3, (deep - 2. * one_of_third) * 3.)
              ;
      }

      void mainImage( out vec4 fragColor, in vec2 fragCoord )
      {
          vec2 uv = fragCoord.xy / iResolution.xy;
          vec2 centered_uv = uv * 2. - 1.;
          centered_uv.x *= iResolution.x / iResolution.y;
          
          vec2 sunPos = vec2(.845 * iResolution.x / iResolution.y, .75);
          float timeOffset = iTime / 5.;
          
          vec3 O = vec3(0., 0.1, 1. - timeOffset);
          float h = scene(O) * 0.65;
          O.y -= h;
          
          vec3 D = normalize(vec3(centered_uv, -2.0)); //fov
          float hill;
          float path = trace(O, D, hill);
          vec3 coord = O + path * D;
          vec3 resColor;
          const vec3 skyBlueColor = vec3(0.529411765, 0.807843137, 0.980392157); // nice blue color
          const vec3 sunColor = vec3(1.0, 1.0, 1.);
          const vec3 sunGalo = vec3(.9, .9, .8);
          // Background color
          vec3 bgColor = mix(vec3(1.), skyBlueColor, clamp(centered_uv.y, 0., 1.));
          float sunDst = length(centered_uv - sunPos) ;
          float sunFluctuation = valueNoiseSimple(centered_uv - sunPos + timeOffset);
          sunFluctuation = clamp(sunFluctuation * .25, 0.1, .2);
          
          float galoVal= exp(-pow(sunDst * 0.35, 1.15));
          float val  = clamp(1. / (sunDst *110.5), 0., 1.);
          
          bgColor = mix(bgColor, sunColor*val + (galoVal + sunFluctuation) * sunGalo, galoVal);
          vec3 lightPos = vec3(20., 90. -h, -95. - timeOffset);
          vec3 normal = snormal(coord);
              
          resColor = enlight(coord, normal, O, lightPos);
          resColor = mix(resColor, bgColor, min(hill, 1.));
          fragColor = vec4(resColor, 1.);
      }

      void main() {
          mainImage(fragColor, gl_FragCoord.xy);
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
        const shaderType = type === glCtx.VERTEX_SHADER ? "Vertex" : "Fragment"
        console.error(`ERROR compiling ${shaderType} shader:`, glCtx.getShaderInfoLog(shader))
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
      glCtx.validateProgram(program);
      if (gl !== null && gl !== undefined) {
        const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
        const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)
        // ...
      } else {
        console.error("WebGL context is null or undefined.")
      }
      return program
    }

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)

    if (!vertexShader || !fragmentShader) {
      console.error("Shader creation failed. Aborting.")
      return
    }

    const program = createProgram(gl, vertexShader, fragmentShader)
    if (!program) {
      console.error("Program creation failed. Aborting.")
      return
    }

    const positionAttributeLocation = gl.getAttribLocation(program, "aPosition")
    const resolutionUniformLocation = gl.getUniformLocation(program, "iResolution")
    const timeUniformLocation = gl.getUniformLocation(program, "iTime")
    const mouseUniformLocation = gl.getUniformLocation(program, "iMouse")

    const positionBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)

    gl.useProgram(program)

    gl.enableVertexAttribArray(positionAttributeLocation)
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0)

    let mouseX = 0, mouseY = 0, mouseClickX = 0, mouseClickY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = canvas.height - e.clientY
    };
    const handleMouseDown = (e: MouseEvent) => {
      mouseClickX = e.clientX;
      mouseClickY = canvas.height - e.clientY;
    }
    const handleMouseUp = (e: MouseEvent) => {
      mouseClickX = -Math.abs(mouseClickX);
      mouseClickY = -Math.abs(mouseClickY);
    }

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mouseup", handleMouseUp);

    function resizeCanvas() {
      if (!canvas || !gl) return
      const displayWidth = canvas.clientWidth;
      const displayHeight = canvas.clientHeight;

      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        gl.viewport(0, 0, canvas.width, canvas.height)
      }
      if (mouseX === 0 && mouseY === 0) {
        mouseX = canvas.width / 2
        mouseY = canvas.height / 2
      }
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    let startTime = Date.now();

    function renderLoop() {
      if (!gl || !program) {
        if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current)
        return
      }

      resizeCanvas();

      const currentTime = (Date.now() - startTime) * 0.001

      gl.useProgram(program);
      gl.uniform3f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height, 1.0)
      gl.uniform1f(timeUniformLocation, currentTime)
      gl.uniform4f(mouseUniformLocation, mouseX, mouseY, mouseClickX, mouseClickY)

      if (mouseClickX > 0) mouseClickX = -mouseClickX;
      if (mouseClickY > 0) mouseClickY = -mouseClickY;

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      animationFrameId.current = requestAnimationFrame(renderLoop)
    }

    animationFrameId.current = requestAnimationFrame(renderLoop)

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener("resize", resizeCanvas)
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mouseup", handleMouseUp);

      if (gl) {
        if (program) gl.deleteProgram(program)
        if (vertexShader) gl.deleteShader(vertexShader)
        if (fragmentShader) gl.deleteShader(fragmentShader)
        if (positionBuffer) gl.deleteBuffer(positionBuffer)
      }
    }
  }, [])

  return <canvas ref={canvasRef} id="glCanvas" className="fixed top-0 left-0 w-full h-full -z-20" />
}

export default RealisticOceanBackground
