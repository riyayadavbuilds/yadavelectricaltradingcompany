import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import battery from "@/assets/battery.png";
import inverter from "@/assets/inverter.png";
import cooler from "@/assets/cooler.png";
import fan from "@/assets/fan.png";
import wiring from "@/assets/wiring.png";

const cats = [
  { title: "Batteries", img: battery, tagline: "High performance long life batteries" },
  { title: "Inverters", img: inverter, tagline: "Reliable power backup solutions" },
  { title: "Fans", img: fan, tagline: "Wide range of ceiling & table fans" },
  { title: "Coolers", img: cooler, tagline: "Powerful cooling solutions" },
  { title: "Wiring Accessories", img: wiring, tagline: "Premium quality electrical accessories" },
  { title: "Charging Systems", img: inverter, tagline: "Efficient & safe charging solutions" },
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

        <div className="mt-10 grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {cats.map((c, i) => (
            <motion.a
              key={c.title}
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-4 transition-all hover:-translate-y-1 hover:border-[var(--primary)]/40 hover:shadow-[0_18px_40px_-20px_rgba(15,23,42,0.18)]"
            >
              <div className="relative grid h-28 place-items-center rounded-xl bg-[var(--soft)]">
                <img
                  src={c.img}
                  alt={c.title}
                  className="h-24 w-24 object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-3 font-display text-sm font-bold text-[var(--navy)]">
                {c.title}
              </div>
              <div className="mt-1 line-clamp-2 text-xs text-slate-500">
                {c.tagline}
              </div>
              <ArrowUpRight className="absolute bottom-4 right-4 h-4 w-4 text-slate-400 transition-colors group-hover:text-[var(--primary)]" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}