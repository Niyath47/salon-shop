"use client";

import { motion } from "framer-motion";
import { site } from "../lib/site";

export function StickyBook() {
  return (
    <motion.a
      href="#book"
      initial={{ y: 90 }}
      animate={{ y: 0 }}
      transition={{ delay: 2.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-4 left-4 right-4 z-50 rounded-full bg-ink/95 backdrop-blur px-6 py-4 text-center text-[12px] font-medium tracking-[0.25em] text-cream shadow-2xl sm:hidden"
    >
      BOOK APPOINTMENT
    </motion.a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-ink/10">
      <div className="mx-auto flex max-w-6xl flex-col sm:flex-row items-center justify-between gap-3 px-6 py-8 text-[11px] tracking-[0.2em] text-ink/40">
        <p>© 2026 {site.name.toUpperCase()}</p>
        <p className="font-display italic normal-case tracking-normal text-sm text-ink/50">
          softness, engineered.
        </p>
      </div>
    </footer>
  );
}
