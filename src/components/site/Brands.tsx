const brands = ["Luminous", "Okaya", "Eastman", "Microtek", "Exide", "Livguard", "Amaron", "Havells", "Anchor"];

export function Brands() {
  const loop = [...brands, ...brands];
  return (
    <section id="brands" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <div className="text-xs uppercase tracking-[0.4em] text-[var(--electric)]">Authorised dealer of</div>
        <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Brands you <span className="text-gradient">trust</span>.</h2>
      </div>
      <div className="mt-12 mask-fade overflow-hidden">
        <div className="flex w-max animate-marquee gap-4">
          {loop.map((b, i) => (
            <div key={i} className="group flex h-20 w-48 shrink-0 items-center justify-center rounded-2xl glass px-8 transition-all hover:border-[var(--electric)]/50">
              <span className="font-display text-xl font-bold tracking-wider text-muted-foreground transition-all group-hover:text-[var(--electric)] group-hover:[text-shadow:_0_0_20px_#00C2FF]">
                {b.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}