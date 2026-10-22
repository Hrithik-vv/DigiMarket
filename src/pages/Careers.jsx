import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT, SITE_NAME } from '../config/contact.config';
import { useSettings } from '../context/SettingsContext';
import './Careers.css';

const OPENINGS = [
  {
    id: "senior-fullstack-engineer",
    title: "Senior Full-Stack Engineer (React / Node / Cloud)",
    department: "Web Engineering",
    location: "Kannur, Kerala / Hybrid",
    type: "Full-Time",
    experience: "4+ Years",
    description: "Architect and build high-performance web applications, headless commerce platforms, and scalable APIs for clients across India and the GCC."
  },
  {
    id: "seo-growth-lead",
    title: "Technical SEO & Search Strategist",
    department: "Digital Marketing",
    location: "Kannur, Kerala / Hybrid",
    type: "Full-Time",
    experience: "3+ Years",
    description: "Lead technical crawl audits, semantic search optimization, international hreflang setups, and conversion analytics for enterprise clients."
  },
  {
    id: "ui-ux-product-designer",
    title: "UI/UX & Design Systems Designer",
    department: "Branding & Creative",
    location: "Kannur, Kerala",
    type: "Full-Time",
    experience: "3+ Years",
    description: "Create component-driven Figma design systems, responsive web interfaces, and intuitive user workflows that bridge business logic and elegance."
  },
  {
    id: "odoo-erp-developer",
    title: "Odoo ERP Technical Consultant",
    department: "Infrastructure & Systems",
    location: "Kannur, Kerala / Hybrid",
    type: "Full-Time",
    experience: "2+ Years",
    description: "Deploy and configure Odoo Community & Enterprise modules, develop custom Python integrations, and assist in client data migrations."
  }
];

export default function Careers() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [appSubmitted, setAppSubmitted] = useState(false);
  const { settings } = useSettings();
  const brand = settings.siteName || SITE_NAME;

  return (
    <main className="careers-page">
      {/* ── 1. Dark Hero Section ── */}
      <section className="section section--dark careers-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumbs-sep">/</span>
            <span className="breadcrumbs-current">Careers</span>
          </nav>

          <span className="badge-eyebrow badge-eyebrow--pill badge-eyebrow--white">
            JOIN OUR TEAM
          </span>
          <h1 className="careers-hero__title">Build Things That Matter</h1>
          <p className="careers-hero__subtitle">
            At {brand}, we build serious digital engineering products that power real businesses. We value craft, curiosity, software rigor, and ownership over bureaucratic management.
          </p>
        </div>
      </section>

      {/* ── 2. Life at DigiMarket & Culture (White Section) ── */}
      <section className="section careers-culture">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="badge-eyebrow">LIFE AT {brand.toUpperCase()}</span>
            <h2>Our Culture & How We Work</h2>
            <p>Work alongside experienced engineers and strategists committed to delivering uncompromised quality.</p>
          </div>

          <div className="grid-3">
            <div className="agency-card careers-culture-card">
              <h3>Engineering Rigor</h3>
              <p>
                We value clean code, automated testing, and thoughtful system architecture. We don't ship sloppy hacks or fragile templates.
              </p>
            </div>
            <div className="agency-card careers-culture-card">
              <h3>Direct Responsibility</h3>
              <p>
                Engineers communicate directly with project stakeholders. You have ownership over decisions, timelines, and technical outcomes.
              </p>
            </div>
            <div className="agency-card careers-culture-card">
              <h3>Continuous Learning</h3>
              <p>
                We sponsor technical certifications, book budgets, and provide dedicated time for exploring emerging technologies and tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Open Positions (Light Alt Section) ── */}
      <section className="section section--alt careers-openings">
        <div className="container">
          <div className="section-head">
            <span className="badge-eyebrow">OPEN POSITIONS</span>
            <h2>Current Openings in Kannur & Hybrid</h2>
            <p>Explore opportunities to work on demanding international projects from our Kerala delivery center.</p>
          </div>

          <div className="careers-openings-list">
            {OPENINGS.map((role) => (
              <div key={role.id} className="agency-card career-role-card">
                <div className="career-role-header">
                  <div>
                    <span className="career-role-dept">{role.department}</span>
                    <h3>{role.title}</h3>
                    <div className="career-role-meta">
                      <span>📍 {role.location}</span> • <span>⏳ {role.type}</span> • <span>💼 {role.experience}</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      setSelectedRole(role);
                      setAppSubmitted(false);
                      setTimeout(() => {
                        document.getElementById('application-box')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                  >
                    Apply for Role →
                  </button>
                </div>
                <p className="career-role-desc">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Application Form Drawer ── */}
      {selectedRole && (
        <section className="section" id="application-box">
          <div className="container" style={{ maxWidth: '720px' }}>
            <div className="agency-card" style={{ padding: '44px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <span className="badge-eyebrow">JOB APPLICATION</span>
                <button
                  type="button"
                  onClick={() => setSelectedRole(null)}
                  style={{ fontSize: '1rem', color: 'var(--clr-muted-dark)' }}
                >
                  ✕ Close
                </button>
              </div>

              <h3>Apply for {selectedRole.title}</h3>
              <p style={{ marginBottom: '24px', color: 'var(--clr-body-dark)' }}>
                Submit your details below or email your CV directly to <strong>careers@digimarket.in</strong>.
              </p>

              {appSubmitted ? (
                <div className="agency-card" style={{ padding: '28px', background: 'rgba(16, 185, 129, 0.08)', borderColor: '#10b981' }}>
                  <h4 style={{ color: '#10b981', marginBottom: '8px' }}>Application Received</h4>
                  <p>Thank you! Our talent team will review your profile and reach out within 3 business days.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setAppSubmitted(true);
                  }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}
                >
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input type="text" className="form-input" required placeholder="Your full name" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input type="email" className="form-input" required placeholder="you@domain.com" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone / WhatsApp *</label>
                    <input type="tel" className="form-input" required placeholder="+91 98765 43210" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">LinkedIn or Portfolio URL</label>
                    <input type="url" className="form-input" placeholder="https://..." />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Brief Background & Key Projects *</label>
                    <textarea className="form-textarea" required placeholder="Tell us briefly about systems or products you've built..." rows={4} />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '8px' }}>
                    Submit Application →
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── 5. General Application (White Section) ── */}
      <section className="section">
        <div className="container">
          <div className="agency-card careers-general-card">
            <span className="badge-eyebrow">GENERAL INQUIRY</span>
            <h2>Don't see your specific role listed?</h2>
            <p>
              We are always eager to connect with talented engineers, technical SEOs, systems architects, and designers based in Kerala or seeking remote collaboration.
            </p>
            <div style={{ marginTop: '28px' }}>
              <a href={`mailto:${settings.contactEmail || CONTACT.email}?subject=General%20Career%20Inquiry%20-%20${encodeURIComponent(brand)}`} className="btn btn-dark">
                Send a General Application →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Bottom Dark CTA ── */}
      <section className="section section--dark careers-cta-section">
        <div className="container careers-cta-section__inner">
          <span className="badge-eyebrow badge-eyebrow--pill badge-eyebrow--white">
            JOIN US
          </span>
          <h2>Ready to build something enduring?</h2>
          <p>
            Explore our culture, check open positions, or reach out to our team in Kannur.
          </p>
          <div style={{ marginTop: '28px' }}>
            <Link to="/contact" className="btn btn-primary">
              Contact Our Team →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
