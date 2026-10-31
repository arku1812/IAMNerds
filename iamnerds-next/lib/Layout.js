import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SITE, LINKEDIN } from './data';
import { LinkedInIcon } from './Showcase';
import WhatsAppChat from './WhatsAppChat';

const NAV = [
  ['/courses', 'Courses'],
  ['/learning-paths', 'Learning paths'],
  ['/vision-mission', 'Vision & Mission'],
  ['/about', 'About'],
  ['/contact', 'Contact'],
];

export function Seo({ title, description, path, jsonLd }) {
  const url = SITE + path;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="IAMNerds" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={`${SITE}/og.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE}/og.png`} />
      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
    </Head>
  );
}

function Brand() {
  return (
    <svg width="34" height="20" viewBox="0 0 120 52" aria-hidden="true">
      <circle cx="32" cy="28" r="20" fill="none" stroke="#12A594" strokeWidth="8" />
      <circle cx="88" cy="28" r="20" fill="none" stroke="#12A594" strokeWidth="8" />
      <path d="M53 24 Q60 15 67 24" fill="none" stroke="#12A594" strokeWidth="7" strokeLinecap="round" />
      <circle cx="32" cy="24" r="5" fill="#F5B841" />
      <path d="M29 27 L35 27 L37 37 L27 37 Z" fill="#F5B841" />
      <path d="M80 28 L86 34 L97 22" fill="none" stroke="#F5B841" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Crumbs({ items }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      {items.map(([href, label], i) =>
        i === items.length - 1 ? (
          <span key={href} aria-current="page">{label}</span>
        ) : (
          <span key={href}>
            <Link href={href}>{label}</Link> <span aria-hidden="true">/</span>{' '}
          </span>
        )
      )}
    </nav>
  );
}

export function CtaBand({ title, text, href, label }) {
  return (
    <section className="contact cta-band">
      <div className="wrap contact-inner">
        <div>
          <h2>{title}</h2>
          <p className="contact-lead">{text}</p>
        </div>
        <Link className="btn primary" href={href}>{label}</Link>
      </div>
    </section>
  );
}

export default function Layout({ children }) {
  const { asPath } = useRouter();
  const current = '/' + (asPath.split(/[?#]/)[0].split('/')[1] || '');
  return (
    <>
      <header className="top">
        <div className="wrap">
          <Link className="brand" href="/" aria-label="IAMNerds home">
            <Brand />
            <span><b>IAM</b>Nerds</span>
          </Link>
          <nav className="links" aria-label="Main">
            {NAV.map(([href, label]) => (
              <Link key={href} href={href} aria-current={current === href ? 'page' : undefined}>{label}</Link>
            ))}
          </nav>
          <Link className="btn primary" href="/contact#talk">Enquire now</Link>
        </div>
      </header>
      <main id="top">{children}</main>
      <footer>
        <div className="wrap giant-wrap" aria-hidden="true"><div className="giant">IAMNerds</div></div>
        <div className="wrap footbar">
          <span className="foot-brand">© 2026 IAMNerds · India <a className="foot-li" href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="IAMNerds on LinkedIn"><LinkedInIcon size={16} /></a></span>
          <nav className="footnav" aria-label="Footer">
            {NAV.map(([href, label], i) => (
              <span key={href}>{i > 0 && ' · '}<Link href={href}>{label}</Link></span>
            ))}
          </nav>
          <span><Link href="/privacy-policy">Privacy policy</Link> · <Link href="/terms">Terms and Conditions</Link></span>
        </div>
        <div className="wrap legal-note">
          Independent training. Vendor and product names are trademarks of their owners; IAMNerds is not affiliated with or endorsed by them.
        </div>
      </footer>
      <WhatsAppChat />
    </>
  );
}
