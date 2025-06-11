"use client"

import { useEffect, useRef } from "react"

// It's assumed that gl-matrix is loaded globally via a script tag in layout.tsx
// declare const glMatrix: any; // This was in the original, but the user's shader has its own matrix functions.

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
    console.log("WebGL 2 context obtained successfully.")

    const fragmentShaderSource = `#version 300 es
      precision highp float;

      uniform vec3 iResolution;
      uniform float iTime;
      uniform vec4 iMouse;
      out vec4 fragColor;

      #define PI 3.14159265358

      // Original hash and noise functions from user's shader
      float hash( vec2 p ) {
          return fract(sin(dot(p,vec2(1177.1,2711.7)))*43758.5453123);
      }

      float noise( in vec2 p ) {
          vec2 i = floor( p );
          vec2 f = fract( p );	
          vec2 u = f * f * (3.0-2.0 * f);
          return mix( mix( hash( i + vec2(0.0,0.0) ), 
                           hash( i + vec2(1.0,0.0) ), u.x),
                      mix( hash( i + vec2(0.0,1.0) ), 
                           hash( i + vec2(1.0,1.0) ), u.x), u.y);
      }

      // Procedural function for iChannel0 (foam/bump) - FBM-like
      float proc_fbm_noise_for_channel0(vec2 p) {
          float value = 0.0;
          float amplitude = 0.5;
          float totalAmplitude = 0.0;
          // Increased from 2 to 3 octaves for better detail
          for (int i = 0; i < 3; i++) {
              value += amplitude * noise(p); // noise() is already defined
              totalAmplitude += amplitude;
              p *= 2.0; // Increase frequency
              amplitude *= 0.5; // Decrease amplitude
          }
          // Normalize to roughly [0,1] range, assuming noise() is [-1,1]
          // FBM sum range is roughly [-totalAmplitude, totalAmplitude]
          return (value / totalAmplitude + 1.0) * 0.5;
      }

      // Procedural function for iChannel1 (reflections) - Sky gradient
      // Based on getSkyColor from user's trace function
      vec3 proc_sky_for_channel1(vec3 reflect_dir, float lod_unused) {
          vec3 e = reflect_dir; // Already normalized reflection vector
          e.y = (max(e.y,0.0)*0.8+0.2)*0.8;
          return vec3(pow(1.0-e.y,2.0), 1.0-e.y, 0.6+(1.0-e.y)*0.4) * 1.1;
      }

      // Procedural function for iChannel2 & iChannel3 (base for FBM water/clouds)
      float proc_base_noise_for_fbm(vec2 uv) {
          // Use user's noise() and remap its [-1,1] output to [0,1]
          return (noise(uv) + 1.0) * 0.5;
      }

      // Rest of the user's "Buffer A" shader code, adapted to use procedural functions
      mat3 rotx(float a) { mat3 rot; rot[0] = vec3(1.0, 0.0, 0.0); rot[1] = vec3(0.0, cos(a), -sin(a)); rot[2] = vec3(0.0, sin(a), cos(a)); return rot; }
      mat3 roty(float a) { mat3 rot; rot[0] = vec3(cos(a), 0.0, sin(a)); rot[1] = vec3(0.0, 1.0, 0.0); rot[2] = vec3(-sin(a), 0.0, cos(a)); return rot; }
      mat3 rotz(float a) { mat3 rot; rot[0] = vec3(cos(a), -sin(a), 0.0); rot[1] = vec3(sin(a), cos(a), 0.0); rot[2] = vec3(0.0, 0.0, 1.0); return rot; }

      vec3 lightDir = normalize(vec3(0.0, 1.0, 1.0));

      float wv(in vec2 uv, vec2 d, float t, float A)
      {
          return (sin ( dot(d, uv) / 4.0 + t)) * A;
      }

      float fbmClouds(in vec2 uv)
      {
          uv *= 1.0;
          float f = proc_base_noise_for_fbm(uv); // Replacement for iChannel3
          
          vec2 _uv = uv*10.;
          mat2 rm  = mat2 (vec2(-sin(f+_uv.y), cos(f+_uv.x)), vec2(cos(f+_uv.y), sin(f+_uv.x)));  
          uv += .1*uv*rm;
          
          f*=.5;
          f += proc_base_noise_for_fbm(uv*2.0) * 0.5*0.5;
          // Removed additional noise layers for performance
          // f += proc_base_noise_for_fbm(uv*32.0) * 0.5*0.5*0.5*0.5*0.5;
          // f += proc_base_noise_for_fbm(uv*8.0) * 0.5*0.5*0.5*0.5;
          // f += proc_base_noise_for_fbm(uv*64.0) * 0.5*0.5*0.5*0.5*0.5;
          return f;
      }

      float fbm(in vec2 uv, float lod) // lod is unused with procedural noise
      {	
          float f =  proc_base_noise_for_fbm(uv) * 0.5; // Replacement for iChannel2
          f += proc_base_noise_for_fbm(uv*2.0) * 0.5*0.5;
          // Removed additional noise layers for performance
          // f += proc_base_noise_for_fbm(uv*4.0) * 0.5*0.5*0.5;
          // f += proc_base_noise_for_fbm(uv*8.0) * 0.5*0.5*0.5*0.5;
          f = f*f*f*f;
          return f;
      }

      float wavesLo(const in vec3 rp, float t, float A, float lod)
      {
          vec2 uv = rp.xz;
          uv.y += pow(max(rp.y + 0.4, 0.0), 10.) * 1.5;
          float w00 = noise(uv * 1.2 * vec2(.2,  2.2) + vec2(0.20 * t, t * 1.5));
          float w01 = fbm(uv*.05+vec2(0.0, iTime*.01), lod);
          float w02 = fbm(uv*.1 +vec2(iTime*.002, iTime*.014), lod);
          return w00*.12+w01*.1+w02*.1;
      }

      float waves(const in vec3 rp, float t, float A)
      {
          vec2 uv = rp.xz;
          vec2 nuv2 = uv+0.05*vec2(noise(uv*5.+t*.03), noise(uv*2.+t*.04));
          
          float w3 = wv(nuv2 * 170.0, vec2( -0.1, 0.6), t * 4.5, A) * 0.03;
          float w4 = wv(nuv2 * 170.0, vec2( 0.1, 0.6) , t * 6.,  A) * 0.03;
          float w7 = wv(nuv2 * 570.0, vec2( 0.05, 0.4), t * 15., A) * 0.02;
          float w8 = wv(nuv2 * 570.0, vec2( -0.05, 0.3) , t * 15.,  A) * 0.02;
          // Removed highest frequency wave details w5 and w6 for performance
          // float w5 = -wv(nuv2 * 1670.0, vec2(-0.1, 0.4), t * 63., A) * 0.007;
          // float w6 = -wv(nuv2 * 1670.0, vec2( 0.1, 0.5) ,  t * 63.,  A) * 0.007;
          
          return wavesLo(rp, t, A, 0.0) +w3+w4+w7+w8;
      }

      float mapLo(in vec3 rp) { return rp.y - wavesLo(rp, 2.0+iTime*.5, .04, 4.0); }
      float map(in vec3 rp) { return rp.y - waves(rp, 2.0+iTime*.5, .04); }

      vec3 grad(vec3 rp, float preci) {
          vec2 off = vec2(preci, 0.0);
          vec3 g = vec3(map(rp + off.xyy) - map(rp - off.xyy),
                        map(rp + off.yxy) - map(rp - off.yxy),                  
                        map(rp + off.yyx) - map(rp - off.yyx));
          return normalize(g);
      }

      vec2 sub(vec3 rp, float preci) {
          vec2 off = vec2(preci, 0.0);
          vec2 g = vec2(map(rp + off.xyy) + map(rp - off.xyy),
                        map(rp + off.yyx) + map(rp - off.yyx));
          return g;
      }

      vec3 texGrad(in vec2 uv) {
          vec2 offset = vec2(0.01, 0.0);
          uv *= .5;
          float h0 = proc_fbm_noise_for_channel0(uv); // Replacement for iChannel0
          float h1 = h0-proc_fbm_noise_for_channel0(uv+offset.xy);
          float h2 = h0-proc_fbm_noise_for_channel0(uv+offset.yx);
          
          float bump = .4;
          vec3 g = cross(normalize(vec3(bump, h1, 0.0)), normalize(vec3(0.0, h2, bump)));
          return g;
      }

      const vec3 up = vec3(0.0, 1.0, 0.0);
      const vec3 sun = normalize(vec3(0.0, 0.1, 1.0));
      const vec3 horizonColor = vec3(.66, .9, 1.0);

      void trace(in vec3 rp, in vec3 rd, inout vec4 color) {
          vec3 col = horizonColor;
          color.rgb = mix(col, vec3(0.3, 0.55, .96)*.9, smoothstep(-.15, .2, rd.y));
          
          float s = pow(max(dot(rd, normalize(vec3(0.0, 0.7, 1.0))), 0.), 14.0);
          color.rgb += vec3(.9, .9, 1.0)*s*.3;
          vec3 sunCenterDir = normalize(vec3(0.0, 0.7, 1.0));
          vec3 diffV = rd-sunCenterDir;
          float diffVLen = length(diffV);
          
          color.rgb += max(0.0, smoothstep(.0, .3, .11-diffVLen));
          color.rgb += max(0.0, smoothstep(.0, .02, .03-diffVLen));;
          
          float a = atan(diffV.y, diffV.x);
          float st = iTime*.05;
          float sl = .8+.2*sin(iTime*.4);
          float cl = .8+.2*cos(iTime*.2);
          a += iTime*.01;
          color.rgb += smoothstep(0., .3, (.25*sl)-diffVLen)*max(0.0, .25-abs(sin(a*8.+st)))*(0.2+0.8*max(0., sin(a*2.)));
          color.rgb += smoothstep(0., .4, (.35*cl)-diffVLen)*max(0.0, .25-abs(sin(1.5+a*4.+st)))*(0.3+0.7*max(0., sin(a*3.)));
          
          
          vec3 ro = rp;
          float t = -(0.155+dot(rp, -up)) / dot(-up, rd);
          if (t < 0.0) {
              color.a = 10000.0; 
              return;
          }
          
          rp += rd*t;    
          bool hit = false;
          float dist = 0.0;
          
          // Reduced max ray distance to 50.0
          float tm = 0.0;
          float tx = 50.0;
          float hx = map(ro + rd * tx);
          if(hx > 0.0) {
              rp = ro + rd * tx;
              return;   
          }
          float hm = map(ro);
          
          // Reduced to 12 iterations for performance
          for (int i = 0; i < 12; ++i) {
              float travelledSq=dot(ro-rp, ro-rp);
              dist = mapLo(rp);
              if(dist < 0.01) { hit = true; break; }
              rp += rd * max(dist * (log2(2.+travelledSq)), 0.01);
              if(travelledSq > 9000.0) break;
          }
          
          // Reduced to 2 iterations for performance
          for (int i = 0; i < 2; ++i) {
              dist = map(rp); // Calculate dist based on current rp
              if (abs(dist) < 0.0001) break;
              rp += dist * rd; // Then step
          }
          
          if(hit) {        
              vec3 g = grad(rp, 0.002 * (1.0+log2(length(ro-rp) * 100.)));
              color = vec4(.05, 0.22, .4, 0.0); 
              float d_diffuse = max(0.0, dot(g, lightDir));
              color.rgb *= mix(vec3(1.0), vec3(d_diffuse), .4);
              
              vec2 heights = sub(rp, 0.3);
              float sst = length(max(vec2(0.00001), heights));
              float sunD = -1.*(dot(sun, g));
              color.rgb = mix(color.rgb, vec3(.2, 0.5, 0.72)*.5, smoothstep(0., .4, sunD));
              
              float ssb = length(min(vec2(0.0), heights));
              color.rgb = mix(color.rgb, vec3(.05, 0.22, .4)*.5, smoothstep(0.0, 0.4, ssb));
              
              vec3 pw = vec3(1.+2.3/(sst*1.+.001))*2.2;
              vec3 texcol1 = vec3(proc_fbm_noise_for_channel0(rp.xz*.5+vec2(.0, .07*iTime)));
              
              vec3 pw2 = vec3(1.+.7/(sst*1.2+.01));
              vec3 texcol2 = vec3(proc_fbm_noise_for_channel0(rp.xz*.5+vec2(.0, .07*iTime)));
              
              color.rgb += max(pow(texcol1, pw).rrr, pow(texcol2, pw2).rrr);
              
              vec3 H_fresnel = normalize(-rd + normalize(sun));
              float F = clamp(max(0.0, 1.0+dot(rd, g)), 0., 1.);
              color.rgb += .2*pow(F, 6.)*proc_sky_for_channel1(reflect(rd, g), 0.0);
              color.rgb += .4*pow(F, 5.)*vec3(.3, .5, .5)*.5;
              
              vec3 tg =  texGrad (rp.xz*5.1 + vec2(-iTime*.15, iTime*.6));
              vec3 tg2 = texGrad (rp.xz*6.2 + vec2( iTime*.1,  iTime*.6));
              tg = normalize(tg+tg2);
              tg = normalize(tg+texGrad(rp.xz*4.2 + vec2( iTime*.01, iTime*.5))*0.3);
              
              vec3 sg = grad(rp, 0.001);
              sg = normalize(sg+tg*.3);
              
              vec3 H_spec = normalize(-rd + normalize(vec3(0.0, 1.0, 1.5)));
              float specD = max(0.0, dot(H_spec, sg));
              float spec =  pow(specD, 100.0);
              color.rgb += spec * vec3(1., .8, .7)*.7;
          } else {
              if (t >= 0.0) color.a = 5000.0; 
          }
          color.a = length(ro-rp);
      }

      mat3 lookat(vec3 from, vec3 to) {
          vec3 f = normalize(to - from);
          vec3 _tmpr = normalize(cross(f, vec3(0.0, .999, 0.0))); 
          if (length(_tmpr) < 0.001) _tmpr = normalize(cross(f, vec3(0.001, .999, 0.0)));
          vec3 u = normalize(cross(_tmpr, f));
          vec3 r = normalize(cross(u, f));
          return mat3(r, u, f);
      }

      void mainImage( out vec4 finalColor, in vec2 fragCoord ) {
          vec4 computedColor = vec4(0.0); 
          vec2 uv = (fragCoord.xy-iResolution.xy*.5) / iResolution.x;
          vec2 im = 4.0 * ((iMouse.xy / iResolution.xy) - vec2(0.5));
          
          if (iMouse.z <= 0.0 && iMouse.w <= 0.0) {
              im = vec2(.1, .2); 
          }
          
          vec3 rd = normalize(vec3(uv, (1.0-.2*length(uv))));
          vec3 rp = vec3(0.0, .3, -1.0);
          vec3 _rp_clouds = rp; 
          
          rp = roty(im.x) * rp; 
          
          mat3 lkat = lookat(rp, vec3(0.0, .0+im.y*1., 0.0));
          rd = lkat * rd;
              
          trace(rp, rd, computedColor);
          computedColor.rgb = mix(computedColor.rgb, horizonColor, 0.3 * smoothstep(0.05, 0., abs(rd.y-0.01)));
          
          float t_clouds = -(6.5+dot(_rp_clouds, -up)) / dot(-up, rd); 
          if (t_clouds>0.) {
              vec3 cloud_intersect_point = _rp_clouds + rd*t_clouds;
              vec2 cuv = iTime*.0004+cloud_intersect_point.xz*.001;
              float f = fbmClouds(cuv);
              float f3 = fbmClouds(cuv+vec2(0., -.007));
              f = max(0.0, f-0.5)/0.5;
              f3 = max(0.0, f3-0.5)/0.5;
              f3 = 1.+(f3-f)*.8;
              f3 = max(f3, .0);
              computedColor.rgb = mix(computedColor.rgb, f3*vec3(1.0-smoothstep(0.1, .6, f)*.1), f);
          }
          computedColor.rgb = clamp(computedColor.rgb, 0.0, 1.0);
          finalColor = vec4(computedColor.rgb, 1.0); 
      }

      void main() {
          mainImage(fragColor, gl_FragCoord.xy);
      }`

    const vertexShaderSource = `#version 300 es
      in vec4 aPosition;
      void main() {
          gl_Position = aPosition;
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
        const shaderType = type === gl.VERTEX_SHADER ? "Vertex" : "Fragment"
        console.error(`ERROR compiling ${shaderType} shader:`, glCtx.getShaderInfoLog(shader))
        glCtx.deleteShader(shader)
        return null
      }
      console.log(`${type === gl.VERTEX_SHADER ? "Vertex" : "Fragment"} shader compiled successfully.`)
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
        console.error("ERROR linking program:", glCtx.getProgramInfoLog(program))
        glCtx.deleteProgram(program)
        return null
      }
      console.log("Shader program linked successfully.")
      glCtx.validateProgram(program);
      if (!glCtx.getProgramParameter(program, gl.VALIDATE_STATUS)) {
        console.error('ERROR validating program:', glCtx.getProgramInfoLog(program));
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
        console.log(`Canvas resized to: ${canvas.width}x${canvas.height}`)
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

    console.log("Starting render loop...")
    animationFrameId.current = requestAnimationFrame(renderLoop)

    return () => {
      console.log("Cleaning up WebGL resources.")
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
