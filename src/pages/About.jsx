import { Link } from 'react-router-dom';
import { CONTACT, WHATSAPP_URL, SITE_NAME } from '../config/contact.config';
import { useSettings } from '../context/SettingsContext';
import './About.css';

export default function About() {
  const { settings } = useSettings();
  const brand = settings.siteName || SITE_NAME;

  return (
    <main className="about-page">
      {/* ── 1. Dark Hero Section ── */}
      <section className="section section--dark about-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumbs-sep">/</span>
            <span className="breadcrumbs-current">About Us</span>
          </nav>

          <span className="badge-eyebrow badge-eyebrow--pill badge-eyebrow--white">
            OUR HERITAGE & MISSION
          </span>
          <h1 className="about-hero__title">
            From Kannur, the land of looms and lores.
          </h1>
          <p className="about-hero__subtitle">
            A digital engineering agency helping businesses across Kerala, India and the GCC build, grow and manage their digital presence.
          </p>
        </div>
      </section>

      {/* ── 2. Our Story / Who We Are (Light Section with Large Visual) ── */}
      <section className="section about-story">
        <div className="container about-two-col">
          <div className="about-story__media">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
              alt={`${brand} digital engineering team in Kannur`}
              className="about-story__img"
            />
          </div>

          <div className="about-story__content">
            <span className="badge-eyebrow">OUR STORY & WHO WE ARE</span>
            <h2>Digital engineering with architectural discipline.</h2>
            <p>
              {brand} was founded in Kuthuparamba, Kannur — a historic Malabar region celebrated for craftsmanship, weaving excellence, and enduring merchant traditions.
            </p>
            <p>
              We established {brand} with a clear conviction: businesses deserve digital systems engineered with software rigor, not fragile templates stitched together with dozens of plugins.
            </p>
            <p>
              Today, our cross-disciplinary team combines web engineering, digital marketing, cloud infrastructure, and brand identity to serve enterprises across Kerala, major Indian metros, and the Arabian Gulf.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. What We Do & Our Capabilities (Light Alt Section) ── */}
      <section className="section section--alt about-capabilities">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="badge-eyebrow">WHAT WE DO</span>
            <h2>Comprehensive Capabilities Across Four Core Disciplines</h2>
            <p>We eliminate the chaos of coordinating between fragmented design, development, and hosting vendors.</p>
          </div>

          <div className="grid-4">
            <div className="agency-card about-cap-card">
              <span className="about-cap-num text-accent">01</span>
              <h3>Web Engineering</h3>
              <p>Custom-coded corporate web platforms, headless WooCommerce & Shopify stores, and responsive business applications designed for sub-second speeds.</p>
            </div>

            <div className="agency-card about-cap-card">
              <span className="about-cap-num text-accent">02</span>
              <h3>Website Management</h3>
              <p>Proactive 24/7 uptime monitoring, weekly core updates in sandboxed staging environments, security hardening, and dedicated development retainers.</p>
            </div>

            <div className="agency-card about-cap-card">
              <span className="about-cap-num text-accent">03</span>
              <h3>Digital Marketing</h3>
              <p>Data-driven technical SEO, Google Ads, Meta campaigns, and conversion rate optimization engineered to capture high-intent commercial demand.</p>
            </div>

            <div className="agency-card about-cap-card">
              <span className="about-cap-num text-accent">04</span>
              <h3>Infrastructure & Systems</h3>
              <p>Dedicated cloud architecture on AWS & GCP, encrypted business VPNs, professional domain email, Odoo ERP implementations, and automated disaster recovery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Our Philosophy & Why DigiMarket (White Section) ── */}
      <section className="section about-philosophy">
        <div className="container about-two-col">
          <div className="about-philosophy-content">
            <span className="badge-eyebrow">OUR PHILOSOPHY</span>
            <h2>Systems That Work Beyond Launch Day</h2>
            <p className="about-lead">
              Too many agencies celebrate on launch day and disappear when real-world business loads begin. We design and build for operational longevity.
            </p>
            
            <div className="about-values-list">
              <div className="about-value-item">
                <strong>No Vanity Metrics:</strong> We measure progress in qualified leads, transactional completion rates, and system uptime — never superficial vanity clicks.
              </div>
              <div className="about-value-item">
                <strong>Architectural Integrity:</strong> We refuse shortcuts. Clean code, semantic HTML, and secure cloud environments protect your digital investment.
              </div>
              <div className="about-value-item">
                <strong>Long-Term Partnerships:</strong> Over 70% of our revenue comes from ongoing management, support retainers, and trusted client partnerships.
              </div>
            </div>
          </div>

          <div className="agency-card about-why-card">
            <span className="badge-eyebrow">WHY {brand.toUpperCase()}</span>
            <h3>What Sets Us Apart</h3>
            <ul className="about-why-list">
              <li>
                <strong>Senior Engineering Access:</strong> You collaborate directly with senior developers and strategists who understand business models.
              </li>
              <li>
                <strong>Cross-Border Regional Depth:</strong> Deep operational experience handling Indian tax compliance (GST) and GCC regulatory standards (VAT, ZATCA).
              </li>
              <li>
                <strong>Full Intellectual Property Transfer:</strong> 100% of source code, design files, and database schemas belong to your business upon completion.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── 5. Where We Work (Light Alt Section) ── */}
      <section className="section section--alt about-location-sec">
        <div className="container about-two-col">
          <div className="agency-card about-loc-card">
            <span className="badge-eyebrow">HEADQUARTERS</span>
            <h3>Rooted in Kannur, Kerala</h3>
            <p>
              Our primary development and delivery office is located in Kuthuparamba, Kannur. We welcome regional clients for in-person strategy sessions and technical reviews.
            </p>
            <div className="about-loc-details">
              <p>📍 <strong>{brand} Digital Agency</strong><br />{settings.address || CONTACT.address}</p>
              <p>📞 <strong>Phone / WhatsApp:</strong> {settings.contactPhone || CONTACT.phone}</p>
              <p>✉️ <strong>Inquiries:</strong> {settings.contactEmail || CONTACT.email}</p>
            </div>
            <a
              href={CONTACT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ marginTop: '20px' }}
            >
              View on Google Maps →
            </a>
          </div>

          <div className="agency-card about-gcc-card">
            <span className="badge-eyebrow">WHERE WE WORK</span>
            <h3>From Kerala to the Arabian Gulf</h3>
            <p>
              We actively engineer systems for enterprises across south India and leading trade hubs in the Middle East.
            </p>
            <div className="about-region-pills">
              <div className="about-region-pill">🇮🇳 <strong>India:</strong> Kerala (Kannur, Calicut, Kochi), Bengaluru, Mumbai</div>
              <div className="about-region-pill">🇦🇪 <strong>United Arab Emirates:</strong> Dubai, Abu Dhabi, Sharjah</div>
              <div className="about-region-pill">🇴🇲 <strong>Sultanate of Oman:</strong> Muscat, Salalah</div>
              <div className="about-region-pill">🇶🇦 <strong>State of Qatar:</strong> Doha</div>
              <div className="about-region-pill">🇸🇦 <strong>Saudi Arabia:</strong> Riyadh, Jeddah, Dammam</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Bottom Dark CTA ── */}
      <section className="section section--dark about-cta-section">
        <div className="container about-cta-section__inner">
          <span className="badge-eyebrow badge-eyebrow--pill badge-eyebrow--white">
            WORK WITH US
          </span>
          <h2>Ready to partner with an engineering-led agency?</h2>
          <p>
            Tell us about your challenges, project timeline, or commercial goals. We'll help you chart the right technical path forward.
          </p>
          <div style={{ marginTop: '28px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">
              Start a Conversation →
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
