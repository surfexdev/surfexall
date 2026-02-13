import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export function InquiryModal({ type, open, onClose }) {
  const { t, language } = useLanguage();
  const [form, setForm] = useState({
    name: '',
    business: '',
    phone: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  if (!open) return null;

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = true;
    if (!form.business.trim()) e.business = true;
    if (!/^[\\d\\s\\+\\-]{6,}$/.test(form.phone)) e.phone = true;
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(form.email)) e.email = true;
    if (!form.message.trim()) e.message = true;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setSuccess(true);
    setTimeout(() => {
      onClose();
      setSuccess(false);
      setForm({ name: '', business: '', phone: '', email: '', message: '' });
      setErrors({});
    }, 1200);
  };

  const label = type === 'visitor' ? t.visitorInquiry : t.exhibitorInquiry;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center">
      <div className="bg-white dark:bg-charcoal-900 border border-charcoal-200 dark:border-charcoal-800 p-6 md:p-10 w-full max-w-xl">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-heading text-2xl dark:text-white">{label}</h3>
          <button onClick={onClose} className="text-charcoal-600 dark:text-charcoal-300">✕</button>
        </div>
        {success ? (
          <div className="text-primary font-bold uppercase tracking-widest text-sm">{t.success}</div>
        ) : (
          <form onSubmit={onSubmit} className={`space-y-6 ${language === 'ar' ? 'text-right' : ''}`}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-[10px] uppercase tracking-widest font-bold text-charcoal-500">Name</label>
                <input
                  className={`w-full bg-transparent border-0 border-b ${errors.name ? 'border-primary' : 'border-charcoal-300 dark:border-charcoal-700'} focus:ring-0 focus:border-primary px-0 py-2 dark:text-white`}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder={language === 'ar' ? 'الاسم' : 'Name'}
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest font-bold text-charcoal-500">Business Name</label>
                <input
                  className={`w-full bg-transparent border-0 border-b ${errors.business ? 'border-primary' : 'border-charcoal-300 dark:border-charcoal-700'} focus:ring-0 focus:border-primary px-0 py-2 dark:text-white`}
                  value={form.business}
                  onChange={(e) => setForm({ ...form, business: e.target.value })}
                  placeholder={language === 'ar' ? 'اسم الشركة' : 'Business Name'}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-[10px] uppercase tracking-widest font-bold text-charcoal-500">Phone</label>
                <input
                  className={`w-full bg-transparent border-0 border-b ${errors.phone ? 'border-primary' : 'border-charcoal-300 dark:border-charcoal-700'} focus:ring-0 focus:border-primary px-0 py-2 dark:text-white`}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder={language === 'ar' ? 'الهاتف' : 'Phone'}
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest font-bold text-charcoal-500">Email</label>
                <input
                  type="email"
                  className={`w-full bg-transparent border-0 border-b ${errors.email ? 'border-primary' : 'border-charcoal-300 dark:border-charcoal-700'} focus:ring-0 focus:border-primary px-0 py-2 dark:text-white`}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder={language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                />
              </div>
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-widest font-bold text-charcoal-500">Message</label>
              <textarea
                rows="4"
                className={`w-full bg-transparent border-0 border-b ${errors.message ? 'border-primary' : 'border-charcoal-300 dark:border-charcoal-700'} focus:ring-0 focus:border-primary px-0 py-2 dark:text-white`}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder={language === 'ar' ? 'رسالتك' : 'Message'}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-charcoal-900 dark:bg-white text-white dark:text-charcoal-900 py-4 font-bold tracking-[0.2em] uppercase text-xs hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-colors"
            >
              {t.submit}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

