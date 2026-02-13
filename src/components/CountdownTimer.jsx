import { useEffect, useState } from 'react';

function getTimeRemaining(target) {
  const total = target - new Date().getTime();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
}

export function CountdownTimer() {
  const targetDate = new Date('2026-12-08T09:00:00Z').getTime();
  const [time, setTime] = useState(getTimeRemaining(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeRemaining(targetDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex gap-6 mt-8 justify-center text-charcoal-700 dark:text-charcoal-300">
      {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, idx) => {
        const value = [time.days, time.hours, time.minutes, time.seconds][idx];
        return (
          <div key={label} className="text-center">
            <div className="text-3xl font-heading text-charcoal-900 dark:text-white">{String(value).padStart(2, '0')}</div>
            <div className="text-xs uppercase tracking-widest">{label}</div>
          </div>
        );
      })}
    </div>
  );
}
