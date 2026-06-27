import { Zap, Facebook, Instagram, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { waGeneric, PHONE_DISPLAY, PHONE_TEL } from "@/lib/whatsapp";

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
              <a href="#" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full bg-white/8 transition-colors hover:bg-[var(--primary)]">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full bg-white/8 transition-colors hover:bg-[var(--primary)]">
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={waGeneric}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="grid h-9 w-9 place-items-center rounded-full transition-transform hover:scale-110"
                style={{ backgroundColor: "#25D366" }}
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
            <a
              href={waGeneric}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
              style={{ backgroundColor: "#25D366" }}
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>

          <FCol title="Company" items={company.map((l) => ({ l, h: "#" }))} />
          <FCol title="Products" items={products.map((l) => ({ l, h: "#categories" }))} />
          <FCol title="Quick Links" items={quick} />

          <div>
            <div className="font-display text-sm font-bold">Contact Info</div>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li>
                <a href={PHONE_TEL} className="flex items-center gap-2.5 transition-colors hover:text-white">
                  <Phone className="h-4 w-4 text-[var(--electric-glow)]" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={waGeneric} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 transition-colors hover:text-white">
                  <MessageCircle className="h-4 w-4 text-[var(--electric-glow)]" />
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[var(--electric-glow)]" />
                info@yadavelectrical.com
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-[var(--electric-glow)]" />
                Kankrola Bhangrola, Gurugram
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