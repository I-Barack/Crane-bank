'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate checking if user is already logged in (from localStorage)
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800));

    // For demo: create user if credentials are valid
    if (email && password.length >= 6) {
      const newUser: User = {
        id: `user_${Date.now()}`,
        email,
        name: email.split('@')[0],
        createdAt: new Date().toISOString(),
      };
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
    } else {
      throw new Error('Invalid credentials');
    }
    setLoading(false);
  };

  const signup = async (email: string, password: string, name: string) => {
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800));

    if (email && password.length >= 6 && name) {
      const newUser: User = {
        id: `user_${Date.now()}`,
        email,
        name,
        createdAt: new Date().toISOString(),
      };
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
    } else {
      throw new Error('Invalid signup data');
    }
    setLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
