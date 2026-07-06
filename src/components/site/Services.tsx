import { motion } from "framer-motion";
import {
  Cable,
  Truck,
  ShoppingBag,
  Wrench,
  PackageCheck,
  MessagesSquare,
  ArrowUpRight,
} from "lucide-react";
import { waLink, waMessages } from "@/lib/whatsapp";

const services = [
  {
    icon: Cable,
    t: "Electrical Supplies",
    d: "Complete range of wires, switches, breakers, fittings & accessories.",
  },
  {
    icon: Truck,
    t: "Wholesale Distribution",
    d: "Bulk supply for builders, contractors, factories and B2B accounts.",
  },
  {
    icon: ShoppingBag,
    t: "Retail Sales",
    d: "Walk-in showroom with live product demos and instant billing.",
  },
  {
    icon: Wrench,
    t: "Installation Support",
    d: "Certified technicians for inverters, batteries, fans and wiring.",
  },
  {
    icon: PackageCheck,
    t: "Doorstep Delivery",
    d: "Same-day delivery across Gurgaon and NCR sectors.",
  },
  {
    icon: MessagesSquare,
    t: "Expert Consultation",
    d: "Free load & product consultation before you buy — no obligation.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative bg-[var(--soft)] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-end gap-6 md:grid-cols-[1fr_auto]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-[var(--electric)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--electric)]" />
              Our Services
            </div>
            <h2 className="mt-4 font-display text-4xl leading-tight text-[var(--navy)] md:text-5xl">
              End-to-end electrical solutions,
              <br />
              <span className="italic text-[var(--electric)]">under one roof.</span>
            </h2>
          </div>
          <a
            href={waLink(waMessages.generic)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--navy)] px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-transform hover:scale-[1.02]"
          >
            Talk to us <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.article
              key={s.t}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-premium"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--electric)]/8 blur-3xl transition-opacity group-hover:bg-[var(--electric)]/14" />
              <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[var(--navy)] to-[var(--navy-2)] text-white shadow-[0_10px_28px_-10px_rgba(15,27,61,0.55)]">
                <s.icon className="h-6 w-6" strokeWidth={1.7} />
              </div>
              <h3 className="relative mt-6 font-display text-2xl leading-tight text-[var(--navy)]">
                {s.t}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-slate-600">
                {s.d}
              </p>
              <div className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--electric)] transition-transform group-hover:translate-x-0.5">
                Learn more <ArrowUpRight className="h-4 w-4" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}