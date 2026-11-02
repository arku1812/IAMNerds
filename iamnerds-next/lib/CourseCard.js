import Link from 'next/link';
import { Price } from './Batches';
import { SHOW_FEES } from './data';

export function VendorMark({ course: c, logo, big = false }) {
  // Shows the product logo when a file exists in public/logos; no text badge (it would repeat the course name).
  if (!logo) return null;
  return <img className={`vendor-logo ${big ? 'big' : ''}`} src={logo} alt={`${c.vendor || 'IAMNerds'} logo`} loading="lazy" />;
}

export default function CourseCard({ course: c, logo }) {
  return (
    <Link className="plat course-card" href={`/courses/${c.slug}`}>
      {logo && <span className="card-logo"><img src={logo} alt={`${c.vendor || 'IAMNerds'} logo`} loading="lazy" /></span>}
      <span className="card-top"><span className="k">{c.tag}</span></span>
      <h3>{c.title}</h3>
      <p>{c.tagline}</p>
      <span className="meta">{c.modules.length} modules · {c.hours} h</span>
      {SHOW_FEES && <span className="card-fee"><Price slug={c.slug} /></span>}
    </Link>
  );
}
