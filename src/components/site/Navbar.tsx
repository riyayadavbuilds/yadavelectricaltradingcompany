import { useEffect, useState } from "react";
import { Zap, Phone, Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";

type NavLink = { label: string; to?: string; href?: string };
const links: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Brands", to: "/brands" },
  { label: "Stock", to: "/stock" },
  { label: "Services", href: "/#features" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("/");
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_-18px_rgba(15,27,61,0.25)] border-b border-slate-200/60"
          : "bg-white/60 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="relative grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-[#0f1b3d] to-[#3b6fa0] shadow-[0_6px_18px_-6px_rgba(15,27,61,0.45)]">
            <Zap className="h-5 w-5 text-white" strokeWidth={2.6} fill="white" />
          </span>
          <div className="leading-tight">
            <div className="font-display text-[17px] leading-none text-[var(--navy)]">
              Yadav Electrical
            </div>
            <div className="mt-1 text-[10px] font-semibold tracking-[0.22em] text-[var(--navy)]/70">
              TRADING COMPANY · EST. 2007
            </div>
          </div>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const key = l.to ?? l.href!;
            const cls = `relative px-3.5 py-2 text-sm font-medium transition-colors ${
              active === key ? "text-[var(--navy)]" : "text-slate-600 hover:text-[var(--navy)]"
            }`;
            const underline = active === key && (
              <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-[var(--navy)] to-[var(--electric)]" />
            );
            return l.to ? (
              <Link key={key} to={l.to} onClick={() => setActive(key)} className={cls} activeProps={{ className: "text-[var(--navy)]" }}>
                {l.label}{underline}
              </Link>
            ) : (
              <a key={key} href={l.href} onClick={() => setActive(key)} className={cls}>
                {l.label}{underline}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="tel:+919873490167"
            className="group hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0f1b3d] to-[#1e3a5f] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_28px_-10px_rgba(15,27,61,0.55)] transition-transform hover:scale-[1.03]"
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
            {links.map((l) => {
              const key = l.to ?? l.href!;
              const cls = "rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50";
              return l.to ? (
                <Link key={key} to={l.to} onClick={() => setOpen(false)} className={cls}>{l.label}</Link>
              ) : (
                <a key={key} href={l.href} onClick={() => setOpen(false)} className={cls}>{l.label}</a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}