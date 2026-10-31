import { useEffect, useState } from 'react';
import { WHATSAPP } from './data';

const GREETING = 'Hi! I would like to know more about the IAMNerds courses.';

function WaIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <path fill="currentColor" d="M16 3C8.8 3 3 8.7 3 15.8c0 2.5.7 4.9 2 7L3 29l6.4-2c2 1.1 4.3 1.7 6.6 1.7 7.2 0 13-5.7 13-12.8S23.2 3 16 3zm0 23.4c-2.1 0-4.1-.6-5.9-1.7l-.4-.3-3.8 1.2 1.2-3.7-.3-.4c-1.2-1.8-1.9-3.9-1.9-6 0-5.9 4.9-10.6 11-10.6s11 4.8 11 10.6S22 26.4 16 26.4zm6-7.9c-.3-.2-2-1-2.3-1.1-.3-.1-.5-.2-.8.2-.2.3-.9 1.1-1.1 1.3-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.7-1.6-1-.9-1.7-2-1.9-2.3-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.6.1-.2 0-.4 0-.6l-1-2.5c-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.3 1.4 3.5c.2.2 2.4 3.7 5.9 5.1 3.5 1.4 3.5.9 4.1.9.6-.1 2-.8 2.3-1.6.3-.8.3-1.5.2-1.6-.1-.1-.3-.2-.7-.4z" />
    </svg>
  );
}

export default function WhatsAppChat() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);
  const href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(GREETING)}`;
  return (
    <div className="wa">
      {open && (
        <div className="wa-panel" role="dialog" aria-label="Chat with IAMNerds on WhatsApp">
          <div className="wa-head">
            <span className="wa-avatar" aria-hidden="true">
              <svg width="26" height="16" viewBox="0 0 120 52"><circle cx="32" cy="28" r="20" fill="none" stroke="#5EE0CF" strokeWidth="8" /><circle cx="88" cy="28" r="20" fill="none" stroke="#5EE0CF" strokeWidth="8" /><path d="M53 24 Q60 15 67 24" fill="none" stroke="#5EE0CF" strokeWidth="7" strokeLinecap="round" /></svg>
              <span className="wa-dot" />
            </span>
            <div>
              <div className="wa-name">IAMNerds</div>
              <div className="wa-status">Available</div>
            </div>
            <button className="wa-close" type="button" aria-label="Close chat" onClick={() => setOpen(false)}>×</button>
          </div>
          <div className="wa-body">
            <p className="wa-bubble">Hi! Welcome to <b>IAMNerds</b>.<br />How can I help you?</p>
          </div>
          <div className="wa-foot">
            <a className="wa-btn" href={href} target="_blank" rel="noopener noreferrer">
              <WaIcon size={22} /> WhatsApp Us
            </a>
            <p className="wa-meta">Online | <a href="/datenschutz">Privacy policy</a></p>
          </div>
        </div>
      )}
      <button
        className="wa-fab"
        type="button"
        aria-label={open ? 'Close WhatsApp chat' : 'Chat with us on WhatsApp'}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <WaIcon size={34} />
      </button>
    </div>
  );
}
