import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getServiceByUrl } from '../data/servicesData';
import { CASE_STUDIES } from '../data/workData';
import { WHATSAPP_URL, SITE_NAME } from '../config/contact.config';
import { useSettings } from '../context/SettingsContext';
import './ServicePage.css';

export default function ServicePage({ serviceData: propData }) {
  const location = useLocation();
  const slug = location.pathname.replace(/^\/|\/$/g, '');
  const initialService = propData || getServiceByUrl(location.pathname);
  const [service, setService] = useState(initialService);
  const [openFaq, setOpenFaq] = useState(null);
  const { settings } = useSettings();
  const brand = settings.siteName || SITE_NAME;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setOpenFaq(null);

    const fetchLiveService = async () => {
      try {
        const res = await fetch(`/api/services/slug/${slug}`);
        if (res.ok) {
          const data = await res.json();
          if (data.success && data.data) {
            setService((prev) => ({
              ...prev,
              ...data.data,
              category: typeof data.data.category === 'object' ? data.data.category : prev?.category,
            }));
          }
        }
      } catch (err) {
        // Keep fallback
      }
    };

    if (slug) {
      fetchLiveService();
    }
  }, [location.pathname, slug]);

  if (!service) {
    return (
      <main className="section">
        <div className="container" style={{ textAlign: 'center', padding: '60px 0' }}>
          <h2>Service Not Found</h2>
          <p style={{ marginTop: '12px', color: 'var(--clr-muted-dark)' }}>
            The requested service page does not exist or may have been updated.
          </p>
          <Link to="/" className="btn btn-primary" style={{ marginTop: '24px' }}>
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  const toggleFaq = (idx) => {
    setOpenFaq((prev) => (prev === idx ? null : idx));
  };

  const relatedCaseStudy = CASE_STUDIES.find(
    (cs) => cs.category === service.category?.name || cs.services.includes(service.title)
  ) || CASE_STUDIES[0];

  return (
    <main className="service-page">
      {/* ── 1. Hero & Breadcrumbs (Dark Hero Section) ── */}
      <section className="section section--dark service-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumbs-sep">/</span>
            <Link to={service.category?.url || '/services'}>{service.category?.name || 'Services'}</Link>
            <span className="breadcrumbs-sep">/</span>
            <span className="breadcrumbs-current">{service.title}</span>
          </nav>

          <div className="service-hero__grid">
            <div className="service-hero__content">
              <span className="badge-eyebrow badge-eyebrow--pill badge-eyebrow--white">
                {service.category?.name?.toUpperCase()}
              </span>
              <h1 className="service-hero__title">{service.h1}</h1>
              <p className="service-hero__subtitle">{service.subtitle}</p>

              <div className="service-hero__actions">
                <Link to="/contact" className="btn btn-primary">
                  Start Your Project →
                </Link>
                <Link to="/our-work" className="btn btn-secondary">
                  View Our Work
                </Link>
              </div>
            </div>

            <div className="service-hero__media">
              <img
                src={service.heroImage}
                alt={service.title}
                className="service-hero__img"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Problem & Solution (Light Alt Section) ── */}
      <section className="section section--alt">
        <div className="container">
          <div className="service-split">
            <div className="agency-card service-split__col">
              <span className="badge-eyebrow" style={{ color: '#ef4444' }}>
                THE BUSINESS CHALLENGE
              </span>
              <h3>{service.problemTitle}</h3>
              <p>{service.problemDesc}</p>
            </div>

            <div className="agency-card service-split__col">
              <span className="badge-eyebrow">THE {brand.toUpperCase()} SOLUTION</span>
              <h3>Built For Measurable Commercial Outcomes</h3>
              <p>{service.intro}</p>
              <p style={{ marginTop: '12px' }}>{service.explanation}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Key Capabilities & Technical Features (White Section) ── */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="badge-eyebrow">CAPABILITIES</span>
            <h2>Key Capabilities & Technical Architecture</h2>
            <p>Every implementation is built to strict engineering, accessibility, and search performance benchmarks.</p>
          </div>

          <div className="service-features-grid">
            {service.features.map((feat) => (
              <div key={feat.title} className="agency-card service-feature-card">
                <h4>{feat.title}</h4>
                <p>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Benefits & What is Included (Light Alt Section) ── */}
      <section className="section section--alt">
        <div className="container">
          <div className="service-included-grid">
            <div className="service-included-col">
              <span className="badge-eyebrow">COMMERCIAL IMPACT</span>
              <h2>Measurable Business Benefits</h2>
              <ul className="service-check-list">
                {service.benefits.map((b) => (
                  <li key={b}>
                    <span className="service-check-icon">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {service.techStack && (
                <div className="agency-card service-tech-box" style={{ marginTop: '36px' }}>
                  <h4>Technology & Tools Utilized</h4>
                  <div className="service-tech-tags">
                    {service.techStack.map((tech) => (
                      <span key={tech} className="service-tech-pill">{tech}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="agency-card service-included-col">
              <span className="badge-eyebrow">DELIVERABLES</span>
              <h2>What Is Included</h2>
              <ul className="service-deliverable-list">
                {service.included.map((item, idx) => (
                  <li key={item}>
                    <span className="service-num-badge">0{idx + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Why Choose Agency (White Section) ── */}
      <section className="section">
        <div className="container">
          <div className="agency-card service-why-box">
            <span className="badge-eyebrow">THE {brand.toUpperCase()} DIFFERENCE</span>
            <h2>Why Businesses Choose {brand} for {service.title}</h2>
            <p className="service-why-lead">{service.whyLored?.replace(/loreD|DigiMarket/gi, brand) || service.whyDigiMarket || service.whyAgency}</p>
            <div className="service-why-points">
              <div>
                <strong>Direct Senior Engagement:</strong> Work directly with experienced engineers and strategists, not junior account handlers.
              </div>
              <div>
                <strong>Cross-Border Regional Delivery:</strong> Experienced in compliance, payments, and infrastructure across India and the GCC.
              </div>
              <div>
                <strong>Complete Code Ownership:</strong> 100% intellectual property, design source files, and code repository access belong to you.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Related Case Study (Light Alt Section) ── */}
      {relatedCaseStudy && (
        <section className="section section--alt">
          <div className="container">
            <div className="section-head">
              <span className="badge-eyebrow">CASE STUDY</span>
              <h2>Related Client Work</h2>
            </div>

            <div className="agency-card service-case-card">
              <div className="service-case-media">
                <img src={relatedCaseStudy.image} alt={relatedCaseStudy.title} loading="lazy" />
              </div>
              <div className="service-case-body">
                <span className="service-case-tag">{relatedCaseStudy.industry} • {relatedCaseStudy.location}</span>
                <h3>{relatedCaseStudy.title}</h3>
                <p>{relatedCaseStudy.challenge}</p>
                <div style={{ marginTop: '24px' }}>
                  <Link to={`/our-work/${relatedCaseStudy.slug}`} className="btn btn-dark">
                    Read Case Study →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 7. Interactive FAQs (White Section) ── */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="section">
          <div className="container" style={{ maxWidth: '880px' }}>
            <div className="section-head section-head--center">
              <span className="badge-eyebrow">FAQ</span>
              <h2>Common Questions About {service.title}</h2>
            </div>

            <div className="service-faq-wrap">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={faq.q} className={`agency-card service-faq-item${isOpen ? ' service-faq-item--open' : ''}`}>
                    <button
                      type="button"
                      className="service-faq-trigger"
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <span className="service-faq-icon">{isOpen ? '−' : '+'}</span>
                    </button>
                    {isOpen && (
                      <div className="service-faq-answer">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── 8. Strong Service CTA (Dark Full-Width Section) ── */}
      <section className="section section--dark service-cta-section">
        <div className="container service-cta-section__inner">
          <span className="badge-eyebrow badge-eyebrow--pill badge-eyebrow--white">
            START YOUR PROJECT
          </span>
          <h2>Let's Discuss Your {service.title} Requirements</h2>
          <p>
            Get in touch with our engineering team in Kannur to discuss timelines, architecture, and commercial estimates.
          </p>
          <div className="service-cta-btns">
            <Link to="/contact" className="btn btn-primary">
              Talk to Our Team →
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              WhatsApp Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
