"use client"

import { useEffect, useRef } from "react"

// It's assumed that gl-matrix is loaded globally via a script tag in layout.tsx
declare const glMatrix: any

const RealisticOceanBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameId = useRef<number | undefined>(undefined)
  const texturesLoadedRef = useRef<boolean>(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext("webgl2")
    if (!gl) {
      console.error("WebGL 2 not supported.")
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

    // Buffer A fragment shader (main ocean simulation)
    const bufferAFragmentShaderSource = `#version 300 es
      precision highp float;

      uniform vec3 iResolution;
      uniform float iTime;
      uniform vec4 iMouse;
      uniform sampler2D iChannel0;
      uniform sampler2D iChannel1;
      uniform sampler2D iChannel2;
      uniform sampler2D iChannel3;
      out vec4 fragColor;

      #define PI 3.14159265358

      mat3 rotx(float a) { mat3 rot; rot[0] = vec3(1.0, 0.0, 0.0); rot[1] = vec3(0.0, cos(a), -sin(a)); rot[2] = vec3(0.0, sin(a), cos(a)); return rot; }
      
      mat3 roty(float a) { mat3 rot; rot[0] = vec3(cos(a), 0.0, sin(a)); rot[1] = vec3(0.0, 1.0, 0.0); rot[2] = vec3(-sin(a), 0.0, cos(a)); return rot; }
      
      mat3 rotz(float a) { mat3 rot; rot[0] = vec3(cos(a), -sin(a), 0.0); rot[1] = vec3(sin(a), cos(a), 0.0); rot[2] = vec3(0.0, 0.0, 1.0); return rot; }
      
      vec3 lightDir = normalize(vec3(0.0, 1.0, 1.0));
      
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
      
      float wv(in vec2 uv, vec2 d, float t, float A)
      {
          return (sin ( dot(d, uv) / 4.0 + t)) * A;
      }
      
      float fbmClouds(in vec2 uv)
      {
          uv *= 1.0;
          
          float f = texture(iChannel3, uv).r ;
          
          // whipping up the clouds a little so they would not look too much like generic fbm
          vec2 _uv = uv*10.;
          mat2 rm  = mat2 (vec2(-sin(f+_uv.y), cos(f+_uv.x)), vec2(cos(f+_uv.y), sin(f+_uv.x)));  
          uv += .1*uv*rm;
          
          f*=.5;
          f += texture(iChannel3, uv*2.0).r * 0.5*0.5;
          f += texture(iChannel3, uv*4.0).r * 0.5*0.5*0.5;
          f += texture(iChannel3, uv*32.0).r * 0.5*0.5*0.5*0.5*0.5;
          f += texture(iChannel3, uv*8.0).r * 0.5*0.5*0.5*0.5;
          f += texture(iChannel3, uv*64.0).r * 0.5*0.5*0.5*0.5*0.5;
          return f;
      }
      
      // water
      float fbm(in vec2 uv, float lod)
      {	
          float f =  textureLod(iChannel2, uv, lod).r * 0.5;
                f += textureLod(iChannel2, uv*2.0, lod).r * 0.5*0.5;
                f += textureLod(iChannel2, uv*4.0, lod).r * 0.5*0.5*0.5;
                f += textureLod(iChannel2, uv*8.0, lod).r * 0.5*0.5*0.5*0.5;
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
      
      // high detail waves
      float waves(const in vec3 rp, float t, float A)
      {
          vec2 uv = rp.xz;
          vec2 nuv2 = uv+0.05*vec2(noise(uv*5.+t*.03), noise(uv*2.+t*.04));
          
          float w3 = wv(nuv2 * 170.0, vec2( -0.1, 0.6), t * 4.5, A) * 0.03;
          float w4 = wv(nuv2 * 170.0, vec2( 0.1, 0.6) , t * 6.,  A) * 0.03;
          float w7 = wv(nuv2 * 570.0, vec2( 0.05, 0.4), t * 15., A) * 0.02;
          float w8 = wv(nuv2 * 570.0, vec2( -0.05, 0.3) , t * 15.,  A) * 0.02;
          float w5 = -wv(nuv2 * 1670.0, vec2(-0.1, 0.4), t * 63., A) * 0.007;
          float w6 = -wv(nuv2 * 1670.0, vec2( 0.1, 0.5) ,  t * 63.,  A) * 0.007;
          
          return wavesLo(rp, t, A, 0.0) +w3+w4+w7+w8+w5+w6;
      }
      
      float mapLo(in vec3 rp)
      {
          return rp.y - wavesLo(rp, 2.0+iTime*.5, .04, 4.0);
      }
      
      float map(in vec3 rp)
      {
          return rp.y - waves(rp, 2.0+iTime*.5, .04);
      }
      
      vec3 grad(vec3 rp, float preci)
      {
          vec2 off = vec2(preci, 0.0);
          vec3 g = vec3(map(rp + off.xyy) - map(rp - off.xyy),
                        map(rp + off.yxy) - map(rp - off.yxy),                  
                        map(rp + off.yyx) - map(rp - off.yyx));
          return normalize(g);
      }
      
      // scanning the surroundings for differences in heights on the heightmap
      vec2 sub(vec3 rp, float preci)
      {
          vec2 off = vec2(preci, 0.0);
          vec2 g = vec2(map(rp + off.xyy) + map(rp - off.xyy),
                        map(rp + off.yyx) + map(rp - off.yyx));
          return g;
      }
      
      // for the spec bump 
      vec3 texGrad(in vec2 uv)
      {
          vec2 offset = vec2(0.01, 0.0);
          uv *= .5;
          float h0 = texture(iChannel0, uv).r;
          float h1 = h0-texture(iChannel0, uv+offset.xy).r;
          float h2 = h0-texture(iChannel0, uv+offset.yx).r;
          
          float bump = .4;
          vec3 g = cross(normalize(vec3(bump, h1, 0.0)), normalize(vec3(0.0, h2, bump)));
          return g;
      }
      
      const vec3 up = vec3(0.0, 1.0, 0.0);
      const vec3 sun = normalize(vec3(0.0, 0.1, 1.0));
      const vec3 horizonColor = vec3(.66, .9, 1.0);
      
      void trace(in vec3 rp, in vec3 rd, inout vec4 color)
      {
          // bg
          vec3 col = horizonColor;
          color.rgb = mix(col, vec3(0.3, 0.55, .96)*.9, smoothstep(-.15, .2, rd.y));
          
          // sun
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
          color += smoothstep(0., .3, (.25*sl)-diffVLen)*max(0.0, .25-abs(sin(a*8.+st)))*(0.2+0.8*max(0., sin(a*2.)));
          color += smoothstep(0., .4, (.35*cl)-diffVLen)*max(0.0, .25-abs(sin(1.5+a*4.+st)))*(0.3+0.7*max(0., sin(a*3.)));
          
          
          // trace to plane on top of waves
          vec3 ro = rp;
          float t = -(0.155+dot(rp, -up)) / dot(-up, rd);
          if (t < 0.0) 
          {
              return;
          }
          
          rp += rd*t;    
          bool hit = false;
          float dist = 0.0;
          
          // actual tracing
          
          // low freq
          for (int i = 0; i < 55; ++i)
          {
              float travelledSq=dot(ro-rp, ro-rp);
              dist = mapLo(rp);
              
              if(dist < 0.01)
              {
                  hit = true;
                  break;
              }
              rp += rd * max(dist * (log2(2.+travelledSq)), 0.01);
              if(travelledSq > 9000.0) break;
          }
          
          //detail tracing
          for (int i = 0; i < 10; ++i)
          {
              rp += dist * rd;
              if (abs(dist) < 0.0001) break;
              dist = map(rp);
          }
          
          // shadings
          if(hit)
          {        
              vec3 g = grad(rp, 0.002 * (1.0+log2(length(ro-rp) * 100.)));
              
              // base color
              color = vec4(.05, 0.22, .4, 0.0);
              
              // diffuse
              float d = max(0.0, dot(g, lightDir));
              color *= mix(1.0, d, .4);
              
              // top
              vec2 heights = sub(rp, 0.3);
              float sst = length(max(vec2(0.00001), heights));
              float sunD = -1.*(dot(sun, g));
              color.rgb = mix(color.rgb, vec3(.2, 0.5, 0.72)*.5, smoothstep(0., .4, sunD));
              
              // bottom
              float ssb = length(min(vec2(0.0), heights));
              color.rgb = mix(color.rgb, vec3(.05, 0.22, .4)*.5, smoothstep(0.0, 0.4, ssb));
              
              // foam
              vec3 pw = vec3(1.+2.3/(sst*1.+.001))*2.2;
              vec3 texcol1 = texture(iChannel0, rp.xz*.5+vec2(.0, .07*iTime)).rgb;
              
              vec3 pw2 = vec3(1.+.7/(sst*1.2+.01));
              vec3 texcol2 = texture(iChannel0, rp.xz*.5+vec2(.0, .07*iTime)).rgb*1.;
              
              color.rgb += max(pow(texcol1, pw).rrr, pow(texcol2, pw2).rrr);
              
              
              // fresnel
              vec3 H = normalize(-rd + normalize(sun));
              float F = clamp(max(0.0, 1.0+dot(rd, g)), 0., 1.);
              color.rgb += .2*pow(F, 6.)*textureLod(iChannel1, reflect(rd, g), 0.0).rgb;
              color.rgb += .4*pow(F, 5.)*vec3(.3, .5, .5)*.5;
              
              // spec
              // +bump        
              vec3 tg =  texGrad (rp.xz*5.1 + vec2(-iTime*.15, iTime*.6));
              vec3 tg2 = texGrad (rp.xz*6.2 + vec2( iTime*.1,  iTime*.6));
              tg = normalize(tg+tg2);
              tg = normalize(tg+texGrad(rp.xz*4.2 + vec2( iTime*.01, iTime*.5))*0.3);
              
              vec3 sg = grad(rp, 0.001);
              sg = normalize(sg+tg*.3);
              
              H = normalize(-rd + normalize(vec3(0.0, 1.0, 1.5)));
              
              float specD = max(0.0, dot(H, sg));
              float spec =  pow(specD, 100.0);
              color.rgb += spec * vec3(1., .8, .7)*.7;
          }
          color.a = length(ro-rp);
      }
      
      mat3 lookat(vec3 from, vec3 to)
      {
          vec3 f = normalize(to - from);
          vec3 _tmpr = normalize(cross(f, vec3(0.0, .999, 0.0)));
          vec3 u = normalize(cross(_tmpr, f));
          vec3 r = normalize(cross(u, f));
          return mat3(r, u, f);
      }
      
      void mainImage( out vec4 fragColor, in vec2 fragCoord )
      {
          fragColor = vec4(0.);
          vec2 uv = (fragCoord.xy-iResolution.xy*.5) / iResolution.x;
          vec2 im = 4.0 * ((iMouse.xy / iResolution.xy) - vec2(0.5));
          
          if (iMouse.z <= 0.0)
          {
              im = vec2(.1, .2);
          }
          
          vec3 rd = normalize(vec3(uv, (1.0-.2*length(uv))));
          vec3 rp = vec3(0.0, .3, -1.0);
          vec3 _rp = rp;
          rp = roty(im.x) * rp;
          
          mat3 lkat = lookat(rp, vec3(0.0, .0+im.y*1., 0.0));
          rd = lkat * rd;
              
          trace(rp, rd, fragColor);
          fragColor.rgb = mix(fragColor.rgb, horizonColor, 0.3 * smoothstep(0.05, 0., abs(rd.y-0.01)));
          
          ///////////////
          // clouds
          float t = -(6.5+dot(rp, -up)) / dot(-up, rd);
          if (t>0.)
          {
              _rp += rd*t;
              vec2 cuv = iTime*.0004+_rp.xz*.001;
              float f = fbmClouds(cuv);
              float f3 = fbmClouds(cuv+vec2(0., -.007));
              f = max(0.0, f-0.5)/0.5;
              f3 = max(0.0, f3-0.5)/0.5;
              f3 = 1.+(f3-f)*.8;
              f3 = max(f3, .0);
              fragColor.rgb = mix(fragColor.rgb, f3*vec3(1.0-smoothstep(0.1, .6, f)*.1), f);
              fragColor.a = t;
          }
          fragColor.rgb = clamp(fragColor.rgb, 0.0, 1.0);
      }

      void main() {
          mainImage(fragColor, gl_FragCoord.xy);
      }`

    // Image pass fragment shader (post-processing)
    const imageFragmentShaderSource = `#version 300 es
      precision highp float;

      uniform vec3 iResolution;
      uniform sampler2D iChannel0;
      out vec4 fragColor;

      void mainImage( out vec4 fragColor, in vec2 fragCoord )
      {
          vec2 uv = fragCoord.xy / iResolution.xy;
          fragColor = texture(iChannel0, uv);
          
          vec3 rd = texture(iChannel0, vec2(0.5)).rgb;
          
          float res = .4;
          float steps = 3.14159*2.;
          float focus = 3.;
          float depth = fragColor.a;
          
          float dist = smoothstep(0.0, 2., depth-focus)*3.*dFdx(uv.x);
          vec3 tcol = vec3(.0);
          for (float i = 0.; i < steps; i = i + res)
          {
              vec2 _uv = uv+vec2(cos(i), sin(i))*dist;
              tcol += texture(iChannel0, _uv).rgb;    
          }
          fragColor.rgb = tcol/(steps/res);
          fragColor.rgb = smoothstep(0.0, 1.0, fragColor.rgb); // contrast
          fragColor.rgb = pow(fragColor.rgb, vec3(1.0 / 2.2));
      }

      void main() {
          mainImage(fragColor, gl_FragCoord.xy);
      }`

    function createShader(glCtx: WebGL2RenderingContext, type: number, source: string) {
      const shader = glCtx.createShader(type)
      if (!shader) {
        console.error("Unable to create shader")
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
      mouse: gl.getUniformLocation(bufferAProgram, "iMouse"),
      channel0: gl.getUniformLocation(bufferAProgram, "iChannel0"),
      channel1: gl.getUniformLocation(bufferAProgram, "iChannel1"),
      channel2: gl.getUniformLocation(bufferAProgram, "iChannel2"),
      channel3: gl.getUniformLocation(bufferAProgram, "iChannel3")
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
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA32F, width, height, 0, gl.RGBA, gl.FLOAT, null)
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
        // Fall back to RGBA8 if RGBA32F is not supported
        gl.bindTexture(gl.TEXTURE_2D, bufferATexture)
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null)
        gl.bindFramebuffer(gl.FRAMEBUFFER, bufferAFramebuffer)
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, bufferATexture, 0)
        
        if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) {
          console.error("Framebuffer still not complete after fallback")
        }
      }

      // Unbind framebuffer
      gl.bindFramebuffer(gl.FRAMEBUFFER, null)
    }

    // Create procedural textures
    function createProceduralTextures() {
      const textures: WebGLTexture[] = []
      
      // Create displacement texture (iChannel0) - noise pattern
      const displacementTexture = gl.createTexture()
      if (displacementTexture) {
        gl.bindTexture(gl.TEXTURE_2D, displacementTexture)
        const displacementSize = 512
        const displacementData = new Uint8Array(displacementSize * displacementSize * 4)
        
        for (let y = 0; y < displacementSize; y++) {
          for (let x = 0; x < displacementSize; x++) {
            const i = (y * displacementSize + x) * 4
            
            // Perlin-like noise
            const nx = x / displacementSize
            const ny = y / displacementSize
            let v = 0
            
            // Multiple octaves
            for (let o = 1; o <= 4; o++) {
              const freq = Math.pow(2, o)
              const amp = Math.pow(0.5, o)
              const vx = Math.sin(nx * freq * Math.PI * 2) * amp
              const vy = Math.sin(ny * freq * Math.PI * 2) * amp
              v += (vx + vy) * 0.5
            }
            
            v = (v + 1) * 0.5 // Normalize to 0-1
            
            displacementData[i] = v * 255
            displacementData[i + 1] = v * 255
            displacementData[i + 2] = v * 255
            displacementData[i + 3] = 255
          }
        }
        
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, displacementSize, displacementSize, 0, gl.RGBA, gl.UNSIGNED_BYTE, displacementData)
        gl.generateMipmap(gl.TEXTURE_2D)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT)
        textures[0] = displacementTexture
      }
      
      // Create reflection texture (iChannel1) - sky gradient
      const reflectionTexture = gl.createTexture()
      if (reflectionTexture) {
        gl.bindTexture(gl.TEXTURE_2D, reflectionTexture)
        const reflectionSize = 256
        const reflectionData = new Uint8Array(reflectionSize * reflectionSize * 4)
        
        for (let y = 0; y < reflectionSize; y++) {
          for (let x = 0; x < reflectionSize; x++) {
            const i = (y * reflectionSize + x) * 4
            const ny = y / reflectionSize
            
            // Sky gradient
            const skyBlue = [135, 206, 235]
            const deepBlue = [0, 0, 139]
            
            reflectionData[i] = Math.round(deepBlue[0] * ny + skyBlue[0] * (1 - ny))
            reflectionData[i + 1] = Math.round(deepBlue[1] * ny + skyBlue[1] * (1 - ny))
            reflectionData[i + 2] = Math.round(deepBlue[2] * ny + skyBlue[2] * (1 - ny))
            reflectionData[i + 3] = 255
          }
        }
        
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, reflectionSize, reflectionSize, 0, gl.RGBA, gl.UNSIGNED_BYTE, reflectionData)
        gl.generateMipmap(gl.TEXTURE_2D)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT)
        textures[1] = reflectionTexture
      }
      
      // Create normal map texture (iChannel2)
      const normalTexture = gl.createTexture()
      if (normalTexture) {
        gl.bindTexture(gl.TEXTURE_2D, normalTexture)
        const normalSize = 512
        const normalData = new Uint8Array(normalSize * normalSize * 4)
        
        for (let y = 0; y < normalSize; y++) {
          for (let x = 0; x < normalSize; x++) {
            const i = (y * normalSize + x) * 4
            
            // Create normal map with some variation
            const nx = x / normalSize * 20
            const ny = y / normalSize * 20
            
            // Generate normals from multiple sine waves
            const dx = Math.cos(nx * Math.PI) * 0.5 + Math.cos(nx * 3 * Math.PI) * 0.25 + Math.cos(nx * 7 * Math.PI) * 0.125
            const dy = Math.cos(ny * Math.PI) * 0.5 + Math.cos(ny * 3 * Math.PI) * 0.25 + Math.cos(ny * 7 * Math.PI) * 0.125
            
            // Convert to normal vector
            const length = Math.sqrt(dx * dx + dy * dy + 1)
            const nx_norm = dx / length * 0.5 + 0.5
            const ny_norm = dy / length * 0.5 + 0.5
            const nz_norm = 1 / length * 0.5 + 0.5
            
            normalData[i] = nx_norm * 255
            normalData[i + 1] = ny_norm * 255
            normalData[i + 2] = nz_norm * 255
            normalData[i + 3] = 255
          }
        }
        
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, normalSize, normalSize, 0, gl.RGBA, gl.UNSIGNED_BYTE, normalData)
        gl.generateMipmap(gl.TEXTURE_2D)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT)
        textures[2] = normalTexture
      }
      
      // Create noise texture (iChannel3)
      const noiseTexture = gl.createTexture()
      if (noiseTexture) {
        gl.bindTexture(gl.TEXTURE_2D, noiseTexture)
        const noiseSize = 256
        const noiseData = new Uint8Array(noiseSize * noiseSize * 4)
        
        for (let y = 0; y < noiseSize; y++) {
          for (let x = 0; x < noiseSize; x++) {
            const i = (y * noiseSize + x) * 4
            
            // Random noise
            const v = Math.random()
            
            noiseData[i] = v * 255
            noiseData[i + 1] = v * 255
            noiseData[i + 2] = v * 255
            noiseData[i + 3] = 255
          }
        }
        
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, noiseSize, noiseSize, 0, gl.RGBA, gl.UNSIGNED_BYTE, noiseData)
        gl.generateMipmap(gl.TEXTURE_2D)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT)
        textures[3] = noiseTexture
      }
      
      texturesLoadedRef.current = true
      return textures
    }

    // Create procedural textures
    const textures = createProceduralTextures()

    // Mouse tracking
    let mouseX = 0, mouseY = 0
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = canvas.height - e.clientY
    }
    canvas.addEventListener("mousemove", handleMouseMove)

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
      if (!gl || !texturesLoadedRef.current) {
        animationFrameId.current = requestAnimationFrame(renderLoop)
        return
      }

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
      gl.uniform3f(bufferAUniforms.resolution!, canvas.width, canvas.height, 1.0)
      gl.uniform1f(bufferAUniforms.time!, currentTime)
      gl.uniform4f(bufferAUniforms.mouse!, mouseX, mouseY, 0.0, 0.0)

      // Set texture uniforms
      for (let i = 0; i < textures.length; i++) {
        gl.activeTexture(gl.TEXTURE0 + i)
        gl.bindTexture(gl.TEXTURE_2D, textures[i])
        gl.uniform1i(bufferAUniforms[`channel${i}` as keyof typeof bufferAUniforms], i)
      }

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
      gl.uniform3f(imageUniforms.resolution!, canvas.width, canvas.height, 1.0)

      // Bind Buffer A texture as input for Image pass
      gl.activeTexture(gl.TEXTURE0)
      gl.bindTexture(gl.TEXTURE_2D, bufferATexture)
      gl.uniform1i(imageUniforms.channel0!, 0)

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

      // Clean up WebGL resources
      gl.deleteProgram(bufferAProgram)
      gl.deleteProgram(imageProgram)
      gl.deleteShader(vertexShader)
      gl.deleteShader(bufferAFragmentShader)
      gl.deleteShader(imageFragmentShader)
      gl.deleteBuffer(positionBuffer)
      gl.deleteFramebuffer(bufferAFramebuffer)
      gl.deleteTexture(bufferATexture)
      textures.forEach(texture => gl.deleteTexture(texture))
    }
  }, [])

  return <canvas ref={canvasRef} id="glCanvas" className="fixed top-0 left-0 w-full h-full -z-20" />
}

export default RealisticOceanBackground
