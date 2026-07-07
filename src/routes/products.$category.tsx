import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, MessageCircle, ShieldCheck, Truck, Wrench } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { ProductCard } from "@/components/site/ProductCard";
import { categories, getBrand, getCategory, productsInCategory } from "@/data/catalog";
import { waBrand, waGeneric } from "@/lib/whatsapp";

export const Route = createFileRoute("/products/$category")({
  loader: ({ params }) => {
    const c = getCategory(params.category);
    if (!c) throw notFound();
    return { category: c };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.category.title} — Yadav Electrical Trading Company` },
          { name: "description", content: loaderData.category.short },
          { property: "og:title", content: `${loaderData.category.title} — Yadav Electrical` },
          { property: "og:description", content: loaderData.category.short },
        ]
      : [{ title: "Category — Yadav Electrical" }, { name: "robots", content: "noindex" }],
  }),
  notFoundComponent: NotFoundCategory,
  errorComponent: ({ error }) => <div className="p-10 text-center">{error.message}</div>,
  component: CategoryPage,
});

function NotFoundCategory() {
  return (
    <PageShell>
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="font-display text-4xl text-[var(--navy)]">Category not found</h1>
        <Link to="/products" className="mt-6 inline-flex items-center gap-2 text-[var(--electric)]">
          <ArrowLeft className="h-4 w-4" /> Back to catalogue
        </Link>
      </div>
    </PageShell>
  );
}

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const items = productsInCategory(category.slug);

  return (
    <PageShell>
      {/* Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[var(--soft)] to-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <Link to="/products" className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 hover:text-[var(--electric)]">
              <ArrowLeft className="h-3.5 w-3.5" /> All Categories
            </Link>
            <motion.h1
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="mt-4 font-display text-4xl leading-tight text-[var(--navy)] md:text-5xl"
            >
              {category.title}
            </motion.h1>
            <p className="mt-4 max-w-xl text-base text-slate-600 md:text-lg">
              {category.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {category.brands.map((b) => (
                <span key={b} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">{b}</span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={waGeneric}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-sm"
                style={{ backgroundColor: "#25D366" }}
              >
                <MessageCircle className="h-4 w-4" fill="white" strokeWidth={0} /> Request Quote
              </a>
              <Link to="/stock" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-[var(--navy)] hover:border-[var(--electric)]">
                View Live Stock <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-premium"
          >
            <img src={category.image} alt={category.title} className="absolute inset-0 h-full w-full object-contain p-10" />
          </motion.div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-slate-100 bg-white/60 py-6">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 text-sm text-slate-700 md:grid-cols-4">
          <TrustItem icon={<ShieldCheck className="h-5 w-5" />} label="100% Genuine" sub="Direct from brands" />
          <TrustItem icon={<Truck className="h-5 w-5" />} label="Fast Delivery" sub="Across Gurgaon & NCR" />
          <TrustItem icon={<Wrench className="h-5 w-5" />} label="Installation" sub="Expert technicians" />
          <TrustItem icon={<MessageCircle className="h-5 w-5" />} label="Instant Quote" sub="WhatsApp response" />
        </div>
      </section>

      {/* Brands in this category */}
      <section className="bg-[var(--soft)]/40 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--electric)]">Available Brands</div>
              <h2 className="mt-3 font-display text-3xl text-[var(--navy)]">Trusted names in {category.title.toLowerCase()}.</h2>
            </div>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {category.brands.map((bn, i) => {
              const b = getBrand(bn);
              return (
                <motion.div key={bn} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: (i%3)*0.06 }}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-display text-lg font-bold text-[var(--navy)]">{bn}</div>
                      {b?.since && <div className="text-[11px] font-semibold text-slate-500">Since {b.since}</div>}
                    </div>
                    <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
                      In Stock
                    </span>
                  </div>
                  {b?.description && <p className="mt-3 text-sm leading-relaxed text-slate-600">{b.description}</p>}
                  {b?.offers?.length ? (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {b.offers.map((o) => (
                        <span key={o} className="rounded-full bg-[var(--soft)] px-2.5 py-0.5 text-[11px] font-medium text-slate-700">{o}</span>
                      ))}
                    </div>
                  ) : null}
                  {b?.warranty && <div className="mt-3 text-xs text-slate-500"><strong className="text-slate-700">Warranty:</strong> {b.warranty}</div>}
                  {b?.why && <div className="mt-1 text-xs text-slate-500"><strong className="text-slate-700">Why us:</strong> {b.why}</div>}
                  <div className="mt-5 flex gap-2">
                    <a href={waBrand(bn)} target="_blank" rel="noopener noreferrer" className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold text-white" style={{ backgroundColor: "#25D366" }}>
                      <MessageCircle className="h-3.5 w-3.5" fill="white" strokeWidth={0} /> WhatsApp
                    </a>
                    <a href={waBrand(bn)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-[var(--navy)]">
                      Request Quote
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-3xl text-[var(--navy)]">Products in {category.title}</h2>
          {items.length === 0 ? (
            <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">
              New products coming soon. Contact us on WhatsApp for latest stock.
            </div>
          ) : (
            <div className="mt-8 grid gap-6 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {items.map((p, i) => (
                <ProductCard key={p.slug} p={p} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Related categories */}
      <section className="bg-[var(--soft)]/40 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-2xl text-[var(--navy)]">Explore other categories</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.filter((c) => c.slug !== category.slug).slice(0, 4).map((c) => (
              <Link key={c.slug} to="/products/$category" params={{ category: c.slug }} className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-soft transition-all hover:-translate-y-0.5 hover:border-[var(--electric)]/40">
                <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-[var(--soft)]">
                  <img src={c.image} alt={c.title} className="h-full w-full object-contain p-1.5" />
                </div>
                <div className="min-w-0">
                  <div className="truncate font-semibold text-[var(--navy)]">{c.title}</div>
                  <div className="text-xs text-slate-500">{c.brands.length} brands</div>
                </div>
                <ArrowUpRight className="ml-auto h-4 w-4 text-slate-400 transition-colors group-hover:text-[var(--electric)]" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function TrustItem({ icon, label, sub }: { icon: React.ReactNode; label: string; sub: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--soft)] text-[var(--electric)]">{icon}</span>
      <div>
        <div className="font-semibold text-[var(--navy)]">{label}</div>
        <div className="text-xs text-slate-500">{sub}</div>
      </div>
    </div>
  );
}