import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT, WHATSAPP_URL } from '../config/contact.config';
import { FiMessageSquare, FiX, FiPhone, FiMail, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
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
            <FaWhatsapp style={{ fontSize: '1.05rem', flexShrink: 0 }} />
            <span>WhatsApp Us</span>
          </a>
          <a
            href={`tel:${CONTACT.phoneRaw}`}
            className="lored-fab-item"
            role="menuitem"
          >
            <FiPhone style={{ fontSize: '1rem', flexShrink: 0, color: 'var(--clr-primary)' }} />
            <span>Call {CONTACT.phone}</span>
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="lored-fab-item"
            role="menuitem"
          >
            <FiMail style={{ fontSize: '1rem', flexShrink: 0, color: 'var(--clr-primary)' }} />
            <span>Email Us</span>
          </a>
          <Link
            to="/contact"
            className="lored-fab-item lored-fab-item--accent"
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            <FiSend style={{ fontSize: '1rem', flexShrink: 0 }} />
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
        {open ? <FiX size={22} /> : <FiMessageSquare size={22} />}
      </button>
    </div>
  );
}
