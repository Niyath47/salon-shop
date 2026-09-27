"use client";

import { useState } from "react";

/**
 * Image slot that degrades gracefully: if /public/gallery/… doesn't exist
 * yet, renders an art-directed blush gradient with a label. The moment the
 * file is dropped in, the photo appears — no code changes.
 */
export default function SmartImage({
  src,
  alt,
  label,
  className = "",
  imgClassName = "",
  eager = false,
}: {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  imgClassName?: string;
  eager?: boolean;
}) {
  const [missing, setMissing] = useState(false);

  if (missing) {
    return (
      <div
        className={`relative flex items-center justify-center overflow-hidden ${className}`}
        style={{
          background:
            "linear-gradient(150deg, #E9D2AC 0%, #DFAF87 34%, #C98F66 62%, #9A5A32 100%)",
        }}
        role="img"
        aria-label={alt}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 30% 20%, rgba(255,255,255,0.65), transparent 60%), radial-gradient(ellipse 60% 50% at 80% 85%, rgba(120,60,30,0.35), transparent 65%)",
          }}
        />
        <div className="relative text-center px-6">
          <p className="font-display italic text-2xl text-ink/70">{label ?? alt}</p>
          <p className="eyebrow mt-3 text-ink/40">drop photo → {src}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        background:
          "linear-gradient(150deg, #E9D2AC 0%, #DFAF87 34%, #C98F66 62%, #9A5A32 100%)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        onError={() => setMissing(true)}
        className={`relative h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  );
}
