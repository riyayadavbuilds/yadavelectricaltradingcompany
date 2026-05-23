import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ShieldCheck, BadgeIndianRupee, HeartHandshake, Wrench } from "lucide-react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const start = performance.now();
        const dur = 1600;
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          setN(Math.floor(p * to));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{n.toLocaleString("en-IN")}{suffix}</span>;
}

const traits = [
  { icon: ShieldCheck, title: "100% Genuine", desc: "Only authorised brand stock with manufacturer warranty." },
  { icon: BadgeIndianRupee, title: "Best Pricing", desc: "Honest, transparent rates — better than online prices." },
  { icon: HeartHandshake, title: "Trusted Locally", desc: "Serving Sector 91 and nearby Gurugram for years." },
  { icon: Wrench, title: "Expert Service", desc: "In-house battery & inverter installation experts." },
];

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(0,194,255,0.08),_transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="text-xs uppercase tracking-[0.4em] text-[var(--electric)]">Our Promise</div>
          <h2 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl">
            Powering homes with <span className="text-gradient">trust</span> — one connection at a time.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            For years, families and businesses across Gurugram have relied on us for reliable inverters,
            batteries, and electricals. Our promise is simple — genuine products, honest pricing, and service
            that treats every customer like family.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-4">
          {traits.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:border-[var(--electric)]/40"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[var(--electric)]/10 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
              <t.icon className="h-7 w-7 text-[var(--electric)]" />
              <div className="mt-4 font-display font-semibold">{t.title}</div>
              <div className="mt-1 text-sm text-muted-foreground">{t.desc}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-4 rounded-3xl glass-strong p-8 md:grid-cols-3 md:p-12">
          {[
            { v: 20, s: "+", l: "Years of service" },
            { v: 30000, s: "+", l: "Happy customers" },
            { v: 70000, s: "+", l: "Products delivered" },
          ].map((c) => (
            <div key={c.l} className="text-center">
              <div className="font-display text-5xl font-bold text-gradient md:text-6xl">
                <Counter to={c.v} suffix={c.s} />
              </div>
              <div className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">{c.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}