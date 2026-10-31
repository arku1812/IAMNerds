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

export function logoMap(slugs) {
  return Object.fromEntries(slugs.map((s) => [s, logoFor(s)]));
}
