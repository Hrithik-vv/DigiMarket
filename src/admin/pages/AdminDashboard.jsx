import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../components/AdminLayout';
import { useAuth } from '../../context/AuthContext';
import {
  FiMail,
  FiLayers,
  FiFileText,
  FiAlertCircle,
  FiCheckCircle,
  FiArrowRight,
  FiPlus,
  FiRefreshCw,
} from 'react-icons/fi';

export default function AdminDashboard() {
  const { token } = useAuth();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchStats = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/stats', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStats(data.data);
      } else {
        setError(data.message || 'Failed to load dashboard metrics');
      }
    } catch (err) {
      console.error('Error fetching dashboard statistics:', err);
      setError('Network error connecting to backend API');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, [token]);

  return (
    <AdminLayout
      title="Dashboard Overview"
      actions={
        <button
          type="button"
          onClick={fetchStats}
          className="admin-btn admin-btn--secondary admin-btn--sm"
          title="Refresh Statistics"
        >
          <FiRefreshCw size={14} className={loading ? 'admin-loading-spinner' : ''} />
          <span>Refresh Data</span>
        </button>
      }
    >
      {error && (
        <div
          style={{
            padding: '14px 18px',
            background: '#fef2f2',
            border: '1px solid #fecaca',
            borderRadius: '8px',
            color: '#b91c1c',
            marginBottom: '24px',
          }}
        >
          ⚠ {error}
        </div>
      )}

      {/* ── Stats Grid ── */}
      <div className="admin-stats-grid">
        <div className="admin-stat-card">
          <div className="admin-stat-card__info">
            <span className="admin-stat-card__value">
              {loading ? '—' : stats?.totalEnquiries ?? 0}
            </span>
            <span className="admin-stat-card__label">Total Enquiries</span>
          </div>
          <div className="admin-stat-card__icon admin-stat-card__icon--orange">
            <FiMail />
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-card__info">
            <span className="admin-stat-card__value" style={{ color: stats?.unreadEnquiries > 0 ? '#ef4444' : undefined }}>
              {loading ? '—' : stats?.unreadEnquiries ?? 0}
            </span>
            <span className="admin-stat-card__label">Unread Enquiries</span>
          </div>
          <div className="admin-stat-card__icon admin-stat-card__icon--purple">
            <FiAlertCircle />
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-card__info">
            <span className="admin-stat-card__value">
              {loading ? '—' : stats?.totalServices ?? 0}
            </span>
            <span className="admin-stat-card__label">Active Services</span>
          </div>
          <div className="admin-stat-card__icon admin-stat-card__icon--blue">
            <FiLayers />
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-card__info">
            <span className="admin-stat-card__value">
              {loading ? '—' : stats?.publishedBlogs ?? 0}
            </span>
            <span className="admin-stat-card__label">Published Articles</span>
          </div>
          <div className="admin-stat-card__icon admin-stat-card__icon--green">
            <FiFileText />
          </div>
        </div>
      </div>

      {/* ── Two Column Sections ── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
        {/* Recent Enquiries */}
        <div className="admin-card">
          <div className="admin-card__header">
            <div>
              <h2 className="admin-card__title">Recent Enquiries</h2>
              <p style={{ color: '#64748b', fontSize: '0.85rem' }}>Latest client project leads</p>
            </div>
            <Link to="/admin/enquiries" className="admin-btn admin-btn--secondary admin-btn--sm">
              <span>View All</span>
              <FiArrowRight size={13} />
            </Link>
          </div>

          {loading ? (
            <div className="admin-empty-state">
              <div className="admin-loading-spinner" />
              <p style={{ marginTop: '12px' }}>Loading real enquiries from database…</p>
            </div>
          ) : !stats?.recentEnquiries || stats.recentEnquiries.length === 0 ? (
            <div className="admin-empty-state">
              <FiMail className="admin-empty-state__icon" />
              <div className="admin-empty-state__title">No Enquiries Yet</div>
              <p style={{ fontSize: '0.88rem' }}>Enquiries submitted via the Contact Us form will appear here.</p>
            </div>
          ) : (
            <div className="admin-table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Client</th>
                    <th>Service</th>
                    <th>Status</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.recentEnquiries.map((enq) => (
                    <tr key={enq._id}>
                      <td>
                        <div style={{ fontWeight: 600 }}>{enq.name}</div>
                        <div style={{ fontSize: '0.8rem', color: '#64748b' }}>{enq.email}</div>
                      </td>
                      <td style={{ fontSize: '0.85rem' }}>{enq.service}</td>
                      <td>
                        {enq.isRead ? (
                          <span className="admin-badge admin-badge--success">Read</span>
                        ) : (
                          <span className="admin-badge admin-badge--warning">New Unread</span>
                        )}
                      </td>
                      <td style={{ fontSize: '0.82rem', color: '#64748b' }}>
                        {new Date(enq.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Recent Blog Posts */}
        <div className="admin-card">
          <div className="admin-card__header">
            <div>
              <h2 className="admin-card__title">Recent Articles</h2>
              <p style={{ color: '#64748b', fontSize: '0.85rem' }}>Published and draft blog content</p>
            </div>
            <Link to="/admin/blogs" className="admin-btn admin-btn--secondary admin-btn--sm">
              <span>Manage Blog</span>
              <FiArrowRight size={13} />
            </Link>
          </div>

          {loading ? (
            <div className="admin-empty-state">
              <div className="admin-loading-spinner" />
              <p style={{ marginTop: '12px' }}>Loading articles from database…</p>
            </div>
          ) : !stats?.recentBlogs || stats.recentBlogs.length === 0 ? (
            <div className="admin-empty-state">
              <FiFileText className="admin-empty-state__icon" />
              <div className="admin-empty-state__title">No Articles Found</div>
              <p style={{ fontSize: '0.88rem' }}>Create your first blog post to share insights.</p>
            </div>
          ) : (
            <div className="admin-table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Article Title</th>
                    <th>Category</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.recentBlogs.map((b) => (
                    <tr key={b._id}>
                      <td>
                        <div style={{ fontWeight: 600, maxWidth: '240px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {b.title}
                        </div>
                        <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                          Slug: /{b.slug}
                        </div>
                      </td>
                      <td>
                        <span className="admin-badge admin-badge--info">{b.category}</span>
                      </td>
                      <td>
                        {b.status === 'published' ? (
                          <span className="admin-badge admin-badge--success">Published</span>
                        ) : (
                          <span className="admin-badge admin-badge--warning">Draft</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
