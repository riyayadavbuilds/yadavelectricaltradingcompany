import { motion } from "framer-motion";
import { Users, Smile, CheckCircle2, ArrowRight } from "lucide-react";
import owner from "@/assets/owner.jpg";

const stats = [
  { icon: Users, k: "18+", l: "Years Experience" },
  { icon: Smile, k: "10,000+", l: "Happy Customers" },
  { icon: CheckCircle2, k: "50+", l: "Trusted Brands" },
];

export function About() {
  return (
    <section id="about" className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl"
          >
            <img
              src={owner}
              alt="Electrical technician installing inverter and battery system"
              className="h-[520px] w-full object-cover"
            />
          </motion.div>

          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[var(--primary)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
              About Us
            </div>
            <h2 className="mt-4 font-display text-4xl leading-tight text-[var(--navy)] md:text-5xl">
              Powering Homes &amp;
              <br />
              Businesses <span className="italic text-[var(--electric)]">with Trust.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base text-slate-600">
              Since 2007, Yadav Electrical Trading Company has powered
              thousands of homes, shops and businesses across Gurgaon with
              genuine products, fair pricing and hands-on expertise from
              owner Mr. Harkesh Yadav himself.
            </p>

            <a
              href="#features"
              className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-[var(--primary)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_-10px_rgba(37,99,235,0.55)] transition-transform hover:scale-[1.02]"
            >
              Learn More
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {stats.map((s) => (
                <div key={s.l} className="flex items-start gap-3">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[var(--accent)] text-[var(--primary)]">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display text-2xl font-extrabold text-[var(--navy)]">
                      {s.k}
                    </div>
                    <div className="text-xs text-slate-500">{s.l}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}