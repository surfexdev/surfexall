import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    tagline: 'Built for the Surface Industry',
    eventLine: 'A Global Platform for Surface Intelligence',
    dates: 'December 8–10, 2026',
    venue: 'Expo Centre Sharjah, UAE',
    learnMore: 'Learn More',
    visitorInquiry: 'Visitor Inquiry',
    exhibitorInquiry: 'Exhibitor Inquiry',
    chooseLanguage: 'Choose your language',
    brandStory: 'Brand Story',
    whyVisit: 'Why Visit',
    whyExhibit: 'Why Exhibit',
    highlights: ['Global exhibitors', 'Live innovation showcases', 'International networking'],
    overviewTitle: 'Overview',
    overviewBody: 'SURFEX 2026 brings together global manufacturers, innovators, and buyers to advance material intelligence and industrial surfaces. Experience curated showcases and forge meaningful B2B connections.',
    brandStoryIntro: 'SURFEX was founded to define the future of industrial surfaces—merging material honesty with precision engineering.',
    visionHeading: 'Vision & Mission',
    visionBody: 'We build a global platform for surface intelligence, enabling brands to innovate with confidence and clarity.',
    valuesHeading: 'Values',
    valuesBody: 'Integrity, permanence, and collaboration guide every decision—from research to exhibition.',
    visitBenefits: [
      { title: 'Discover materials', description: 'Explore advanced industrial surfaces from global makers.' },
      { title: 'Learn trends', description: 'Attend showcases focused on innovation and performance.' },
      { title: 'Network B2B', description: 'Connect with manufacturers, specifiers, and buyers.' },
    ],
    exhibitBenefits: [
      { title: 'Showcase innovation', description: 'Demonstrate material performance to a global audience.' },
      { title: 'Qualify leads', description: 'Meet decision-makers and buyers seeking premium surfaces.' },
      { title: 'Build partnerships', description: 'Collaborate with specifiers, brands, and integrators.' },
    ],
    submit: 'Submit',
    success: 'Submitted successfully',
  },
  ar: {
    tagline: 'مصمم لصناعة الأسطح',
    eventLine: 'منصة عالمية لذكاء الأسطح',
    dates: '8–10 ديسمبر 2026',
    venue: 'مركز إكسبو الشارقة، الإمارات',
    learnMore: 'اعرف المزيد',
    visitorInquiry: 'استفسار الزائر',
    exhibitorInquiry: 'استفسار العارض',
    chooseLanguage: 'اختر لغتك',
    brandStory: 'قصة العلامة',
    whyVisit: 'لماذا تزور',
    whyExhibit: 'لماذا تعرض',
    highlights: ['عارضون عالميون', 'عروض الابتكار الحية', 'شبكات دولية'],
    overviewTitle: 'نظرة عامة',
    overviewBody: 'يجمع معرض SURFEX 2026 بين المصنعين العالميين والمبتكرين والمشترين لدفع ذكاء المواد والأسطح الصناعية. اختبر العروض المُنتقاة وابنِ علاقات B2B مؤثرة.',
    brandStoryIntro: 'تأسس SURFEX لتعريف مستقبل الأسطح الصناعية — بدمج صدق المادة مع الهندسة الدقيقة.',
    visionHeading: 'الرؤية والرسالة',
    visionBody: 'نبني منصة عالمية لذكاء الأسطح، لتمكين العلامات من الابتكار بثقة ووضوح.',
    valuesHeading: 'القيم',
    valuesBody: 'النزاهة والديمومة والتعاون توجه كل قرار — من البحث إلى العرض.',
    visitBenefits: [
      { title: 'اكتشف المواد', description: 'استكشف الأسطح الصناعية المتقدمة من صانعين عالميين.' },
      { title: 'تعلم الاتجاهات', description: 'احضر عروضًا تركز على الابتكار والأداء.' },
      { title: 'شبكات B2B', description: 'تواصل مع المصنعين والمختصين والمشترين.' },
    ],
    exhibitBenefits: [
      { title: 'اعرض الابتكار', description: 'أظهر أداء المواد لجمهور عالمي.' },
      { title: 'أهل العملاء', description: 'قابل صناع القرار والمشترين الباحثين عن أسطح متميزة.' },
      { title: 'ابنِ الشراكات', description: 'تعاون مع المختصين والعلامات والدمّاجين.' },
    ],
    submit: 'إرسال',
    success: 'تم الإرسال بنجاح',
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language');
    return saved === 'ar' ? 'ar' : 'en';
  });
  const [promptOpen, setPromptOpen] = useState(() => {
    const visited = localStorage.getItem('languageSelected');
    return !visited;
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    const root = document.documentElement;
    root.lang = language === 'ar' ? 'ar' : 'en';
  }, [language]);

  const t = translations[language];

  const value = useMemo(() => ({
    language,
    setLanguage: (lang) => {
      setLanguage(lang);
      localStorage.setItem('languageSelected', 'true');
      setPromptOpen(false);
    },
    promptOpen,
    setPromptOpen,
    t,
  }), [language, promptOpen]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
