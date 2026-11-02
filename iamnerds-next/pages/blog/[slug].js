import Link from 'next/link';
import { Seo, Crumbs } from '../../lib/Layout';
import { ARTICLES, CATEGORY_LABELS, articleBySlug, isGuide, kindLabel, questionCount, readMinutes } from '../../lib/articles';
import Cover from '../../lib/Cover';
import { COURSES, SITE, bySlug } from '../../lib/data';
import { Price, demoHref } from '../../lib/Batches';
import { SHOW_FEES } from '../../lib/data';

const fmt = (iso) => new Date(iso + 'T00:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
const anchor = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export default function Article({ slug }) {
  const a = articleBySlug(slug);
  const c = bySlug(a.course);
  const path = `/blog/${a.slug}`;
  const guide = isGuide(a);
  const count = questionCount(a);
  let i = 0;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Article', articleSection: kindLabel(a), headline: a.title, description: a.description, datePublished: a.date, dateModified: a.date, url: SITE + path, inLanguage: 'en', author: { '@type': 'Organization', name: 'IAMNerds', url: `${SITE}/` }, publisher: { '@type': 'Organization', name: 'IAMNerds', logo: { '@type': 'ImageObject', url: `${SITE}/icon-512.png` } }, image: `${SITE}/og.png` },
      ...(guide ? [] : [{ '@type': 'FAQPage', mainEntity: a.sections.flatMap((s) => (s.qa || []).map(([q, ans]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: ans } }))) }]),
      { '@type': 'BreadcrumbList', itemListElement: [['/', 'Home'], ['/blog', 'Blog'], [path, a.short]].map(([h, t], n) => ({ '@type': 'ListItem', position: n + 1, name: t, item: SITE + h })) },
    ],
  };
  return (
    <>
      <Seo title={`${a.title} | IAMNerds`} description={a.description} path={path} jsonLd={jsonLd} />
      <section className="hero page-hero">
        <div className="wrap">
          <Crumbs items={[['/', 'Home'], ['/blog', 'Blog'], [path, a.short]]} />
          <div className="eyebrow">{kindLabel(a)} · {CATEGORY_LABELS[a.category] || a.category}</div>
          <h1>{a.title}</h1>
          <p className="lede">By IAMNerds · {fmt(a.date)} · {readMinutes(a)} min read</p>
          <Cover category={a.category} label={kindLabel(a)} size="hero" />
        </div>
      </section>
      <section className="band"><div className="wrap article">
        <div className="article-body">
          {a.intro.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
          <nav className="toc" aria-label="Contents">
            <b>Contents</b>
            <ol>{a.sections.map((s) => <li key={s.title}><a href={`#${anchor(s.title)}`}>{s.title}</a></li>)}</ol>
          </nav>
          {a.sections.map((s) => (
            <div key={s.title}>
              <h2 id={anchor(s.title)}>{s.title}</h2>
              {(s.paras || []).map((t) => <p className="guide-p" key={t.slice(0, 24)}>{t}</p>)}
              {s.bullets && <ul className="guide-list">{s.bullets.map((t) => <li key={t.slice(0, 24)}>{t}</li>)}</ul>}
              {(s.qa || []).map(([q, ans]) => {
                i += 1;
                return (
                  <div className="qa" key={q}>
                    <h3><span className="qn">{String(i).padStart(2, '0')}</span>{q}</h3>
                    <p>{ans}</p>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <aside className="article-side">
          <div className="side-card">
            <span className="k">{c.tag} · COURSE</span>
            <h3>{c.title}</h3>
            <p>{c.tagline} {c.hours} hours, {c.modules.length} modules, every module with a lab.</p>
            {SHOW_FEES && <p className="side-fee"><Price slug={c.slug} /></p>}
            <Link className="btn primary" href={demoHref(c.title)}>Book a free demo</Link>
            <Link className="btn" href={`/courses/${c.slug}`}>See the curriculum</Link>
          </div>
          <div className="side-card">
            <span className="k">TRENDING COURSES</span>
            <ul className="side-list">
              {['sailpoint-identityiq', 'sailpoint-identity-security-cloud', 'one-identity-manager', 'saviynt', 'cyberark', 'okta', 'microsoft-entra-id'].filter((x) => x !== c.slug).slice(0, 5).map((x) => {
                const t = COURSES.find((y) => y.slug === x);
                return <li key={x}><Link href={`/courses/${x}`}><b>{t.title}</b><span>{t.hours} h{SHOW_FEES && <> · <Price slug={x} /></>}</span></Link></li>;
              })}
            </ul>
          </div>
          <div className="side-card">
            <span className="k">MORE FROM THE BLOG</span>
            <ul className="side-list">
              {ARTICLES.filter((x) => x.slug !== a.slug && x.kind === a.kind).slice(0, 4).map((x) => (
                <li key={x.slug}><Link href={`/blog/${x.slug}`}><b>{x.short}</b><span>{kindLabel(x)}</span></Link></li>
              ))}
            </ul>
          </div>
        </aside>
      </div></section>
    </>
  );
}

export function getStaticPaths() {
  return { paths: ARTICLES.map((a) => ({ params: { slug: a.slug } })), fallback: false };
}

export function getStaticProps({ params }) {
  return { props: { slug: params.slug } };
}
