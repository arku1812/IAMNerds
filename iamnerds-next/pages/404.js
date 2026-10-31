import Link from 'next/link';
import Head from 'next/head';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Not found · IAMNerds</title>
        <meta name="robots" content="noindex" />
      </Head>
      <section className="hero page-hero">
        <div className="wrap">
          <div className="eyebrow">Error 403½</div>
          <h1>Access <em>not found.</em></h1>
          <p className="lede">This page either never existed or was deprovisioned properly. Either way, least privilege wins.</p>
          <div className="cta" style={{ marginTop: 'var(--s6)' }}>
            <Link className="btn primary" href="/">Back to IAMNerds</Link>
            <Link className="btn" href="/courses">Browse courses</Link>
          </div>
        </div>
      </section>
    </>
  );
}
