import { Zap, Facebook, Instagram, MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const company = ["About Us", "Our Services", "Projects", "Contact Us"];
const products = ["Batteries", "Inverters", "Fans", "Coolers", "Accessories"];
const quick = [
  { l: "Home", h: "#top" },
  { l: "About Us", h: "#about" },
  { l: "Products", h: "#categories" },
  { l: "Services", h: "#features" },
  { l: "Contact", h: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#08101f] text-white">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.3fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[#2563eb] to-[#60a5fa]">
                <Zap className="h-5 w-5 text-white" fill="white" strokeWidth={2.6} />
              </span>
              <div className="leading-tight">
                <div className="font-display text-sm font-extrabold tracking-tight">
                  YADAV ELECTRICAL
                </div>
                <div className="text-[10px] font-bold tracking-[0.18em] text-white/70">
                  TRADING COMPANY
                </div>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm text-white/65">
              Your trusted partner for all electrical solutions and services.
            </p>
            <div className="mt-5 flex gap-2.5">
              {[Facebook, Instagram, MessageCircle].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/8 transition-colors hover:bg-[var(--primary)]"
                >
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FCol title="Company" items={company.map((l) => ({ l, h: "#" }))} />
          <FCol title="Products" items={products.map((l) => ({ l, h: "#categories" }))} />
          <FCol title="Quick Links" items={quick} />

          <div>
            <div className="font-display text-sm font-bold">Contact Info</div>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[var(--electric-glow)]" />
                +91 98765 43210
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[var(--electric-glow)]" />
                info@yadavelectrical.com
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-[var(--electric-glow)]" />
                Gurgaon, Haryana
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/55">
          © {new Date().getFullYear()} Yadav Electrical Trading Company. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

function FCol({ title, items }: { title: string; items: { l: string; h: string }[] }) {
  return (
    <div>
      <div className="font-display text-sm font-bold">{title}</div>
      <ul className="mt-5 space-y-2.5 text-sm text-white/70">
        {items.map((it, i) => (
          <li key={i}>
            <a href={it.h} className="transition-colors hover:text-white">
              {it.l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}