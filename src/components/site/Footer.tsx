import { Zap, Instagram, Facebook, Phone, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative pt-20 pb-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative h-px w-full overflow-hidden bg-white/10">
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-[var(--electric)] to-transparent animate-marquee" style={{ animationDuration: "6s" }} />
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[var(--electric)] to-cyan-500">
                <Zap className="h-5 w-5 text-black" strokeWidth={2.5} />
              </span>
              <div>
                <div className="font-display font-bold">Yadav Electricals & Battery House</div>
                <div className="text-xs text-muted-foreground">Kankrola Main Bus Stand, Sector 91, Gurugram</div>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">Genuine inverters, batteries, coolers, fans and electrical accessories — backed by honest service Gurugram has trusted for years.</p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Quick links</div>
            <ul className="mt-4 space-y-2 text-sm">
              {["About","Categories","Brands","Reviews","Contact"].map(l => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="text-foreground/80 hover:text-[var(--electric)]">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Connect</div>
            <div className="mt-4 flex gap-3">
              {[Instagram, Facebook, Phone, MessageCircle].map((I, i) => (
                <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full glass transition-all hover:border-[var(--electric)]/50 hover:text-[var(--electric)] hover:shadow-[0_0_20px_#00C2FF]">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Yadav Electricals & Battery House. All rights reserved.</div>
          <div>Designed with ⚡ for Gurugram.</div>
        </div>
      </div>
    </footer>
  );
}