import { useTheme } from '../context/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 border border-charcoal-300 dark:border-charcoal-700 flex items-center justify-center hover:border-primary transition-colors"
      aria-label="Toggle theme"
      title={theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
    >
      {theme === 'dark' ? (
        <svg className="w-5 h-5 block" viewBox="0 0 24 24" fill="none">
          <path
            d="M21 12.79A9 9 0 0 1 11.21 3 a7 7 0 1 0 9.79 9.79z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg className="w-5 h-5 block" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
          <path
            d="M12 1v3M12 20v3M1 12h3M20 12h3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      )}

    </button>
  );
}
