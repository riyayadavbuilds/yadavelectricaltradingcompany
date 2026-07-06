import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

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
    <div className="relative w-[360px] shrink-0 overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-premium">
      <Quote className="absolute right-5 top-5 h-8 w-8 text-[var(--accent)]" />
      <div className="flex items-center gap-0.5 text-[var(--gold)]">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="mt-4 min-h-[80px] text-sm leading-relaxed text-slate-700">
        “{r.text}”
      </p>
      <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
        <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-[var(--navy)] to-[var(--navy-2)] font-display text-white">
          {r.name[0]}
        </div>
        <div>
          <div className="font-display text-[15px] text-[var(--navy)]">{r.name}</div>
          <div className="text-xs text-slate-500">{r.area} · Google review</div>
        </div>
      </div>
    </div>
  );
}

export function Reviews() {
  const loop = [...reviews, ...reviews];
  return (
    <section id="reviews" className="relative bg-white py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-[var(--electric)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--electric)]" />
            Testimonials
          </div>
          <h2 className="mt-4 font-display text-4xl leading-tight text-[var(--navy)] md:text-5xl">
            Loved by <span className="italic text-[var(--electric)]">Gurgaon.</span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-1.5 text-[var(--gold)]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
            <span className="ml-2 text-sm font-semibold text-slate-600">
              4.9 / 5 · 300+ Google reviews
            </span>
          </div>
        </motion.div>
      </div>
      <div className="mt-14 mask-fade overflow-hidden">
        <div className="flex w-max animate-marquee gap-6" style={{ animationDuration: "60s" }}>
          {loop.map((r, i) => <Card key={i} r={r} />)}
        </div>
      </div>
    </section>
  );
}