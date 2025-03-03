import React, { createContext, useContext, useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
interface AuthContextType {
  user: string | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

export const ProtectedRoute: React.FC = () => {
  const { user } = useAuth();

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(localStorage.getItem('user'));
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('user'));

  const login = (username: string, password: string) => {
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('user', username);
      setUser(username);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(!!localStorage.getItem('user'));
    setUser(null);
  };

  useEffect(() => {
    setUser(localStorage.getItem('user'));
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
