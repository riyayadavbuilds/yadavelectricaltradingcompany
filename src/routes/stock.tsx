import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { stockImages, stockFilters, type StockCategory } from "@/data/stock";
import { waStock } from "@/lib/whatsapp";

export const Route = createFileRoute("/stock")({
  head: () => ({
    meta: [
      { title: "Live Store Inventory — Yadav Electrical Trading Company" },
      { name: "description", content: "Live warehouse and store inventory since 2007 — thousands of genuine electrical products ready for immediate delivery from our Gurgaon store." },
      { property: "og:title", content: "Live Store Inventory — Yadav Electrical" },
      { property: "og:description", content: "Thousands of genuine electrical products ready for immediate delivery." },
    ],
  }),
  component: StockPage,
});

const stats = [
  { n: "18+", l: "Years Experience" },
  { n: "10,000+", l: "Satisfied Customers" },
  { n: "50+", l: "Brands Available" },
  { n: "5,000+", l: "Products Ready" },
];

function StockPage() {
  const [filter, setFilter] = useState<StockCategory | "All">("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? stockImages : stockImages.filter((s) => s.category === filter)),
    [filter]
  );

  return (
    <PageShell>
      <section className="relative overflow-hidden bg-gradient-to-b from-[var(--soft)] to-white py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.28em] text-[var(--electric)]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            Live Store Inventory
          </div>
          <h1 className="mt-6 font-display text-4xl leading-tight text-[var(--navy)] md:text-6xl">
            Trusted <span className="italic text-[var(--electric)]">stock</span> since 2007.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-slate-600 md:text-lg">
            Thousands of genuine electrical products stacked and ready for immediate delivery from our Gurgaon store.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={waStock()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white" style={{ backgroundColor: "#25D366" }}>
              <MessageCircle className="h-4 w-4" fill="white" strokeWidth={0} /> Enquire on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-100 bg-white py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div key={s.l} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
              className="text-center"
            >
              <div className="font-display text-4xl text-[var(--navy)] md:text-5xl">{s.n}</div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-[72px] z-30 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl overflow-x-auto px-6 py-4">
          <div className="flex gap-2">
            {stockFilters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                  filter === f ? "bg-[var(--navy)] text-white" : "border border-slate-200 bg-white text-slate-600 hover:border-[var(--electric)]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry gallery */}
      <section className="bg-[var(--soft)]/40 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
            {filtered.map((img, i) => (
              <motion.button
                key={img.url}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: (i % 8) * 0.04 }}
                onClick={() => setLightbox(i)}
                className="group block w-full overflow-hidden rounded-2xl bg-white shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-premium"
              >
                <img
                  src={img.url}
                  alt={img.category}
                  loading="lazy"
                  className="w-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="flex items-center justify-between px-4 py-2.5 text-xs">
                  <span className="font-semibold text-[var(--navy)]">{img.category}</span>
                  <span className="inline-flex items-center gap-1 text-emerald-600"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />In Stock</span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && filtered[lightbox] && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] grid place-items-center bg-black/85 p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              key={filtered[lightbox].url}
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              src={filtered[lightbox].url}
              alt="Stock"
              className="max-h-[85vh] max-w-[92vw] rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-3xl text-[var(--navy)] md:text-4xl">Need something specific?</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-600">Send us the product name and quantity — we'll confirm live availability and share our best price on WhatsApp.</p>
          <a href={waStock()} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white" style={{ backgroundColor: "#25D366" }}>
            <MessageCircle className="h-4 w-4" fill="white" strokeWidth={0} /> Check Live Stock
          </a>
        </div>
      </section>
    </PageShell>
  );
}