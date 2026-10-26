import { useState, useEffect } from 'react';
import AdminLayout from '../components/AdminLayout';
import { useAuth } from '../../context/AuthContext';
import {
  FiMail,
  FiTrash2,
  FiSearch,
  FiCheckCircle,
  FiClock,
  FiPhone,
  FiCalendar,
  FiBriefcase,
  FiEye,
  FiRefreshCw,
  FiAlertTriangle,
} from 'react-icons/fi';

export default function AdminEnquiries() {
  const { token } = useAuth();
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all'); // all | unread | read

  // Detail Modal State
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);

  // Delete State
  const [deleteId, setDeleteId] = useState(null);

  const fetchEnquiries = async () => {
    setLoading(true);
    try {
      let url = `/api/enquiries?limit=100`;
      if (statusFilter !== 'all') {
        url += `&status=${statusFilter}`;
      }
      if (search.trim()) {
        url += `&search=${encodeURIComponent(search.trim())}`;
      }

      const res = await fetch(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setEnquiries(data.data || []);
      }
    } catch (err) {
      console.error('Error fetching enquiries:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, [token, statusFilter]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchEnquiries();
  };

  const handleToggleRead = async (enquiry) => {
    try {
      const res = await fetch(`/api/enquiries/${enquiry._id}/read`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ isRead: !enquiry.isRead }),
      });

      if (res.ok) {
        setEnquiries((prev) =>
          prev.map((e) => (e._id === enquiry._id ? { ...e, isRead: !e.isRead } : e))
        );
        if (selectedEnquiry?._id === enquiry._id) {
          setSelectedEnquiry({ ...selectedEnquiry, isRead: !selectedEnquiry.isRead });
        }
      }
    } catch (err) {
      console.error('Error updating read status:', err);
    }
  };

  const handleView = async (enquiry) => {
    setSelectedEnquiry(enquiry);
    // Auto mark as read when opened if unread
    if (!enquiry.isRead) {
      handleToggleRead(enquiry);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/enquiries/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        setEnquiries((prev) => prev.filter((e) => e._id !== id));
        setDeleteId(null);
        if (selectedEnquiry?._id === id) {
          setSelectedEnquiry(null);
        }
      }
    } catch (err) {
      console.error('Error deleting enquiry:', err);
    }
  };

  const unreadCount = enquiries.filter((e) => !e.isRead).length;

  return (
    <AdminLayout
      title="Client Enquiries"
      actions={
        <button
          type="button"
          onClick={fetchEnquiries}
          className="admin-btn admin-btn--secondary admin-btn--sm"
        >
          <FiRefreshCw size={13} className={loading ? 'admin-loading-spinner' : ''} />
          <span>Refresh</span>
        </button>
      }
    >
      {/* ── Filters & Search ── */}
      <div className="admin-card" style={{ padding: '16px 20px', marginBottom: '20px' }}>
        <form
          onSubmit={handleSearchSubmit}
          style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}
        >
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
                placeholder="Search by client name, email, phone, company, or message…"
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
              <option value="all">All Enquiries ({enquiries.length})</option>
              <option value="unread">Unread Only</option>
              <option value="read">Read Only</option>
            </select>

            <button type="submit" className="admin-btn admin-btn--secondary" style={{ height: '40px' }}>
              Search
            </button>
          </div>

          <div style={{ fontSize: '0.88rem', color: '#64748b' }}>
            Unread: <strong style={{ color: unreadCount > 0 ? '#ef4444' : '#10b981' }}>{unreadCount}</strong>
          </div>
        </form>
      </div>

      {/* ── Enquiries Table ── */}
      <div className="admin-card" style={{ padding: 0 }}>
        {loading ? (
          <div className="admin-empty-state">
            <div className="admin-loading-spinner" />
            <p style={{ marginTop: '12px' }}>Loading enquiries from database…</p>
          </div>
        ) : enquiries.length === 0 ? (
          <div className="admin-empty-state">
            <FiMail className="admin-empty-state__icon" />
            <div className="admin-empty-state__title">No Enquiries Found</div>
            <p style={{ fontSize: '0.88rem' }}>When prospects submit the Contact Us form, their details appear here.</p>
          </div>
        ) : (
          <div className="admin-table-container" style={{ border: 'none' }}>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Client Name</th>
                  <th>Contact Info</th>
                  <th>Service</th>
                  <th>Message Preview</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {enquiries.map((enq) => (
                  <tr key={enq._id} style={{ background: !enq.isRead ? 'rgba(255, 69, 26, 0.03)' : undefined }}>
                    <td>
                      <div style={{ fontWeight: 600, color: '#0f172a' }}>{enq.name}</div>
                      {enq.company && (
                        <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                          Company: {enq.company}
                        </div>
                      )}
                    </td>
                    <td>
                      <div style={{ fontSize: '0.85rem', color: '#0f172a' }}>{enq.email}</div>
                      <div style={{ fontSize: '0.8rem', color: '#64748b' }}>{enq.phone}</div>
                    </td>
                    <td>
                      <span className="admin-badge admin-badge--info">{enq.service}</span>
                    </td>
                    <td>
                      <div
                        style={{
                          fontSize: '0.85rem',
                          color: '#475569',
                          maxWidth: '260px',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {enq.message}
                      </div>
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={() => handleToggleRead(enq)}
                        className={`admin-badge ${enq.isRead ? 'admin-badge--success' : 'admin-badge--warning'}`}
                        style={{ cursor: 'pointer', border: 'none' }}
                        title="Click to toggle read status"
                      >
                        {enq.isRead ? 'Read' : 'New Unread'}
                      </button>
                    </td>
                    <td style={{ fontSize: '0.82rem', color: '#64748b', whiteSpace: 'nowrap' }}>
                      {new Date(enq.createdAt).toLocaleDateString()}
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <div style={{ display: 'inline-flex', gap: '8px' }}>
                        <button
                          type="button"
                          onClick={() => handleView(enq)}
                          className="admin-btn admin-btn--secondary admin-btn--sm"
                          title="View Full Details"
                        >
                          <FiEye size={13} />
                          <span>View</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setDeleteId(enq._id)}
                          className="admin-btn admin-btn--danger admin-btn--sm"
                          title="Delete Enquiry"
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

      {/* ── View Detail Modal ── */}
      {selectedEnquiry && (
        <div className="admin-modal-overlay">
          <div className="admin-modal admin-modal--lg">
            <div className="admin-modal__header">
              <h2 className="admin-modal__title">
                Enquiry Details: {selectedEnquiry.name}
              </h2>
              <button
                type="button"
                className="admin-modal__close"
                onClick={() => setSelectedEnquiry(null)}
              >
                ✕
              </button>
            </div>

            <div className="admin-modal__body">
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '20px',
                  background: '#f8fafc',
                  padding: '20px',
                  borderRadius: '10px',
                  marginBottom: '24px',
                }}
              >
                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#64748b', fontWeight: 700 }}>
                    Full Name
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 600, marginTop: '2px' }}>
                    {selectedEnquiry.name}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#64748b', fontWeight: 700 }}>
                    Company / Org
                  </div>
                  <div style={{ fontSize: '1rem', marginTop: '2px' }}>
                    {selectedEnquiry.company || 'Not Specified'}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#64748b', fontWeight: 700 }}>
                    Email Address
                  </div>
                  <a
                    href={`mailto:${selectedEnquiry.email}`}
                    style={{ fontSize: '0.98rem', color: '#3b82f6', marginTop: '2px', display: 'block' }}
                  >
                    {selectedEnquiry.email}
                  </a>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#64748b', fontWeight: 700 }}>
                    Phone Number
                  </div>
                  <a
                    href={`tel:${selectedEnquiry.phone}`}
                    style={{ fontSize: '0.98rem', color: '#0f172a', fontWeight: 600, marginTop: '2px', display: 'block' }}
                  >
                    {selectedEnquiry.phone}
                  </a>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#64748b', fontWeight: 700 }}>
                    Service Requested
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#ff451a', marginTop: '2px' }}>
                    {selectedEnquiry.service}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#64748b', fontWeight: 700 }}>
                    Budget Range
                  </div>
                  <div style={{ fontSize: '0.95rem', marginTop: '2px' }}>
                    {selectedEnquiry.budget || 'Open / Not specified'}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#64748b', fontWeight: 700 }}>
                    Project Timeline
                  </div>
                  <div style={{ fontSize: '0.95rem', marginTop: '2px' }}>
                    {selectedEnquiry.timeline || 'Flexible'}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#64748b', fontWeight: 700 }}>
                    Submitted On
                  </div>
                  <div style={{ fontSize: '0.95rem', marginTop: '2px' }}>
                    {new Date(selectedEnquiry.createdAt).toLocaleString()}
                  </div>
                </div>
              </div>

              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>
                  Project Description & Requirements:
                </h4>
                <div
                  style={{
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    padding: '18px',
                    whiteSpace: 'pre-wrap',
                    fontSize: '0.95rem',
                    lineHeight: 1.65,
                    color: '#1e293b',
                  }}
                >
                  {selectedEnquiry.message}
                </div>
              </div>
            </div>

            <div className="admin-modal__footer">
              <button
                type="button"
                className="admin-btn admin-btn--secondary"
                onClick={() => handleToggleRead(selectedEnquiry)}
              >
                {selectedEnquiry.isRead ? 'Mark as Unread' : 'Mark as Read'}
              </button>

              <a
                href={`mailto:${selectedEnquiry.email}?subject=${encodeURIComponent(`Re: ${selectedEnquiry.service} Enquiry - DigiMarket`)}`}
                className="admin-btn admin-btn--primary"
              >
                <FiMail size={15} />
                <span>Reply by Email</span>
              </a>
            </div>
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
              <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Delete Enquiry?</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
                Are you sure you want to permanently delete this client enquiry record?
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
