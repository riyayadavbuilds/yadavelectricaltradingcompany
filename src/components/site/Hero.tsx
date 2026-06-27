import { motion } from "framer-motion";
import { Phone, ArrowRight, Star, Truck, Wrench, ShieldCheck, Zap, MessageCircle } from "lucide-react";
import { waHero } from "@/lib/whatsapp";
import inverter from "@/assets/inverter.png";
import battery from "@/assets/battery.png";
import cooler from "@/assets/cooler.png";
import fan from "@/assets/fan.png";

const trust = [
  { icon: Star, t: "5.0 Rated Service", d: "Trusted by 1000+ Customers" },
  { icon: Truck, t: "Fast Delivery", d: "On-time & Safe Delivery" },
  { icon: Wrench, t: "Installation Support", d: "Expert Installation Team" },
  { icon: ShieldCheck, t: "Genuine Products", d: "100% Original & Branded" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white pt-28 md:pt-32">
      {/* Soft hero background */}
      <div className="pointer-events-none absolute right-0 top-20 h-[640px] w-[860px] -translate-y-10 rounded-full bg-[radial-gradient(closest-side,_rgba(96,165,250,0.22),_transparent_70%)]" />
      <div className="pointer-events-none absolute -right-20 top-40 h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,_rgba(244,114,182,0.12),_transparent_70%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 pb-16 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        {/* Copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600"
          >
            <span className="grid h-5 w-5 place-items-center rounded-full bg-[var(--primary)]/15">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
            </span>
            Reliable Power Solutions Since 2005
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-5 font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-[var(--navy)] md:text-7xl"
          >
            YADAV
            <br />
            ELECTRICAL
            <br />
            <span className="text-[var(--primary)]">TRADING COMPANY</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-6 max-w-md text-base text-slate-600 md:text-lg"
          >
            Your trusted partner for batteries, inverters, fans, coolers and
            complete electrical solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href={waHero}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_-10px_rgba(37,211,102,0.6)] transition-transform hover:scale-[1.02]"
              style={{ backgroundColor: "#25D366" }}
            >
              <MessageCircle className="h-4 w-4" fill="white" strokeWidth={1.6} />
              Get Quote on WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#categories"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--navy)] px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
            >
              Explore Products
            </a>
            <a
              href="tel:+919873490167"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-[var(--navy)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </motion.div>
        </div>

        {/* Product collage */}
        <div className="relative mx-auto aspect-square w-full max-w-[560px]">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_60%_45%,_rgba(37,99,235,0.10),_transparent_65%)]" />
          <div className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200/70" />

          {/* Trusted badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute left-[18%] top-[8%] grid h-20 w-20 place-items-center rounded-full bg-white text-center shadow-[0_10px_30px_-8px_rgba(15,23,42,0.18)] ring-1 ring-slate-100"
          >
            <div>
              <Zap className="mx-auto h-4 w-4 text-[var(--primary)]" fill="currentColor" />
              <div className="text-[9px] font-bold leading-tight text-[var(--navy)]">
                Trusted
                <br />
                Quality
              </div>
            </div>
          </motion.div>

          {/* Battery */}
          <motion.img
            src={battery}
            alt="Luminous Solar 150Ah Battery"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="absolute bottom-[14%] left-[2%] h-[58%] w-auto object-contain drop-shadow-[0_20px_30px_rgba(15,23,42,0.18)]"
          />
          {/* Inverter */}
          <motion.img
            src={inverter}
            alt="Luminous Inverter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="absolute bottom-[8%] left-[28%] h-[42%] w-auto object-contain drop-shadow-[0_20px_30px_rgba(15,23,42,0.2)]"
          />
          {/* Fan */}
          <motion.img
            src={fan}
            alt="Ceiling Fan"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="absolute right-[18%] top-[8%] h-[44%] w-auto object-contain drop-shadow-[0_20px_30px_rgba(15,23,42,0.18)]"
          />
          {/* Cooler */}
          <motion.img
            src={cooler}
            alt="Air Cooler"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="absolute bottom-[10%] right-[2%] h-[52%] w-auto object-contain drop-shadow-[0_20px_30px_rgba(15,23,42,0.18)]"
          />

          {/* Lightning bolt accent */}
          <Zap
            className="absolute bottom-[2%] left-[42%] h-9 w-9 -rotate-12 text-amber-400"
            fill="currentColor"
          />
        </div>
      </div>

      {/* Trust strip */}
      <div className="relative border-y border-slate-200 bg-[var(--soft)]">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-6 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map((t) => (
            <div key={t.t} className="flex items-center gap-3">
              <t.icon className="h-7 w-7 text-[var(--primary)]" strokeWidth={1.8} />
              <div>
                <div className="text-sm font-bold text-[var(--navy)]">{t.t}</div>
                <div className="text-xs text-slate-500">{t.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}