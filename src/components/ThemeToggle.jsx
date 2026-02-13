import { useTheme } from '../context/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 border border-charcoal-300 dark:border-charcoal-700 flex items-center justify-center text-xs uppercase tracking-widest hover:border-primary transition-colors"
      aria-label="Toggle theme"
      title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
    >
      <span className="text-primary">{theme === 'dark' ? '☀︎' : '◐'}</span>
    </button>
  );
}

