import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext({
  admin: null,
  token: null,
  isAuthenticated: false,
  loading: true,
  login: async () => {},
  logout: () => {},
});

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem('digimarket_admin_token'));
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  // Verify token on mount or token change
  useEffect(() => {
    const verifyToken = async () => {
      if (!token) {
        setAdmin(null);
        setLoading(false);
        return;
      }

      try {
        const res = await fetch('/api/auth/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.ok) {
          const data = await res.json();
          if (data.success && data.admin) {
            setAdmin(data.admin);
          } else {
            logout();
          }
        } else {
          logout();
        }
      } catch (err) {
        console.error('Session verification error:', err);
        logout();
      } finally {
        setLoading(false);
      }
    };

    verifyToken();
  }, [token]);

  const login = async (email, password) => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok || !data.success) {
      throw new Error(data.message || 'Login failed');
    }

    localStorage.setItem('digimarket_admin_token', data.token);
    setToken(data.token);
    setAdmin(data.admin);
    return data.admin;
  };

  const logout = () => {
    localStorage.removeItem('digimarket_admin_token');
    setToken(null);
    setAdmin(null);
  };

  return (
    <AuthContext.Provider
      value={{
        admin,
        token,
        isAuthenticated: !!token && !!admin,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
