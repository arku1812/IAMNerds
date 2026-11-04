import { useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import Layout from '../lib/Layout';
import { linkEvent, track } from '../lib/track';
import { WHATSAPP_URL } from '../lib/data';
import { OPEN_WHATSAPP_EVENT } from '../lib/WhatsAppChat';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Page views for client-side navigation (the first view is sent by analytics.js).
    const onRoute = (url) => { if (window.iamnerdsPageView) window.iamnerdsPageView(url); };
    router.events.on('routeChangeComplete', onRoute);
    // Conversion clicks anywhere on the site.
    const onClick = (e) => {
      const a = e.target.closest && e.target.closest('a[href]');
      if (!a) return;
      const href = a.getAttribute('href');
      // Site WhatsApp buttons open the chat widget instead of leaving the page.
      if (href === WHATSAPP_URL) { e.preventDefault(); window.dispatchEvent(new Event(OPEN_WHATSAPP_EVENT)); return; }
      const name = linkEvent(href);
      if (name) track(name, { href, label: (a.textContent || '').trim().slice(0, 60) });
    };
    document.addEventListener('click', onClick, true);
    // Copy guard: selection is already off in CSS; also block copy/cut (Ctrl+A,
    // Ctrl+C, context menu) unless it is an email link, the WhatsApp number or a form field.
    const ALLOWED = 'a[href^="mailto:"], .allow-copy, input, textarea, select, [contenteditable="true"]';
    const allowed = (n) => { const el = n && n.nodeType === 1 ? n : n && n.parentElement; return !!(el && el.closest(ALLOWED)); };
    const guard = (e) => {
      if (allowed(document.activeElement)) return;
      const sel = document.getSelection();
      if (sel && !sel.isCollapsed && allowed(sel.anchorNode) && allowed(sel.focusNode)) return;
      e.preventDefault();
    };
    document.addEventListener('copy', guard);
    document.addEventListener('cut', guard);
    return () => {
      router.events.off('routeChangeComplete', onRoute);
      document.removeEventListener('click', onClick, true);
      document.removeEventListener('copy', guard);
      document.removeEventListener('cut', guard);
    };
  }, [router.events]);

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Script src="/js/ai.min.js" strategy="afterInteractive" />
      <Script src="/js/analytics.js?v=20261101" strategy="lazyOnload" />
    </>
  );
}
