import { useState, useEffect } from 'react';
import AdminLayout from '../components/AdminLayout';
import { useAuth } from '../../context/AuthContext';
import { useSettings } from '../../context/SettingsContext';
import { FiSave, FiCheckCircle, FiGlobe, FiPhone, FiMail, FiShare2, FiAlertCircle } from 'react-icons/fi';

export default function AdminSettings() {
  const { token } = useAuth();
  const { settings, refreshSettings } = useSettings();

  const [form, setForm] = useState({
    siteName: '',
    legalName: '',
    tagline: '',
    businessDescription: '',
    contactEmail: '',
    contactPhone: '',
    contactPhoneRaw: '',
    whatsappNumber: '',
    whatsappMessage: '',
    address: '',
    location: '',
    businessHours: '',
    socialInstagram: '',
    socialLinkedin: '',
    socialFacebook: '',
    footerCopyright: '',
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (settings) {
      setForm({
        siteName: settings.siteName || 'DigiMarket',
        legalName: settings.legalName || 'DigiMarket Digital Agency',
        tagline: settings.tagline || 'Digital Engineering for Businesses That Want to Grow',
        businessDescription: settings.businessDescription || '',
        contactEmail: settings.contactEmail || 'hello@digimarket.in',
        contactPhone: settings.contactPhone || '+91 98765 43210',
        contactPhoneRaw: settings.contactPhoneRaw || '+919876543210',
        whatsappNumber: settings.whatsappNumber || '+919876543210',
        whatsappMessage: settings.whatsappMessage || 'Hi DigiMarket, I would like to discuss a project.',
        address: settings.address || 'Kuthuparamba, Kannur, Kerala, India',
        location: settings.location || 'Kuthuparamba, Kannur, Kerala',
        businessHours: settings.businessHours || 'Mon – Sat: 9:00 AM – 7:00 PM IST',
        socialInstagram: settings.socialInstagram || 'https://instagram.com',
        socialLinkedin: settings.socialLinkedin || 'https://linkedin.com',
        socialFacebook: settings.socialFacebook || 'https://facebook.com',
        footerCopyright: settings.footerCopyright || `© ${new Date().getFullYear()} DigiMarket Digital Agency. All rights reserved.`,
      });
    }
  }, [settings]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg('');
    setErrorMsg('');

    try {
      const res = await fetch('/api/settings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSuccessMsg('Website configuration and branding saved successfully! Public pages are updated.');
        refreshSettings();
      } else {
        setErrorMsg(data.message || 'Failed to update settings');
      }
    } catch (err) {
      console.error('Settings update error:', err);
      setErrorMsg('Network error connecting to backend API');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout
      title="Website & Branding Settings"
      actions={
        <button
          type="button"
          onClick={handleSubmit}
          className="admin-btn admin-btn--primary"
          disabled={loading}
        >
          <FiSave size={15} />
          <span>{loading ? 'Saving…' : 'Save Changes'}</span>
        </button>
      }
    >
      {successMsg && (
        <div
          style={{
            padding: '14px 18px',
            background: '#ecfdf5',
            border: '1px solid #a7f3d0',
            borderRadius: '8px',
            color: '#059669',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontWeight: 500,
          }}
        >
          <FiCheckCircle size={18} />
          <span>{successMsg}</span>
        </div>
      )}

      {errorMsg && (
        <div
          style={{
            padding: '14px 18px',
            background: '#fef2f2',
            border: '1px solid #fecaca',
            borderRadius: '8px',
            color: '#b91c1c',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <FiAlertCircle size={16} style={{ flexShrink: 0 }} />
          <span>{errorMsg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* ── Brand Identity Card ── */}
        <div className="admin-card">
          <div className="admin-card__header">
            <div>
              <h2 className="admin-card__title">Brand & Website Identity</h2>
              <p style={{ color: '#64748b', fontSize: '0.85rem' }}>
                Primary website name, business title, and descriptions
              </p>
            </div>
          </div>

          <div className="admin-form-grid-2" style={{ gap: '20px' }}>
            <div className="admin-form-group">
              <label className="admin-form-label">Website Name (Primary Brand)</label>
              <input
                type="text"
                name="siteName"
                className="admin-input"
                value={form.siteName}
                onChange={handleChange}
                placeholder="e.g. DigiMarket"
                required
              />
              <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                This is the single source of truth across navbar, footer, headings, and tab title.
              </span>
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">Legal Entity Name</label>
              <input
                type="text"
                name="legalName"
                className="admin-input"
                value={form.legalName}
                onChange={handleChange}
                placeholder="e.g. DigiMarket Digital Agency"
              />
            </div>
          </div>

          <div className="admin-form-group">
            <label className="admin-form-label">Brand Tagline</label>
            <input
              type="text"
              name="tagline"
              className="admin-input"
              value={form.tagline}
              onChange={handleChange}
              placeholder="e.g. Digital Engineering for Businesses That Want to Grow"
            />
          </div>

          <div className="admin-form-group" style={{ marginBottom: 0 }}>
            <label className="admin-form-label">Corporate Description / Meta Bio</label>
            <textarea
              name="businessDescription"
              className="admin-textarea"
              rows={3}
              value={form.businessDescription}
              onChange={handleChange}
              placeholder="Full business summary used in meta tags and about footers"
            />
          </div>
        </div>

        {/* ── Contact Details Card ── */}
        <div className="admin-card">
          <div className="admin-card__header">
            <div>
              <h2 className="admin-card__title">Direct Contact Credentials</h2>
              <p style={{ color: '#64748b', fontSize: '0.85rem' }}>
                Phone numbers, WhatsApp gateway, and official email addresses
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            <div className="admin-form-group">
              <label className="admin-form-label">Contact Email</label>
              <input
                type="email"
                name="contactEmail"
                className="admin-input"
                value={form.contactEmail}
                onChange={handleChange}
                placeholder="hello@digimarket.in"
                required
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">Display Phone Number</label>
              <input
                type="text"
                name="contactPhone"
                className="admin-input"
                value={form.contactPhone}
                onChange={handleChange}
                placeholder="+91 756 1042 221"
                required
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">Dialable Phone (Raw Digits)</label>
              <input
                type="text"
                name="contactPhoneRaw"
                className="admin-input"
                value={form.contactPhoneRaw}
                onChange={handleChange}
                placeholder="+917561042221"
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">WhatsApp Number (with country code)</label>
              <input
                type="text"
                name="whatsappNumber"
                className="admin-input"
                value={form.whatsappNumber}
                onChange={handleChange}
                placeholder="+917561042221"
                required
              />
            </div>
          </div>

          <div className="admin-form-group">
            <label className="admin-form-label">WhatsApp Prefilled Message</label>
            <input
              type="text"
              name="whatsappMessage"
              className="admin-input"
              value={form.whatsappMessage}
              onChange={handleChange}
              placeholder="Hi DigiMarket, I would like to discuss a project."
            />
          </div>

          <div className="admin-form-grid-2" style={{ gap: '20px' }}>
            <div className="admin-form-group">
              <label className="admin-form-label">Office Address (Full)</label>
              <input
                type="text"
                name="address"
                className="admin-input"
                value={form.address}
                onChange={handleChange}
                placeholder="Kuthuparamba, Kannur, Kerala, India"
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">Short Location / City</label>
              <input
                type="text"
                name="location"
                className="admin-input"
                value={form.location}
                onChange={handleChange}
                placeholder="Kuthuparamba, Kannur, Kerala"
              />
            </div>
          </div>

          <div className="admin-form-group" style={{ marginBottom: 0 }}>
            <label className="admin-form-label">Business Working Hours</label>
            <input
              type="text"
              name="businessHours"
              className="admin-input"
              value={form.businessHours}
              onChange={handleChange}
              placeholder="Mon – Sat: 9:00 AM – 7:00 PM IST"
            />
          </div>
        </div>

        {/* ── Social Media & Footer Card ── */}
        <div className="admin-card">
          <div className="admin-card__header">
            <div>
              <h2 className="admin-card__title">Social Profiles & Footer Copy</h2>
              <p style={{ color: '#64748b', fontSize: '0.85rem' }}>
                Links to social networks and footer copyright statement
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            <div className="admin-form-group">
              <label className="admin-form-label">Instagram Profile URL</label>
              <input
                type="url"
                name="socialInstagram"
                className="admin-input"
                value={form.socialInstagram}
                onChange={handleChange}
                placeholder="https://instagram.com"
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">LinkedIn Company URL</label>
              <input
                type="url"
                name="socialLinkedin"
                className="admin-input"
                value={form.socialLinkedin}
                onChange={handleChange}
                placeholder="https://linkedin.com"
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">Facebook Page URL</label>
              <input
                type="url"
                name="socialFacebook"
                className="admin-input"
                value={form.socialFacebook}
                onChange={handleChange}
                placeholder="https://facebook.com"
              />
            </div>
          </div>

          <div className="admin-form-group" style={{ marginBottom: 0 }}>
            <label className="admin-form-label">Footer Copyright Notice</label>
            <input
              type="text"
              name="footerCopyright"
              className="admin-input"
              value={form.footerCopyright}
              onChange={handleChange}
              placeholder="© 2026 DigiMarket Digital Agency. All rights reserved."
            />
          </div>
        </div>

        <div className="admin-settings-save-row">
          <button
            type="submit"
            className="admin-btn admin-btn--primary admin-settings-save-btn"
            disabled={loading}
          >
            <FiSave size={16} />
            <span>{loading ? 'Saving Changes…' : 'Save All Settings'}</span>
          </button>
        </div>
      </form>
    </AdminLayout>
  );
}
