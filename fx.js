// Hero: liquid-chrome WebGL background, cursor spotlight on cards, looping order status.
(function () {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // --- WebGL liquid chrome ---
  const cv = document.getElementById('fx');
  const gl = cv && cv.getContext('webgl', { antialias: false, alpha: false });
  if (gl) {
    const vs = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
    const fs = `precision mediump float;uniform vec2 r;uniform float t;uniform vec2 m;
float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
return mix(mix(h(i),h(i+vec2(1.,0.)),f.x),mix(h(i+vec2(0.,1.)),h(i+vec2(1.,1.)),f.x),f.y);}
void main(){
 vec2 uv=gl_FragCoord.xy/r;
 vec2 p=(uv-.5)*vec2(r.x/r.y,1.)*2.4;
 for(int i=1;i<5;i++){float k=float(i);
  p+=.38/k*vec2(sin(p.y*k*1.7+t*.22+m.x*1.5),cos(p.x*k*1.3+t*.18+m.y*1.5));}
 float v=n(p*1.3+t*.04);
 float b=.5+.5*sin(p.x*2.1+p.y*1.6+v*5.5);
 vec3 c=mix(vec3(.035,.04,.055),vec3(.62,.66,.78),pow(b,3.2));
 c+=vec3(1.,.55,.14)*pow(b,14.)*.55;
 float vig=smoothstep(1.35,.15,length((uv-vec2(.78,.5))*vec2(1.,1.4)));
 gl_FragColor=vec4(c*vig*.5,1.);}`;
    const mk = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return s; };
    const pr = gl.createProgram();
    gl.attachShader(pr, mk(gl.VERTEX_SHADER, vs));
    gl.attachShader(pr, mk(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(pr);
    if (gl.getProgramParameter(pr, gl.LINK_STATUS)) {
      gl.useProgram(pr);
      gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
      const loc = gl.getAttribLocation(pr, 'p');
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
      const U = { r: gl.getUniformLocation(pr, 'r'), t: gl.getUniformLocation(pr, 't'), m: gl.getUniformLocation(pr, 'm') };
      const SCALE = 0.5; let mx = 0, my = 0, tx = 0, ty = 0, on = true, t0 = performance.now();
      const size = () => { cv.width = Math.max(2, cv.clientWidth * SCALE | 0); cv.height = Math.max(2, cv.clientHeight * SCALE | 0); gl.viewport(0, 0, cv.width, cv.height); };
      size(); addEventListener('resize', size);
      addEventListener('pointermove', e => { tx = e.clientX / innerWidth - .5; ty = e.clientY / innerHeight - .5; }, { passive: true });
      const draw = now => {
        mx += (tx - mx) * .04; my += (ty - my) * .04;
        gl.uniform2f(U.r, cv.width, cv.height);
        gl.uniform1f(U.t, reduce ? 4 : (now - t0) / 1000);
        gl.uniform2f(U.m, mx, my);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        if (on && !reduce) requestAnimationFrame(draw);
      };
      new IntersectionObserver(([e]) => { const was = on; on = e.isIntersecting; if (on && !was) requestAnimationFrame(draw); }).observe(cv.parentElement);
      requestAnimationFrame(draw);
    } else cv.remove();
  }

  // --- cursor spotlight on cards ---
  document.addEventListener('pointermove', e => {
    const el = e.target.closest && e.target.closest('.card,.step');
    if (!el) return;
    const b = el.getBoundingClientRect();
    el.style.setProperty('--mx', (e.clientX - b.left) + 'px');
    el.style.setProperty('--my', (e.clientY - b.top) + 'px');
  }, { passive: true });

  // --- looping order status in hero card ---
  const lis = [...document.querySelectorAll('#mock-steps li')];
  if (lis.length) {
    let i = 0;
    const step = () => { lis.forEach((l, k) => l.classList.toggle('on', k < i)); i = (i + 1) % (lis.length + 2); };
    if (reduce) { lis.forEach(l => l.classList.add('on')); } else { step(); setInterval(step, 1300); }
  }
})();
