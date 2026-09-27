"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SmartImage from "./SmartImage";
import { site, heroImage } from "../lib/site";

const EASE = [0.22, 1, 0.36, 1] as const;

function MaskedLine({ children, delay, className = "" }: { children: React.ReactNode; delay: number; className?: string }) {
  return (
    <span className={`block overflow-hidden pb-[0.08em] -mb-[0.08em] ${className}`}>
      <motion.span
        className="block"
        initial={{ y: "112%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.2, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Intro() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      document.body.style.overflow = "";
    }, 2300);
    return () => {
      document.body.style.overflow = "";
      clearTimeout(t);
    };
  }, []);

  return (
    <header ref={ref} className="relative min-h-screen overflow-hidden bg-cream">
      {/* curtain lift */}
      <motion.div
        className="absolute inset-0 z-40 bg-ink"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1.1, delay: 0.25, ease: EASE }}
        style={{ transformOrigin: "top" }}
      />
      <motion.div
        className="absolute inset-0 z-40 bg-blush/60"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1.1, delay: 0.4, ease: EASE }}
        style={{ transformOrigin: "top" }}
      />

      {/* nav */}
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 1.5, ease: EASE }}
        className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 sm:px-10 py-5"
      >
        <div className="flex items-baseline gap-3">
          <span className="font-display italic text-2xl">{site.name}</span>
          <span className="hidden sm:inline eyebrow text-ink/40">{site.est}</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-[12px] tracking-[0.2em] text-ink/60">
          <a href="#services" className="hover:text-ink transition-colors">SERVICES</a>
          <a href="#gallery" className="hover:text-ink transition-colors">LOOKBOOK</a>
          <a href="#book" className="hover:text-ink transition-colors">VISIT</a>
        </div>
        <a
          href="#book"
          className="rounded-full bg-ink px-5 py-2.5 text-[11px] font-medium tracking-[0.2em] text-cream transition-all hover:bg-clay"
        >
          BOOK NOW
        </a>
      </motion.nav>

      {/* hero composition */}
      <motion.div style={{ y: textY, opacity: fade }} className="relative z-10 mx-auto max-w-7xl px-6 pt-[16vh] sm:pt-[13vh] pb-16 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="eyebrow text-clay mb-6"
        >
          {site.tagline}
        </motion.p>

        <h1 className="font-display font-medium leading-[0.95] tracking-tight text-[17vw] sm:text-[11vw] lg:text-[9rem]">
          <MaskedLine delay={0.9}>Softness,</MaskedLine>
          <MaskedLine delay={1.02}>
            <span className="italic font-light text-clay">engineered.</span>
          </MaskedLine>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.7, ease: EASE }}
          className="mx-auto mt-7 max-w-md text-sm sm:text-base font-light leading-relaxed text-cocoa"
        >
          Precision cutting and lived-in color in a calm, blush-toned space —
          unhurried appointments, honest advice, hair that behaves.
        </motion.p>

        {/* arch image */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 1.55, ease: EASE }}
          className="mx-auto mt-10 w-[78vw] max-w-[420px]"
        >
          <motion.div style={{ y: imgY, scale: imgScale }} className="animate-kenburns">
            <SmartImage
              src={heroImage}
              alt="Salon hero"
              label="Hero portrait"
              eager
              className="aspect-[3/4] rounded-t-[999px] rounded-b-[28px] shadow-[0_30px_80px_-30px_rgba(38,25,15,0.45)]"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="animate-float-hint mx-auto mt-10 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.35em] text-ink/45">SCROLL</span>
          <span className="block h-10 w-px bg-ink/25" />
        </motion.div>
      </motion.div>

      {/* corner marks */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-6 sm:left-10 z-10 eyebrow text-ink/35 hidden sm:block"
      >
        New Haven — CT
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 right-6 sm:right-10 z-10 eyebrow text-ink/35 hidden sm:block"
      >
        Walk-ins welcome
      </motion.div>
    </header>
  );
}
