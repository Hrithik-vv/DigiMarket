import { useState, useEffect } from 'react';
import AdminLayout from '../components/AdminLayout';
import { useAuth } from '../../context/AuthContext';
import {
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiSearch,
  FiExternalLink,
  FiFileText,
  FiCheckCircle,
  FiClock,
  FiAlertCircle,
  FiAlertTriangle,
} from 'react-icons/fi';

const BLOG_CATEGORIES = [
  'Web Development',
  'Digital Marketing',
  'SEO',
  'Infrastructure',
  'Branding',
  'Strategy',
];

const EMPTY_BLOG = {
  title: '',
  slug: '',
  category: 'Web Development',
  readTime: '5 min read',
  author: 'DigiMarket Editorial Team',
  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  excerpt: '',
  content: '',
  status: 'published',
  isFeatured: false,
  metaTitle: '',
  metaDesc: '',
};

export default function AdminBlogs() {
  const { token } = useAuth();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [form, setForm] = useState(EMPTY_BLOG);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState('');

  // Delete State
  const [deleteId, setDeleteId] = useState(null);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/blogs/admin/all', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setBlogs(data.data || []);
      }
    } catch (err) {
      console.error('Failed to fetch articles:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [token]);

  const handleOpenAdd = () => {
    setEditingBlog(null);
    setForm(EMPTY_BLOG);
    setFormError('');
    setModalOpen(true);
  };

  const handleOpenEdit = (b) => {
    setEditingBlog(b);
    setForm({
      title: b.title || '',
      slug: b.slug || '',
      category: b.category || 'Web Development',
      readTime: b.readTime || '5 min read',
      author: b.author || 'DigiMarket Editorial Team',
      image: b.image || '',
      excerpt: b.excerpt || '',
      content: b.content || '',
      status: b.status || 'published',
      isFeatured: b.isFeatured ?? false,
      metaTitle: b.metaTitle || '',
      metaDesc: b.metaDesc || '',
    });
    setFormError('');
    setModalOpen(true);
  };

  const handleTogglePublish = async (id) => {
    try {
      const res = await fetch(`/api/blogs/${id}/publish`, {
        method: 'PATCH',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        setBlogs((prev) =>
          prev.map((b) => (b._id === id ? { ...b, status: data.data.status } : b))
        );
      }
    } catch (err) {
      console.error('Publish toggle error:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        setBlogs((prev) => prev.filter((b) => b._id !== id));
        setDeleteId(null);
      }
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.content.trim() || !form.excerpt.trim()) {
      setFormError('Title, excerpt, and content are required fields.');
      return;
    }

    setSaving(true);
    setFormError('');

    try {
      const url = editingBlog ? `/api/blogs/${editingBlog._id}` : '/api/blogs';
      const method = editingBlog ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setModalOpen(false);
        fetchBlogs();
      } else {
        setFormError(data.message || 'Failed to save blog post');
      }
    } catch (err) {
      console.error('Save article error:', err);
      setFormError('Network error saving article');
    } finally {
      setSaving(false);
    }
  };

  const filtered = blogs.filter((b) => {
    const matchesStatus = statusFilter === 'all' || b.status === statusFilter;
    const matchesSearch =
      !search ||
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.category.toLowerCase().includes(search.toLowerCase()) ||
      b.slug.toLowerCase().includes(search.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <AdminLayout
      title="Blog Articles Management"
      actions={
        <button
          type="button"
          onClick={handleOpenAdd}
          className="admin-btn admin-btn--primary"
        >
          <FiPlus size={16} />
          <span>Write New Article</span>
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
                placeholder="Search articles by title, slug, or category…"
                className="admin-input"
                style={{ paddingLeft: '36px', height: '40px' }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <select
              className="admin-select"
              style={{ width: '180px', height: '40px' }}
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Statuses ({blogs.length})</option>
              <option value="published">Published Only</option>
              <option value="draft">Drafts Only</option>
            </select>
          </div>

          <div style={{ fontSize: '0.88rem', color: '#64748b' }}>
            Showing <strong>{filtered.length}</strong> articles
          </div>
        </div>
      </div>

      {/* ── Articles Table ── */}
      <div className="admin-card" style={{ padding: 0 }}>
        {loading ? (
          <div className="admin-empty-state">
            <div className="admin-loading-spinner" />
            <p style={{ marginTop: '12px' }}>Loading articles from database…</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="admin-empty-state">
            <FiFileText className="admin-empty-state__icon" />
            <div className="admin-empty-state__title">No Articles Found</div>
            <p style={{ fontSize: '0.88rem' }}>Create your first article to share thought leadership.</p>
          </div>
        ) : (
          <div className="admin-table-container" style={{ border: 'none' }}>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Article Details</th>
                  <th>Category</th>
                  <th>Author & Read Time</th>
                  <th>Status</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((b) => (
                  <tr key={b._id}>
                    <td>
                      <div>
                        <span style={{ fontWeight: 650, color: '#0f172a', fontSize: '0.92rem' }}>{b.title}</span>
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '2px' }}>
                        Public slug: /{b.slug}
                      </div>
                    </td>
                    <td>
                      <span className="admin-category-text">{b.category}</span>
                    </td>
                    <td>
                      <div style={{ fontSize: '0.86rem' }}>{b.author}</div>
                      <div style={{ fontSize: '0.78rem', color: '#64748b' }}>{b.readTime}</div>
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={() => handleTogglePublish(b._id)}
                        className={`admin-badge ${b.status === 'published' ? 'admin-badge--success' : 'admin-badge--warning'}`}
                        style={{ cursor: 'pointer', border: 'none' }}
                        title="Click to toggle publish status"
                      >
                        {b.status === 'published' ? 'Published' : 'Draft'}
                      </button>
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <div style={{ display: 'inline-flex', gap: '8px' }}>
                        {b.status === 'published' && (
                          <a
                            href={`/blog/${b.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="admin-btn admin-btn--secondary admin-btn--sm"
                            title="Preview live article"
                          >
                            <FiExternalLink size={13} />
                          </a>
                        )}

                        <button
                          type="button"
                          onClick={() => handleOpenEdit(b)}
                          className="admin-btn admin-btn--secondary admin-btn--sm"
                          title="Edit Article"
                        >
                          <FiEdit2 size={13} />
                          <span>Edit</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setDeleteId(b._id)}
                          className="admin-btn admin-btn--danger admin-btn--sm"
                          title="Delete Article"
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
                {editingBlog ? 'Edit Blog Article' : 'Compose New Article'}
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

                <div className="admin-form-group">
                  <label className="admin-form-label">Article Title *</label>
                  <input
                    type="text"
                    className="admin-input"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    placeholder="e.g. Why Website Performance Is a Commercial Discipline"
                    required
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="admin-form-group">
                    <label className="admin-form-label">Category *</label>
                    <select
                      className="admin-select"
                      value={form.category}
                      onChange={(e) => setForm({ ...form, category: e.target.value })}
                    >
                      {BLOG_CATEGORIES.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">URL Slug</label>
                    <input
                      type="text"
                      className="admin-input"
                      value={form.slug}
                      onChange={(e) => setForm({ ...form, slug: e.target.value })}
                      placeholder="Leave blank to generate automatically"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="admin-form-group">
                    <label className="admin-form-label">Author Name</label>
                    <input
                      type="text"
                      className="admin-input"
                      value={form.author}
                      onChange={(e) => setForm({ ...form, author: e.target.value })}
                      placeholder="e.g. DigiMarket Editorial Team"
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Read Time</label>
                    <input
                      type="text"
                      className="admin-input"
                      value={form.readTime}
                      onChange={(e) => setForm({ ...form, readTime: e.target.value })}
                      placeholder="e.g. 6 min read"
                    />
                  </div>
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">Featured Image URL</label>
                  <input
                    type="url"
                    className="admin-input"
                    value={form.image}
                    onChange={(e) => setForm({ ...form, image: e.target.value })}
                    placeholder="https://images.unsplash.com/..."
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">Excerpt / Short Summary *</label>
                  <textarea
                    className="admin-textarea"
                    rows={2}
                    value={form.excerpt}
                    onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                    placeholder="Summary for blog index card and Google meta description"
                    required
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">Article Content (Supports HTML) *</label>
                  <textarea
                    className="admin-textarea"
                    rows={8}
                    value={form.content}
                    onChange={(e) => setForm({ ...form, content: e.target.value })}
                    placeholder="<h2>Main Heading</h2><p>Article body paragraphs...</p>"
                    required
                  />
                </div>

                <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                  <div className="admin-form-group" style={{ margin: 0 }}>
                    <label className="admin-form-label">Publication Status</label>
                    <select
                      className="admin-select"
                      style={{ width: '180px' }}
                      value={form.status}
                      onChange={(e) => setForm({ ...form, status: e.target.value })}
                    >
                      <option value="published">Published</option>
                      <option value="draft">Draft (Private)</option>
                    </select>
                  </div>

                  <div className="admin-form-group" style={{ margin: 0, marginTop: '22px' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontWeight: 600 }}>
                      <input
                        type="checkbox"
                        checked={form.isFeatured}
                        onChange={(e) => setForm({ ...form, isFeatured: e.target.checked })}
                      />
                      <span>Mark as Featured Post</span>
                    </label>
                  </div>
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
                  {saving ? 'Saving Article…' : editingBlog ? 'Update Article' : 'Publish Article'}
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
              <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Delete Article?</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
                Are you sure you want to delete this article? It will no longer be available online.
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
