import { useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import Layout from '../lib/Layout';
import { linkEvent, track } from '../lib/track';
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
      const name = linkEvent(href);
      if (name) track(name, { href, label: (a.textContent || '').trim().slice(0, 60) });
    };
    document.addEventListener('click', onClick, true);
    return () => {
      router.events.off('routeChangeComplete', onRoute);
      document.removeEventListener('click', onClick, true);
    };
  }, [router.events]);

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Script src="/js/ai.min.js" strategy="afterInteractive" />
      <Script src="/js/analytics.js" strategy="lazyOnload" />
    </>
  );
}
