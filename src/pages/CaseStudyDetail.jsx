import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CASE_STUDIES } from '../data/workData';
import { WHATSAPP_URL } from '../config/contact.config';
import './Work.css';

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const study = CASE_STUDIES.find(cs => cs.slug === slug) || CASE_STUDIES[0];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [slug]);

  if (!study) {
    return (
      <main className="section">
        <div className="container" style={{ textAlign: 'center', padding: '60px 0' }}>
          <h2>Case Study Not Found</h2>
          <Link to="/our-work" className="btn btn-primary" style={{ marginTop: '24px' }}>
            Back to Our Work
          </Link>
        </div>
      </main>
    );
  }

  const relatedProjects = CASE_STUDIES.filter(cs => cs.slug !== study.slug).slice(0, 2);

  return (
    <main className="case-detail-page">
      {/* ── 1. Dark Hero Section ── */}
      <section className="section section--dark case-detail-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumbs-sep">/</span>
            <Link to="/our-work">Our Work</Link>
            <span className="breadcrumbs-sep">/</span>
            <span className="breadcrumbs-current">{study.client}</span>
          </nav>

          <span className="badge-eyebrow badge-eyebrow--pill badge-eyebrow--white">
            {study.industry.toUpperCase()} • {study.location.toUpperCase()}
          </span>
          <h1 className="case-detail-hero__title">{study.title}</h1>
          <p className="case-detail-hero__subtitle">{study.excerpt}</p>
        </div>
      </section>

      {/* ── 2. Project Metadata Bar ── */}
      <section className="case-detail-meta-bar">
        <div className="container case-detail-meta-grid">
          <div>
            <span className="case-detail-meta-label">Client</span>
            <strong>{study.client}</strong>
          </div>
          <div>
            <span className="case-detail-meta-label">Industry</span>
            <strong>{study.industry}</strong>
          </div>
          <div>
            <span className="case-detail-meta-label">Location</span>
            <strong>{study.location}</strong>
          </div>
          <div>
            <span className="case-detail-meta-label">Services Provided</span>
            <strong>{study.services.join(', ')}</strong>
          </div>
        </div>
      </section>

      {/* ── 3. Featured Showcase Image ── */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="case-detail-banner">
            <img src={study.image} alt={study.title} />
          </div>
        </div>
      </section>

      {/* ── 4. Narrative Breakdown (Light Alt Section) ── */}
      <section className="section section--alt">
        <div className="container case-detail-content-wrap">
          <div className="agency-card case-detail-block">
            <span className="badge-eyebrow" style={{ color: '#ef4444' }}>
              THE BUSINESS CHALLENGE
            </span>
            <h2>Business Obstacles & Bottlenecks</h2>
            <p>{study.challenge}</p>
          </div>

          <div className="agency-card case-detail-block">
            <span className="badge-eyebrow">THE STRATEGY</span>
            <h2>Technical Architecture & Approach</h2>
            <p>{study.strategy}</p>
          </div>

          <div className="agency-card case-detail-block">
            <span className="badge-eyebrow">THE SOLUTION</span>
            <h2>Engineering Execution & Delivery</h2>
            <p>{study.solution}</p>
            <p style={{ marginTop: '16px' }}>{study.implementation}</p>
          </div>

          {/* Technology */}
          <div className="agency-card case-detail-block">
            <span className="badge-eyebrow">TECHNOLOGY STACK</span>
            <h2>Tools & Systems Utilized</h2>
            <div className="case-detail-tech-list">
              {study.technology.map(tech => (
                <span key={tech} className="service-tech-pill">{tech}</span>
              ))}
            </div>
          </div>

          {/* Verified Commercial Results */}
          <div className="agency-card case-detail-block">
            <span className="badge-eyebrow">RESULTS</span>
            <h2>Verified Commercial Impact</h2>
            <div className="case-detail-results-grid">
              {study.results.map((res) => (
                <div key={res.label} className="case-detail-result-item">
                  <span className="case-detail-res-val text-accent">{res.value}</span>
                  <span className="case-detail-res-label">{res.label}</span>
                  <p className="case-detail-res-desc">{res.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Related Projects ── */}
      {relatedProjects.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="badge-eyebrow">PORTFOLIO</span>
              <h2>Related Projects</h2>
            </div>
            <div className="work-grid">
              {relatedProjects.map(p => (
                <article key={p.id} className="agency-card work-card">
                  <div className="work-card__media">
                    <img src={p.image} alt={p.title} loading="lazy" />
                  </div>
                  <div className="work-card__content">
                    <div className="work-card__meta">
                      <span>{p.client}</span> • <span>{p.location}</span>
                    </div>
                    <h3>{p.title}</h3>
                    <p>{p.excerpt}</p>
                    <Link to={`/our-work/${p.slug}`} className="btn btn-secondary work-card__cta">
                      View Case Study →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 6. Bottom Dark CTA ── */}
      <section className="section section--dark work-cta-section">
        <div className="container work-cta-section__inner">
          <span className="badge-eyebrow badge-eyebrow--pill badge-eyebrow--white">
            START YOUR PROJECT
          </span>
          <h2>Ready to achieve similar results for your business?</h2>
          <p>
            Our engineering team in Kannur is ready to assess your requirements and build a scalable solution.
          </p>
          <div style={{ marginTop: '28px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">
              Discuss Your Project →
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
