import { useLanguage } from '../context/LanguageContext';

export function LanguageSelector() {
  const { language, setLanguage, t, promptOpen, setPromptOpen } = useLanguage();
  return (
    <>
      <div className="flex items-center gap-2">
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-2 text-xs uppercase tracking-widest border ${language === 'en' ? 'border-primary text-primary' : 'border-charcoal-300 dark:border-charcoal-700'}`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage('ar')}
          className={`px-3 py-2 text-xs uppercase tracking-widest border ${language === 'ar' ? 'border-primary text-primary' : 'border-charcoal-300 dark:border-charcoal-700'}`}
        >
          AR
        </button>
      </div>
      {promptOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center">
          <div className="bg-white dark:bg-charcoal-900 border border-charcoal-200 dark:border-charcoal-800 p-8 max-w-sm w-full">
            <h3 className="font-heading text-2xl mb-4 dark:text-white">{t.chooseLanguage}</h3>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setLanguage('en')}
                className="bg-primary text-white px-4 py-2 text-xs uppercase tracking-widest"
              >
                English
              </button>
              <button
                onClick={() => setLanguage('ar')}
                className="border border-charcoal-300 dark:border-charcoal-700 px-4 py-2 text-xs uppercase tracking-widest dark:text-white"
              >
                العربية
              </button>
            </div>
            <button
              onClick={() => setPromptOpen(false)}
              className="mt-4 text-xs uppercase tracking-widest text-charcoal-600 dark:text-charcoal-300 underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

