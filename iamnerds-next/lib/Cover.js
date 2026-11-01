// Generated blog cover: gradient by category with a simple line icon. No external images needed.
const ICONS = {
  IGA: <><circle cx="24" cy="20" r="7" /><circle cx="44" cy="22" r="5.5" /><path d="M10 46c1.5-8 7-12 14-12s12.5 4 14 12M36 44c1-5.5 4.5-8.5 9-8.5s7.5 3 8.5 8.5" /></>,
  ACCESS: <><circle cx="22" cy="32" r="9" /><path d="M31 32h22M46 32v8M52 32v6" /></>,
  PAM: <><path d="M32 8l18 7v13c0 12-7.5 21-18 26-10.5-5-18-14-18-26V15z" /><rect x="25" y="27" width="14" height="11" rx="2" /><path d="M28 27v-4a4 4 0 018 0v4" /></>,
  SAP: <><path d="M32 8l20 11v24L32 54 12 43V19z" /><path d="M12 19l20 11 20-11M32 30v24" /></>,
  NHI: <><rect x="16" y="16" width="32" height="32" rx="5" /><rect x="25" y="25" width="14" height="14" rx="2" /><path d="M24 10v6M32 10v6M40 10v6M24 48v6M32 48v6M40 48v6M10 24h6M10 32h6M10 40h6M48 24h6M48 32h6M48 40h6" /></>,
  CAREER: <><circle cx="32" cy="32" r="22" /><path d="M41 23l-5 13-13 5 5-13z" /></>,
};

export default function Cover({ category, label, size = 'card' }) {
  return (
    <div className={`cover cover-${(category || 'IGA').toLowerCase()} cover-${size}`} aria-hidden="true">
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        {ICONS[category] || ICONS.IGA}
      </svg>
      <span>{label}</span>
    </div>
  );
}
