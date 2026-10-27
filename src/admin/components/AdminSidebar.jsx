import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useSettings } from '../../context/SettingsContext';
import {
  FiGrid,
  FiLayers,
  FiFileText,
  FiMail,
  FiSettings,
  FiLogOut,
  FiExternalLink,
  FiX,
} from 'react-icons/fi';

export default function AdminSidebar({ mobileOpen, onClose }) {
  const { admin, logout } = useAuth();
  const { settings } = useSettings();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const handleNavClick = () => {
    // Close drawer on mobile when a nav item is clicked
    if (onClose) onClose();
  };

  return (
    <aside className={`admin-sidebar${mobileOpen ? ' admin-sidebar--open' : ''}`}>
      <div className="admin-sidebar__brand">
        <div className="admin-sidebar__logo">
          {settings.siteName || 'DigiMarket'} <span>Admin</span>
        </div>
        {/* Close button — visible only on mobile */}
        <button
          type="button"
          className="admin-sidebar__close-btn"
          onClick={onClose}
          aria-label="Close navigation"
        >
          <FiX size={20} />
        </button>
      </div>

      <nav className="admin-sidebar__nav">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) => `admin-nav-item${isActive ? ' active' : ''}`}
          onClick={handleNavClick}
        >
          <FiGrid size={18} />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/admin/services"
          className={({ isActive }) => `admin-nav-item${isActive ? ' active' : ''}`}
          onClick={handleNavClick}
        >
          <FiLayers size={18} />
          <span>Services</span>
        </NavLink>

        <NavLink
          to="/admin/blogs"
          className={({ isActive }) => `admin-nav-item${isActive ? ' active' : ''}`}
          onClick={handleNavClick}
        >
          <FiFileText size={18} />
          <span>Blog Articles</span>
        </NavLink>

        <NavLink
          to="/admin/enquiries"
          className={({ isActive }) => `admin-nav-item${isActive ? ' active' : ''}`}
          onClick={handleNavClick}
        >
          <FiMail size={18} />
          <span>Enquiries</span>
        </NavLink>

        <NavLink
          to="/admin/settings"
          className={({ isActive }) => `admin-nav-item${isActive ? ' active' : ''}`}
          onClick={handleNavClick}
        >
          <FiSettings size={18} />
          <span>Site Settings</span>
        </NavLink>
      </nav>

      <div className="admin-sidebar__footer">
        <div className="admin-user-info">
          <div className="admin-user-avatar">
            {admin?.name?.charAt(0) || 'A'}
          </div>
          <div className="admin-user-details">
            <div className="admin-user-name">{admin?.name || 'Administrator'}</div>
            <div className="admin-user-role">{admin?.role || 'Admin'}</div>
          </div>
        </div>

        <Link to="/" target="_blank" rel="noopener noreferrer" className="admin-btn-site">
          <FiExternalLink size={14} />
          <span>View Public Website</span>
        </Link>

        <button type="button" onClick={handleLogout} className="admin-btn-logout">
          <FiLogOut size={15} />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
