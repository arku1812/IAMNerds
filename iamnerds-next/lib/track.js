// Sends a custom event to Application Insights (cookieless, see public/js/analytics.js).
// Queues events until the analytics script has loaded. Does nothing for Do Not Track visitors.
export function track(name, props = {}) {
  if (typeof window === 'undefined') return;
  const p = { page: window.location.pathname, ...props };
  if (window.iamnerdsTrack) window.iamnerdsTrack(name, p);
  else (window.__iamq = window.__iamq || []).push([name, p]);
}

// Classifies a clicked link into a conversion event name, or null.
export function linkEvent(href) {
  if (!href) return null;
  if (/^\/whatsapp|wa\.me|api\.whatsapp\.com/.test(href)) return 'WhatsApp click';
  if (/linkedin\.com/.test(href)) return 'LinkedIn click';
  if (/^mailto:/.test(href)) return 'Email click';
  if (/\/contact\?[^#]*type=demo/.test(href)) return 'Free demo click';
  if (/\/contact\?[^#]*type=register/.test(href)) return 'Register click';
  return null;
}
