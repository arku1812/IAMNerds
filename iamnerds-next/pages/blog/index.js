import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Seo, Crumbs } from '../../lib/Layout';
import Cover from '../../lib/Cover';
import { Price } from '../../lib/Batches';
import { SHOW_FEES } from '../../lib/data';
import { ARTICLES, CATEGORY_LABELS, isGuide, kindLabel, readMinutes } from '../../lib/articles';
import { COURSES, SITE, WHATSAPP } from '../../lib/data';

const fmt = (iso) => new Date(iso + 'T00:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
const PER_PAGE = 6;
const FILTERS = [
  ['all', 'All'],
  ['usecase', 'Use cases'],
  ['guide', 'Career guides'],
  ['IGA', 'IGA'],
  ['ACCESS', 'Access'],
  ['PAM', 'PAM'],
  ['SAP', 'SAP'],
  ['NHI', 'Non-human identity'],
];
const TRENDING = ['sailpoint-identityiq', 'sailpoint-identity-security-cloud', 'one-identity-manager', 'saviynt', 'cyberark', 'okta', 'microsoft-entra-id'];

export default function Blog() {
  const [filter, setFilter] = useState('all');
  const [page, setPage] = useState(1);
  const list = useMemo(() => ARTICLES.filter((a) => filter === 'all' || a.kind === filter || a.category === filter), [filter]);
  const pages = Math.max(1, Math.ceil(list.length / PER_PAGE));
  const shown = list.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  const pick = (f) => { setFilter(f); setPage(1); };

  return (
    <>
      <Seo
        title="IAM Blog: Identity & Access Management Use Cases and Career Guides | IAMNerds"
        description="Real-world Identity & Access Management use cases (joiner-mover-leaver, access reviews, SoD, SSO, Zero Trust, PAM, non-human identities) and IAM career guides from IAMNerds."
        path="/blog"
        jsonLd={{ '@context': 'https://schema.org', '@type': 'Blog', url: `${SITE}/blog`, name: 'IAMNerds blog', inLanguage: 'en', blogPost: ARTICLES.map((a) => ({ '@type': 'BlogPosting', headline: a.title, url: `${SITE}/blog/${a.slug}`, datePublished: a.date, author: { '@type': 'Organization', name: 'IAMNerds' } })) }}
      />
      <section className="hero page-hero">
        <div className="wrap">
          <Crumbs items={[['/', 'Home'], ['/blog', 'Blog']]} />
          <div className="eyebrow">Blog</div>
          <h1>Recently added, <em>from the identity trenches.</em></h1>
          <p className="lede">Real-world Identity &amp; Access Management use cases and career guides, written by practitioners.</p>
          <div className="cta" style={{ marginTop: 'var(--s5)' }}>
            <Link className="btn primary" href="/contact?type=question#talk">Contact us</Link>
            <Link className="btn" href="/courses">Browse courses</Link>
          </div>
        </div>
      </section>

      <section className="band"><div className="wrap blog-layout">
        <div className="blog-main">
          <div className="seg blog-filters" role="tablist" aria-label="Filter articles">
            {FILTERS.map(([f, label]) => (
              <button key={f} type="button" role="tab" aria-selected={filter === f} className={`chip ${filter === f ? 'on' : ''}`} onClick={() => pick(f)}>{label}</button>
            ))}
          </div>
          <div className="post-list">
            {shown.map((a) => (
              <Link className="post-card" key={a.slug} href={`/blog/${a.slug}`}>
                <Cover category={a.category} label={kindLabel(a)} />
                <div className="post-body">
                  <span className="k">{kindLabel(a).toUpperCase()} · {CATEGORY_LABELS[a.category] || a.category}</span>
                  <h3>{a.title}</h3>
                  <p>{a.description}</p>
                  <span className="meta">By IAMNerds · {fmt(a.date)} · {readMinutes(a)} min read</span>
                </div>
              </Link>
            ))}
            {!shown.length && <p className="batches-none">No articles in this category yet.</p>}
          </div>
          {pages > 1 && (
            <nav className="pager" aria-label="Pages">
              {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
                <button key={n} type="button" className={`chip ${n === page ? 'on' : ''}`} aria-current={n === page ? 'page' : undefined} onClick={() => { setPage(n); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>{n}</button>
              ))}
            </nav>
          )}
        </div>

        <aside className="blog-side">
          <div className="side-card">
            <span className="k">TRENDING COURSES</span>
            <ul className="side-list">
              {TRENDING.map((s) => {
                const c = COURSES.find((x) => x.slug === s);
                return (
                  <li key={s}><Link href={`/courses/${s}`}><b>{c.title}</b><span>{c.hours} h{SHOW_FEES && <> · <Price slug={s} /></>}</span></Link></li>
                );
              })}
            </ul>
            <Link className="more-link" href="/courses">All courses →</Link>
          </div>
          <div className="side-card">
            <span className="k">TALK TO A NERD</span>
            <p>Questions about a course or your IAM career? We reply personally.</p>
            <Link className="btn primary" href="/contact?type=demo#talk">Book a free demo</Link>
            <a className="btn" href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer">WhatsApp us</a>
          </div>
        </aside>
      </div></section>
    </>
  );
}
