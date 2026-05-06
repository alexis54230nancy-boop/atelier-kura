"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let raf: number;
    let mx = -100, my = -100;
    let rx = -100, ry = -100;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const loop = () => {
      rx += (mx - rx) * 0.11;
      ry += (my - ry) * 0.11;
      dotRef.current?.style.setProperty("transform", `translate(${mx - 4}px,${my - 4}px)`);
      ringRef.current?.style.setProperty("transform", `translate(${rx - 16}px,${ry - 16}px)`);
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot pointer-events-none fixed left-0 top-0 z-[10000] h-2 w-2 rounded-full bg-[#f5f5f2]/75 will-change-transform" />
      <div ref={ringRef} className="cursor-ring pointer-events-none fixed left-0 top-0 z-[10000] h-8 w-8 rounded-full border border-[#f5f5f2]/20 will-change-transform" />
    </>
  );
}
