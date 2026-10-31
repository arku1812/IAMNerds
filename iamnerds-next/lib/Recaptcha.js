import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { RECAPTCHA_SITE_KEY } from './data';

// Google reCAPTCHA v2 checkbox ("I'm not a robot"). Renders nothing until a site key is configured.
const Recaptcha = forwardRef(function Recaptcha({ onChange }, ref) {
  const box = useRef(null);
  const widget = useRef(null);

  useImperativeHandle(ref, () => ({
    reset() {
      if (window.grecaptcha && widget.current !== null) window.grecaptcha.reset(widget.current);
    },
  }));

  useEffect(() => {
    if (!RECAPTCHA_SITE_KEY) return undefined;
    let cancelled = false;
    const render = () => {
      if (cancelled || !box.current || widget.current !== null) return;
      widget.current = window.grecaptcha.render(box.current, {
        sitekey: RECAPTCHA_SITE_KEY,
        callback: (token) => onChange(token),
        'expired-callback': () => onChange(''),
        'error-callback': () => onChange(''),
      });
    };
    if (window.grecaptcha && window.grecaptcha.render) {
      window.grecaptcha.ready(render);
    } else {
      window.__iamnerdsRecaptcha = () => window.grecaptcha.ready(render);
      if (!document.getElementById('recaptcha-js')) {
        const s = document.createElement('script');
        s.id = 'recaptcha-js';
        s.src = 'https://www.google.com/recaptcha/api.js?onload=__iamnerdsRecaptcha&render=explicit&hl=en';
        s.async = true;
        s.defer = true;
        document.head.appendChild(s);
      }
    }
    return () => { cancelled = true; };
  }, [onChange]);

  if (!RECAPTCHA_SITE_KEY) return null;
  return <div className="recaptcha" ref={box} />;
});

export default Recaptcha;
