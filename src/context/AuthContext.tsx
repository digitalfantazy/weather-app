import React, { createContext, useContext, useEffect, useState } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

interface User {
  username: string;
  password: string;
  role: 'admin' | 'user';
}

interface AuthContextType {
  user: string | null;
  role: 'admin' | 'user' | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  createUser: (username: string, password: string) => void;
}

export const ProtectedRoute: React.FC = () => {
  const { user } = useAuth();

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(localStorage.getItem('user'));
  const [role, setRole] = useState<'admin' | 'user' | null>(
    localStorage.getItem('role') as 'admin' | 'user' | null
  );
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('user'));

  const navigate = useNavigate();

  const adminUser: User = {
    username: 'admin',
    password: 'admin',
    role: 'admin',
  };

  const [users, setUsers] = useState<User[]>(() => {
    const storedUsers = localStorage.getItem('users');
    return storedUsers ? JSON.parse(storedUsers) : [adminUser];
  });

  const createUser = (username: string, password: string) => {
    if (role === 'admin') {
      const newUser: User = { username, password, role: 'user' }; // Все новые пользователи имеют роль 'user'
      const updatedUsers: User[] = [...users, newUser];
      setUsers(updatedUsers);
      localStorage.setItem('users', JSON.stringify(updatedUsers));
    }
  };

  const login = (username: string, password: string) => {
    const foundUser = users.find((u) => u.username === username && u.password === password);

    if (foundUser) {
      localStorage.setItem('user', foundUser.username);
      localStorage.setItem('role', foundUser.role);
      setUser(foundUser.username);
      setRole(foundUser.role);
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };
  const logout = () => {
    navigate('/login');
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    setUser(null);
    setRole(null);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedRole = localStorage.getItem('role') as 'admin' | 'user' | null;
    if (storedUser && storedRole) {
      setUser(storedUser);
      setRole(storedRole);
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, role, isAuthenticated, login, logout, createUser }}>
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
