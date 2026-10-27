import { useState, useEffect } from 'react';
import AdminSidebar from './AdminSidebar';
import '../admin.css';

export default function AdminLayout({ title, actions, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Close sidebar when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [sidebarOpen]);

  return (
    <div className="admin-app">
      {/* Mobile overlay backdrop */}
      {sidebarOpen && (
        <div
          className="admin-sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      <AdminSidebar
        mobileOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <main className="admin-main">
        <header className="admin-topbar">
          {/* Hamburger — mobile only */}
          <button
            type="button"
            className="admin-topbar__menu-btn"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open navigation menu"
          >
            <span className="admin-hamburger-icon">
              <span />
              <span />
              <span />
            </span>
          </button>

          <h1 className="admin-topbar__title">{title}</h1>

          <div className="admin-topbar__actions">{actions}</div>
        </header>
        <section className="admin-content">{children}</section>
      </main>
    </div>
  );
}
