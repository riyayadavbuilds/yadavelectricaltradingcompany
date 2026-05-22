import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => { const t = setTimeout(() => setDone(true), 1600); return () => clearTimeout(t); }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="relative">
              <div className="h-20 w-32 rounded-md border-2 border-[var(--electric)]/60 p-1.5 relative overflow-hidden">
                <div className="h-full rounded-sm bg-gradient-to-r from-[var(--electric)] via-cyan-300 to-[var(--neon)] animate-charge" style={{ boxShadow: "0 0 24px #00C2FF" }} />
              </div>
              <div className="absolute -right-2 top-1/2 h-8 w-2 -translate-y-1/2 rounded-r-md bg-[var(--electric)]/60" />
            </div>
            <div className="text-xs uppercase tracking-[0.4em] text-[var(--electric)]">Charging Experience</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}