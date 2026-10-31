import Link from 'next/link';

export function VendorMark({ course: c, logo, big = false }) {
  // Shows the vendor logo when a file exists in public/logos; no text badge (it would repeat the course name).
  if (!c.vendor || !logo) return null;
  return <img className={`vendor-logo ${big ? 'big' : ''}`} src={logo} alt={`${c.vendor} logo`} loading="lazy" />;
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
