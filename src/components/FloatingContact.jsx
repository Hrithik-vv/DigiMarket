import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT, WHATSAPP_URL } from '../config/contact.config';
import './FloatingContact.css';

export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className="lored-fab-wrap" ref={menuRef}>
      {open && (
        <div className="lored-fab-menu" role="menu">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="lored-fab-item lored-fab-item--wa"
            role="menuitem"
          >
            <span>WhatsApp Us</span>
          </a>
          <a
            href={`tel:${CONTACT.phoneRaw}`}
            className="lored-fab-item"
            role="menuitem"
          >
            <span>Call {CONTACT.phone}</span>
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="lored-fab-item"
            role="menuitem"
          >
            <span>Email Us</span>
          </a>
          <Link
            to="/contact"
            className="lored-fab-item lored-fab-item--accent"
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            <span>Project Enquiry</span>
          </Link>
        </div>
      )}

      <button
        type="button"
        className={`lored-fab-btn${open ? ' lored-fab-btn--open' : ''}`}
        onClick={() => setOpen(prev => !prev)}
        aria-label="Quick Contact Menu"
        aria-expanded={open}
      >
        {open ? '✕' : '💬'}
      </button>
    </div>
  );
}
