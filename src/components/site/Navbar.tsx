import { useEffect, useState } from "react";
import { Zap, Phone } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Categories", href: "#categories" },
  { label: "Brands", href: "#brands" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 ${
          scrolled ? "glass-strong mx-4 md:mx-auto" : "mx-4 md:mx-auto bg-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2">
          <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[var(--electric)] to-cyan-500">
            <Zap className="h-5 w-5 text-black" strokeWidth={2.5} />
            <span className="absolute inset-0 rounded-xl bg-[var(--electric)] opacity-40 blur-md" />
          </span>
          <div className="leading-tight">
            <div className="font-display text-sm font-bold tracking-tight md:text-base">Yadav Electricals</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">& Battery House</div>
          </div>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground">
              {l.label}
            </a>
          ))}
        </div>
        <a href="tel:+910000000000" className="group relative inline-flex items-center gap-2 rounded-full bg-[var(--electric)] px-4 py-2 text-sm font-semibold text-black transition-all hover:shadow-[0_0_30px_#00C2FF]">
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">Call Now</span>
        </a>
      </nav>
    </header>
  );
}