import { Star } from "lucide-react";

const reviews = [
  { name: "Rohit Sharma", text: "Best inverter service in Gurugram. Owner himself helped me pick the right one for my 3BHK.", area: "Sector 89" },
  { name: "Anjali Verma", text: "Quick battery replacement and honest pricing. Saved me ₹1500 vs the online quote!", area: "Kankrola" },
  { name: "Mohit Yadav", text: "Very good owner behaviour and fast response. Visited at 9 PM, still got installation same night.", area: "Sector 91" },
  { name: "Suresh Kumar", text: "Trusted electrical shop near Sector 91. Genuine Luminous warranty and proper bill.", area: "Manesar" },
  { name: "Pooja Singh", text: "Affordable prices with genuine products. Highly recommended for inverter and battery work.", area: "Sector 92" },
  { name: "Arun Gupta", text: "Got my whole house wired here. Quality switches, neat work, fair price. Will return.", area: "Gurugram" },
];

function Card({ r }: { r: (typeof reviews)[number] }) {
  return (
    <div className="w-[340px] shrink-0 rounded-2xl glass p-6">
      <div className="flex items-center gap-1 text-[var(--neon)]">
        {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-4 w-4 fill-current" />))}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-foreground/90">"{r.text}"</p>
      <div className="mt-5 flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[var(--electric)] to-cyan-700 font-display font-bold text-black">{r.name[0]}</div>
        <div>
          <div className="text-sm font-semibold">{r.name}</div>
          <div className="text-xs text-muted-foreground">{r.area} · Google review</div>
        </div>
      </div>
    </div>
  );
}

export function Reviews() {
  const loop = [...reviews, ...reviews];
  return (
    <section id="reviews" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <div className="text-xs uppercase tracking-[0.4em] text-[var(--electric)]">What customers say</div>
        <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Loved by <span className="text-gradient">Gurugram</span>.</h2>
        <p className="mt-4 text-muted-foreground">Real reviews from real neighbours.</p>
      </div>
      <div className="mt-12 mask-fade overflow-hidden">
        <div className="flex w-max animate-marquee gap-5" style={{ animationDuration: "55s" }}>
          {loop.map((r, i) => <Card key={i} r={r} />)}
        </div>
      </div>
    </section>
  );
}