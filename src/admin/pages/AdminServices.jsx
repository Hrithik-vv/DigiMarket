import { useState, useEffect } from 'react';
import AdminLayout from '../components/AdminLayout';
import { useAuth } from '../../context/AuthContext';
import {
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiCheck,
  FiX,
  FiSearch,
  FiExternalLink,
  FiEye,
  FiLayers,
  FiAlertCircle,
  FiAlertTriangle,
} from 'react-icons/fi';

const CATEGORIES = [
  { id: 'web-engineering', name: 'Web Engineering' },
  { id: 'digital-marketing', name: 'Digital Marketing' },
  { id: 'branding-creative', name: 'Branding & Creative' },
  { id: 'cloud-infrastructure', name: 'Cloud Infrastructure' },
  { id: 'consulting-strategy', name: 'Consulting & Strategy' },
];

const EMPTY_SERVICE = {
  title: '',
  slug: '',
  category: 'web-engineering',
  categoryName: 'Web Engineering',
  subtitle: '',
  intro: '',
  explanation: '',
  heroImage: '',
  metaTitle: '',
  metaDesc: '',
  isActive: true,
};

export default function AdminServices() {
  const { token } = useAuth();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [form, setForm] = useState(EMPTY_SERVICE);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState('');

  // Delete State
  const [deleteId, setDeleteId] = useState(null);

  const fetchServices = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/services/admin/all', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setServices(data.data || []);
      }
    } catch (err) {
      console.error('Failed to fetch services:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, [token]);

  const handleOpenAdd = () => {
    setEditingService(null);
    setForm(EMPTY_SERVICE);
    setFormError('');
    setModalOpen(true);
  };

  const handleOpenEdit = (srv) => {
    setEditingService(srv);
    setForm({
      title: srv.title || '',
      slug: srv.slug || '',
      category: srv.category || 'web-engineering',
      categoryName: srv.categoryName || 'Web Engineering',
      subtitle: srv.subtitle || '',
      intro: srv.intro || '',
      explanation: srv.explanation || '',
      heroImage: srv.heroImage || '',
      metaTitle: srv.metaTitle || '',
      metaDesc: srv.metaDesc || '',
      isActive: srv.isActive ?? true,
    });
    setFormError('');
    setModalOpen(true);
  };

  const handleToggleActive = async (id) => {
    try {
      const res = await fetch(`/api/services/${id}/toggle`, {
        method: 'PATCH',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        setServices((prev) =>
          prev.map((s) => (s._id === id ? { ...s, isActive: !s.isActive } : s))
        );
      }
    } catch (err) {
      console.error('Toggle status error:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/services/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        setServices((prev) => prev.filter((s) => s._id !== id));
        setDeleteId(null);
      }
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!form.title.trim()) {
      setFormError('Service title is required');
      return;
    }

    setSaving(true);
    setFormError('');

    try {
      const url = editingService ? `/api/services/${editingService._id}` : '/api/services';
      const method = editingService ? 'PUT' : 'POST';

      const catObj = CATEGORIES.find((c) => c.id === form.category);
      const payload = {
        ...form,
        categoryName: catObj ? catObj.name : form.category,
      };

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setModalOpen(false);
        fetchServices();
      } else {
        setFormError(data.message || 'Failed to save service');
      }
    } catch (err) {
      console.error('Save service error:', err);
      setFormError('Network error saving service');
    } finally {
      setSaving(false);
    }
  };

  const filtered = services.filter((srv) => {
    const matchesCat = selectedCategory === 'all' || srv.category === selectedCategory;
    const matchesSearch =
      !search ||
      srv.title.toLowerCase().includes(search.toLowerCase()) ||
      srv.slug.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <AdminLayout
      title="Services Management"
      actions={
        <button
          type="button"
          onClick={handleOpenAdd}
          className="admin-btn admin-btn--primary"
        >
          <FiPlus size={16} />
          <span>Add New Service</span>
        </button>
      }
    >
      {/* ── Filters & Search ── */}
      <div className="admin-card" style={{ padding: '16px 20px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: '12px', flex: 1, minWidth: '280px' }}>
            <div style={{ position: 'relative', flex: 1 }}>
              <FiSearch
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#94a3b8',
                }}
              />
              <input
                type="text"
                placeholder="Search services by title or slug…"
                className="admin-input"
                style={{ paddingLeft: '36px', height: '40px' }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <select
              className="admin-select"
              style={{ width: '220px', height: '40px' }}
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">All Categories ({services.length})</option>
              {CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div style={{ fontSize: '0.88rem', color: '#64748b' }}>
            Showing <strong>{filtered.length}</strong> services
          </div>
        </div>
      </div>

      {/* ── Services Table ── */}
      <div className="admin-card" style={{ padding: 0 }}>
        {loading ? (
          <div className="admin-empty-state">
            <div className="admin-loading-spinner" />
            <p style={{ marginTop: '12px' }}>Loading services from database…</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="admin-empty-state">
            <FiLayers className="admin-empty-state__icon" />
            <div className="admin-empty-state__title">No Services Found</div>
            <p style={{ fontSize: '0.88rem' }}>No services match your search criteria.</p>
          </div>
        ) : (
          <div className="admin-table-container" style={{ border: 'none' }}>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Service Details</th>
                  <th>Category</th>
                  <th>Public URL</th>
                  <th>Status</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((srv) => (
                  <tr key={srv._id}>
                    <td>
                      <div style={{ fontWeight: 600, color: '#0f172a' }}>{srv.title}</div>
                      <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                        {srv.subtitle || srv.intro?.substring(0, 70) || 'No description provided'}
                      </div>
                    </td>
                    <td>
                      <span className="admin-badge admin-badge--info">
                        {srv.categoryName || srv.category}
                      </span>
                    </td>
                    <td>
                      <a
                        href={srv.url || `/${srv.slug}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: '0.82rem',
                          color: '#3b82f6',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                        }}
                      >
                        <span>{srv.slug}</span>
                        <FiExternalLink size={12} />
                      </a>
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={() => handleToggleActive(srv._id)}
                        className={`admin-badge ${srv.isActive ? 'admin-badge--success' : 'admin-badge--warning'}`}
                        style={{ cursor: 'pointer' }}
                        title="Click to toggle status"
                      >
                        <span
                          style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            backgroundColor: 'currentColor',
                            display: 'inline-block',
                          }}
                        />
                        <span>{srv.isActive ? 'Active (Live)' : 'Disabled'}</span>
                      </button>
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <div style={{ display: 'inline-flex', gap: '8px' }}>
                        <button
                          type="button"
                          onClick={() => handleOpenEdit(srv)}
                          className="admin-btn admin-btn--secondary admin-btn--sm"
                          title="Edit Service"
                        >
                          <FiEdit2 size={13} />
                          <span>Edit</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setDeleteId(srv._id)}
                          className="admin-btn admin-btn--danger admin-btn--sm"
                          title="Delete Service"
                        >
                          <FiTrash2 size={13} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ── Add/Edit Modal ── */}
      {modalOpen && (
        <div className="admin-modal-overlay">
          <div className="admin-modal admin-modal--lg">
            <div className="admin-modal__header">
              <h2 className="admin-modal__title">
                {editingService ? `Edit Service: ${editingService.title}` : 'Add New Service'}
              </h2>
              <button
                type="button"
                className="admin-modal__close"
                onClick={() => setModalOpen(false)}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSave}>
              <div className="admin-modal__body">
                {formError && (
                  <div
                    style={{
                      padding: '12px 16px',
                      background: '#fef2f2',
                      border: '1px solid #fecaca',
                      borderRadius: '8px',
                      color: '#b91c1c',
                      marginBottom: '18px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <FiAlertCircle size={16} style={{ flexShrink: 0 }} />
                    <span>{formError}</span>
                  </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="admin-form-group">
                    <label className="admin-form-label">Service Title *</label>
                    <input
                      type="text"
                      className="admin-input"
                      value={form.title}
                      onChange={(e) => setForm({ ...form, title: e.target.value })}
                      placeholder="e.g. Website Development"
                      required
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Service Category *</label>
                    <select
                      className="admin-select"
                      value={form.category}
                      onChange={(e) => setForm({ ...form, category: e.target.value })}
                    >
                      {CATEGORIES.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="admin-form-group">
                    <label className="admin-form-label">URL Slug (e.g. website-development-company)</label>
                    <input
                      type="text"
                      className="admin-input"
                      value={form.slug}
                      onChange={(e) => setForm({ ...form, slug: e.target.value })}
                      placeholder="Leave blank to auto-generate from title"
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Hero / Featured Image URL</label>
                    <input
                      type="url"
                      className="admin-input"
                      value={form.heroImage}
                      onChange={(e) => setForm({ ...form, heroImage: e.target.value })}
                      placeholder="https://images.unsplash.com/..."
                    />
                  </div>
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">Subtitle / Hook</label>
                  <input
                    type="text"
                    className="admin-input"
                    value={form.subtitle}
                    onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
                    placeholder="Short catchy value proposition"
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">Introduction Summary</label>
                  <textarea
                    className="admin-textarea"
                    rows={3}
                    value={form.intro}
                    onChange={(e) => setForm({ ...form, intro: e.target.value })}
                    placeholder="Introductory paragraph for the service page"
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">Detailed Solution Explanation</label>
                  <textarea
                    className="admin-textarea"
                    rows={4}
                    value={form.explanation}
                    onChange={(e) => setForm({ ...form, explanation: e.target.value })}
                    placeholder="Deep technical explanation of how DigiMarket delivers this service"
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="admin-form-group">
                    <label className="admin-form-label">SEO Meta Title</label>
                    <input
                      type="text"
                      className="admin-input"
                      value={form.metaTitle}
                      onChange={(e) => setForm({ ...form, metaTitle: e.target.value })}
                      placeholder="Title for Google search results"
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">SEO Meta Description</label>
                    <input
                      type="text"
                      className="admin-input"
                      value={form.metaDesc}
                      onChange={(e) => setForm({ ...form, metaDesc: e.target.value })}
                      placeholder="Short summary for Google search snippets"
                    />
                  </div>
                </div>

                <div className="admin-form-group">
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontWeight: 600 }}>
                    <input
                      type="checkbox"
                      checked={form.isActive}
                      onChange={(e) => setForm({ ...form, isActive: e.target.checked })}
                    />
                    <span>Service is active and visible to public visitors</span>
                  </label>
                </div>
              </div>

              <div className="admin-modal__footer">
                <button
                  type="button"
                  className="admin-btn admin-btn--secondary"
                  onClick={() => setModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="admin-btn admin-btn--primary"
                  disabled={saving}
                >
                  {saving ? 'Saving Changes…' : editingService ? 'Update Service' : 'Create Service'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── Delete Confirmation Modal ── */}
      {deleteId && (
        <div className="admin-modal-overlay">
          <div className="admin-modal" style={{ maxWidth: '420px', textAlign: 'center' }}>
            <div className="admin-modal__body" style={{ paddingTop: '32px' }}>
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: '#fee2e2',
                  color: '#dc2626',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.4rem',
                  margin: '0 auto 16px',
                }}
              >
                <FiAlertTriangle size={24} color="#dc2626" />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Delete Service?</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
                Are you sure you want to delete this service? This action cannot be undone.
              </p>
            </div>
            <div className="admin-modal__footer" style={{ justifyContent: 'center' }}>
              <button
                type="button"
                className="admin-btn admin-btn--secondary"
                onClick={() => setDeleteId(null)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="admin-btn admin-btn--danger"
                onClick={() => handleDelete(deleteId)}
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
