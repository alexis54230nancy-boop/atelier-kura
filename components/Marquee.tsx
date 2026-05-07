"use client";

import { useRef, useState } from "react";

const ITEMS = [
  "DROP 01",
  "ÉDITION LIMITÉE",
  "FRENCH MADE",
  "ATELIER KŪRA",
  "SÉRIES LIMITÉES",
  "PRÉCISION",
  "SILENCE",
  "DROP 01",
  "ÉDITION LIMITÉE",
  "FRENCH MADE",
  "ATELIER KŪRA",
  "SÉRIES LIMITÉES",
  "PRÉCISION",
  "SILENCE",
];

export default function Marquee() {
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="group overflow-hidden border-y border-white/[0.06] py-[11px] select-none"
      aria-hidden
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={trackRef}
        className="flex w-max items-center gap-0 transition-[animation-play-state] duration-300"
        style={{
          animation: "marquee 48s linear infinite",
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {ITEMS.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="px-6 text-[9.5px] uppercase tracking-[0.34em] text-[#A8926E]/38 transition-colors duration-300 group-hover:text-[#A8926E]/55">
              {item}
            </span>
            <span className="h-[3px] w-[3px] rounded-full bg-[#A8926E]/20" />
          </span>
        ))}
      </div>
    </div>
  );
}
