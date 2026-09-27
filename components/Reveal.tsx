"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/** Soft scroll-triggered reveal: fade + rise + slight blur settle. */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  y = 28,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Masked line reveal for display type.
 * NOTE: uses px-based y + opacity with the exact viewport recipe proven on
 * this page — percentage y strings ("110%"→"0%") driven by whileInView were
 * observed freezing at their initial value and never ticking. */
export function LineReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <span className={`block overflow-hidden pb-[0.1em] -mb-[0.1em] ${className}`}>
      <motion.span
        className="block will-change-transform"
        initial={{ opacity: 0, y: 56 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-12% 0px" }}
        transition={{ duration: 1.05, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}
