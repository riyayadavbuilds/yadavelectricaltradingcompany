import { Zap, ShieldCheck, Users } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    icon: Zap,
    t: "Fast Service",
    d: "We provide quick and efficient service for all your electrical needs.",
  },
  {
    icon: ShieldCheck,
    t: "Genuine Products",
    d: "We deal only in 100% original and branded products for long-lasting performance.",
  },
  {
    icon: Users,
    t: "Expert Technicians",
    d: "Our skilled and experienced technicians ensure safe and professional installations.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[var(--primary)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
            Why Choose Us
          </div>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-[var(--navy)] md:text-4xl">
            Committed to Quality &amp; Service
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-left"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[var(--accent)] text-[var(--primary)]">
                <it.icon className="h-6 w-6" strokeWidth={1.8} />
              </div>
              <div className="mt-5 font-display text-lg font-bold text-[var(--navy)]">
                {it.t}
              </div>
              <div className="mt-2 max-w-xs text-sm leading-relaxed text-slate-600">
                {it.d}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}