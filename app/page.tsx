"use client";

import Intro from "../components/Intro";
import Marquee from "../components/Marquee";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Booking from "../components/Booking";
import Footer, { StickyBook } from "../components/Footer";
import Reveal from "../components/Reveal";

function Philosophy() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="eyebrow text-clay mb-8">The philosophy</p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-display font-light leading-[1.25] text-3xl sm:text-5xl tracking-tight">
            “We don&apos;t chase trends. We study your texture, your routine,
            your mornings — then cut <span className="italic text-clay">for the life you actually live.</span>”
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="rule mx-auto mt-10 max-w-xs" />
          <p className="eyebrow mt-6 text-ink/40">— The chair, every day</p>
        </Reveal>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="grain relative bg-cream text-ink overflow-x-clip">
      <Intro />
      <Marquee />
      <Philosophy />
      <Services />
      <Gallery />
      <Booking />
      <Footer />
      <StickyBook />
    </main>
  );
}
