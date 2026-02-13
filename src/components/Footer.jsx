import { NavLink } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-charcoal-950 text-charcoal-400 py-16 px-6 border-t border-charcoal-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-heading tracking-tighter text-white">SURFEX</span>
          </div>
          <p className="text-sm">© 2026 SURFEX. All rights reserved.</p>
        </div>
        <div className="flex space-x-8 text-xs font-bold uppercase tracking-widest">
          <NavLink className="hover:text-white transition-colors" to="/brand-story">Brand Story</NavLink>
          <NavLink className="hover:text-white transition-colors" to="/why-visit">Why Visit</NavLink>
          <NavLink className="hover:text-white transition-colors" to="/why-exhibit">Why Exhibit</NavLink>
        </div>
        <div className="flex space-x-4">
          <a className="w-10 h-10 border border-charcoal-800 flex items-center justify-center hover:border-primary hover:text-primary transition-colors" href="#">
            <span className="sr-only">LinkedIn</span>in
          </a>
          <a className="w-10 h-10 border border-charcoal-800 flex items-center justify-center hover:border-primary hover:text-primary transition-colors" href="#">
            <span className="sr-only">Instagram</span>ig
          </a>
        </div>
      </div>
    </footer>
  );
}
