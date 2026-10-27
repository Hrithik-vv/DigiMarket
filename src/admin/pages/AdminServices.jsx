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
  FiChevronLeft,
  FiChevronRight,
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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

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

  const totalPages = Math.max(1, Math.ceil(filtered.length / itemsPerPage));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (safeCurrentPage - 1) * itemsPerPage;
  const paginatedServices = filtered.slice(startIndex, startIndex + itemsPerPage);

  const handleSearchChange = (val) => {
    setSearch(val);
    setCurrentPage(1);
  };

  const handleCategoryChange = (val) => {
    setSelectedCategory(val);
    setCurrentPage(1);
  };

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
        <div className="admin-filter-bar">
          <div className="admin-filter-bar__inputs">
            <div className="admin-filter-bar__search">
              <FiSearch className="admin-filter-bar__search-icon" />
              <input
                type="text"
                placeholder="Search services by title or slug…"
                className="admin-input"
                value={search}
                onChange={(e) => handleSearchChange(e.target.value)}
              />
            </div>

            <select
              className="admin-select admin-filter-bar__select"
              style={{ width: '220px' }}
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
            >
              <option value="all">All Categories ({services.length})</option>
              {CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div className="admin-filter-bar__count">
            Showing <strong>{filtered.length > 0 ? `${startIndex + 1}–${Math.min(startIndex + itemsPerPage, filtered.length)}` : 0}</strong> of <strong>{filtered.length}</strong> services
          </div>
        </div>
      </div>

      {/* ── Services Table Card ── */}
      <div className="admin-card admin-services-card" style={{ padding: 0 }}>
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
          <>
            {/* Desktop / Tablet Table View */}
            <div className="admin-table-container admin-services-table-wrapper" style={{ border: 'none' }}>
              <table className="admin-table admin-services-table">
                <thead>
                  <tr>
                    <th className="col-service-details" style={{ width: '44%' }}>Service Details</th>
                    <th className="col-category" style={{ width: '19%' }}>Category</th>
                    <th className="col-url" style={{ width: '23%' }}>Public URL</th>
                    <th className="col-actions" style={{ width: '14%', textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedServices.map((srv) => (
                    <tr key={srv._id} className="admin-service-row">
                      <td className="col-service-details">
                        <div className="service-details-cell">
                          <span className="service-title" title={srv.title}>
                            {srv.title}
                          </span>
                          <p className="service-desc" title={srv.subtitle || srv.intro || ''}>
                            {srv.subtitle || srv.intro || 'No description provided'}
                          </p>
                        </div>
                      </td>
                      <td className="col-category">
                        <span className="admin-category-text" title={srv.categoryName || srv.category}>
                          {srv.categoryName || srv.category}
                        </span>
                      </td>
                      <td className="col-url">
                        <a
                          href={srv.url || `/${srv.slug}/`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="service-url-link"
                          title={`/${srv.slug}/`}
                        >
                          <span className="service-url-text">{srv.slug}</span>
                          <FiExternalLink size={13} className="service-url-icon" />
                        </a>
                      </td>
                      <td className="col-actions" style={{ textAlign: 'right' }}>
                        <div className="service-actions-group">
                          <button
                            type="button"
                            onClick={() => handleOpenEdit(srv)}
                            className="admin-btn admin-btn--secondary admin-btn--compact"
                            title="Edit Service"
                          >
                            <FiEdit2 size={13} />
                            <span>Edit</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => setDeleteId(srv._id)}
                            className="admin-btn admin-btn--danger admin-btn--compact"
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

            {/* Mobile Responsive Card/List Fallback */}
            <div className="admin-services-mobile-list">
              {paginatedServices.map((srv) => (
                <div key={srv._id} className="admin-service-mobile-card">
                  <div className="mobile-card-header">
                    <div>
                      <h4 className="service-title">{srv.title}</h4>
                      <span className="admin-category-text" style={{ marginTop: '4px', display: 'inline-block' }}>
                        {srv.categoryName || srv.category}
                      </span>
                    </div>
                    <div className="service-actions-group">
                      <button
                        type="button"
                        onClick={() => handleOpenEdit(srv)}
                        className="admin-btn admin-btn--secondary admin-btn--compact"
                        title="Edit Service"
                      >
                        <FiEdit2 size={13} />
                        <span>Edit</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setDeleteId(srv._id)}
                        className="admin-btn admin-btn--danger admin-btn--compact"
                        title="Delete Service"
                      >
                        <FiTrash2 size={13} />
                      </button>
                    </div>
                  </div>

                  <p className="service-desc" style={{ marginTop: '8px' }}>
                    {srv.subtitle || srv.intro || 'No description provided'}
                  </p>

                  <div className="mobile-card-footer" style={{ marginTop: '10px' }}>
                    <a
                      href={srv.url || `/${srv.slug}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="service-url-link"
                    >
                      <span className="service-url-text">/{srv.slug}/</span>
                      <FiExternalLink size={13} className="service-url-icon" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* ── Pagination Footer ── */}
            <div className="admin-pagination-bar">
              <div className="admin-pagination-info">
                Page <strong>{safeCurrentPage}</strong> of <strong>{totalPages}</strong> ({filtered.length} total services)
              </div>

              <div className="admin-pagination-controls">
                <button
                  type="button"
                  className="admin-page-btn"
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={safeCurrentPage === 1}
                  aria-label="Previous page"
                >
                  <FiChevronLeft size={14} />
                  <span>Previous</span>
                </button>

                <div className="admin-page-numbers">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                    <button
                      key={pageNum}
                      type="button"
                      className={`admin-page-btn admin-page-btn--num ${
                        pageNum === safeCurrentPage ? 'admin-page-btn--active' : ''
                      }`}
                      onClick={() => setCurrentPage(pageNum)}
                    >
                      {pageNum}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  className="admin-page-btn"
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={safeCurrentPage === totalPages}
                  aria-label="Next page"
                >
                  <span>Next</span>
                  <FiChevronRight size={14} />
                </button>
              </div>
            </div>
          </>
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

                <div className="admin-form-grid-2">
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

                <div className="admin-form-grid-2">
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

                <div className="admin-form-grid-2">
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
