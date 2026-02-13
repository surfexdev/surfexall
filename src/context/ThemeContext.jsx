import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const booted = sessionStorage.getItem('initialThemeBooted');
    const root = document.documentElement;
    root.classList.remove('dark');
    if (!booted) {
      setTimeout(() => {
        setTheme('dark');
        setTimeout(() => {
          sessionStorage.setItem('initialThemeBooted', 'true');
          window.dispatchEvent(new CustomEvent('initial-theme-transition-complete'));
        }, 2000);
      }, 100);
    } else {
      const saved = localStorage.getItem('theme') || 'dark';
      setTheme(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const root = document.documentElement;
    root.classList.add('theme-transition');
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    const id = setTimeout(() => {
      root.classList.remove('theme-transition');
    }, 2200);
    return () => clearTimeout(id);
  }, [theme]);

  const value = useMemo(() => ({
    theme,
    setTheme,
    toggleTheme: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
  }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
