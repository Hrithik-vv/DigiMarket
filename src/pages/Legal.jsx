import { Link } from 'react-router-dom';
import { AGENCY, CONTACT, SITE_NAME } from '../config/contact.config';
import { useSettings } from '../context/SettingsContext';

export function PrivacyPolicy() {
  const { settings } = useSettings();
  const brand = settings.siteName || SITE_NAME;
  const legalName = settings.legalName || AGENCY.legalName;

  return (
    <main className="section">
      <div className="container" style={{ maxWidth: '860px' }}>
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="breadcrumbs-sep">/</span>
          <span className="breadcrumbs-current">Privacy Policy</span>
        </nav>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Privacy Policy</h1>
        <p style={{ color: 'var(--clr-text-muted)', marginBottom: '32px' }}>Last updated: October 2026</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', fontSize: '1.05rem', lineHeight: '1.75' }}>
          <p>
            At {legalName} ("{brand}", "we", "our"), we respect your privacy and are committed to protecting any personal data shared with us when visiting our website or utilizing our digital engineering and marketing services.
          </p>

          <h3>1. Information We Collect</h3>
          <p>
            We collect personal information that you voluntarily provide when submitting project inquiry forms, contacting us via WhatsApp, or applying for careers. This may include your full name, email address, telephone number, company name, and project specifications.
          </p>

          <h3>2. How We Use Your Information</h3>
          <p>
            We use collected information solely to respond to inquiries, prepare technical proposals, communicate regarding active engagements, and improve the performance of our web applications. We do not sell, rent, or trade your data with third-party advertisers.
          </p>

          <h3>3. Data Protection & Security</h3>
          <p>
            We implement strict security practices including encrypted SSL connections, access controls, and secure cloud environments to safeguard your information against unauthorized access or disclosure.
          </p>

          <h3>4. Contact Us</h3>
          <p>
            If you have questions regarding this Privacy Policy or your personal data, please contact our data controller at <strong>{settings.contactEmail || CONTACT.email}</strong> or by post at our registered office in {settings.address || CONTACT.address}.
          </p>
        </div>
      </div>
    </main>
  );
}

export function Terms() {
  const { settings } = useSettings();
  const brand = settings.siteName || SITE_NAME;

  return (
    <main className="section">
      <div className="container" style={{ maxWidth: '860px' }}>
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="breadcrumbs-sep">/</span>
          <span className="breadcrumbs-current">Terms & Conditions</span>
        </nav>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Terms & Conditions</h1>
        <p style={{ color: 'var(--clr-text-muted)', marginBottom: '32px' }}>Last updated: October 2026</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', fontSize: '1.05rem', lineHeight: '1.75' }}>
          <p>
            Welcome to {brand}. By accessing our website or retaining our digital engineering, marketing, infrastructure, or branding services, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <h3>1. Scope of Services</h3>
          <p>
            {brand} delivers custom software engineering, website development, marketing automation, cloud hosting, and creative services pursuant to individual Statements of Work (SOW) executed between {brand} and the client.
          </p>

          <h3>2. Intellectual Property Rights</h3>
          <p>
            Unless explicitly agreed otherwise in a signed client contract, upon full settlement of all project invoices, 100% of the custom source code, design assets, and deliverable content transfers directly to the client.
          </p>

          <h3>3. Client Warranties & Content</h3>
          <p>
            Clients warrant that any text, images, trademarks, or materials provided to {brand} for inclusion in digital deliverables do not infringe upon any third-party intellectual property rights.
          </p>

          <h3>4. Governing Law</h3>
          <p>
            These terms are governed by and construed in accordance with the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the courts in Kannur, Kerala.
          </p>
        </div>
      </div>
    </main>
  );
}
