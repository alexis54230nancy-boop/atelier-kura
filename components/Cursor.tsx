"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const posRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let raf: number;
    let mx = -100, my = -100;
    let rx = -100, ry = -100;
    let hovering = false;
    let pressing = false;

    const applyState = () => {
      if (!ringRef.current || !dotRef.current) return;
      if (pressing) {
        dotRef.current.style.transform = "scale(0.35)";
        ringRef.current.style.width = "28px";
        ringRef.current.style.height = "28px";
        ringRef.current.style.borderColor = "rgba(168,146,110,0.6)";
      } else if (hovering) {
        dotRef.current.style.transform = "scale(1)";
        ringRef.current.style.width = "44px";
        ringRef.current.style.height = "44px";
        ringRef.current.style.borderColor = "rgba(168,146,110,0.45)";
      } else {
        dotRef.current.style.transform = "scale(1)";
        ringRef.current.style.width = "32px";
        ringRef.current.style.height = "32px";
        ringRef.current.style.borderColor = "rgba(245,245,242,0.2)";
      }
    };

    const isInteractive = (e: MouseEvent) =>
      !!(e.target as Element).closest("a, button, [role='button'], label, input, select, textarea");

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    const onDown = () => { pressing = true; applyState(); };
    const onUp = () => { pressing = false; applyState(); };
    const onOver = (e: MouseEvent) => { if (isInteractive(e)) { hovering = true; applyState(); } };
    const onOut = (e: MouseEvent) => { if (isInteractive(e)) { hovering = false; applyState(); } };

    const loop = () => {
      rx += (mx - rx) * 0.11;
      ry += (my - ry) * 0.11;
      const rHalf = pressing ? 14 : hovering ? 22 : 16;
      posRef.current?.style.setProperty("transform", `translate(${mx - 4}px,${my - 4}px)`);
      ringRef.current?.style.setProperty("transform", `translate(${rx - rHalf}px,${ry - rHalf}px)`);
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Dot: outer wrapper handles position (no transition), inner handles scale transition */}
      <div
        ref={posRef}
        className="cursor-dot pointer-events-none fixed left-0 top-0 z-[10000] will-change-transform"
      >
        <div
          ref={dotRef}
          className="h-2 w-2 rounded-full bg-[#f5f5f2]/75"
          style={{ transition: "transform 0.12s cubic-bezier(0.22,1,0.36,1)" }}
        />
      </div>

      {/* Ring: position via CSS var + JS, size/color via transitions */}
      <div
        ref={ringRef}
        className="cursor-ring pointer-events-none fixed left-0 top-0 z-[10000] rounded-full border will-change-transform"
        style={{
          width: 32,
          height: 32,
          borderColor: "rgba(245,245,242,0.2)",
          transition:
            "width 0.22s cubic-bezier(0.22,1,0.36,1), height 0.22s cubic-bezier(0.22,1,0.36,1), border-color 0.18s ease",
        }}
      />
    </>
  );
}
