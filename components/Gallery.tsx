"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal, { LineReveal } from "./Reveal";
import SmartImage from "./SmartImage";
import { gallerySlots, type GallerySlot } from "../lib/site";

function Tile({ slot, i }: { slot: GallerySlot; i: number }) {
  const { src, label, span, pos } = slot;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  // ±4% travel inside a 112% tall inner (12% slack) → edges can never gap
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  const isWide = span === "wide";
  // Wide tiles keep their aspect at every size and DRIVE the row height.
  // Tall/std tiles keep aspect on mobile, then stretch (flex-1) to share
  // the row height on sm+ so captions bottom-align across the row.
  const shape = isWide
    ? "aspect-[4/3]"
    : span === "tall"
      ? "aspect-[3/4] sm:aspect-auto sm:flex-1 sm:min-h-[320px]"
      : "aspect-square sm:aspect-auto sm:flex-1 sm:min-h-[320px]";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.9, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative flex flex-col ${isWide ? "sm:col-span-2" : ""}`}
    >
      <div className={`overflow-hidden rounded-[22px] bg-sand ${shape}`}>
        <motion.div style={{ y }} className="h-[112%] w-full -mt-[6%]">
          <SmartImage
            src={src}
            alt={label}
            label={label}
            className="h-full w-full"
            imgClassName={`transition-transform duration-700 ease-out group-hover:scale-[1.05] ${pos ?? ""}`}
          />
        </motion.div>
      </div>
      <div className="mt-3 flex items-baseline justify-between px-1">
        <span className="font-display italic text-lg text-ink/70">{label}</span>
        <span className="eyebrow text-ink/30">0{i + 1}</span>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-ivory py-24 sm:py-32 border-y border-ink/10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <Reveal>
              <p className="eyebrow text-clay mb-4">Lookbook</p>
            </Reveal>
            <h2 className="font-display font-medium tracking-tight leading-[0.95] text-5xl sm:text-7xl">
              <LineReveal delay={0.05}>Recent work,</LineReveal>
              <LineReveal delay={0.15}>
                <span className="italic font-light text-clay">real heads.</span>
              </LineReveal>
            </h2>
          </div>
          <Reveal delay={0.15}>
            <p className="max-w-xs text-sm font-light leading-relaxed text-cocoa/80">
              Shot in-chair, no filters. Drop your stock photos into
              <span className="text-ink font-normal"> /public/gallery/</span> and
              this wall fills itself in.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-flow-dense gap-5 sm:gap-6">
          {gallerySlots.map((g, i) => (
            <Tile key={g.src} slot={g} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
