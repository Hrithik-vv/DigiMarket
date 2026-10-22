import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CASE_STUDIES } from '../data/workData';
import './Work.css';

const CATEGORIES = [
  'All',
  'Web Engineering',
  'Ecommerce Development',
  'Infrastructure & Systems',
  'Branding & Creative',
];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredStudies = activeCategory === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(cs =>
        cs.category === activeCategory ||
        cs.services.some(s => s.toLowerCase().includes(activeCategory.toLowerCase()))
      );

  return (
    <main className="work-page">
      {/* ── 1. Dark Hero Section ── */}
      <section className="section section--dark work-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumbs-sep">/</span>
            <span className="breadcrumbs-current">Our Work</span>
          </nav>

          <span className="badge-eyebrow badge-eyebrow--pill badge-eyebrow--white">
            SELECTED PROJECTS
          </span>
          <h1 className="work-hero__title">Work That Solves Real Business Problems</h1>
          <p className="work-hero__subtitle">
            Explore selected projects across web development, ecommerce, branding, infrastructure and digital growth across India and the GCC.
          </p>

          {/* Category Filter Tabs */}
          <div className="work-filter-tabs">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                type="button"
                className={`work-filter-btn${activeCategory === cat ? ' work-filter-btn--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. Project Portfolio Grid (Light Alt Section) ── */}
      <section className="section section--alt">
        <div className="container">
          <div className="work-grid">
            {filteredStudies.map((study) => (
              <article key={study.id} className="agency-card work-card">
                <div className="work-card__media">
                  <img src={study.image} alt={study.title} loading="lazy" />
                  <span className="work-card__industry">{study.industry}</span>
                </div>
                <div className="work-card__content">
                  <div className="work-card__meta">
                    <span>{study.client}</span> • <span>{study.location}</span>
                  </div>
                  <h3>{study.title}</h3>
                  <p>{study.excerpt}</p>
                  
                  <div className="work-card__services">
                    {study.services.map((s) => (
                      <span key={s} className="work-card__service-tag">{s}</span>
                    ))}
                  </div>

                  <Link to={`/our-work/${study.slug}`} className="btn btn-dark work-card__cta">
                    View Case Study →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Dark Bottom CTA ── */}
      <section className="section section--dark work-cta-section">
        <div className="container work-cta-section__inner">
          <span className="badge-eyebrow badge-eyebrow--pill badge-eyebrow--white">
            START A PROJECT
          </span>
          <h2>Have a project in mind?</h2>
          <p>
            Let's discuss your technical goals and review how our team in Kannur can engineer an enduring digital solution.
          </p>
          <div style={{ marginTop: '28px' }}>
            <Link to="/contact" className="btn btn-primary">
              Start a Conversation →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
