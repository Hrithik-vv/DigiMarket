import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useSettings } from '../../context/SettingsContext';
import { FiLock, FiMail, FiArrowRight } from 'react-icons/fi';
import '../admin.css';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { login, isAuthenticated } = useAuth();
  const { settings } = useSettings();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/admin/dashboard';

  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, from]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both your administrator email and password.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message || 'Invalid administrator login credentials.');
    } finally {
      setLoading(false);
    }
  };

  const handleFillDemo = () => {
    setEmail('admin@digimarket.in');
    setPassword('Admin@DigiMarket2026!');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(circle at 50% 20%, #1e293b 0%, #0f172a 100%)',
        padding: '24px',
        color: '#ffffff',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '440px',
          background: '#ffffff',
          borderRadius: '16px',
          padding: '40px 36px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.35)',
          color: '#0f172a',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div
            style={{
              width: '54px',
              height: '54px',
              borderRadius: '14px',
              background: 'rgba(255, 69, 26, 0.1)',
              color: '#ff451a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              margin: '0 auto 16px',
            }}
          >
            <FiLock />
          </div>
          <h2
            style={{
              fontFamily: 'Plus Jakarta Sans',
              fontSize: '1.65rem',
              fontWeight: 800,
              color: '#0f172a',
              letterSpacing: '-0.02em',
              marginBottom: '6px',
            }}
          >
            {settings.siteName || 'DigiMarket'} Control Center
          </h2>
          <p style={{ color: '#64748b', fontSize: '0.92rem' }}>
            Authorized administrator credentials required
          </p>
        </div>

        {error && (
          <div
            style={{
              padding: '12px 16px',
              background: '#fef2f2',
              border: '1px solid #fecaca',
              borderRadius: '8px',
              color: '#b91c1c',
              fontSize: '0.86rem',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span>⚠</span>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div className="admin-form-group" style={{ margin: 0 }}>
            <label className="admin-form-label" htmlFor="admin-email">
              Administrator Email
            </label>
            <div style={{ position: 'relative' }}>
              <FiMail
                style={{
                  position: 'absolute',
                  left: '14px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#94a3b8',
                }}
              />
              <input
                id="admin-email"
                type="email"
                className="admin-input"
                style={{ paddingLeft: '40px' }}
                placeholder="admin@digimarket.in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="admin-form-group" style={{ margin: 0 }}>
            <label className="admin-form-label" htmlFor="admin-password">
              Secure Password
            </label>
            <div style={{ position: 'relative' }}>
              <FiLock
                style={{
                  position: 'absolute',
                  left: '14px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#94a3b8',
                }}
              />
              <input
                id="admin-password"
                type="password"
                className="admin-input"
                style={{ paddingLeft: '40px' }}
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="admin-btn admin-btn--primary"
            style={{ width: '100%', height: '48px', fontSize: '0.98rem', marginTop: '6px' }}
            disabled={loading}
          >
            {loading ? (
              <>
                <div className="admin-loading-spinner" style={{ width: '18px', height: '18px', borderColor: 'rgba(255,255,255,0.3)', borderTopColor: '#fff' }} />
                <span>Authenticating…</span>
              </>
            ) : (
              <>
                <span>Sign In to Dashboard</span>
                <FiArrowRight size={16} />
              </>
            )}
          </button>
        </form>

        <div
          style={{
            marginTop: '24px',
            paddingTop: '20px',
            borderTop: '1px solid #f1f5f9',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            textAlign: 'center',
          }}
        >
          <button
            type="button"
            onClick={handleFillDemo}
            style={{
              background: '#f8fafc',
              border: '1px dashed #cbd5e1',
              borderRadius: '8px',
              padding: '8px 12px',
              fontSize: '0.82rem',
              color: '#475569',
              cursor: 'pointer',
            }}
          >
            💡 Quick fill default administrator credentials
          </button>

          <Link
            to="/"
            style={{
              fontSize: '0.85rem',
              color: '#64748b',
              textDecoration: 'none',
              marginTop: '4px',
            }}
          >
            ← Back to Public Website
          </Link>
        </div>
      </div>
    </div>
  );
}
