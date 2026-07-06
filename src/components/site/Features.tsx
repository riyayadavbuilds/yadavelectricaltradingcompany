import { motion } from "framer-motion";
import {
  ShieldCheck,
  Truck,
  Wrench,
  HeadphonesIcon,
  Store,
  Boxes,
  ClipboardCheck,
  BadgeIndianRupee,
} from "lucide-react";

const stats = [
  { k: "18+", l: "Years Experience" },
  { k: "10,000+", l: "Happy Customers" },
  { k: "50+", l: "Trusted Brands" },
  { k: "1000+", l: "Installations" },
];

const items = [
  {
    icon: ShieldCheck,
    t: "100% Genuine Products",
    d: "Sourced directly from authorised manufacturers with full warranty backing.",
  },
  {
    icon: BadgeIndianRupee,
    t: "Fair, Transparent Pricing",
    d: "Honest wholesale-level pricing on every SKU — no hidden charges, ever.",
  },
  {
    icon: Truck,
    t: "Fast Local Delivery",
    d: "Same-day dispatch across Gurgaon and neighbouring sectors.",
  },
  {
    icon: Wrench,
    t: "Expert Guidance",
    d: "Mr. Harkesh Yadav personally recommends the right product for your load.",
  },
  {
    icon: ClipboardCheck,
    t: "Certified Installation",
    d: "Trained technicians handle wiring, mounting and commissioning safely.",
  },
  {
    icon: HeadphonesIcon,
    t: "After-Sales Support",
    d: "Warranty claims, service requests and troubleshooting — one call away.",
  },
  {
    icon: Boxes,
    t: "Wholesale & Retail",
    d: "Serving homeowners, builders, contractors and B2B accounts alike.",
  },
  {
    icon: Store,
    t: "In-store Experience",
    d: "Walk in and test products live at our Kankrola showroom.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-[var(--electric)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--electric)]" />
            Why Choose Us
          </div>
          <h2 className="mt-4 font-display text-4xl leading-tight text-[var(--navy)] md:text-5xl">
            Two decades of trust,
            <br />
            <span className="italic text-[var(--electric)]">built one customer at a time.</span>
          </h2>
        </div>

        {/* Stat cards */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-[var(--soft)] p-7 shadow-soft"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[var(--electric)]/8 blur-2xl" />
              <div className="font-display text-5xl leading-none text-[var(--navy)]">
                {s.k}
              </div>
              <div className="mt-3 text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
                {s.l}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reasons */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              className="group rounded-3xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-[var(--electric)]/40 hover:shadow-premium"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--accent)] text-[var(--navy)] transition-colors group-hover:bg-[var(--navy)] group-hover:text-white">
                <it.icon className="h-5 w-5" strokeWidth={1.8} />
              </div>
              <div className="mt-5 font-display text-lg leading-snug text-[var(--navy)]">
                {it.t}
              </div>
              <div className="mt-2 text-sm leading-relaxed text-slate-600">
                {it.d}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}