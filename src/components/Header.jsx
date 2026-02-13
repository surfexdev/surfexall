import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSelector } from './LanguageSelector';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export function Header({ onOpenVisitor, onOpenExhibitor }) {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();
  const { theme } = useTheme();
  const logoSrc = theme === 'dark' ? '/surfexlogowhite.png' : '/surfexlogoblack.png';

  const navLinkClass = ({ isActive }) =>
    `uppercase tracking-widest text-xs font-bold ${
      isActive ? 'text-primary' : 'text-charcoal-700 dark:text-charcoal-300'
    } hover:text-primary transition-colors`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-charcoal-950/80 backdrop-blur-md border-b border-charcoal-200 dark:border-charcoal-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoSrc} alt="SURFEX" className="h-10 w-auto" />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <NavLink className={navLinkClass} to="/">Home</NavLink>
          <NavLink className={navLinkClass} to="/brand-story">{t.brandStory}</NavLink>
          <NavLink className={navLinkClass} to="/why-visit">{t.whyVisit}</NavLink>
          <NavLink className={navLinkClass} to="/why-exhibit">{t.whyExhibit}</NavLink>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenVisitor}
            className="border border-charcoal-300 dark:border-charcoal-700 px-6 py-3 text-xs uppercase tracking-widest hover:bg-charcoal-900 hover:text-white dark:hover:bg-white dark:hover:text-charcoal-900 transition-colors"
          >
            {t.visitorInquiry}
          </button>
          <button
            onClick={onOpenExhibitor}
            className="bg-primary text-white px-6 py-3 text-xs uppercase tracking-widest hover:bg-opacity-90 transition-colors"
          >
            {t.exhibitorInquiry}
          </button>
          <LanguageSelector />
          <ThemeToggle />
        </div>
        <button
          className="md:hidden text-charcoal-900 dark:text-white w-10 h-10 border border-charcoal-300 dark:border-charcoal-700 flex items-center justify-center"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          title="Menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-charcoal-200 dark:border-charcoal-800 bg-white dark:bg-charcoal-950">
          <div className="px-6 py-4 flex flex-col gap-4">
            <NavLink className={navLinkClass} to="/brand-story" onClick={() => setOpen(false)}>{t.brandStory}</NavLink>
            <NavLink className={navLinkClass} to="/why-visit" onClick={() => setOpen(false)}>{t.whyVisit}</NavLink>
            <NavLink className={navLinkClass} to="/why-exhibit" onClick={() => setOpen(false)}>{t.whyExhibit}</NavLink>
            <div className="flex items-center gap-3">
              <button
                onClick={() => { setOpen(false); onOpenVisitor(); }}
                className="border border-charcoal-300 dark:border-charcoal-700 px-3 py-2 text-xs uppercase tracking-widest w-full"
              >
                {t.visitorInquiry}
              </button>
              <button
                onClick={() => { setOpen(false); onOpenExhibitor(); }}
                className="bg-primary text-white px-3 py-2 text-xs uppercase tracking-widest w-full"
              >
                {t.exhibitorInquiry}
              </button>
            </div>
            <div className="flex items-center justify-between">
              <LanguageSelector />
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
