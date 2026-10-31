import Link from 'next/link';

export function VendorMark({ course: c, logo, big = false }) {
  if (!c.vendor) return null;
  if (logo) {
    return <img className={`vendor-logo ${big ? 'big' : ''}`} src={logo} alt={`${c.vendor} logo`} loading="lazy" />;
  }
  return <span className={`vendor-badge ${big ? 'big' : ''}`}>{c.vendor}</span>;
}

export default function CourseCard({ course: c, logo }) {
  return (
    <Link className="plat course-card" href={`/courses/${c.slug}`}>
      <span className="card-top"><span className="k">{c.tag}</span><VendorMark course={c} logo={logo} /></span>
      <h3>{c.title}</h3>
      <p>{c.tagline}</p>
      <span className="meta">{c.modules.length} modules · {c.hours} h</span>
    </Link>
  );
}
