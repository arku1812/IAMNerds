(function(){
  var chamber = document.getElementById('chamber');
  var gval = document.getElementById('gval');
  var log = document.getElementById('log');
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var MODES = { zero:{g:0, label:'0.00', damp:0.996, rest:0.9},
                earth:{g:0.42, label:'9.81', damp:0.985, rest:0.35},
                anti:{g:-0.42, label:'−9.81', damp:0.985, rest:0.35} };
  var mode = 'zero';
  var bodies = [];
  var W = 0, H = 0;

  function measure(){ W = chamber.clientWidth; H = chamber.clientHeight; }

  function init(){
    measure();
    var els = chamber.querySelectorAll('.body');
    var cols = 3, i = 0;
    els.forEach(function(el){
      var w = el.offsetWidth, h = el.offsetHeight;
      var cw = W / cols, rows = Math.ceil(els.length / cols), rh = H / rows;
      var c = i % cols, r = Math.floor(i / cols);
      var x = Math.min(Math.max(0, c*cw + Math.random()*Math.max(0, cw - w)), W - w);
      var y = Math.min(Math.max(0, r*rh + Math.random()*Math.max(0, rh - h)), H - h);
      var b = { el:el, x:x, y:y, w:w, h:h,
        vx: reduced ? 0 : (Math.random()-.5)*1.4,
        vy: reduced ? 0 : (Math.random()-.5)*1.4,
        rot:(Math.random()-.5)*10, vr: reduced ? 0 : (Math.random()-.5)*0.3,
        drag:false, alive:true };
      el.style.backgroundPosition = Math.round(Math.random()*100) + '% 50%';
      bodies.push(b);
      bind(b);
      i++;
    });
    render();
  }

  function bind(b){
    var ox=0, oy=0, lx=0, ly=0, lt=0;
    b.el.addEventListener('pointerdown', function(e){
      e.stopPropagation();
      var r = chamber.getBoundingClientRect();
      b.drag = true; b.el.classList.add('grab');
      ox = e.clientX - r.left - b.x; oy = e.clientY - r.top - b.y;
      lx = b.x; ly = b.y; lt = performance.now();
      try { b.el.setPointerCapture(e.pointerId); } catch(_){}
    });
    b.el.addEventListener('pointermove', function(e){
      if(!b.drag) return;
      var r = chamber.getBoundingClientRect();
      var nx = Math.min(Math.max(0, e.clientX - r.left - ox), W - b.w);
      var ny = Math.min(Math.max(0, e.clientY - r.top - oy), H - b.h);
      var now = performance.now(), dt = Math.max(8, now - lt) / 16;
      b.vx = (nx - lx) / dt; b.vy = (ny - ly) / dt;
      b.x = nx; b.y = ny; lx = nx; ly = ny; lt = now;
      if(reduced) render();
    });
    function release(){
      if(!b.drag) return;
      b.drag = false; b.el.classList.remove('grab');
      b.vr = (b.vx) * 0.15;
      if(Math.abs(b.vx) + Math.abs(b.vy) > 10) say('Thrown at ' + (Math.hypot(b.vx,b.vy)*0.6).toFixed(1) + ' m/s. Still least privilege.');
    }
    b.el.addEventListener('pointerup', release);
    b.el.addEventListener('pointercancel', release);
  }

  // Click empty space: a small shockwave
  chamber.addEventListener('pointerdown', function(e){
    var r = chamber.getBoundingClientRect();
    var px = e.clientX - r.left, py = e.clientY - r.top;
    bodies.forEach(function(b){
      if(!b.alive || b.drag) return;
      var dx = b.x + b.w/2 - px, dy = b.y + b.h/2 - py;
      var d = Math.max(30, Math.hypot(dx, dy));
      var f = Math.min(9, 900 / d);
      b.vx += dx / d * f; b.vy += dy / d * f; b.vr += (Math.random()-.5) * 2;
    });
  });

  function collide(a, b, rest){
    var ox = Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x);
    var oy = Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y);
    if(ox <= 0 || oy <= 0) return;
    var ka = a.drag ? 0 : (b.drag ? 1 : .5), kb = b.drag ? 0 : (a.drag ? 1 : .5);
    if(ox < oy){
      var s = (a.x < b.x) ? -1 : 1;
      a.x += s * ox * ka; b.x -= s * ox * kb;
      var t = a.vx;
      if(!a.drag) a.vx = b.vx * rest;
      if(!b.drag) b.vx = t * rest;
    } else {
      var s2 = (a.y < b.y) ? -1 : 1;
      a.y += s2 * oy * ka; b.y -= s2 * oy * kb;
      var t2 = a.vy;
      if(!a.drag) a.vy = b.vy * rest;
      if(!b.drag) b.vy = t2 * rest;
    }
    if(mode === 'zero'){ a.vr += (Math.random()-.5)*.12; b.vr += (Math.random()-.5)*.12; }
  }

  function step(){
    var m = MODES[mode];
    for(var i=0;i<bodies.length;i++){
      var b = bodies[i];
      if(!b.alive || b.drag) continue;
      b.vy += m.g;
      if(mode === 'zero' && !reduced){ b.vx += (Math.random()-.5)*.03; b.vy += (Math.random()-.5)*.03; }
      b.vx *= m.damp; b.vy *= m.damp;
      var sp = Math.hypot(b.vx, b.vy);
      if(sp > 22){ b.vx *= 22/sp; b.vy *= 22/sp; }
      b.x += b.vx; b.y += b.vy;
      if(b.x < 0){ b.x = 0; b.vx = Math.abs(b.vx) * m.rest; }
      if(b.x + b.w > W){ b.x = W - b.w; b.vx = -Math.abs(b.vx) * m.rest; }
      if(b.y < 0){ b.y = 0; b.vy = Math.abs(b.vy) * m.rest; if(mode==='anti') b.vx *= .9; }
      if(b.y + b.h > H){ b.y = H - b.h; b.vy = -Math.abs(b.vy) * m.rest; if(mode==='earth') b.vx *= .9; }
      b.rot += b.vr; b.vr *= .985;
      if(mode !== 'zero'){ b.rot *= .93; b.vr *= .9; }
      else { b.vr -= b.rot * .004; if(b.rot > 12) b.rot = 12; if(b.rot < -12) b.rot = -12; }
    }
    for(var pass=0; pass<2; pass++){
      for(var p=0;p<bodies.length;p++){
        if(!bodies[p].alive) continue;
        for(var q=p+1;q<bodies.length;q++){
          if(!bodies[q].alive) continue;
          collide(bodies[p], bodies[q], MODES[mode].rest);
        }
      }
    }
    for(var k=0;k<bodies.length;k++){
      var c = bodies[k];
      if(!c.alive) continue;
      c.x = Math.min(Math.max(0, c.x), Math.max(0, W - c.w));
      c.y = Math.min(Math.max(0, c.y), Math.max(0, H - c.h));
    }
  }

  function render(){
    bodies.forEach(function(b){
      b.el.style.transform = 'translate(' + b.x.toFixed(1) + 'px,' + b.y.toFixed(1) + 'px) rotate(' + b.rot.toFixed(1) + 'deg)';
    });
  }

  var visible = true;
  if('IntersectionObserver' in window){
    new IntersectionObserver(function(en){ visible = en[0].isIntersecting; }).observe(chamber);
  }
  function loop(){
    if(visible && !document.hidden){ step(); render(); }
    requestAnimationFrame(loop);
  }

  function say(t){ if(log) log.textContent = t; }

  document.querySelectorAll('.mode[data-mode]').forEach(function(btn){
    btn.addEventListener('click', function(){
      mode = btn.dataset.mode;
      document.querySelectorAll('.mode[data-mode]').forEach(function(o){ o.setAttribute('aria-pressed', o === btn ? 'true' : 'false'); });
      gval.textContent = MODES[mode].label;
      if(mode === 'zero'){
        bodies.forEach(function(b){ b.vx += (Math.random()-.5)*3; b.vy += (Math.random()-.5)*3; b.vr += (Math.random()-.5)*.8; });
        say('Weightless. Nobody is holding on to their permissions.');
      } else if(mode === 'earth'){
        say('Gravity restored. Everything settles where it belongs.');
      } else {
        say('Gravity defied. Identities rise to the ceiling.');
      }
    });
  });

  var revoke = document.getElementById('revoke');
  if(revoke) revoke.addEventListener('click', function(){
    var a = bodies.filter(function(b){ return b.el.dataset.id === 'admin'; })[0];
    if(!a || !a.alive) return;
    a.alive = false; a.el.classList.add('gone');
    revoke.disabled = true; revoke.textContent = 'admin_rights revoked';
    log.innerHTML = 'admin_rights → <b>REVOKED</b>. The chamber is now least privilege.';
  });

  // Contact form
  var LANG = (document.documentElement.lang || 'en').slice(0, 2) === 'de' ? 'de' : 'en';
  var T = {
    en: { name:'Enter your name.', email:'Enter a valid email address, like alex@acme.com.', message:'Tell us a little more, at least 10 characters.',
          consent:'Tick the box so we can reply to you.', check:'Check the highlighted fields.', sending:'Sending…', send:'Send message', sentBtn:'Sent',
          sent:'Message sent. A nerd will get back to you soon.', tooMany:'Too many messages in a short time. Try again in a few minutes.',
          fail:"Your message couldn't be sent from here. Email {mail} instead." },
    de: { name:'Bitte geben Sie Ihren Namen ein.', email:'Bitte geben Sie eine gültige E-Mail-Adresse ein, z. B. alex@acme.com.', message:'Bitte schreiben Sie etwas mehr, mindestens 10 Zeichen.',
          consent:'Bitte setzen Sie das Häkchen, damit wir Ihnen antworten können.', check:'Bitte prüfen Sie die markierten Felder.', sending:'Wird gesendet…', send:'Nachricht senden', sentBtn:'Gesendet',
          sent:'Nachricht gesendet. Ein Nerd meldet sich in Kürze bei Ihnen.', tooMany:'Zu viele Nachrichten in kurzer Zeit. Bitte versuchen Sie es in ein paar Minuten erneut.',
          fail:'Ihre Nachricht konnte nicht gesendet werden. Bitte schreiben Sie direkt an {mail}.' }
  }[LANG];
  var form = document.getElementById('talk');
  var sendBtn = document.getElementById('f-send'), status = document.getElementById('f-status');
  var nameInput = document.getElementById('f-name');
  document.querySelectorAll('a[href="#talk"]').forEach(function(a){
    a.addEventListener('click', function(){ setTimeout(function(){ try{ nameInput.focus({preventScroll:true}); }catch(_){ nameInput.focus(); } }, 450); });
  });
  if(location.hash === '#talk'){ setTimeout(function(){ try{ nameInput.focus({preventScroll:true}); }catch(_){} }, 300); }
  function setErr(id, msg){
    var el = document.getElementById('e-' + id); if(!el) return;
    el.textContent = msg || '';
    var f = el.closest('.field'); if(f) f.classList.toggle('bad', !!msg);
  }
  ['name','email','message'].forEach(function(k){
    document.getElementById('f-' + k).addEventListener('input', function(){ setErr(k, ''); });
  });
  document.getElementById('f-consent').addEventListener('change', function(){ setErr('consent', ''); });
  form.addEventListener('submit', function(e){
    e.preventDefault();
    var data = {
      name: form.name.value.trim(), company: form.company.value.trim(), email: form.email.value.trim(),
      topic: form.topic.value, message: form.message.value.trim(), consent: form.consent.checked, website: form.website.value, lang: LANG
    };
    var bad = false;
    if(!data.name){ setErr('name', T.name); bad = true; }
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email)){ setErr('email', T.email); bad = true; }
    if(data.message.length < 10){ setErr('message', T.message); bad = true; }
    if(!data.consent){ setErr('consent', T.consent); bad = true; }
    if(bad){ status.className = 'status fail'; status.textContent = T.check; var first = form.querySelector('.field.bad input, .field.bad textarea, .check.bad input'); if(first) first.focus(); return; }
    sendBtn.disabled = true; sendBtn.textContent = T.sending; status.className = 'status'; status.textContent = '';
    var mail = (document.querySelector('.email') || {}).textContent || 'our email';
    fetch('/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(data) })
      .then(function(r){ return r.json().catch(function(){ return {}; }).then(function(j){ return { r:r, j:j }; }); })
      .then(function(res){
        if(res.r.ok && res.j.ok){
          form.classList.add('sent'); form.reset();
          status.className = 'status ok'; status.textContent = T.sent;
          sendBtn.textContent = T.sentBtn;
          return;
        }
        if(res.r.status === 400 && res.j.errors){ Object.keys(res.j.errors).forEach(function(k){ setErr(k, T[k] || res.j.errors[k]); }); }
        throw new Error(res.j.error || ('HTTP ' + res.r.status));
      })
      .catch(function(err){
        sendBtn.disabled = false; sendBtn.textContent = T.send;
        status.className = 'status fail';
        status.textContent = (err && /HTTP 429/.test(err.message)) ? T.tooMany
          : T.fail.replace('{mail}', mail);
      });
  });

  window.addEventListener('resize', function(){ measure(); step(); render(); });

  function start(){
    init();
    if(!reduced) requestAnimationFrame(loop);
    else {
      chamber.addEventListener('pointerup', function(){ var n=0; (function settle(){ step(); render(); if(++n<240) requestAnimationFrame(settle); })(); });
    }
  }
  if(document.fonts && document.fonts.ready){ document.fonts.ready.then(start); } else { start(); }

})();
