import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT, WHATSAPP_URL, SITE_NAME } from '../config/contact.config';
import { useSettings } from '../context/SettingsContext';
import { SERVICE_CATEGORIES } from '../data/servicesData';
import './Contact.css';

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

function validatePhone(phone) {
  return phone.replace(/[^0-9+]/g, '').length >= 8;
}

const BUDGETS = [
  'Under ₹50,000 / $600',
  '₹50,000 – ₹1.5 Lakhs / $600 – $1,800',
  '₹1.5 Lakhs – ₹4 Lakhs / $1,800 – $5,000',
  '₹4 Lakhs – ₹10 Lakhs / $5,000 – $12,000',
  '₹10 Lakhs+ / $12,000+',
  "Let's Discuss Requirements First",
];

const TIMELINES = [
  'Immediate / ASAP',
  'Within 1 Month',
  '1–3 Months',
  '3–6 Months',
  'Flexible / Planning',
];

const EMPTY = {
  name: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  budget: '',
  timeline: '',
  message: '',
  honeypot: '',
};

const EMPTY_ERRORS = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState(EMPTY_ERRORS);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef(null);
  const { settings } = useSettings();
  const brand = settings.siteName || SITE_NAME;

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  }

  function validate() {
    const newErrors = { ...EMPTY_ERRORS };
    let valid = true;

    if (!form.name.trim()) {
      newErrors.name = 'Please enter your full name.';
      valid = false;
    }
    if (!validateEmail(form.email)) {
      newErrors.email = 'Please provide a valid business email address.';
      valid = false;
    }
    if (!validatePhone(form.phone)) {
      newErrors.phone = 'Please provide a valid phone or WhatsApp number.';
      valid = false;
    }
    if (!form.service) {
      newErrors.service = 'Please select a primary service required.';
      valid = false;
    }
    if (form.message.trim().length < 10) {
      newErrors.message = 'Please provide a brief description of your project requirements.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (form.honeypot) return;

    if (!validate()) {
      const firstError = formRef.current?.querySelector('.error');
      firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Something went wrong while submitting. Please try again.');
      }
    } catch (err) {
      console.error('Submission network error:', err);
      setStatus('error');
      setErrorMessage('Unable to reach the server. Please check your internet connection or reach out on WhatsApp.');
    }
  }

  if (status === 'success') {
    return (
      <main className="contact-page">
        <section className="section section--dark contact-hero">
          <div className="container" style={{ maxWidth: '720px', textAlign: 'center' }}>
            <span className="badge-eyebrow badge-eyebrow--pill badge-eyebrow--white">
              INQUIRY RECEIVED
            </span>
            <h1 className="contact-hero__title">Thank you, {form.name}.</h1>
            <p className="contact-hero__subtitle" style={{ marginInline: 'auto' }}>
              Your project details have been safely received by our engineering team at {brand}. We review specifications promptly and will respond within 24 hours.
            </p>
            <div style={{ marginTop: '32px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/" className="btn btn-secondary">
                ← Back to Home
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                Connect on WhatsApp Now
              </a>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="contact-page">
      {/* ── 1. Hero Section ── */}
      <section className="section section--dark contact-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumbs-sep">/</span>
            <span className="breadcrumbs-current">Contact</span>
          </nav>

          <span className="badge-eyebrow badge-eyebrow--pill badge-eyebrow--white">
            START A CONVERSATION
          </span>
          <h1 className="contact-hero__title">Let's Talk About Your Project</h1>
          <p className="contact-hero__subtitle">
            Tell us what you're trying to build, improve or scale. We'll help you engineer the right solution.
          </p>
        </div>
      </section>

      {/* ── 2. Two-Column Contact Section ── */}
      <section className="contact-section">
        <div className="container contact-grid">
          {/* Left Column: Direct Contact Info */}
          <aside className="contact-info-card">
            <div>
              <span className="badge-eyebrow">DIRECT CONTACT</span>
              <h3>Connect With Our Team</h3>
              <p>
                Our engineering headquarters in {settings.location || CONTACT.location} handles commercial consultations across India and the GCC.
              </p>

              <div className="contact-channel-list">
                <div className="contact-channel-item">
                  <span className="contact-channel-label">Phone</span>
                  <a href={`tel:${settings.contactPhoneRaw || CONTACT.phoneRaw}`} className="contact-channel-value">
                    {settings.contactPhone || CONTACT.phone}
                  </a>
                </div>

                <div className="contact-channel-item">
                  <span className="contact-channel-label">WhatsApp</span>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="contact-channel-value text-accent">
                    {settings.contactPhone || CONTACT.phone}
                  </a>
                </div>

                <div className="contact-channel-item">
                  <span className="contact-channel-label">Email</span>
                  <a href={`mailto:${settings.contactEmail || CONTACT.email}`} className="contact-channel-value">
                    {settings.contactEmail || CONTACT.email}
                  </a>
                </div>

                <div className="contact-channel-item">
                  <span className="contact-channel-label">Location</span>
                  <span className="contact-channel-value">
                    {settings.location || CONTACT.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="contact-regional-box">
              <strong>Serving Clients Across:</strong>
              <p>India | UAE | Oman | Qatar | Saudi Arabia</p>
            </div>
          </aside>

          {/* Right Column: Properly Aligned Form Container */}
          <div className="contact-form-card">
            <span className="badge-eyebrow">PROJECT INQUIRY</span>
            <h3>Tell Us About Your Goals</h3>
            <p className="contact-form-subtitle">
              Fill out the details below and an engineering consultant will reach out with an actionable project outline.
            </p>

            <form ref={formRef} onSubmit={handleSubmit} noValidate className="contact-form-body">
              <input
                type="text"
                name="honeypot"
                value={form.honeypot}
                onChange={handleChange}
                tabIndex={-1}
                aria-hidden="true"
                style={{ display: 'none' }}
              />

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">
                    Full Name <span className="req">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`form-input${errors.name ? ' error' : ''}`}
                    placeholder="Your name"
                    required
                  />
                  {errors.name && <span className="form-error">⚠ {errors.name}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-company">
                    Company
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Business / Organization name"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">
                    Email Address <span className="req">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`form-input${errors.email ? ' error' : ''}`}
                    placeholder="you@company.com"
                    required
                  />
                  {errors.email && <span className="form-error">⚠ {errors.email}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-phone">
                    Phone Number <span className="req">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className={`form-input${errors.phone ? ' error' : ''}`}
                    placeholder="+91 98765 43210"
                    required
                  />
                  {errors.phone && <span className="form-error">⚠ {errors.phone}</span>}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-service">
                  Service Required <span className="req">*</span>
                </label>
                <select
                  id="contact-service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className={`form-select${errors.service ? ' error' : ''}`}
                  required
                >
                  <option value="">Select a service category or specialization…</option>
                  {SERVICE_CATEGORIES.map((cat) => (
                    <optgroup key={cat.id} label={`── ${cat.name.toUpperCase()} ──`}>
                      {cat.services.map((srv) => (
                        <option key={srv.url} value={srv.title}>
                          {srv.title}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                  <option value="Multiple Services / Comprehensive Growth">
                    Multiple Services / Comprehensive Growth
                  </option>
                </select>
                {errors.service && <span className="form-error">⚠ {errors.service}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-budget">
                    Budget Range
                  </label>
                  <select
                    id="contact-budget"
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">Select estimated budget…</option>
                    {BUDGETS.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-timeline">
                    Project Timeline
                  </label>
                  <select
                    id="contact-timeline"
                    name="timeline"
                    value={form.timeline}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">Select target timeline…</option>
                    {TIMELINES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">
                  Project Details / Challenges <span className="req">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className={`form-textarea${errors.message ? ' error' : ''}`}
                  placeholder="Describe your current business, project requirements, key features, or commercial goals…"
                  required
                  rows={4}
                />
                {errors.message && <span className="form-error">⚠ {errors.message}</span>}
              </div>

              {status === 'error' && (
                <div className="form-alert form-alert--error" role="alert">
                  ⚠ {errorMessage}
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary contact-submit-btn"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Transmitting Enquiry…' : 'Submit Project Enquiry →'}
              </button>

              <p className="contact-confidential-note">
                🔒 Your inquiry is kept strictly confidential. We never share client information.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
