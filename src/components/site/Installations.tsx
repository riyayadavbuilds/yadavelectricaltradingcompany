import { motion } from "framer-motion";
import inverter from "@/assets/inverter.png";
import battery from "@/assets/battery.png";

const shots = [
  { img: battery, label: "Battery bank install" },
  { img: battery, label: "Tubular battery setup" },
  { img: inverter, label: "Inverter unit" },
  { img: inverter, label: "Wall-mounted inverter" },
  { img: inverter, label: "EV charging point" },
  { img: battery, label: "Solar setup" },
];

export function Installations() {
  return (
    <section id="installations" className="relative bg-[var(--soft)] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[var(--primary)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
          Our Installations
        </div>
        <h2 className="mt-3 font-display text-3xl font-extrabold text-[var(--navy)] md:text-4xl">
          Trusted by Homes &amp; Businesses
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-6">
          {shots.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200"
            >
              <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-slate-50 to-slate-100">
                <img
                  src={s.img}
                  alt={s.label}
                  className="h-3/4 w-3/4 object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}