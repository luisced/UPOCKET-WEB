import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.style.setProperty('--background-start', '#ffffff');
      root.style.setProperty('--background-end', '#f3f4f6');
      root.style.setProperty('--card-bg', 'rgba(255, 255, 255, 0.8)');
    } else {
      root.style.setProperty('--background-start', '#0f0513');
      root.style.setProperty('--background-end', '#120821');
      root.style.setProperty('--card-bg', 'rgba(32, 32, 38, 0.7)');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};