import { Link } from 'react-router-dom';
import { CONTACT, SOCIAL, SITE_NAME } from '../config/contact.config';
import { useSettings } from '../context/SettingsContext';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { settings } = useSettings();

  const brandName = settings.siteName || SITE_NAME;
  const copyrightText = settings.footerCopyright || `© ${currentYear} ${brandName} Digital Agency. All Rights Reserved.`;

  return (
    <footer className="lored-footer" role="contentinfo">
      {/* ── Top CTA Banner ── */}
      <section className="lored-footer-top-cta">
        <div className="lored-footer-top-cta__inner">
          <div className="lored-footer-top-cta__text">
            <h2>Ready to turn ideas into reality?</h2>
            <p>
              Let's discuss your website, digital growth, infrastructure, or brand engineering project.
            </p>
          </div>
          <div className="lored-footer-top-cta__action">
            <Link to="/contact" className="btn btn-primary">
              Start a Project →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Main 4 Columns ── */}
      <div className="lored-footer-main">
        <div className="lored-footer-grid">
          {/* Column 1: Brand & Regional Scope */}
          <div className="lored-footer-col lored-footer-col--brand">
            <Link to="/" className="lored-logo" aria-label={`${brandName} Home`}>
              <span className="lored-logo__mark">
                {brandName.toLowerCase().startsWith('digi') && brandName.length > 4 ? (
                  <>Digi<span className="lored-logo__accent">{brandName.slice(4)}</span></>
                ) : (
                  <span className="lored-logo__accent">{brandName}</span>
                )}
              </span>
            </Link>
            <p className="lored-footer-tagline">Digital Engineering</p>
            <p className="lored-footer-desc">
              A digital engineering agency from Kannur, Kerala, helping businesses across India and the GCC build reliable digital experiences and systems for long-term growth.
            </p>
            <div className="lored-footer-regions-pill">
              Serving: India | UAE | Oman | Qatar | Saudi Arabia
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="lored-footer-col">
            <h3 className="lored-footer-title">Company</h3>
            <ul className="lored-footer-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/our-work">Our Work</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lored-footer-col">
            <h3 className="lored-footer-title">Services</h3>
            <ul className="lored-footer-nav">
              <li><Link to="/website-development-company/">Website Development</Link></li>
              <li><Link to="/wordpress-development-company/">WordPress Development</Link></li>
              <li><Link to="/ecommerce-development/">Ecommerce Development</Link></li>
              <li><Link to="/seo-services/">SEO Services</Link></li>
              <li><Link to="/performance-marketing/">Performance Marketing</Link></li>
              <li><Link to="/infrastructure-systems/">Infrastructure</Link></li>
              <li><Link to="/branding-creative/">Branding</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div className="lored-footer-col">
            <h3 className="lored-footer-title">Contact</h3>
            <div className="lored-footer-contact-block">
              <p className="lored-footer-contact-addr">
                {settings.location || CONTACT.location}
              </p>
              <p>
                <a href={`tel:${settings.contactPhoneRaw || CONTACT.phoneRaw}`} className="lored-footer-link">
                  {settings.contactPhone || CONTACT.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${settings.contactEmail || CONTACT.email}`} className="lored-footer-link">
                  {settings.contactEmail || CONTACT.email}
                </a>
              </p>
            </div>

            <div className="lored-footer-social">
              <span className="lored-footer-social-title">Social</span>
              <div className="lored-footer-social-links">
                <a href={settings.socialLinkedin || SOCIAL.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <span>•</span>
                <a href={settings.socialInstagram || SOCIAL.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
                <span>•</span>
                <a href={settings.socialFacebook || SOCIAL.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Legal Bar ── */}
      <div className="lored-footer-bottom">
        <div className="lored-footer-bottom__inner">
          <p className="lored-footer-copy">
            {copyrightText}
          </p>
          <div className="lored-footer-legal-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
