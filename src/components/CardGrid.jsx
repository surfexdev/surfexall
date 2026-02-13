export function CardGrid({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((item) => (
        <div key={item.title} className="group border border-charcoal-200 dark:border-charcoal-800 p-8 transition-colors hover:border-primary">
          <h4 className="text-2xl font-heading mb-4 dark:text-white">{item.title}</h4>
          <p className="text-charcoal-700 dark:text-charcoal-300">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

