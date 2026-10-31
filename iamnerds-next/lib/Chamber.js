import { useEffect, useRef } from 'react';

const NAMES = [
  'One Identity Manager', 'SailPoint', 'Omada', 'Saviynt', 'SAP Cloud Identity Services', 'Okta',
  'OneLogin', 'Ping Identity', 'Entra ID', 'Active Directory', 'CyberArk', 'BeyondTrust',
];

// Zero-gravity platform chips: drag, throw, click empty space for a shockwave.
export default function Chamber() {
  const ref = useRef(null);
  useEffect(() => {
    const chamber = ref.current;
    if (!chamber) return;
    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const M = { g: 0, damp: 0.996, rest: 0.9 };
    let W = 0, H = 0, raf = 0, visible = true, stopped = false;
    const bodies = [];
    const measure = () => { W = chamber.clientWidth; H = chamber.clientHeight; };
    const cleanups = [];

    function init() {
      measure();
      const els = chamber.querySelectorAll('.body');
      const cols = 3;
      els.forEach((el, i) => {
        const w = el.offsetWidth, h = el.offsetHeight;
        const cw = W / cols, rows = Math.ceil(els.length / cols), rh = H / rows;
        const c = i % cols, r = Math.floor(i / cols);
        const b = {
          el, w, h,
          x: Math.min(Math.max(0, c * cw + Math.random() * Math.max(0, cw - w)), W - w),
          y: Math.min(Math.max(0, r * rh + Math.random() * Math.max(0, rh - h)), H - h),
          vx: reduced ? 0 : (Math.random() - 0.5) * 1.4,
          vy: reduced ? 0 : (Math.random() - 0.5) * 1.4,
          rot: (Math.random() - 0.5) * 10, vr: reduced ? 0 : (Math.random() - 0.5) * 0.3, drag: false,
        };
        el.style.backgroundPosition = Math.round(Math.random() * 100) + '% 50%';
        bodies.push(b);
        bind(b);
      });
      render();
    }

    function bind(b) {
      let ox = 0, oy = 0, lx = 0, ly = 0, lt = 0;
      const down = (e) => {
        e.stopPropagation();
        const r = chamber.getBoundingClientRect();
        b.drag = true; b.el.classList.add('grab');
        ox = e.clientX - r.left - b.x; oy = e.clientY - r.top - b.y;
        lx = b.x; ly = b.y; lt = performance.now();
        try { b.el.setPointerCapture(e.pointerId); } catch (_) {}
      };
      const move = (e) => {
        if (!b.drag) return;
        const r = chamber.getBoundingClientRect();
        const nx = Math.min(Math.max(0, e.clientX - r.left - ox), W - b.w);
        const ny = Math.min(Math.max(0, e.clientY - r.top - oy), H - b.h);
        const now = performance.now(), dt = Math.max(8, now - lt) / 16;
        b.vx = (nx - lx) / dt; b.vy = (ny - ly) / dt;
        b.x = nx; b.y = ny; lx = nx; ly = ny; lt = now;
        if (reduced) render();
      };
      const up = () => { if (!b.drag) return; b.drag = false; b.el.classList.remove('grab'); b.vr = b.vx * 0.15; };
      b.el.addEventListener('pointerdown', down);
      b.el.addEventListener('pointermove', move);
      b.el.addEventListener('pointerup', up);
      b.el.addEventListener('pointercancel', up);
      cleanups.push(() => {
        b.el.removeEventListener('pointerdown', down);
        b.el.removeEventListener('pointermove', move);
        b.el.removeEventListener('pointerup', up);
        b.el.removeEventListener('pointercancel', up);
      });
    }

    const shock = (e) => {
      const r = chamber.getBoundingClientRect();
      const px = e.clientX - r.left, py = e.clientY - r.top;
      bodies.forEach((b) => {
        if (b.drag) return;
        const dx = b.x + b.w / 2 - px, dy = b.y + b.h / 2 - py;
        const d = Math.max(30, Math.hypot(dx, dy)), f = Math.min(9, 900 / d);
        b.vx += (dx / d) * f; b.vy += (dy / d) * f; b.vr += (Math.random() - 0.5) * 2;
      });
      if (reduced) settle();
    };
    chamber.addEventListener('pointerdown', shock);

    function collide(a, b) {
      const ox = Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x);
      const oy = Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y);
      if (ox <= 0 || oy <= 0) return;
      const ka = a.drag ? 0 : b.drag ? 1 : 0.5, kb = b.drag ? 0 : a.drag ? 1 : 0.5;
      if (ox < oy) {
        const s = a.x < b.x ? -1 : 1;
        a.x += s * ox * ka; b.x -= s * ox * kb;
        const t = a.vx; if (!a.drag) a.vx = b.vx * M.rest; if (!b.drag) b.vx = t * M.rest;
      } else {
        const s = a.y < b.y ? -1 : 1;
        a.y += s * oy * ka; b.y -= s * oy * kb;
        const t = a.vy; if (!a.drag) a.vy = b.vy * M.rest; if (!b.drag) b.vy = t * M.rest;
      }
      a.vr += (Math.random() - 0.5) * 0.12; b.vr += (Math.random() - 0.5) * 0.12;
    }

    function step() {
      for (const b of bodies) {
        if (b.drag) continue;
        if (!reduced) { b.vx += (Math.random() - 0.5) * 0.03; b.vy += (Math.random() - 0.5) * 0.03; }
        b.vx *= M.damp; b.vy *= M.damp;
        const sp = Math.hypot(b.vx, b.vy);
        if (sp > 22) { b.vx *= 22 / sp; b.vy *= 22 / sp; }
        b.x += b.vx; b.y += b.vy;
        if (b.x < 0) { b.x = 0; b.vx = Math.abs(b.vx) * M.rest; }
        if (b.x + b.w > W) { b.x = W - b.w; b.vx = -Math.abs(b.vx) * M.rest; }
        if (b.y < 0) { b.y = 0; b.vy = Math.abs(b.vy) * M.rest; }
        if (b.y + b.h > H) { b.y = H - b.h; b.vy = -Math.abs(b.vy) * M.rest; }
        b.rot += b.vr; b.vr *= 0.985; b.vr -= b.rot * 0.004;
        b.rot = Math.max(-12, Math.min(12, b.rot));
      }
      for (let p = 0; p < 2; p++)
        for (let i = 0; i < bodies.length; i++)
          for (let j = i + 1; j < bodies.length; j++) collide(bodies[i], bodies[j]);
      for (const c of bodies) {
        c.x = Math.min(Math.max(0, c.x), Math.max(0, W - c.w));
        c.y = Math.min(Math.max(0, c.y), Math.max(0, H - c.h));
      }
    }

    function render() {
      for (const b of bodies) b.el.style.transform = `translate(${b.x.toFixed(1)}px,${b.y.toFixed(1)}px) rotate(${b.rot.toFixed(1)}deg)`;
    }
    function loop() {
      if (stopped) return;
      if (visible && !document.hidden) { step(); render(); }
      raf = requestAnimationFrame(loop);
    }
    function settle() { let n = 0; (function s() { step(); render(); if (++n < 240 && !stopped) requestAnimationFrame(s); })(); }

    let io;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver((en) => { visible = en[0].isIntersecting; });
      io.observe(chamber);
    }
    const onResize = () => { measure(); step(); render(); };
    window.addEventListener('resize', onResize);

    const start = () => { if (stopped) return; init(); if (!reduced) raf = requestAnimationFrame(loop); };
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(start); else start();

    return () => {
      stopped = true;
      cancelAnimationFrame(raf);
      if (io) io.disconnect();
      window.removeEventListener('resize', onResize);
      chamber.removeEventListener('pointerdown', shock);
      cleanups.forEach((f) => f());
    };
  }, []);

  return (
    <div className="chamber-box">
      <div id="chamber" ref={ref} aria-hidden="true">
        {NAMES.map((n) => <span key={n} className="body">{n}</span>)}
      </div>
    </div>
  );
}
