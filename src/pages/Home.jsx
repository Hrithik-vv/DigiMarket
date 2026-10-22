import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AGENCY, CONTACT, WHATSAPP_URL, SITE_NAME } from '../config/contact.config';
import { useSettings } from '../context/SettingsContext';
import { SERVICE_CATEGORIES } from '../data/servicesData';
import { CASE_STUDIES } from '../data/workData';
import { BLOG_POSTS } from '../data/blogData';
import './Home.css';

const getHomepageFaqs = (brand, phone) => [
  {
    q: `What services does ${brand} provide?`,
    a: `${brand} is a full-stack digital engineering and growth agency. Our core disciplines include Web Engineering (custom websites, WordPress, and ecommerce), Website Management (performance tuning and audits), Digital Marketing (SEO, performance ads, automation, and analytics), Infrastructure & Systems (cloud deployment, network VPNs, business email, and Odoo ERP), and Branding & Creative.`
  },
  {
    q: "Do you build custom websites or use templates?",
    a: "We engineer bespoke websites from clean code up. We avoid bloated multi-purpose themes and slow visual builders. Every platform is custom-architected for speed, clean semantic SEO, brand distinction, and conversion rate optimization."
  },
  {
    q: "Do you work with businesses outside Kerala?",
    a: "Yes. While our engineering team is proudly headquartered in Kuthuparamba, Kannur, Kerala, the majority of our clients operate across major Indian business centers (Bengaluru, Mumbai) and the GCC region (UAE, Oman, Qatar, and Saudi Arabia)."
  },
  {
    q: "Do you provide ongoing website maintenance after launch?",
    a: "Yes. Websites are living commercial assets. We provide comprehensive Website Management retainers that cover 24/7 uptime monitoring, weekly core updates in sandboxed staging environments, cloud backups, security patching, and dedicated developer hours."
  },
  {
    q: "Can you audit and redesign an existing website?",
    a: "Absolutely. We regularly audit and re-engineer sluggish or outdated websites. We conduct deep technical audits, retain and enhance your hard-earned SEO authority, and rebuild the interface with modern speed and visual clarity."
  },
  {
    q: "Do you work with ecommerce businesses across India and the GCC?",
    a: "Yes. We engineer high-converting online storefronts on WooCommerce, Shopify Plus, and custom headless stacks, integrating regional payment gateways (Razorpay, Stripe, Tap Payments, PayTabs, Apple Pay) and multi-currency support."
  },
  {
    q: `How do I start a project with ${brand}?`,
    a: `You can reach out through our Contact page or message us directly on WhatsApp at ${phone}. We will schedule a direct consultation with our engineering team to review your requirements, timeline, and commercial goals.`
  }
];

const CLIENT_LOGOS = [
  "Al-Miraj Lifestyle (UAE)",
  "Malabar Freight & Logistics",
  "Crescent Specialty Clinics",
  "Apex Precision Exports",
  "Gulf Coast Trading W.L.L",
  "Kannur Weaves & Textiles"
];

