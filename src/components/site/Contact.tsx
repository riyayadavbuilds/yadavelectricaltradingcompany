import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

export function Contact() {
  const shopMapLink = "https://share.google/mhPiMDQcakYCXs0zZ";

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.4em] text-[var(--electric)]">
            Visit · Call · WhatsApp
          </div>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Drop by the <span className="text-gradient">store</span>.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <a
            href={shopMapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group overflow-hidden rounded-3xl glass-strong p-2"
          >
            <div className="relative grid h-[440px] place-items-center overflow-hidden rounded-2xl border border-[var(--electric)]/15 bg-[radial-gradient(circle_at_50%_40%,rgba(251,191,36,0.18),transparent_34%),linear-gradient(135deg,rgba(15,23,42,0.92),rgba(2,6,23,0.96))]">
              <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:42px_42px]" />
              <div className="absolute h-72 w-72 rounded-full border border-[var(--electric)]/25 shadow-[0_0_80px_rgba(251,191,36,0.18)] transition-transform duration-700 group-hover:scale-110" />
              <div className="relative z-10 text-center">
                <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[var(--electric)]/15 ring-1 ring-[var(--electric)]/40 shadow-[0_0_45px_rgba(251,191,36,0.2)]">
                  <MapPin className="h-9 w-9 text-[var(--electric)]" />
                </div>
                <div className="mt-6 text-xs uppercase tracking-[0.35em] text-[var(--electric)]">
                  Correct Google location
                </div>
                <div className="mt-3 font-display text-3xl font-bold">Open shop map</div>
                <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
                  Yadav Electrical Trading Company · Main Bus Stand, Kankrola Bhangrola
                </p>
              </div>
            </div>
          </a>

          <div className="grid gap-4">
            {[
              {
                icon: MapPin,
                t: "Address",
                d: "Main Bus Stand, Kankrola Bhangrola, Gurugram, Haryana",
                href: shopMapLink,
                accent: false,
              },
              {
                icon: Phone,
                t: "Call",
                d: "+91 98734 90167",
                href: "tel:+919873490167",
                accent: true,
              },
              {
                icon: MessageCircle,
                t: "WhatsApp",
                d: "Chat with Mr. Harkesh Yadav",
                href: "https://wa.me/919873490167",
                accent: false,
              },
              {
                icon: Clock,
                t: "Open",
                d: "7:00 AM – 10:00 PM · All Days",
                href: undefined as string | undefined,
                accent: false,
              },
            ].map((c) => {
              const Inner = (
                <div className="group flex items-start gap-4 rounded-2xl glass p-5 transition-all hover:-translate-y-0.5 hover:border-[var(--electric)]/40">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[var(--electric)]/10 ring-1 ring-[var(--electric)]/30">
                    <c.icon className="h-5 w-5 text-[var(--electric)]" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">
                      {c.t}
                    </div>
                    <div
                      className={`mt-1 font-display ${c.accent ? "text-xl font-bold text-gradient" : "text-base"}`}
                    >
                      {c.d}
                    </div>
                  </div>
                </div>
              );
              return c.href ? (
                <a
                  key={c.t}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {Inner}
                </a>
              ) : (
                <div key={c.t}>{Inner}</div>
              );
            })}

            <a
              href="https://wa.me/919873490167"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-6 py-4 font-display font-semibold text-black transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]"
            >
              <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/919873490167"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-black shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-transform hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-emerald-500/40" />
      </a>
    </section>
  );
}
