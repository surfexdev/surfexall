import { useLanguage } from '../context/LanguageContext';
import { AccentDivider } from '../components/AccentDivider';
import { InteractiveGrid } from '../components/InteractiveGrid';

export function WhyExhibit({ onOpenExhibitor }) {
  const { t } = useLanguage();
  const benefits = t.exhibitBenefits;
  return (
    <main className="pt-24">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-heading mb-8 dark:text-white">{t.whyExhibit}</h1>
        <button
          onClick={onOpenExhibitor}
          className="bg-primary text-white px-6 py-3 text-xs uppercase tracking-widest hover:bg-opacity-90 transition-colors"
        >
          {t.exhibitorInquiry}
        </button>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="border border-charcoal-200 dark:border-charcoal-800 p-8">
              <h3 className="text-2xl font-heading mb-2 dark:text-white">{b.title}</h3>
              <p className="text-charcoal-700 dark:text-charcoal-300">{b.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12"><AccentDivider /></div>
        <div className="mt-8"><InteractiveGrid /></div>
      </section>
    </main>
  );
}
