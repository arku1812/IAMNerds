import Script from 'next/script';
import Layout from '../lib/Layout';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
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
