import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center', background: '#0f172a' }}>
        <div style={{ textAlign: 'center', color: '#fff' }}>
          <div className="admin-loading-spinner" style={{ width: '40px', height: '40px' }} />
          <p style={{ marginTop: '16px', color: '#94a3b8' }}>Verifying secure admin authorization…</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return children;
}
