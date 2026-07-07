import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { availabilityMeta, type Product } from "@/data/catalog";
import { waProductDetailed } from "@/lib/whatsapp";

export function ProductCard({ p, index = 0 }: { p: Product; index?: number }) {
  const av = availabilityMeta[p.availability];
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: (index % 6) * 0.05 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_4px_18px_-8px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--electric)]/40 hover:shadow-[0_24px_50px_-20px_rgba(37,99,235,0.22)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[var(--soft)] to-white">
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-contain p-6 transition-transform duration-700 group-hover:scale-110"
        />
        <span
          className={`absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${av.className}`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${av.dot}`} />
          {av.label}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-base font-bold leading-tight text-[var(--navy)]">
            {p.name}
          </h3>
        </div>
        <div className="text-[11px] font-semibold uppercase tracking-wide text-[var(--electric)]">
          {p.brand}
        </div>
        <p className="line-clamp-2 text-sm leading-relaxed text-slate-600">{p.short}</p>
        {p.features?.length ? (
          <ul className="mt-1 space-y-1 text-xs text-slate-600">
            {p.features.slice(0, 3).map((f) => (
              <li key={f} className="flex items-start gap-1.5">
                <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[var(--electric)]" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        ) : null}
        <div className="mt-auto flex items-center gap-2 pt-3">
          <a
            href={waProductDetailed({ name: p.name, brand: p.brand, category: p.category })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:brightness-110"
            style={{ backgroundColor: "#25D366" }}
          >
            <MessageCircle className="h-3.5 w-3.5" fill="white" strokeWidth={0} />
            Enquire on WhatsApp
          </a>
          <a
            href={waProductDetailed({ name: p.name, brand: p.brand, category: p.category })}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Enquire"
            className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:border-[var(--electric)] hover:text-[var(--electric)]"
          >
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}