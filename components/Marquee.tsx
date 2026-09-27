"use client";

import { marqueeWords } from "../lib/site";

export default function Marquee() {
  const row = [...marqueeWords, ...marqueeWords];
  return (
    <div className="relative overflow-hidden border-y border-ink/10 bg-ivory py-5">
      <div className="animate-marquee flex w-max items-center gap-10 pr-10">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            <span className="font-display italic text-2xl sm:text-3xl text-ink/80">{w}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-clay/70" />
          </span>
        ))}
      </div>
    </div>
  );
}
