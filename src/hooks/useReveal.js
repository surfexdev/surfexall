import { useEffect } from 'react';

export function useReveal(selector = 'section > div') {
  useEffect(() => {
    const options = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, options);
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => {
      el.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, [selector]);
}

