export function Marquee() {
  const items = [
    "MAUI OCEANFRONT MARATHON",
    "RUN PARADISE",
    "BOSTON QUALIFIER",
    "JANUARY 2027",
    "26.2 MILES",
    "ALOHA",
  ];

  const repeated = [...items, ...items];

  return (
    <section className="relative -my-6 z-10">
      <div className="bg-brand -rotate-[1.2deg] scale-[1.05] py-5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {repeated.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="mx-4 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-white/90 flex-shrink-0 flex items-center gap-4"
            >
              {item}
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                className="text-white/30 flex-shrink-0"
              >
                <circle cx="10" cy="10" r="4" fill="currentColor" />
              </svg>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
