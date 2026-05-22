import { motion } from "framer-motion";
import battery from "@/assets/battery.png";
import inverter from "@/assets/inverter.png";
import cooler from "@/assets/cooler.png";
import fan from "@/assets/fan.png";
import wiring from "@/assets/wiring.png";
import { ArrowUpRight } from "lucide-react";

const cats = [
  { title: "Inverters", img: inverter, tagline: "Pure sine wave · 600VA–5kVA", color: "from-cyan-500/30 to-transparent" },
  { title: "Batteries", img: battery, tagline: "Tubular · Flat · Automotive", color: "from-blue-500/30 to-transparent" },
  { title: "Air Coolers", img: cooler, tagline: "Tower · Desert · Personal", color: "from-sky-500/30 to-transparent" },
  { title: "Fans & Lighting", img: fan, tagline: "Ceiling · BLDC · LED", color: "from-amber-500/20 to-transparent" },
  { title: "Wiring & Switches", img: wiring, tagline: "Modular · Copper · MCB", color: "from-orange-500/25 to-transparent" },
  { title: "Accessories", img: wiring, tagline: "Adapters · Plugs · Cables", color: "from-yellow-500/20 to-transparent" },
];

export function Categories() {
  return (
    <section id="categories" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.4em] text-[var(--electric)]">Shop by category</div>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Everything <span className="text-gradient">electric</span>, under one roof.</h2>
          </div>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground">View full catalogue →</a>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cats.map((c, i) => (
            <motion.a
              key={c.title}
              href="#contact"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-3xl glass p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[var(--electric)]/50"
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${c.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
              <div className="relative flex items-start justify-between">
                <div>
                  <div className="font-display text-xl font-semibold">{c.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{c.tagline}</div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--electric)]" />
              </div>
              <div className="relative mt-6 grid h-44 place-items-center">
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_center,rgba(0,194,255,0.18),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <img src={c.img} alt={c.title} className="h-44 w-44 object-contain transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3 drop-shadow-[0_0_30px_rgba(0,194,255,0.35)]" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}