const getTestimonials = (brand) => [
  {
    quote: `${brand} rebuilt our retail ecommerce platform from the ground up. Mobile load speeds dropped to 1.2 seconds, and our checkout drop-off rate fell by over 35% within the first month.`,
    name: "Tariq Al-Mansoor",
    role: "Managing Director",
    company: "Al-Miraj Home & Lifestyle, Dubai"
  },
  {
    quote: `Unlike agencies that hand off projects to junior freelancers, ${brand}'s core engineers in Kannur communicated directly with our operations team. Their Odoo ERP and cloud deployment unified four regional branches seamlessly.`,
    name: "K. R. Nambiar",
    role: "Head of Operations",
    company: "Malabar Freight & Supply Chain"
  },
  {
    quote: "Our patient inquiries and local search visibility in northern Kerala increased significantly following our clinic platform redesign. Clean typography, reassuring visuals, and zero technical bloat.",
    name: "Dr. Farhan V. P.",
    role: "Clinical Director",
    company: "Crescent Specialty Clinics"
  }
];

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const { settings } = useSettings();

  const brand = settings.siteName || SITE_NAME;
  const contactPhone = settings.contactPhone || CONTACT.phone;
  const faqs = getHomepageFaqs(brand, contactPhone);
  const testimonials = getTestimonials(brand);

  const toggleFaq = (index) => {
    setActiveFaq(prev => prev === index ? null : index);
  };

  return (
    <main className="lored-home-page">
      {/* ── 1. Hero Section (Dark Hero, Agency Style) ── */}
      <section className="section section--dark home-hero">
        <div className="container home-hero__inner">
          {/* Left Column */}
          <div className="home-hero__content">
            <span className="badge-eyebrow badge-eyebrow--pill badge-eyebrow--white">
              DIGITAL ENGINEERING • KANNUR TO THE GCC
            </span>
            <h1 className="home-hero__heading">
              Digital Engineering for Businesses That <span className="text-accent">Want to Grow</span>
            </h1>
            <p className="home-hero__lead">
              {brand} is a digital engineering agency from Kannur, Kerala, helping businesses across India and the GCC build stronger digital experiences through web engineering, digital marketing, infrastructure and branding.
            </p>
            <div className="home-hero__actions">
              <Link to="/contact" className="btn btn-primary">
                Start a Project →
              </Link>
              <Link to="/our-work" className="btn btn-secondary">
                View Our Work
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Composition */}
          <div className="home-hero__media">
            <div className="home-hero__frame">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
                alt={`Digital engineering systems and growth platforms designed by ${brand}`}
                className="home-hero__img"
                loading="eager"
              />
              <div className="home-hero__floating-badge">
                <span className="home-hero__badge-origin">{brand} Engineering Base</span>
                <strong>Kannur, Kerala ⇄ GCC</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Trust / Statistics Section ── */}
      <section className="section section--alt home-trust">
        <div className="container">
          <div className="section-head section-head--center" style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)' }}>
              Trusted by Businesses Across India & the GCC
            </h2>
            <p>
              Building reliable digital experiences and systems for businesses focused on long-term growth.
            </p>
          </div>

          <div className="home-trust__grid">
            {AGENCY.stats.map((stat) => (
              <div key={stat.label} className="home-trust__stat-card">
                <span className="home-trust__num text-accent">{stat.value}</span>
                <span className="home-trust__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. About / Introduction Section ── */}
      <section className="section home-intro">
        <div className="container home-intro__grid">
          <div className="home-intro__media">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
              alt={`${brand} digital agency strategy and engineering team`}
              className="home-intro__img"
              loading="lazy"
            />
          </div>

          <div className="home-intro__content">
            <span className="badge-eyebrow">WHO WE ARE</span>
            <h2>Digital systems built around your business.</h2>
            <p className="home-intro__p1">
              Your website should be more than an online brochure. It should help customers understand your business, build trust, generate enquiries and support growth.
            </p>
            <p className="home-intro__p2">
              {brand} combines web engineering, digital marketing, infrastructure and creative services to build digital systems that work beyond launch day.
            </p>
            <div style={{ marginTop: '28px' }}>
              <Link to="/about-us" className="btn btn-dark">
                About {brand} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Services Section ── */}
      <section className="section section--alt home-services" id="services">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="badge-eyebrow">WHAT WE DO</span>
            <h2>What We Do</h2>
            <p>
              From websites and digital marketing to infrastructure and brand systems, {brand} helps businesses build and grow their digital presence.
            </p>
          </div>

          <div className="home-services__editorial-list">
            {SERVICE_CATEGORIES.map((cat, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={cat.id}
                  className={`home-service-block agency-card ${isEven ? 'home-service-block--reverse' : ''}`}
                >
                  <div className="home-service-block__media">
                    <img src={cat.image} alt={cat.name} loading="lazy" />
                  </div>
                  <div className="home-service-block__content">
                    <span className="home-service-block__idx">0{idx + 1}</span>
                    <h3>{cat.name}</h3>
                    <p>{cat.tagline}</p>
                    <div className="home-service-block__links">
                      {cat.services.map((srv) => (
                        <Link key={srv.url} to={srv.url} className="home-service-block__sublink">
                          {srv.title}
                        </Link>
                      ))}
                    </div>
                    <Link to={cat.url} className="btn btn-secondary home-service-block__cta">
                      Explore {cat.name} →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. Selected Work Section ── */}
      <section className="section home-work">
        <div className="container">
          <div className="section-head" style={{ maxWidth: '800px' }}>
            <span className="badge-eyebrow">PORTFOLIO</span>
            <h2>Selected Work</h2>
            <p>
              Digital experiences and systems built to solve real business problems across retail, logistics, healthcare, and manufacturing.
            </p>
          </div>

          <div className="home-work__grid">
            {CASE_STUDIES.map((study) => (
              <article key={study.id} className="home-work-card agency-card">
                <div className="home-work-card__media">
                  <img src={study.image} alt={study.title} loading="lazy" />
                  <span className="home-work-card__badge">{study.industry}</span>
                </div>
                <div className="home-work-card__body">
                  <div className="home-work-card__meta">
                    <span>{study.client}</span> • <span>{study.location}</span>
                  </div>
                  <h3>{study.title}</h3>
                  <p>{study.excerpt}</p>
                  <div className="home-work-card__services">
                    {study.services.map((s) => (
                      <span key={s} className="home-work-card__tag">{s}</span>
                    ))}
                  </div>
                  <Link to={`/our-work/${study.slug}`} className="home-work-card__link">
                    View Case Study →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/our-work" className="btn btn-dark">
              View All Work →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. Client Proof / Logos Section ── */}
      <section className="section section--alt home-clients">
        <div className="container">
          <div className="section-head section-head--center" style={{ marginBottom: '32px' }}>
            <span className="badge-eyebrow">REGIONAL TRUST</span>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--clr-muted-dark)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Trusted by Businesses
            </h3>
          </div>

          <div className="home-clients__strip">
            {CLIENT_LOGOS.map((client) => (
              <div key={client} className="home-clients__logo-pill">
                <span>{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Why DigiMarket Section ── */}
      <section className="section home-why">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="badge-eyebrow">THE {brand.toUpperCase()} ADVANTAGE</span>
            <h2>Why Businesses Choose {brand}</h2>
            <p>
              We believe technology and marketing must be engineered around actual commercial outcomes, not abstract agency buzzwords.
            </p>
          </div>

          <div className="home-why__grid">
            <div className="agency-card home-why__card">
              <span className="home-why__num">01</span>
              <h3>Business-First Thinking</h3>
              <p>
                We begin by understanding your unit economics, sales channels, and customer journeys before writing a single line of code or setting up ad campaigns.
              </p>
            </div>

            <div className="agency-card home-why__card">
              <span className="home-why__num">02</span>
              <h3>Engineering-Led Execution</h3>
              <p>
                Our core team consists of software engineers and technical marketers who build clean, maintainable systems that scale without breaking.
              </p>
            </div>

            <div className="agency-card home-why__card">
              <span className="home-why__num">03</span>
              <h3>Performance-Focused Architecture</h3>
              <p>
                We treat sub-second load times, Core Web Vitals, and server reliability as fundamental business metrics that directly impact your conversion rates.
              </p>
            </div>

            <div className="agency-card home-why__card">
              <span className="home-why__num">04</span>
              <h3>Long-Term Technical Custody</h3>
              <p>
                We don't disappear after launch. Over 70% of our business represents ongoing management, security monitoring, and continuous optimization retainers.
              </p>
            </div>

            <div className="agency-card home-why__card">
              <span className="home-why__num">05</span>
              <h3>India & GCC Experience</h3>
              <p>
                We understand regional nuances — from Indian GST and regional gateways to GCC VAT, Arabic localization, and Middle East cloud latency requirements.
              </p>
            </div>

            <div className="agency-card home-why__card">
              <span className="home-why__num">06</span>
              <h3>One Unified Multi-Disciplinary Team</h3>
              <p>
                Eliminate the finger-pointing between separate designers, developers, and hosting companies. We provide end-to-end accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. Testimonials Section ── */}
      <section className="section section--alt home-testimonials">
        <div className="container" style={{ maxWidth: '960px' }}>
          <div className="section-head section-head--center">
            <span className="badge-eyebrow">TESTIMONIALS</span>
            <h2>Real Stories. Real Results.</h2>
          </div>

          <div className="agency-card home-testimonial-card">
            <blockquote className="home-testimonial-quote">
              "{testimonials[activeTestimonial].quote}"
            </blockquote>
            <div className="home-testimonial-author">
              <strong>{testimonials[activeTestimonial].name}</strong>
              <span>{testimonials[activeTestimonial].role}</span>
              <span className="home-testimonial-company">{testimonials[activeTestimonial].company}</span>
            </div>

            <div className="home-testimonial-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`home-testimonial-dot${activeTestimonial === i ? ' home-testimonial-dot--active' : ''}`}
                  onClick={() => setActiveTestimonial(i)}
                  aria-label={`View testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. Insights / Blog Preview ── */}
      <section className="section home-blog">
        <div className="container">
          <div className="home-blog__header">
            <div>
              <span className="badge-eyebrow">PERSPECTIVES</span>
              <h2>From the Blog</h2>
              <p>Insights on digital engineering, performance marketing, and enterprise systems.</p>
            </div>
            <Link to="/blog" className="btn btn-secondary home-blog__view-all">
              View All Insights →
            </Link>
          </div>

          <div className="grid-3 home-blog__grid">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <article key={post.id} className="agency-card home-blog-card">
                <div className="home-blog-card__media">
                  <img src={post.image} alt={post.title} loading="lazy" />
                  <span className="home-blog-card__category">{post.category}</span>
                </div>
                <div className="home-blog-card__body">
                  <span className="home-blog-card__meta">{post.date}</span>
                  <h3>
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p>{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className="home-blog-card__cta">
                    Read Article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. FAQ Section ── */}
      <section className="section section--alt home-faq">
        <div className="container" style={{ maxWidth: '880px' }}>
          <div className="section-head section-head--center">
            <span className="badge-eyebrow">COMMON INQUIRIES</span>
            <h2>Frequently Asked Questions</h2>
            <p>Direct answers to how we work, build, and support our clients.</p>
          </div>

          <div className="home-faq__accordion">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={faq.q} className={`home-faq__item agency-card${isOpen ? ' home-faq__item--open' : ''}`}>
                  <button
                    type="button"
                    className="home-faq__question"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span className="home-faq__symbol">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="home-faq__answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 11. Final Full-Width Dark CTA ── */}
      <section className="section section--dark home-cta">
        <div className="container home-cta__inner">
          <span className="badge-eyebrow badge-eyebrow--pill badge-eyebrow--white">
            START YOUR PROJECT
          </span>
          <h2>Ready to build something better?</h2>
          <p>
            Let's discuss your website, digital growth, infrastructure or brand engineering project.
          </p>
          <div className="home-cta__actions">
            <Link to="/contact" className="btn btn-primary">
              Start a Project →
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
