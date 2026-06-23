import { useEffect, useState } from "react";
import { Zap, Phone, Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#top" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#categories" },
  { label: "Services", href: "#features" },
  { label: "Projects", href: "#installations" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#top");
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white transition-shadow ${
        scrolled ? "shadow-[0_4px_20px_-12px_rgba(15,23,42,0.18)]" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="relative grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[#2563eb] to-[#60a5fa] shadow-[0_6px_18px_-6px_rgba(37,99,235,0.55)]">
            <Zap className="h-5 w-5 text-white" strokeWidth={2.6} fill="white" />
          </span>
          <div className="leading-tight">
            <div className="font-display text-[15px] font-extrabold tracking-tight text-[var(--navy)]">
              YADAV ELECTRICAL
            </div>
            <div className="text-[10px] font-bold tracking-[0.18em] text-[var(--navy)]/80">
              TRADING COMPANY
            </div>
          </div>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setActive(l.href)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                active === l.href ? "text-[var(--navy)]" : "text-slate-600 hover:text-[var(--navy)]"
              }`}
            >
              {l.label}
              {active === l.href && (
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-[var(--primary)]" />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="tel:+919873490167"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2563eb] to-[#3b82f6] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_22px_-8px_rgba(37,99,235,0.6)] transition-transform hover:scale-[1.03]"
          >
            <Phone className="h-4 w-4" />
            <span>Call Now</span>
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 text-slate-700 md:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-100 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}