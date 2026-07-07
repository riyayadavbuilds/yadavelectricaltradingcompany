import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { ProductCard } from "@/components/site/ProductCard";
import { categories, products, brands } from "@/data/catalog";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Product Catalogue — Yadav Electrical Trading Company" },
      { name: "description", content: "Browse premium electrical products — batteries, inverters, fans, coolers, wires, switches, lighting and more from trusted brands. Since 2007 in Gurgaon." },
      { property: "og:title", content: "Product Catalogue — Yadav Electrical Trading Company" },
      { property: "og:description", content: "Genuine electrical products from India's most trusted brands, ready in stock in Gurgaon." },
    ],
  }),
  component: ProductsPage,
});

type InvFilter = "all" | "available" | "in-stock" | "popular" | "newest";

function ProductsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");
  const [brand, setBrand] = useState("all");
  const [inv, setInv] = useState<InvFilter>("all");

  const filtered = useMemo(() => {
    const t = q.trim().toLowerCase();
    return products.filter((p) => {
      if (cat !== "all" && p.category !== cat) return false;
      if (brand !== "all" && p.brand !== brand) return false;
      if (inv === "available" && p.availability === "on-request") return false;
      if (inv === "in-stock" && p.availability !== "in-stock") return false;
      if (inv === "popular" && !p.popular) return false;
      if (inv === "newest" && !p.newest) return false;
      if (!t) return true;
      return [p.name, p.brand, p.short, ...(p.features ?? [])]
        .join(" ")
        .toLowerCase()
        .includes(t);
    });
  }, [q, cat, brand, inv]);

  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[var(--soft)] to-white py-20 md:py-28">
        <FloatingShapes />
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.28em] text-[var(--electric)] backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--electric)]" />
            Digital Catalogue · Since 2007
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-6 font-display text-4xl leading-[1.05] text-[var(--navy)] md:text-6xl"
          >
            Product <span className="italic text-[var(--electric)]">Catalogue</span>
          </motion.h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-slate-600 md:text-lg">
            Premium Electrical Solutions Since 2007 — trusted brands, genuine products, wholesale & retail across Gurgaon and NCR.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-[72px] z-30 border-y border-slate-200/70 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative flex min-w-[220px] flex-1 items-center">
              <Search className="absolute left-3 h-4 w-4 text-slate-400" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search products, brands, models…"
                className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 text-sm text-slate-700 placeholder:text-slate-400 focus:border-[var(--electric)] focus:outline-none focus:ring-2 focus:ring-[var(--electric)]/20"
              />
            </div>
            <select
              value={cat}
              onChange={(e) => setCat(e.target.value)}
              className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 focus:border-[var(--electric)] focus:outline-none"
            >
              <option value="all">All Categories</option>
              {categories.map((c) => (
                <option key={c.slug} value={c.slug}>{c.title}</option>
              ))}
            </select>
            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 focus:border-[var(--electric)] focus:outline-none"
            >
              <option value="all">All Brands</option>
              {brands.map((b) => (
                <option key={b.slug} value={b.name}>{b.name}</option>
              ))}
            </select>
            <div className="flex gap-1 rounded-xl border border-slate-200 bg-white p-1">
              {(["all","available","in-stock","popular","newest"] as InvFilter[]).map((k) => (
                <button
                  key={k}
                  onClick={() => setInv(k)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-semibold capitalize transition-colors ${
                    inv === k
                      ? "bg-[var(--navy)] text-white"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {k.replace("-", " ")}
                </button>
              ))}
            </div>
            <div className="ml-auto hidden items-center gap-1.5 text-xs font-medium text-slate-500 md:flex">
              <Filter className="h-3.5 w-3.5" />
              {filtered.length} products
            </div>
          </div>
        </div>
      </section>

      {/* Category cards */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--electric)]">Explore Categories</div>
              <h2 className="mt-3 font-display text-3xl text-[var(--navy)] md:text-4xl">Everything you need, in one catalogue.</h2>
            </div>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c, i) => (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
              >
                <Link
                  to="/products/$category"
                  params={{ category: c.slug }}
                  className="group block h-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition-all hover:-translate-y-1.5 hover:border-[var(--electric)]/40 hover:shadow-premium"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[var(--soft)] to-white">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="absolute inset-0 h-full w-full object-contain p-8 transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-xl font-bold text-[var(--navy)]">
                        {c.title}
                      </h3>
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--electric)]" />
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.short}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {c.brands.slice(0, 4).map((b) => (
                        <span key={b} className="rounded-full border border-slate-200 bg-[var(--soft)] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-600">{b}</span>
                      ))}
                      {c.brands.length > 4 && (
                        <span className="text-[10px] font-semibold text-slate-500">+{c.brands.length - 4} more</span>
                      )}
                    </div>
                    <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--electric)]">
                      View Products <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filtered products */}
      <section className="bg-[var(--soft)]/50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-2xl text-[var(--navy)] md:text-3xl">
            {q || cat !== "all" || brand !== "all" || inv !== "all" ? "Matching Products" : "All Products"}
          </h2>
          {filtered.length === 0 ? (
            <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center text-slate-500">
              No products match your filters. Try clearing the search.
            </div>
          ) : (
            <div className="mt-8 grid gap-6 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((p, i) => (
                <ProductCard key={p.slug} p={p} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
}

function FloatingShapes() {
  return (
    <>
      <motion.div
        className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-[var(--electric)]/10 blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="pointer-events-none absolute -right-24 bottom-4 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 9, repeat: Infinity }}
      />
    </>
  );
}