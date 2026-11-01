// Build-time lookup of vendor logo files (server only: used in getStaticProps).
// Drop a logo into public/logos/<course-slug>.svg (or .png / .webp) and the next deploy shows it
// on that course page and its course card. Without a file, the vendor name badge is shown.
import fs from 'fs';
import path from 'path';

export function logoFor(slug) {
  for (const ext of ['svg', 'png', 'webp']) {
    if (fs.existsSync(path.join(process.cwd(), 'public', 'logos', `${slug}.${ext}`))) return `/logos/${slug}.${ext}`;
  }
  return null;
}

// Company logos for the "Join the world's leading companies" strip:
// public/logos/companies/<name-slug>.svg|png|webp, e.g. infosys.svg, hcl-technologies.png.
export const companySlug = (name) => name.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export function companyLogoMap(names) {
  const out = {};
  for (const n of names) {
    const s = companySlug(n);
    for (const ext of ['svg', 'png', 'webp']) {
      if (fs.existsSync(path.join(process.cwd(), 'public', 'logos', 'companies', `${s}.${ext}`))) { out[n] = `/logos/companies/${s}.${ext}`; break; }
    }
  }
  return out;
}

export function logoMap(slugs) {
  return Object.fromEntries(slugs.map((s) => [s, logoFor(s)]));
}
