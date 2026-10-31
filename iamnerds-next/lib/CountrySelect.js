import { useEffect, useMemo, useRef, useState } from 'react';

export function Flag({ iso }) {
  return (
    <svg className="flag" viewBox="0 0 3 2" aria-hidden="true" focusable="false">
      <use href={`/flags.svg#${iso}`} />
    </svg>
  );
}

// Country code picker with flags: a button plus a searchable listbox.
// `countries` = [{ iso, code, name }], value = ISO code.
export default function CountrySelect({ countries, value, onChange, invalid }) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');
  const [active, setActive] = useState(0);
  const wrap = useRef(null);
  const list = useRef(null);
  const search = useRef(null);
  const current = countries.find((c) => c.iso === value) || countries[0];

  const shown = useMemo(() => {
    const t = q.trim().toLowerCase().replace(/^\+/, '');
    if (!t) return countries;
    return countries.filter((c) => c.name.toLowerCase().includes(t) || c.code.startsWith(t) || c.iso.toLowerCase() === t);
  }, [q, countries]);

  useEffect(() => {
    if (!open) return;
    const close = (e) => { if (wrap.current && !wrap.current.contains(e.target)) setOpen(false); };
    document.addEventListener('pointerdown', close);
    const i = Math.max(0, shown.findIndex((c) => c.iso === value));
    setActive(i);
    setTimeout(() => {
      if (search.current) search.current.focus();
      const el = list.current && list.current.children[i];
      if (el) el.scrollIntoView({ block: 'center' });
    }, 0);
    return () => document.removeEventListener('pointerdown', close);
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const el = list.current && list.current.children[active];
    if (el) el.scrollIntoView({ block: 'nearest' });
  }, [active]);

  function pick(c) {
    onChange(c.iso);
    setOpen(false);
    setQ('');
    const btn = wrap.current && wrap.current.querySelector('.cc-btn');
    if (btn) btn.focus();
  }

  function onKey(e) {
    if (e.key === 'ArrowDown') { e.preventDefault(); setActive((a) => Math.min(shown.length - 1, a + 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActive((a) => Math.max(0, a - 1)); }
    else if (e.key === 'Enter') { e.preventDefault(); if (shown[active]) pick(shown[active]); }
    else if (e.key === 'Escape') { e.preventDefault(); setOpen(false); }
  }

  return (
    <div className={`cc ${invalid ? 'bad' : ''}`} ref={wrap}>
      <input type="hidden" name="country" value={current.iso} />
      <button
        type="button"
        className="cc-btn"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Country code: ${current.name} +${current.code}`}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={(e) => { if (e.key === 'ArrowDown') { e.preventDefault(); setOpen(true); } }}
      >
        <Flag iso={current.iso} />
        <span>+{current.code}</span>
        <svg className="cc-caret" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" /></svg>
      </button>
      {open && (
        <div className="cc-pop">
          <input
            ref={search}
            className="cc-search"
            type="text"
            placeholder="Search country or code"
            aria-label="Search country or code"
            value={q}
            onChange={(e) => { setQ(e.target.value); setActive(0); }}
            onKeyDown={onKey}
          />
          <ul className="cc-list" role="listbox" ref={list} aria-label="Countries">
            {shown.map((c, i) => (
              <li
                key={c.iso}
                role="option"
                aria-selected={c.iso === value}
                className={i === active ? 'on' : ''}
                onPointerEnter={() => setActive(i)}
                onClick={() => pick(c)}
              >
                <Flag iso={c.iso} />
                <span className="cc-name">{c.name}</span>
                <span className="cc-code">+{c.code}</span>
              </li>
            ))}
            {!shown.length && <li className="cc-none">No match</li>}
          </ul>
        </div>
      )}
    </div>
  );
}
