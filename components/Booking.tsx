"use client";

import Reveal, { LineReveal } from "./Reveal";
import { site } from "../lib/site";

export default function Booking() {
  return (
    <section id="book" className="relative overflow-hidden bg-ink text-cream py-24 sm:py-32">
      {/* ambient blush glows */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 20% 15%, rgba(217,167,142,0.22), transparent 65%), radial-gradient(ellipse 55% 45% at 85% 90%, rgba(169,96,56,0.25), transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <p className="eyebrow text-blush mb-6">Reserve a chair</p>
        </Reveal>
        <h2 className="font-display font-medium tracking-tight leading-[0.95] text-6xl sm:text-8xl">
          <LineReveal delay={0.05}>Your hair,</LineReveal>
          <LineReveal delay={0.15}>
            <span className="italic font-light text-blush">but better.</span>
          </LineReveal>
        </h2>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-7 max-w-md text-sm sm:text-base font-light leading-relaxed text-cream/60">
            Call or text to book — consultations are always free, and always honest.
          </p>
        </Reveal>
        <Reveal delay={0.28}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={site.phoneHref}
              className="rounded-full bg-cream px-9 py-4 text-sm font-semibold tracking-[0.12em] text-ink transition-all duration-300 hover:bg-blush hover:scale-[1.03]"
            >
              CALL {site.phone.toUpperCase()}
            </a>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-cream/25 px-9 py-4 text-sm tracking-[0.12em] text-cream/80 transition-all duration-300 hover:border-blush hover:text-cream"
            >
              GET DIRECTIONS
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.35}>
          <div className="mx-auto mt-14 grid max-w-2xl grid-cols-1 sm:grid-cols-3 gap-6 border-t border-cream/15 pt-8 text-left">
            <div>
              <p className="eyebrow text-cream/40 mb-3">Find us</p>
              <p className="text-sm font-light leading-relaxed text-cream/70">{site.address}</p>
            </div>
            <div>
              <p className="eyebrow text-cream/40 mb-3">Hours</p>
              {site.hours.map((h) => (
                <p key={h.d} className="text-sm font-light text-cream/70">
                  {h.d} · <span className="text-cream">{h.h}</span>
                </p>
              ))}
            </div>
            <div>
              <p className="eyebrow text-cream/40 mb-3">Social</p>
              <p className="text-sm font-light text-cream/70">{site.instagram}</p>
              <p className="text-sm font-light text-cream/70">{site.phone}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
