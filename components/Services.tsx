"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal, { LineReveal } from "./Reveal";
import { serviceGroups } from "../lib/site";

export default function Services() {
  const [active, setActive] = useState(0);
  const group = serviceGroups[active];

  return (
    <section id="services" className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="eyebrow text-clay mb-4">Services & Pricing</p>
        </Reveal>
        <h2 className="font-display font-medium tracking-tight leading-[0.95] text-5xl sm:text-7xl">
          <LineReveal delay={0.05}>An honest menu,</LineReveal>
          <LineReveal delay={0.15}>
            <span className="italic font-light text-clay">no surprises.</span>
          </LineReveal>
        </h2>

        {/* category tabs */}
        <Reveal delay={0.1} className="mt-10">
          <div className="flex flex-wrap gap-3">
            {serviceGroups.map((g, i) => (
              <button
                key={g.title}
                onClick={() => setActive(i)}
                className={`rounded-full px-6 py-3 text-[12px] tracking-[0.18em] transition-all duration-300 ${
                  i === active
                    ? "bg-ink text-cream shadow-lg"
                    : "border border-ink/15 text-ink/60 hover:border-clay/60 hover:text-ink"
                }`}
              >
                {g.title.toUpperCase()}
              </button>
            ))}
          </div>
        </Reveal>

        {/* price list */}
        <div className="mt-8 min-h-[380px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-display italic text-xl text-ink/50 mb-2">{group.note}</p>
              <div className="divide-y divide-ink/10 border-y border-ink/10">
                {group.items.map((s) => (
                  <div
                    key={s.name}
                    className="group grid grid-cols-[1fr_auto] sm:grid-cols-[1fr_auto_auto] items-baseline gap-x-6 gap-y-1 py-6 transition-colors hover:bg-ivory/60 px-2 sm:px-4 -mx-2 sm:-mx-4 rounded-xl"
                  >
                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl font-medium group-hover:text-clay transition-colors">
                        {s.name}
                      </h3>
                      <p className="mt-1 text-sm font-light text-cocoa/80">{s.desc}</p>
                    </div>
                    <span className="hidden sm:block text-xs tracking-[0.2em] text-ink/40">{s.time.toUpperCase()}</span>
                    <span className="font-display text-2xl sm:text-3xl italic text-ink">{s.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <Reveal delay={0.05}>
          <p className="mt-6 text-xs font-light text-ink/40">
            Final quote confirmed at consultation — length and density may adjust pricing.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
