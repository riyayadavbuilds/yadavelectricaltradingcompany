import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.4em] text-[var(--electric)]">Visit · Call · WhatsApp</div>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Drop by the <span className="text-gradient">store</span>.</h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="overflow-hidden rounded-3xl glass-strong p-2">
            <iframe
              title="Yadav Electricals & Battery House map"
              src="https://www.google.com/maps?q=Kankrola+Main+Bus+Stand+Sector+91+Gurugram&output=embed"
              className="h-[440px] w-full rounded-2xl border-0"
              style={{ filter: "grayscale(60%) contrast(1.1)" }}
              loading="lazy"
            />
          </div>

          <div className="grid gap-4">
            {([
              { icon: MapPin, t: "Address", d: "Kankrola Main Bus Stand, Sector 91, Gurugram, Haryana", href: undefined as string | undefined, accent: false },
              { icon: Phone, t: "Call", d: "+91 00000 00000", href: "tel:+910000000000", accent: true },
              { icon: MessageCircle, t: "WhatsApp", d: "Chat with the owner directly", href: "https://wa.me/910000000000", accent: false },
              { icon: Clock, t: "Hours", d: "Mon–Sun · 8:00 AM – 10:00 PM", href: undefined as string | undefined, accent: false },
            ]).map((c) => {
              const Inner = (
                <div className="group flex items-start gap-4 rounded-2xl glass p-5 transition-all hover:-translate-y-0.5 hover:border-[var(--electric)]/40">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[var(--electric)]/10 ring-1 ring-[var(--electric)]/30">
                    <c.icon className="h-5 w-5 text-[var(--electric)]" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.t}</div>
                    <div className={`mt-1 font-display ${c.accent ? "text-xl font-bold text-gradient" : "text-base"}`}>{c.d}</div>
                  </div>
                </div>
              );
              return c.href ? <a key={c.t} href={c.href}>{Inner}</a> : <div key={c.t}>{Inner}</div>;
            })}

            <a href="https://wa.me/910000000000" className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-6 py-4 font-display font-semibold text-black transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)]">
              <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <a href="https://wa.me/910000000000" aria-label="WhatsApp" className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-black shadow-[0_0_40px_rgba(16,185,129,0.6)] transition-transform hover:scale-110">
        <MessageCircle className="h-6 w-6" />
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-emerald-500/40" />
      </a>
    </section>
  );
}