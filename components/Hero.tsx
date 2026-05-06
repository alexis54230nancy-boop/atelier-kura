"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useI18n } from "./LanguageProvider";

const E = [0.16, 1, 0.3, 1] as [number, number, number, number];

/* Curtain reveal — text slides up from behind an overflow:hidden parent */
const curtain = (delay = 0) => ({
  initial: { y: "108%", opacity: 0 },
  animate: { y: "0%", opacity: 1 },
  transition: { duration: 1.1, delay, ease: E },
});

const fade = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1.0, delay, ease: E },
});

export default function Hero() {
  const { t } = useI18n();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [0, -55]);
  const titleY = useSpring(rawY, { stiffness: 70, damping: 18 });
  const titleOpacity = useTransform(scrollYProgress, [0, 0.42], [1, 0]);

  const rawPY = useTransform(scrollYProgress, [0, 1], [0, -22]);
  const productY = useSpring(rawPY, { stiffness: 70, damping: 18 });

  const rawSO = useTransform(scrollYProgress, [0, 0.14], [1, 0]);
  const scrollOpacity = useSpring(rawSO, { stiffness: 80, damping: 22 });

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden"
    >
      {/* ── Ambient light ── */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_60%_at_72%_55%,rgba(168,146,110,0.07),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_22%_35%,rgba(168,146,110,0.04),transparent)]" />

      {/* ── Structural lines ── */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />

      {/* ── Vertical edge label (desktop only) ── */}
      <div className="absolute left-5 top-1/2 hidden -translate-y-1/2 -rotate-90 select-none text-[8px] uppercase tracking-[0.45em] text-white/15 md:block">
        French limited series
      </div>

      {/* ── Inner layout ── */}
      <div className="flex min-h-screen flex-col px-8 pt-28 pb-10 md:px-14 md:pt-32">

        {/* Meta bar */}
        <motion.div
          {...fade(0.05)}
          className="flex items-center justify-between"
        >
          <span className="text-[9px] uppercase tracking-[0.38em] text-white/25">
            Atelier Kūra
          </span>
          <span className="text-[9px] uppercase tracking-[0.38em] text-white/20">
            No.&thinsp;01 / Drop
          </span>
        </motion.div>

        {/* ── Main: title | product ── */}
        <div className="mt-auto flex flex-1 flex-col items-center justify-center gap-12 md:flex-row md:items-center md:gap-16">

          {/* TITLE BLOCK */}
          <motion.div
            style={{ y: titleY, opacity: titleOpacity }}
            className="w-full md:w-[55%]"
          >
            {/* Line 1 — giant */}
            <div className="overflow-hidden">
              <motion.h1
                {...curtain(0.1)}
                className="block font-[family-name:var(--font-cormorant)] text-[clamp(4rem,12.5vw,13rem)] font-[300] leading-[0.87] tracking-[-0.03em] text-[#f2efe8]"
              >
                {t("hero.titleLine1")}
              </motion.h1>
            </div>

            {/* Line 2 — annotative, indented, italic gold */}
            <div className="mt-1 flex items-center gap-4 pl-[8%] md:pl-[14%]">
              <motion.span
                {...fade(0.32)}
                className="h-px w-10 shrink-0 bg-[#A8926E]/40"
              />
              <div className="overflow-hidden">
                <motion.h1
                  {...curtain(0.2)}
                  className="block font-[family-name:var(--font-cormorant)] text-[clamp(2.6rem,7.5vw,8rem)] font-[300] italic leading-[0.87] tracking-[-0.02em] text-[#A8926E]"
                >
                  {t("hero.titleLine2")}
                </motion.h1>
              </div>
            </div>

            {/* Line 3 — giant */}
            <div className="overflow-hidden">
              <motion.h1
                {...curtain(0.3)}
                className="block font-[family-name:var(--font-cormorant)] text-[clamp(4rem,12.5vw,13rem)] font-[300] leading-[0.87] tracking-[-0.03em] text-[#f2efe8]"
              >
                {t("hero.titleLine3")}
              </motion.h1>
            </div>

            {/* Expanding rule */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.4, delay: 0.55, ease: E }}
              style={{ originX: 0 }}
              className="mt-6 h-px w-full bg-gradient-to-r from-white/[0.12] to-transparent"
            />

            {/* Description */}
            <motion.p
              {...fade(0.65)}
              className="mt-6 max-w-[44ch] text-sm leading-7 text-white/42"
            >
              {t("hero.text")}
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...fade(0.75)}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#collection"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#f2efe8] px-7 text-[13px] font-semibold text-black transition duration-300 hover:-translate-y-[2px] hover:shadow-[0_14px_44px_rgba(242,239,232,0.14)]"
              >
                {t("hero.primaryCta")}
              </a>
              <a
                href="#waitlist"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/14 bg-white/[0.035] px-7 text-[13px] font-semibold text-white transition duration-300 hover:border-white/24 hover:bg-white/[0.065]"
              >
                {t("hero.secondaryCta")}
              </a>
            </motion.div>

            {/* Feature pills */}
            <motion.div
              {...fade(0.85)}
              className="mt-7 flex flex-wrap gap-x-5 gap-y-1.5 text-[9px] uppercase tracking-[0.24em] text-white/22"
            >
              <span>{t("hero.feature1")}</span>
              <span className="text-white/10">—</span>
              <span>{t("hero.feature2")}</span>
              <span className="text-white/10">—</span>
              <span>{t("hero.feature3")}</span>
            </motion.div>
          </motion.div>

          {/* PRODUCT SILHOUETTE */}
          <motion.div
            style={{ y: productY }}
            {...fade(0.2)}
            className="flex flex-col items-center md:w-[38%]"
          >
            {/* Glow halo */}
            <div className="absolute h-64 w-48 rounded-full bg-[#A8926E]/[0.06] blur-[80px]" />

            {/* Float wrapper */}
            <motion.div
              animate={{ y: [0, -11, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="relative mx-auto h-[380px] w-[240px] overflow-hidden rounded-[32px] border border-white/[0.09] bg-[#0d0d0f] shadow-[0_48px_96px_rgba(0,0,0,0.7)] md:h-[460px] md:w-[290px]">
                {/* Layers */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_60%_15%,rgba(168,146,110,0.16),transparent)]" />
                <div className="absolute inset-x-10 bottom-0 h-[80%] rounded-t-[90px] border border-white/[0.06] bg-gradient-to-b from-white/[0.055] to-transparent" />
                <div className="absolute right-7 top-10 h-16 w-16 rounded-full border border-white/[0.06] bg-white/[0.015]" />
                <div className="absolute right-5 top-6 h-2.5 w-2.5 rounded-full border border-white/[0.06] bg-white/[0.015]" />

                {/* Left edge accent line */}
                <div className="absolute left-0 top-[20%] h-[35%] w-px bg-gradient-to-b from-transparent via-[#A8926E]/20 to-transparent" />

                {/* Drop badge */}
                <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-[#A8926E]/25 bg-[#A8926E]/[0.08] px-2.5 py-1">
                  <span className="h-1 w-1 rounded-full bg-[#A8926E]/60" />
                  <span className="text-[8px] uppercase tracking-[0.28em] text-[#A8926E]/80">
                    Drop 01
                  </span>
                </div>

                {/* Giant background number */}
                <div className="absolute bottom-3 right-4 select-none font-[family-name:var(--font-cormorant)] text-[7rem] font-[300] italic leading-none text-white/[0.035]">
                  01
                </div>

                {/* KŪRA watermark */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.42em] text-white/25">
                  KŪRA
                </div>
              </div>

              {/* Shadow beneath product */}
              <div className="mx-auto mt-2 h-4 w-32 rounded-full bg-black/60 blur-xl" />
            </motion.div>

            {/* Product meta */}
            <motion.div {...fade(0.5)} className="mt-5 text-center">
              <p className="text-[9px] uppercase tracking-[0.34em] text-white/22">
                3 pièces · Séries limitées
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        style={{ opacity: scrollOpacity }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2.5"
      >
        <span className="text-[8px] uppercase tracking-[0.36em] text-white/20">
          Scroll
        </span>
        <motion.div
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{ originY: 0 }}
          className="h-10 w-px bg-gradient-to-b from-white/18 to-transparent"
        />
      </motion.div>
    </section>
  );
}
