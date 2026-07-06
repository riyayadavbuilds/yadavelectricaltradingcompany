import { motion } from "framer-motion";
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  MessageCircle,
  Sparkles,
  BatteryCharging,
  Fan,
  Snowflake,
  Lightbulb,
  Zap,
} from "lucide-react";
import { waHero } from "@/lib/whatsapp";
import inverter from "@/assets/products/inverter.jpg";
import battery from "@/assets/products/inverter-battery.jpg";
import cooler from "@/assets/products/cooler.jpg";
import fan from "@/assets/products/ceiling-fan.jpg";
import led from "@/assets/products/led.jpg";

type PCard = {
  img: string;
  name: string;
  brands: string;
  icon: React.ComponentType<{ className?: string }>;
  className: string;
  delay: number;
  float: string;
};

const cards: PCard[] = [
  {
    img: inverter,
    name: "Home Inverters",
    brands: "Luminous · Microtek",
    icon: Zap,
    className: "left-[2%] top-[6%] w-[54%]",
    delay: 0.15,
    float: "animate-float",
  },
  {
    img: battery,
    name: "Tubular Batteries",
    brands: "Exide · Amaron · Livguard",
    icon: BatteryCharging,
    className: "right-[0%] top-[22%] w-[52%]",
    delay: 0.28,
    float: "animate-float-slow",
  },
  {
    img: fan,
    name: "Ceiling Fans",
    brands: "Crompton · Havells · Orient",
    icon: Fan,
    className: "left-[6%] top-[46%] w-[46%]",
    delay: 0.4,
    float: "animate-float-slow",
  },
  {
    img: cooler,
    name: "Air Coolers",
    brands: "Symphony · Bajaj",
    icon: Snowflake,
    className: "right-[4%] top-[58%] w-[48%]",
    delay: 0.5,
    float: "animate-float",
  },
  {
    img: led,
    name: "LED Lighting",
    brands: "Havells · Bajaj",
    icon: Lightbulb,
    className: "left-[26%] bottom-[-2%] w-[42%]",
    delay: 0.6,
    float: "animate-float-slow",
  },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden warm-bg pt-32 md:pt-36">
      {/* Soft ambient */}
      <div className="pointer-events-none absolute right-[-10%] top-10 h-[720px] w-[720px] rounded-full bg-[radial-gradient(closest-side,_rgba(59,111,160,0.16),_transparent_70%)]" />
      <div className="pointer-events-none absolute -left-32 top-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,_rgba(201,168,76,0.10),_transparent_70%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 pb-20 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-10">
        {/* Copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3.5 py-1.5 text-xs font-medium text-slate-600 shadow-soft backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5 text-[var(--gold)]" />
            Gurgaon, Haryana · Est. 2007
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.05 }}
            className="mt-6 font-display text-[44px] leading-[1.02] tracking-tight text-[var(--navy)] sm:text-6xl md:text-[68px]"
          >
            Powering Homes
            <br />
            &amp; Businesses
            <br />
            <span className="italic text-[var(--electric)]">Since 2007.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 md:text-lg"
          >
            Gurgaon's trusted electrical trading company for inverters,
            batteries, fans, air coolers, wiring and accessories — sourced
            directly from India's top brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#categories"
              className="group inline-flex items-center gap-2 rounded-2xl bg-[var(--navy)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_36px_-14px_rgba(15,27,61,0.55)] transition-transform hover:scale-[1.02]"
            >
              Explore Products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="tel:+919873490167"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white/80 px-6 py-3.5 text-sm font-semibold text-[var(--navy)] backdrop-blur transition-colors hover:border-[var(--navy)]"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a
              href={waHero}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-semibold text-white shadow-[0_14px_36px_-14px_rgba(37,211,102,0.55)] transition-transform hover:scale-[1.02]"
              style={{ backgroundColor: "#25D366" }}
            >
              <MessageCircle className="h-4 w-4" fill="white" strokeWidth={1.6} />
              WhatsApp
            </a>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 grid max-w-lg grid-cols-3 gap-4"
          >
            {[
              { k: "18+", l: "Years" },
              { k: "10k+", l: "Customers" },
              { k: "50+", l: "Brands" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 shadow-soft backdrop-blur"
              >
                <div className="font-display text-2xl leading-none text-[var(--navy)]">
                  {s.k}
                </div>
                <div className="mt-1 text-[11px] font-medium uppercase tracking-[0.15em] text-slate-500">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating product cards */}
        <div className="relative mx-auto h-[560px] w-full max-w-[560px] sm:h-[640px]">
          {/* Backplate */}
          <div className="absolute inset-6 rounded-[36px] bg-gradient-to-br from-[var(--navy)] to-[var(--navy-2)]" />
          <div className="absolute inset-6 rounded-[36px] bg-[radial-gradient(circle_at_20%_10%,_rgba(255,255,255,0.14),_transparent_50%),radial-gradient(circle_at_80%_80%,_rgba(201,168,76,0.18),_transparent_55%)]" />
          <div className="absolute inset-8 rounded-[30px] border border-white/10" />

          {/* Corner tag */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute right-6 top-2 z-20 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-premium"
          >
            <ShieldCheck className="h-4 w-4 text-[var(--electric)]" />
            <span className="text-xs font-semibold text-[var(--navy)]">
              100% Genuine · Warranty
            </span>
          </motion.div>

          {cards.map((c) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 24, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: c.delay, ease: [0.22, 1, 0.36, 1] }}
              className={`absolute ${c.className} ${c.float}`}
            >
              <div className="group overflow-hidden rounded-2xl bg-white shadow-premium ring-1 ring-slate-200/60 transition-transform duration-500 hover:-translate-y-1">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-white to-[var(--soft)]">
                  <img
                    src={c.img}
                    alt={c.name}
                    loading="lazy"
                    className="h-full w-full object-contain p-3 transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute left-2.5 top-2.5 grid h-7 w-7 place-items-center rounded-full bg-[var(--navy)] text-white">
                    <c.icon className="h-3.5 w-3.5" />
                  </div>
                </div>
                <div className="border-t border-slate-100 px-3 py-2">
                  <div className="truncate font-display text-[13px] leading-tight text-[var(--navy)]">
                    {c.name}
                  </div>
                  <div className="mt-0.5 truncate text-[10px] font-medium text-slate-500">
                    {c.brands}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}