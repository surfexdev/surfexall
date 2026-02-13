

export function SurfaceAnthology() {
  const items = [
    {
      src: "/tile1.jpg",
      series: "Collection 01",
      title: "Fractured Earth",
      description:
        "A dramatic surface inspired by natural stone fractures, delivering depth and rugged character ideal for bold architectural spaces.",
    },
    {
      src: "/tile2.jpg",
      series: "Collection 02",
      title: "Fossil Vein",
      description:
        "Soft mineral tones intersected by delicate veining patterns, creating a calm and refined surface suited for elegant interiors.",
    },
    {
      src: "/tile3.jpg",
      series: "Collection 03",
      title: "Basalt Grain",
      description:
        "Dense granular texture with industrial strength aesthetics, perfect for contemporary spaces demanding durability and style.",
    },
    {
      src: "/tile4.jpg",
      series: "Collection 04",
      title: "Strata Flow",
      description:
        "Layered stone formations translated into a flowing surface design, combining organic motion with modern architectural appeal.",
    },
    {
      src: "/kiln.jpg",
      series: "The Kiln",
      title: "Where Surfaces Are Forged",
      wide: true,
      description:
        "Every Surfex surface is born under extreme heat and precision firing, where raw materials transform into architectural strength.",
    },
  ];

  return (
    <section className="bg-charcoal-900 dark:bg-black py-24" id="portfolio">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-4">
              Material Portfolio
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading text-white">
              The Surface Anthology
            </h3>
          </div>
          <p className="max-w-md text-charcoal-400 font-light">
            Precision-engineered surfaces crafted for architectural excellence.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`relative group overflow-hidden
                ${item.wide
                  ? "aspect-[2/1] md:col-span-2"
                  : "aspect-square"
                }`}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />

              {/* Hover Overlay */}
              <div
                className={`absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-8 text-center`}
              >
                <div>
                  <span className="text-primary uppercase tracking-[0.2em] text-xs font-bold">
                    {item.series}
                  </span>

                  <h5
                    className={`${
                      item.wide ? "text-4xl" : "text-2xl"
                    } text-white font-heading mt-2`}
                  >
                    {item.title}
                  </h5>

                  {item.description && (
                    <p className="text-charcoal-200 mt-4 max-w-sm">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

