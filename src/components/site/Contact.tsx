import { useState } from "react";
import { Phone, MessageCircle, MapPin, Clock, Send } from "lucide-react";
import { waLink, waMessages, PHONE_DISPLAY } from "@/lib/whatsapp";

export function Contact() {
  const shopMapLink = "https://share.google/mhPiMDQcakYCXs0zZ";
  const shopMapEmbed =
    "https://www.google.com/maps?q=Yadav%20Electrical%20Trading%20Company%20Main%20Bus%20Stand%20Kankrola%20Bhangrola%20Gurugram&output=embed";

  const [form, setForm] = useState({ name: "", phone: "", product: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = waLink(waMessages.contactForm(form));
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[var(--primary)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
            Visit · Call · WhatsApp
          </div>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-[var(--navy)] md:text-4xl">
            Drop by the store
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.18)]">
            <iframe
              title="Yadav Electrical Trading Company map"
              src={shopMapEmbed}
              className="h-[440px] w-full rounded-2xl border-0"
              loading="lazy"
            />
            <a
              href={shopMapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-6 left-6 inline-flex items-center gap-2 rounded-2xl bg-[var(--primary)] px-5 py-3 font-display font-semibold text-white shadow-[0_10px_30px_-10px_rgba(37,99,235,0.55)] transition-all hover:scale-[1.02]"
            >
              <MapPin className="h-5 w-5" /> Open in Google Maps
            </a>
          </div>

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
                d: PHONE_DISPLAY,
                href: "tel:+919873490167",
                accent: true,
              },
              {
                icon: MessageCircle,
                t: "WhatsApp",
                d: "Chat with Mr. Harkesh Yadav",
                href: waLink(waMessages.generic),
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
                <div className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-[var(--primary)]/40 hover:shadow-[0_18px_40px_-24px_rgba(15,23,42,0.18)]">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[var(--accent)] text-[var(--primary)]">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-slate-500">
                      {c.t}
                    </div>
                    <div
                      className={`mt-1 font-display ${c.accent ? "text-xl font-bold text-[var(--primary)]" : "text-base text-[var(--navy)]"}`}
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
              href={waLink(waMessages.generic)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-6 py-4 font-display font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]"
            >
              <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Enquiry Form → WhatsApp */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[var(--primary)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
              Send Enquiry
            </div>
            <h3 className="mt-3 font-display text-3xl font-extrabold text-[var(--navy)] md:text-4xl">
              Get a quick quote on WhatsApp
            </h3>
            <p className="mt-3 max-w-md text-sm text-slate-600 md:text-base">
              Fill the form and we&apos;ll reply on WhatsApp with pricing, stock
              availability and installation details.
            </p>
          </div>

          <form
            onSubmit={submit}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.18)] md:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Your Name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                placeholder="e.g. Rahul Sharma"
                required
              />
              <Field
                label="Phone Number"
                value={form.phone}
                onChange={(v) => setForm({ ...form, phone: v })}
                placeholder="+91 ..."
                type="tel"
                required
              />
            </div>
            <div className="mt-4">
              <Field
                label="Product Interested In"
                value={form.product}
                onChange={(v) => setForm({ ...form, product: v })}
                placeholder="e.g. Luminous 150Ah Inverter Battery"
                required
              />
            </div>
            <div className="mt-4">
              <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                placeholder="Tell us what you need..."
                className="mt-1.5 w-full rounded-xl border border-slate-200 bg-[var(--soft)] px-4 py-3 text-sm text-[var(--navy)] outline-none transition-all placeholder:text-slate-400 focus:border-[var(--primary)] focus:bg-white focus:ring-2 focus:ring-[var(--primary)]/15"
              />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_-10px_rgba(37,211,102,0.55)] transition-transform hover:scale-[1.01] sm:w-auto"
              style={{ backgroundColor: "#25D366" }}
            >
              <Send className="h-4 w-4" />
              Send Enquiry on WhatsApp
            </button>
            <p className="mt-3 text-xs text-slate-500">
              By clicking send, WhatsApp opens in a new tab with your message ready.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="mt-1.5 w-full rounded-xl border border-slate-200 bg-[var(--soft)] px-4 py-3 text-sm text-[var(--navy)] outline-none transition-all placeholder:text-slate-400 focus:border-[var(--primary)] focus:bg-white focus:ring-2 focus:ring-[var(--primary)]/15"
      />
    </div>
  );
}
