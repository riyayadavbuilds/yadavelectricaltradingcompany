import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { brands, products } from "@/data/catalog";
import { waBrand } from "@/lib/whatsapp";

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      { title: "Trusted Brands — Yadav Electrical Trading Company" },
      { name: "description", content: "Authorised dealer of Exide, Amaron, Luminous, Havells, Crompton, Polycab, Finolex, Anchor, Philips, Symphony and more." },
      { property: "og:title", content: "Trusted Brands — Yadav Electrical" },
      { property: "og:description", content: "50+ premium electrical brands, in stock and ready for delivery in Gurgaon." },
    ],
  }),
  component: BrandsPage,
});

function BrandsPage() {
  return (
    <PageShell>
      <section className="bg-gradient-to-b from-[var(--soft)] to-white py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.28em] text-[var(--electric)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--electric)]" />
            Authorised Dealer
          </div>
          <h1 className="mt-6 font-display text-4xl leading-tight text-[var(--navy)] md:text-6xl">
            The brands India <span className="italic text-[var(--electric)]">trusts</span>.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-slate-600 md:text-lg">
            We stock genuine products from {brands.length}+ of India's most reliable electrical manufacturers — every piece direct-sourced, warranty-backed and delivery-ready.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {brands.map((b, i) => {
              const count = products.filter((p) => p.brand === b.name).length;
              return (
                <motion.div
                  key={b.slug}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
                  className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-[var(--electric)]/40 hover:shadow-premium"
                >
                  <div className="flex items-center justify-between">
                    <div className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br from-[var(--soft)] to-white font-display text-lg font-bold text-[var(--navy)]">
                      {b.name.charAt(0)}
                    </div>
                    {b.since && (
                      <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                        Since {b.since}
                      </span>
                    )}
                  </div>
                  <div className="mt-4 font-display text-xl font-bold text-[var(--navy)]">{b.name}</div>
                  <p className="mt-2 line-clamp-2 text-sm text-slate-600">{b.description}</p>
                  {b.offers?.length ? (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {b.offers.slice(0, 3).map((o) => (
                        <span key={o} className="rounded-full bg-[var(--soft)] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-600">{o}</span>
                      ))}
                    </div>
                  ) : null}
                  <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                    <span>{count} product{count === 1 ? "" : "s"}</span>
                    {b.warranty && <span>{b.warranty}</span>}
                  </div>
                  <div className="mt-5 flex gap-2">
                    <Link to="/products" className="inline-flex flex-1 items-center justify-center gap-1 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-[var(--navy)] transition-colors hover:border-[var(--electric)]">
                      View Products <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                    <a href={waBrand(b.name)} target="_blank" rel="noopener noreferrer" className="grid h-9 w-9 place-items-center rounded-lg text-white" style={{ backgroundColor: "#25D366" }}>
                      <MessageCircle className="h-4 w-4" fill="white" strokeWidth={0} />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </PageShell>
  );
}