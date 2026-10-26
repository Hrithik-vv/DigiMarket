import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiPhone } from 'react-icons/fi';
import { AGENCY, CONTACT, SITE_NAME } from '../config/contact.config';
import { useSettings } from '../context/SettingsContext';
import { SERVICE_CATEGORIES } from '../data/servicesData';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileAccordion, setOpenMobileAccordion] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { settings } = useSettings();
  const brand = settings.siteName || SITE_NAME;
  const megaMenuRef = useRef(null);
  const timeoutRef = useRef(null);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMegaOpen(false);
    setMobileMenuOpen(false);
    setOpenMobileAccordion(null);
  }, [location.pathname]);

  // Handle outside click for mega menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(e.target)) {
        setMegaOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setMegaOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setMegaOpen(false);
    }, 200);
  };

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const isServicesActive = () => {
    if (location.pathname.startsWith('/services')) return true;
    for (const cat of SERVICE_CATEGORIES) {
      if (location.pathname === cat.url) return true;
      for (const s of cat.services) {
        if (location.pathname === s.url) return true;
      }
    }
    return false;
  };

  const toggleAccordion = (catId) => {
    setOpenMobileAccordion(prev => prev === catId ? null : catId);
  };

  return (
    <>
      <header className={`lored-header${scrolled ? ' lored-header--scrolled' : ''}`}>
        <div className="container lored-header__inner">
          {/* ── Brand Logo ── */}
          <Link to="/" className="lored-logo" aria-label={`${brand} Home`}>
            <span className="lored-logo__mark">
              {brand.toLowerCase().startsWith('digi') && brand.length > 4 ? (
                <>Digi<span className="lored-logo__accent">{brand.slice(4)}</span></>
              ) : (
                <span className="lored-logo__accent">{brand}</span>
              )}
            </span>
            <span className="lored-logo__sub">Digital Engineering</span>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="lored-nav" aria-label="Main Navigation">
            <Link
              to="/"
              className={`lored-nav__link${isActive('/') ? ' lored-nav__link--active' : ''}`}
            >
              Home
            </Link>

            {/* Mega Menu Trigger */}
            <div
              className="lored-nav__item--mega"
              ref={megaMenuRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`lored-nav__link lored-nav__link--btn${isServicesActive() ? ' lored-nav__link--active' : ''}`}
                onClick={() => setMegaOpen(prev => !prev)}
                aria-expanded={megaOpen}
                aria-haspopup="true"
              >
                Services
                <svg
                  className={`lored-nav__arrow${megaOpen ? ' lored-nav__arrow--open' : ''}`}
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {/* 5-Column Mega Menu */}
              {megaOpen && (
                <div className="lored-mega">
                  <div className="lored-mega__container">
                    <div className="lored-mega__grid">
                      {SERVICE_CATEGORIES.map((cat) => (
                        <div key={cat.id} className="lored-mega__col">
                          <Link
                            to={cat.url}
                            className="lored-mega__cat-title"
                            onClick={() => setMegaOpen(false)}
                          >
                            <span>{cat.name.toUpperCase()}</span>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <polyline points="9 18 15 12 9 6" />
                            </svg>
                          </Link>
                          <ul className="lored-mega__list">
                            {cat.services.map((srv) => (
                              <li key={srv.url}>
                                <Link
                                  to={srv.url}
                                  className={`lored-mega__item-link${location.pathname === srv.url ? ' lored-mega__item-link--active' : ''}`}
                                  onClick={() => setMegaOpen(false)}
                                >
                                  {srv.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="lored-mega__footer">
                      <div className="lored-mega__footer-text">
                        <span>Kerala to GCC Engineering Coverage:</span> India, UAE, Oman, Qatar, Saudi Arabia
                      </div>
                      <Link
                        to="/contact"
                        className="lored-mega__footer-cta"
                        onClick={() => setMegaOpen(false)}
                      >
                        Request Engineering Consultation →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/our-work"
              className={`lored-nav__link${isActive('/our-work') ? ' lored-nav__link--active' : ''}`}
            >
              Our Work
            </Link>

            <Link
              to="/about-us"
              className={`lored-nav__link${isActive('/about-us') || isActive('/about') ? ' lored-nav__link--active' : ''}`}
            >
              About Us
            </Link>

            <Link
              to="/blog"
              className={`lored-nav__link${isActive('/blog') ? ' lored-nav__link--active' : ''}`}
            >
              Blog
            </Link>

            <Link
              to="/careers"
              className={`lored-nav__link${isActive('/careers') ? ' lored-nav__link--active' : ''}`}
            >
              Careers
            </Link>

            <Link
              to="/contact"
              className={`lored-nav__link${isActive('/contact') ? ' lored-nav__link--active' : ''}`}
            >
              Contact
            </Link>
          </nav>

          {/* ── Header Actions ── */}
          <div className="lored-header__actions">
            <Link to="/contact" className="btn btn-primary lored-header__cta">
              Contact Us
            </Link>

            {/* Mobile Hamburger */}
            <button
              type="button"
              className={`lored-hamburger${mobileMenuOpen ? ' lored-hamburger--active' : ''}`}
              onClick={() => setMobileMenuOpen(prev => !prev)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Navigation Drawer ── */}
      {mobileMenuOpen && (
        <div className="lored-mobile" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
          <div className="lored-mobile__backdrop" onClick={() => setMobileMenuOpen(false)} />
          <div className="lored-mobile__panel">
            <div className="lored-mobile__header">
              <Link to="/" className="lored-logo" onClick={() => setMobileMenuOpen(false)}>
                <span className="lored-logo__mark">
                  {brand.toLowerCase().startsWith('digi') && brand.length > 4 ? (
                    <>Digi<span className="lored-logo__accent">{brand.slice(4)}</span></>
                  ) : (
                    <span className="lored-logo__accent">{brand}</span>
                  )}
                </span>
              </Link>
              <button
                type="button"
                className="lored-mobile__close"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close Menu"
              >
                ✕
              </button>
            </div>

            <nav className="lored-mobile__nav">
              <Link to="/" className="lored-mobile__link" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>

              {/* Mobile Services Accordion */}
              <div className="lored-mobile__accordion">
                <div className="lored-mobile__accordion-title">
                  <span>SERVICES</span>
                </div>
                {SERVICE_CATEGORIES.map((cat) => {
                  const isOpen = openMobileAccordion === cat.id;
                  return (
                    <div key={cat.id} className="lored-mobile__cat-group">
                      <button
                        type="button"
                        className="lored-mobile__cat-toggle"
                        onClick={() => toggleAccordion(cat.id)}
                        aria-expanded={isOpen}
                      >
                        <span>{cat.name}</span>
                        <span className={`lored-mobile__plus${isOpen ? ' lored-mobile__plus--open' : ''}`}>
                          {isOpen ? '−' : '+'}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="lored-mobile__sublist">
                          <Link
                            to={cat.url}
                            className="lored-mobile__sublink lored-mobile__sublink--cat"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Explore {cat.name} Overview →
                          </Link>
                          {cat.services.map((srv) => (
                            <Link
                              key={srv.url}
                              to={srv.url}
                              className="lored-mobile__sublink"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {srv.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <Link to="/our-work" className="lored-mobile__link" onClick={() => setMobileMenuOpen(false)}>
                Our Work
              </Link>
              <Link to="/about-us" className="lored-mobile__link" onClick={() => setMobileMenuOpen(false)}>
                About Us
              </Link>
              <Link to="/blog" className="lored-mobile__link" onClick={() => setMobileMenuOpen(false)}>
                Blog
              </Link>
              <Link to="/careers" className="lored-mobile__link" onClick={() => setMobileMenuOpen(false)}>
                Careers
              </Link>
              <Link to="/contact" className="lored-mobile__link" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
            </nav>

            <div className="lored-mobile__footer">
              <Link
                to="/contact"
                className="btn btn-primary"
                style={{ width: '100%' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Start a Project
              </Link>
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="lored-mobile__tel"
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              >
                <FiPhone size={14} /> <span>{CONTACT.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
