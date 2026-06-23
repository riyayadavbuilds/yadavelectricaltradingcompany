import { Phone, MessageCircle, MapPin, Zap } from "lucide-react";

const items = [
  {
    icon: Phone,
    label: "Call Now",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
    bg: "bg-[var(--primary)]",
    fg: "text-white",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp Us",
    value: "+91 98765 43210",
    href: "https://wa.me/919876543210",
    bg: "bg-emerald-500",
    fg: "text-white",
  },
  {
    icon: MapPin,
    label: "Visit Our Store",
    value: "Gurgaon, Haryana",
    href: "https://share.google/mhPiMDQcakYCXs0zZ",
    bg: "bg-white",
    fg: "text-[var(--primary)]",
  },
];

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-[var(--navy)] text-white">
      <Zap
        className="pointer-events-none absolute right-[42%] top-1/2 hidden h-24 w-24 -translate-y-1/2 rotate-12 text-white/5 md:block"
        fill="currentColor"
      />
      <Zap
        className="pointer-events-none absolute -bottom-6 right-10 h-32 w-32 text-white/[0.04]"
        fill="currentColor"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-14 lg:grid-cols-[1fr_2fr]">
        <div>
          <h2 className="font-display text-3xl font-extrabold leading-tight md:text-4xl">
            Need Electrical
            <br />
            Solutions Today?
          </h2>
          <p className="mt-3 max-w-sm text-sm text-white/70">
            We are here to help you with the best products and expert support.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {items.map((it) => (
            <a
              key={it.label}
              href={it.href}
              target={it.href.startsWith("http") ? "_blank" : undefined}
              rel={it.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition-all hover:-translate-y-0.5 hover:bg-white/10"
            >
              <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${it.bg} ${it.fg}`}>
                <it.icon className="h-5 w-5" />
              </span>
              <div>
                <div className="text-sm font-semibold">{it.label}</div>
                <div className="text-xs text-white/70">{it.value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}