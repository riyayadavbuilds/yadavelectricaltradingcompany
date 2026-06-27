import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { waProduct } from "@/lib/whatsapp";
import automotiveBattery from "@/assets/products/automotive-battery.jpg";
import inverterBattery from "@/assets/products/inverter-battery.jpg";
import inverter from "@/assets/products/inverter.jpg";
import solar from "@/assets/products/solar.jpg";
import ceilingFan from "@/assets/products/ceiling-fan.jpg";
import exhaustFan from "@/assets/products/exhaust-fan.jpg";
import cooler from "@/assets/products/cooler.jpg";
import pump from "@/assets/products/pump.jpg";
import wires from "@/assets/products/wires.jpg";
import switches from "@/assets/products/switches.jpg";
import led from "@/assets/products/led.jpg";
import mcb from "@/assets/products/mcb.jpg";
import dbBox from "@/assets/products/db-box.jpg";
import pvcPipes from "@/assets/products/pvc-pipes.jpg";
import extension from "@/assets/products/extension.jpg";
import stabilizer from "@/assets/products/stabilizer.jpg";

type Cat = {
  title: string;
  img: string;
  tagline: string;
  brands: string[];
};

const cats: Cat[] = [
  { title: "Automotive Batteries", img: automotiveBattery, tagline: "Long-life car & commercial vehicle batteries", brands: ["Exide", "Amaron", "SF Sonic"] },
  { title: "Inverter Batteries", img: inverterBattery, tagline: "Tall tubular batteries for home power backup", brands: ["Luminous", "Exide", "Livguard"] },
  { title: "Home Inverters", img: inverter, tagline: "Smart sine-wave inverters for uninterrupted power", brands: ["Luminous", "Microtek", "V-Guard"] },
  { title: "Solar Products", img: solar, tagline: "Solar panels, inverters & complete off-grid kits", brands: ["Luminous", "Microtek", "Havells"] },
  { title: "Ceiling Fans", img: ceilingFan, tagline: "Premium energy-efficient ceiling fans", brands: ["Crompton", "Havells", "Orient"] },
  { title: "Exhaust Fans", img: exhaustFan, tagline: "High-airflow exhaust & ventilation fans", brands: ["Crompton", "Bajaj", "Usha"] },
  { title: "Air Coolers", img: cooler, tagline: "Powerful desert & personal coolers for every room", brands: ["Bajaj", "Symphony", "Crompton"] },
  { title: "Water Pumps", img: pump, tagline: "Reliable monoblock & submersible pumps", brands: ["Crompton", "Kirloskar", "Texmo"] },
  { title: "Wires & Cables", img: wires, tagline: "ISI-marked house wires and industrial cables", brands: ["Polycab", "Finolex", "RR Kabel"] },
  { title: "Modular Switches", img: switches, tagline: "Premium modular switches, sockets & plates", brands: ["Anchor", "Goldmedal", "Legrand"] },
  { title: "LED Lights", img: led, tagline: "LED bulbs, panels & decorative lighting", brands: ["Havells", "Bajaj", "Crompton"] },
  { title: "MCBs & RCCBs", img: mcb, tagline: "Safety switchgear for homes and industries", brands: ["Schneider", "Legrand", "Havells"] },
  { title: "Distribution Boards", img: dbBox, tagline: "DB boxes with built-in protection devices", brands: ["Havells", "Schneider", "ABB"] },
  { title: "PVC Conduit Pipes", img: pvcPipes, tagline: "Durable PVC wiring conduits & accessories", brands: ["Polycab", "Finolex", "AKG"] },
  { title: "Extension Boards", img: extension, tagline: "Premium spike-protected extension boards", brands: ["Goldmedal", "Anchor", "Havells"] },
  { title: "Voltage Stabilizers", img: stabilizer, tagline: "Stabilizers for ACs, TVs & refrigerators", brands: ["V-Guard", "Microtek", "Luminous"] },
];

export function Categories() {
  return (
    <section id="categories" className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[var(--primary)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
              Our Products
            </div>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-[var(--navy)] md:text-4xl">
              Quality Products for Every Need
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--primary)] hover:underline"
          >
            View All Products <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cats.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-sm shadow-[0_4px_20px_-8px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--primary)]/30 hover:shadow-[0_24px_50px_-20px_rgba(37,99,235,0.25)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[var(--soft)] to-white">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="absolute inset-0 h-full w-full object-contain p-6 transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/0 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <div className="flex flex-1 flex-col gap-3 p-5">
                <h3 className="font-display text-base font-bold leading-tight text-[var(--navy)]">
                  {c.title}
                </h3>
                <p className="line-clamp-2 text-sm leading-relaxed text-slate-600">
                  {c.tagline}
                </p>

                <div className="mt-1 flex flex-wrap gap-1.5">
                  {c.brands.map((b) => (
                    <span
                      key={b}
                      className="inline-flex items-center rounded-full border border-slate-200 bg-[var(--soft)] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-600"
                    >
                      {b}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-3">
                  <a
                    href={waProduct(c.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Enquire about ${c.title} on WhatsApp`}
                    className="inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:brightness-110 hover:shadow-[0_8px_20px_-6px_rgba(37,211,102,0.45)]"
                    style={{ backgroundColor: "#25D366" }}
                  >
                    Enquire on WhatsApp
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}