import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useSettings } from '../../context/SettingsContext';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import '../admin.css';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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
      setError('Please enter your email and password.');
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
    setError('');
  };

  const brandName = settings.siteName || 'DigiMarket';

  return (
    <div className="admin-login-layout">
      <div className="admin-login-card">
        {/* Header / Brand */}
        <div className="admin-login-header">
          <div className="admin-login-brand">
            <span className="brand-logo-text">{brandName}</span>
            <span className="brand-admin-tag">Admin</span>
          </div>
          <p className="admin-login-subtitle">
            Sign in to your administrator account.
          </p>
        </div>

        {/* Error message */}
        {error && (
          <div className="admin-login-error" role="alert">
            <span>{error}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="admin-login-form" noValidate>
          <div className="admin-login-field">
            <label htmlFor="admin-email" className="admin-login-label">
              Email Address
            </label>
            <input
              id="admin-email"
              type="email"
              autoComplete="email"
              className={`admin-login-input ${error ? 'admin-login-input--error' : ''}`}
              placeholder="admin@digimarket.in"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError('');
              }}
              required
            />
          </div>

          <div className="admin-login-field">
            <div className="admin-login-label-row">
              <label htmlFor="admin-password" className="admin-login-label">
                Password
              </label>
              <button
                type="button"
                className="admin-login-link-btn"
                onClick={() => alert('Password reset is managed by the system administrator. Contact technical support to reset credentials.')}
              >
                Forgot password?
              </button>
            </div>
            <div className="admin-login-password-wrapper">
              <input
                id="admin-password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                className={`admin-login-input ${error ? 'admin-login-input--error' : ''}`}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError('');
                }}
                required
              />
              <button
                type="button"
                className="admin-login-toggle-password"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                tabIndex="-1"
              >
                {showPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="admin-login-submit-btn"
            disabled={loading}
          >
            {loading ? 'Signing in…' : 'Sign In'}
          </button>
        </form>

        {/* Footer actions */}
        <div className="admin-login-footer">
          <button
            type="button"
            onClick={handleFillDemo}
            className="admin-login-demo-btn"
          >
            Fill default credentials
          </button>

          <Link to="/" className="admin-login-back-link">
            ← Back to website
          </Link>
        </div>
      </div>
    </div>
  );
}
