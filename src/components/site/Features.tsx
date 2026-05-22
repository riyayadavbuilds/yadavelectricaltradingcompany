import { Truck, Wrench, BatteryCharging, Plug, LifeBuoy, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { icon: Truck, t: "Home Delivery", d: "Same-day delivery across Gurugram on most products." },
  { icon: Wrench, t: "Installation Support", d: "Trained technicians for safe, neat installation." },
  { icon: BatteryCharging, t: "Battery Replacement", d: "On-spot diagnosis & swap with old-battery buyback." },
  { icon: Plug, t: "Inverter Repair", d: "All brands serviced — Luminous, Microtek, Sukam." },
  { icon: LifeBuoy, t: "Emergency Support", d: "Power outage? We respond within 60 minutes." },
  { icon: ShieldCheck, t: "Genuine Products", d: "Authorised dealer with manufacturer warranty." },
];

export function Features() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.4em] text-[var(--electric)]">Why choose us</div>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">More than a shop — <span className="text-gradient">your power partner.</span></h2>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl glass p-7 transition-all hover:-translate-y-1"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "linear-gradient(135deg, rgba(0,194,255,0.18), transparent 60%)" }} />
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--electric)]/10 ring-1 ring-[var(--electric)]/30">
                  <it.icon className="h-5 w-5 text-[var(--electric)]" />
                </div>
                <div className="mt-5 font-display text-lg font-semibold">{it.t}</div>
                <div className="mt-2 text-sm text-muted-foreground">{it.d}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}