import { HeroSection } from '../components/HeroSection';
import { SurfaceAnthology } from '../components/SurfaceAnthology';
import { CardGrid } from '../components/CardGrid';
import { useLanguage } from '../context/LanguageContext';
import { useReveal } from '../hooks/useReveal';
import { AccentDivider } from '../components/AccentDivider';
import { InteractiveGrid } from '../components/InteractiveGrid';

export function Home({ onOpenVisitor, onOpenExhibitor }) {
  const { t } = useLanguage();
  const highlightItems = t.highlights.map((title) => ({
    title,
    description: 'Premium showcases and connections across the surface industry.',
  }));
  useReveal();

  return (
    <main>
      <HeroSection />
      <SurfaceAnthology />
      <section className="py-24 md:py-32 bg-white dark:bg-charcoal-950 border-y border-charcoal-200 dark:border-charcoal-800">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-heading mb-8 dark:text-white">Event Highlights</h3>
          <CardGrid items={highlightItems} />
        </div>
      </section>
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h3 className="text-3xl font-heading mb-4 dark:text-white">{t.overviewTitle}</h3>
        <p className="text-charcoal-600 dark:text-charcoal-300">{t.overviewBody}</p>
        <div className="mt-6"><AccentDivider /></div>
        <div className="mt-10"><InteractiveGrid /></div>
      </section>
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <h4 className="text-2xl font-heading dark:text-white">Ready to engage with SURFEX?</h4>
          <div className="flex items-center gap-4">
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
          </div>
        </div>
      </section>
    </main>
  );
}
