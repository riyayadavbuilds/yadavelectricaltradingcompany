const brands = [
  "Havells",
  "Anchor",
  "Polycab",
  "Finolex",
  "Crompton",
  "Orient",
  "Luminous",
  "Microtek",
  "Exide",
  "Amaron",
  "Symphony",
  "Bajaj",
  "V-Guard",
];

export function Brands() {
  const loop = [...brands, ...brands];
  return (
    <section id="brands" className="relative bg-[var(--soft)] py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-[var(--electric)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--electric)]" />
          Authorised dealer of
        </div>
        <h2 className="mt-3 font-display text-3xl leading-tight text-[var(--navy)] md:text-5xl">
          Brands you <span className="italic text-[var(--electric)]">trust</span>.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-slate-600 md:text-base">
          We source every product directly from India's most reliable
          electrical manufacturers.
        </p>
      </div>
      <div className="mt-14 mask-fade overflow-hidden">
        <div className="flex w-max animate-marquee gap-4" style={{ animationDuration: "45s" }}>
          {loop.map((b, i) => (
            <div
              key={i}
              className="group flex h-24 w-56 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white px-8 shadow-soft transition-all hover:-translate-y-1 hover:border-[var(--electric)]/40 hover:shadow-premium"
            >
              <span className="font-display text-xl tracking-wide text-[var(--navy)]/80 transition-colors group-hover:text-[var(--navy)]">
                {b}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}