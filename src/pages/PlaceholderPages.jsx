import { Link } from 'react-router-dom';
import './PlaceholderPage.css';

function ComingSoon({ title, icon, id }) {
  return (
    <main className="placeholder-page" id={id}>
      <section className="placeholder-section" style={{ paddingTop: 'var(--nav-h)' }}>
        <div className="placeholder-section__inner">
          <div className="placeholder-section__badge">{icon}</div>
          <span className="section-label">Coming Soon</span>
          <h1 className="section-title" style={{ margin: '16px 0 12px' }}>{title}</h1>
          <p className="section-sub" style={{ margin: '0 auto 32px' }}>
            This page is being built. In the meantime, reach out to us directly — we'd love to hear from you.
          </p>
          <Link to="/contact" className="btn btn-primary">Talk to Us →</Link>
        </div>
      </section>
    </main>
  );
}

export function About()   { return <ComingSoon title="About Us"  icon="🏢" id="about" />; }
export function Services() { return <ComingSoon title="Services"  icon="⚡" id="services" />; }
export function Work()    { return <ComingSoon title="Our Work"  icon="🎨" id="work" />; }
export function Process() { return <ComingSoon title="Our Process" icon="🔄" id="process" />; }
export function Blog()    { return <ComingSoon title="Blog"      icon="📝" id="blog" />; }

/* Legal pages */
export function PrivacyPolicy() { return <ComingSoon title="Privacy Policy" icon="🔒" id="privacy" />; }
export function Terms()         { return <ComingSoon title="Terms & Conditions" icon="📋" id="terms" />; }
export function Cookies()       { return <ComingSoon title="Cookie Policy" icon="🍪" id="cookies" />; }
export function Refund()        { return <ComingSoon title="Refund Policy" icon="💳" id="refund" />; }
