import { useLanguage } from '../context/LanguageContext';
import { AccentDivider } from '../components/AccentDivider';
import { InteractiveGrid } from '../components/InteractiveGrid';

export function BrandStory() {
  const { t } = useLanguage();
  return (
    <main className="pt-24">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-heading mb-8 dark:text-white">{t.brandStory}</h1>
        <div className="space-y-8 text-charcoal-700 dark:text-charcoal-300">
          <p>{t.brandStoryIntro}</p>
          <div className="mt-2"><AccentDivider /></div>
          <h2 className="text-2xl font-heading dark:text-white">{t.visionHeading}</h2>
          <p>{t.visionBody}</p>
          <h2 className="text-2xl font-heading dark:text-white">{t.valuesHeading}</h2>
          <p>{t.valuesBody}</p>
        </div>
        <div className="mt-12"><InteractiveGrid /></div>
      </section>
    </main>
  );
}
