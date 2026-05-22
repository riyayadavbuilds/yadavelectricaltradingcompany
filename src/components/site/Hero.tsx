import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Sparkles } from "lucide-react";
import inverter from "@/assets/inverter.png";
import owner from "@/assets/owner.jpg";
import battery from "@/assets/battery.png";
import cooler from "@/assets/cooler.png";
import fan from "@/assets/fan.png";
import wiring from "@/assets/wiring.png";

const orbit = [
  { label: "Batteries", img: battery },
  { label: "Inverters", img: inverter },
  { label: "Coolers", img: cooler },
  { label: "Fans", img: fan },
  { label: "Wiring", img: wiring },
  { label: "Accessories", img: battery },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden pt-28 md:pt-32">
      {/* Backdrop layers */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,194,255,0.18),_transparent_60%)]" />
      <div className="absolute -left-40 top-40 h-[500px] w-[500px] rounded-full bg-[var(--electric)]/20 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[var(--warm)]/20 blur-[120px]" />

      {/* Floating particles */}
      {Array.from({ length: 18 }).map((_, i) => (
        <span
          key={i}
          aria-hidden
          className="pointer-events-none absolute h-1 w-1 rounded-full bg-[var(--electric)] animate-pulse-glow"
          style={{
            top: `${(i * 53) % 95}%`,
            left: `${(i * 37) % 95}%`,
            boxShadow: "0 0 12px #00C2FF",
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 pb-24 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        {/* Copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-[var(--electric)]"
          >
            <Sparkles className="h-3 w-3" /> Sector 91 · Gurugram
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl"
          >
            Yadav <span className="text-gradient">Electricals</span> <br />
            & <span className="text-gradient">Battery House</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl"
          >
            Trusted electrical, inverter & battery solutions in Gurugram. Genuine products,
            honest pricing, and on-site installation — right at Kankrola Main Bus Stand.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a href="tel:+910000000000" className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[var(--electric)] px-6 py-3 text-sm font-semibold text-black transition-all hover:scale-[1.03] hover:shadow-[0_0_50px_#00C2FF]">
              <Phone className="h-4 w-4" /> Call Now
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
            <a href="https://wa.me/910000000000" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-white/10">
              <MessageCircle className="h-4 w-4 text-emerald-400" /> WhatsApp Us
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-[var(--neon)]/40 px-6 py-3 text-sm font-semibold text-[var(--neon)] transition-all hover:bg-[var(--neon)]/10">
              <MapPin className="h-4 w-4" /> Visit Store
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-12 grid max-w-md grid-cols-3 gap-6 text-sm"
          >
            {[
              { k: "15+", v: "Years" },
              { k: "10k+", v: "Customers" },
              { k: "24/7", v: "Support" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-3xl font-bold text-gradient">{s.k}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Visual */}
        <div className="relative mx-auto aspect-square w-full max-w-[560px]">
          {/* Orbit rings */}
          <div className="absolute inset-0 rounded-full border border-[var(--electric)]/20 animate-spin-slow" />
          <div className="absolute inset-8 rounded-full border border-[var(--neon)]/15" style={{ animation: "spin-slow 45s linear infinite reverse" }} />
          <div className="absolute inset-16 rounded-full border border-white/10" />

          {/* Glow */}
          <div className="absolute inset-12 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,194,255,0.35),transparent_70%)] blur-2xl animate-pulse-glow" />

          {/* Center hero: owner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="absolute inset-[18%] overflow-hidden rounded-full border-2 border-[var(--electric)]/40 glow-blue"
          >
            <img src={owner} alt="Owner of Yadav Electricals & Battery House" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </motion.div>

          {/* Orbiting product chips */}
          {orbit.map((p, i) => {
            const angle = (i / orbit.length) * Math.PI * 2;
            const r = 48; // percent
            const x = 50 + Math.cos(angle) * r;
            const y = 50 + Math.sin(angle) * r;
            return (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
                style={{ left: `${x}%`, top: `${y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
              >
                <div className="group flex h-20 w-20 items-center justify-center rounded-full glass-strong animate-float hover:scale-110 transition-transform" style={{ animationDelay: `${i * 0.4}s` }}>
                  <img src={p.img} alt={p.label} className="h-12 w-12 object-contain" />
                </div>
                <div className="mt-1 text-center text-[10px] uppercase tracking-widest text-muted-foreground">{p.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}