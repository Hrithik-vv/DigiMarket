import { Link } from 'react-router-dom';
import { CONTACT, WHATSAPP_URL } from '../config/contact.config';

export default function MobileBar() {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '60px',
        backgroundColor: '#0c0d12',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        zIndex: 900,
        padding: '0 8px',
      }}
      className="mobile-bar-container"
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          color: '#25d366',
          fontSize: '0.82rem',
          fontWeight: 600,
        }}
      >
        <span>💬 WhatsApp</span>
      </a>

      <div style={{ width: '1px', height: '24px', backgroundColor: 'rgba(255,255,255,0.1)' }} />

      <a
        href={`tel:${CONTACT.phoneRaw}`}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          color: '#f5f6f9',
          fontSize: '0.82rem',
          fontWeight: 600,
        }}
      >
        <span>📞 Call</span>
      </a>

      <div style={{ width: '1px', height: '24px', backgroundColor: 'rgba(255,255,255,0.1)' }} />

      <Link
        to="/contact"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          color: 'var(--clr-accent)',
          fontSize: '0.82rem',
          fontWeight: 600,
        }}
      >
        <span>✉️ Start Project</span>
      </Link>
    </div>
  );
}
