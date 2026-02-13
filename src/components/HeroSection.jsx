const HERO_BG = "https://lh3.googleusercontent.com/aida-public/AB6AXuC8xooi5D1jpwjXMOo-Cv-ymxtJCam-7qkneQnz2Q0V5GYix1EHp3LjdRwqreEFS4POX9gs-Zq9kUVaBPX8cEr9zOSZjgYf2lxLx9fMaUozqS5vQa_ONppy07_VumYw_UDzSmTIdA_MurWvmeOuZxHhl2WGF9VtPAq9F8acxP_Hw9lxCuQYecIy9EYy5ufcYDL9g9BC1Q4xByn5tBA_nW6ivBOxa-_p6IKYfULqYf6on2R1Uu1xHOSvM84fUJCIKttWGjN6JmjQ3mY";
import { CountdownTimer } from './CountdownTimer';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export function HeroSection() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const logoSrc = theme === 'dark' ? '/surfexlogowhite.png' : '/surfexlogoblack.png';
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={HERO_BG} alt="SURFEX background" className="w-full h-full object-cover opacity-60 dark:opacity-40 grayscale hover:grayscale-0 transition-all duration-1000" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white dark:via-charcoal-900/20 dark:to-charcoal-900" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-16 md:pt-0">
        <div className="flex items-center justify-center mb-8">
          <img src={logoSrc} alt="SURFEX" className="h-24 w-auto" />
        </div>
        <h1 className="text-5xl md:text-7xl font-heading tracking-tight mb-8 text-charcoal-950 dark:text-white">
          {t.tagline}
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-charcoal-600 dark:text-charcoal-400">
          {t.eventLine}
        </p>
        <div className="mt-6 text-charcoal-700 dark:text-charcoal-300">
          <div className="uppercase tracking-widest text-xs">{t.dates}</div>
          <div className="mt-1">{t.venue}</div>
        </div>
        <CountdownTimer />
        <div className="mt-10">
          <Link to="/brand-story" className="bg-primary text-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-opacity-90 transition-colors">
            {t.learnMore}
          </Link>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="w-10 h-10 border border-charcoal-300 dark:border-charcoal-700 flex items-center justify-center text-charcoal-700 dark:text-charcoal-300">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </header>
  );
}
