import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getCategoryByUrl, SERVICE_CATEGORIES } from '../data/servicesData';
import { WHATSAPP_URL, SITE_NAME } from '../config/contact.config';
import { useSettings } from '../context/SettingsContext';
import './CategoryPage.css';

export default function CategoryPage({ categoryData: propCategory }) {
  const location = useLocation();
  const category = propCategory || getCategoryByUrl(location.pathname);
  const { settings } = useSettings();
  const brand = settings.siteName || SITE_NAME;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  // If on /services route, show full overview of all 5 categories
  if (location.pathname === '/services' || !category) {
    return (
      <main className="category-page">
        {/* Dark Hero */}
        <section className="section section--dark category-hero">
          <div className="container">
            <span className="badge-eyebrow badge-eyebrow--pill badge-eyebrow--white">
              {brand.toUpperCase()} CAPABILITIES
            </span>
            <h1 className="category-hero__title">Digital Engineering & Growth Services</h1>
            <p className="category-hero__subtitle">
              We architect high-performance digital systems, custom web applications, performance marketing campaigns, and resilient infrastructure for companies across India and the GCC.
            </p>
          </div>
        </section>

        {/* Light Overview Grid */}
        <section className="section section--alt">
          <div className="container">
            <div className="category-all-grid">
              {SERVICE_CATEGORIES.map((cat, idx) => (
                <div key={cat.id} className="agency-card category-overview-card">
                  <div className="category-overview-card__header">
                    <span className="badge-eyebrow">0{idx + 1} • {cat.badge.toUpperCase()}</span>
                    <h2>{cat.name}</h2>
                    <p>{cat.description}</p>
                  </div>
                  <div className="category-overview-card__services">
                    <h4>Specialized Practices:</h4>
                    <div className="category-service-links">
                      {cat.services.map((s) => (
                        <Link key={s.url} to={s.url} className="category-service-link-item">
                          <span>{s.title}</span>
                          <span className="category-service-arrow">→</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div style={{ marginTop: '28px' }}>
                    <Link to={cat.url} className="btn btn-dark">
                      Explore {cat.name} Overview →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="category-page">
      {/* ── 1. Category Dark Hero ── */}
      <section className="section section--dark category-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumbs-sep">/</span>
            <Link to="/services">Services</Link>
            <span className="breadcrumbs-sep">/</span>
            <span className="breadcrumbs-current">{category.name}</span>
          </nav>

          <div className="category-hero__grid">
            <div className="category-hero__content">
              <span className="badge-eyebrow badge-eyebrow--pill badge-eyebrow--white">
                {category.badge.toUpperCase()}
              </span>
              <h1 className="category-hero__title">{category.name} Services</h1>
              <p className="category-hero__subtitle">{category.description}</p>
              <div className="category-hero__actions">
                <Link to="/contact" className="btn btn-primary">
                  Start a Project in {category.name} →
                </Link>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                  WhatsApp Consultation
                </a>
              </div>
            </div>

            <div className="category-hero__media">
              <img src={category.image} alt={category.name} className="category-hero__img" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Child Services Grid (Light Alt Section) ── */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="badge-eyebrow">SERVICE ARCHITECTURE</span>
            <h2>Specialized Capabilities in {category.name}</h2>
            <p>Each service represents a dedicated engineering practice with proven commercial deliverables.</p>
          </div>

          <div className="category-child-grid">
            {category.services.map((srv, idx) => (
              <div key={srv.url} className="agency-card category-child-card">
                <span className="category-child-card__num">0{idx + 1}</span>
                <h3>{srv.title}</h3>
                <p>{srv.subtitle}</p>
                <div className="category-child-card__benefits">
                  <strong>Key Benefits:</strong>
                  <ul>
                    {srv.benefits.slice(0, 3).map((b) => (
                      <li key={b}>• {b}</li>
                    ))}
                  </ul>
                </div>
                <Link to={srv.url} className="btn btn-secondary category-child-card__cta">
                  View Full Service Details ({srv.title}) →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Bottom Dark CTA ── */}
      <section className="section section--dark category-cta-section">
        <div className="container category-cta-section__inner">
          <span className="badge-eyebrow badge-eyebrow--pill badge-eyebrow--white">
            START YOUR PROJECT
          </span>
          <h2>Ready to discuss {category.name}?</h2>
          <p>
            Tell us about your project requirements and our engineering team in Kannur will provide a comprehensive technical proposal.
          </p>
          <div style={{ marginTop: '28px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">
              Contact Our Engineering Team →
            </Link>
            <Link to="/our-work" className="btn btn-secondary">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
