"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useI18n } from "./LanguageProvider";

const E = [0.16, 1, 0.3, 1] as [number, number, number, number];

/* Curtain: text rises from an overflow:hidden parent */
const curtain = (delay = 0) => ({
  initial: { y: "106%", opacity: 0 },
  animate: { y: "0%", opacity: 1 },
  transition: { duration: 1.05, delay, ease: E },
});

const fade = (delay = 0, duration = 0.9) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration, delay, ease: E },
});

const slideUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.85, delay, ease: E },
});

export default function Hero() {
  const { t } = useI18n();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const rawTY  = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const titleY = useSpring(rawTY, { stiffness: 65, damping: 18 });
  const titleO = useTransform(scrollYProgress, [0, 0.38], [1, 0]);

  const rawPY   = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const productY = useSpring(rawPY, { stiffness: 65, damping: 18 });

  const rawSO     = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const scrollO   = useSpring(rawSO, { stiffness: 80, damping: 22 });

  /* Strip trailing dot → render it in gold */
  const line3  = t("hero.titleLine3");
  const hasDot = line3.endsWith(".");
  const word3  = hasDot ? line3.slice(0, -1) : line3;

  const article = t("hero.titleArticle"); // "Le" in FR, "" in EN/DE
  const word1   = t("hero.titleWord1");   // "silence" / "Silence" / "Stille"

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden">

      {/* ── Ambient glows ── */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_68%_52%,rgba(168,146,110,0.065),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_35%_45%_at_18%_38%,rgba(168,146,110,0.035),transparent)]" />

      {/* ── Structural edge lines ── */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/[0.035] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-white/[0.035] to-transparent" />

      {/* ── Rotated side label ── */}
      <div className="absolute left-5 top-1/2 hidden -translate-y-1/2 -rotate-90 select-none text-[7.5px] uppercase tracking-[0.48em] text-white/12 md:block">
        French limited series
      </div>

      <div className="flex min-h-screen flex-col px-8 pb-10 pt-24 md:px-14 md:pt-28">

        {/* Meta bar */}
        <motion.div {...fade(0.04)} className="flex items-center justify-between">
          <span className="text-[9px] uppercase tracking-[0.4em] text-white/22">
            Atelier&thinsp;Kūra
          </span>
          <span className="text-[9px] uppercase tracking-[0.4em] text-white/18">
            No.&thinsp;01&thinsp;/&thinsp;Drop
          </span>
        </motion.div>

        {/* ── Two-column main ── */}
        <div className="flex flex-1 flex-col justify-center gap-14 md:flex-row md:items-center md:gap-10 md:py-16">

          {/* ══ TITLE BLOCK ══ */}
          <motion.div
            style={{ y: titleY, opacity: titleO }}
            className="w-full md:w-[58%]"
          >

            {/* Line 1 — article + main word */}
            <div className="flex items-end gap-3 md:gap-4">
              {article && (
                <motion.span
                  {...fade(0.22)}
                  className="mb-[0.08em] block shrink-0 font-[family-name:var(--font-after)] text-[clamp(1.3rem,2.8vw,3.2rem)] font-[300] italic leading-none tracking-[0.01em] text-[#A8926E]/55"
                >
                  {article}
                </motion.span>
              )}
              <div className="overflow-hidden">
                <motion.h1
                  {...curtain(0.1)}
                  className="block font-[family-name:var(--font-after)] text-[clamp(4.8rem,13.5vw,14rem)] font-[300] leading-[0.86] tracking-[-0.035em] text-[#f2efe8]"
                >
                  {word1}
                </motion.h1>
              </div>
            </div>

            {/* Line 2 — bridge: ——— comme ——— */}
            <div className="my-2 flex items-center gap-4 pl-[4%] md:pl-[8%]">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.1, delay: 0.32, ease: E }}
                style={{ originX: 1 }}
                className="h-px flex-1 max-w-[60px] bg-gradient-to-l from-[#A8926E]/35 to-transparent"
              />
              <div className="overflow-hidden">
                <motion.h1
                  {...curtain(0.24)}
                  className="block font-[family-name:var(--font-after)] text-[clamp(2.6rem,7vw,7.5rem)] font-[300] italic leading-[0.9] tracking-[-0.01em] text-[#A8926E]"
                >
                  {t("hero.titleLine2")}
                </motion.h1>
              </div>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.1, delay: 0.32, ease: E }}
                style={{ originX: 0 }}
                className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-[#A8926E]/35 to-transparent"
              />
            </div>

            {/* Line 3 — main word + gold dot */}
            <div className="overflow-hidden">
              <motion.h1
                {...curtain(0.36)}
                className="block font-[family-name:var(--font-after)] text-[clamp(4.8rem,13.5vw,14rem)] font-[300] leading-[0.86] tracking-[-0.035em]"
              >
                <span className="text-[#f2efe8]">{word3}</span>
                {hasDot && (
                  <span className="text-[#A8926E]">.</span>
                )}
              </motion.h1>
            </div>

            {/* Expanding rule */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.6, delay: 0.58, ease: E }}
              style={{ originX: 0 }}
              className="mt-7 h-px bg-gradient-to-r from-white/[0.1] to-transparent"
            />

            {/* Description */}
            <motion.p {...slideUp(0.68)} className="mt-6 max-w-[43ch] text-[14px] leading-[1.9] text-white/40">
              {t("hero.text")}
            </motion.p>

            {/* CTAs */}
            <motion.div {...slideUp(0.76)} className="mt-8 flex flex-wrap gap-3">
              <a
                href="#collection"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#f2efe8] px-7 text-[13px] font-semibold text-black transition duration-300 hover:-translate-y-[2px] hover:shadow-[0_12px_40px_rgba(242,239,232,0.14)]"
              >
                {t("hero.primaryCta")}
              </a>
              <a
                href="#waitlist"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/[0.13] bg-white/[0.03] px-7 text-[13px] font-semibold text-white/80 transition duration-300 hover:border-white/22 hover:bg-white/[0.06] hover:text-white"
              >
                {t("hero.secondaryCta")}
              </a>
            </motion.div>

            {/* Feature strip */}
            <motion.div
              {...fade(0.88)}
              className="mt-7 flex flex-wrap gap-x-5 gap-y-1 text-[9px] uppercase tracking-[0.26em] text-white/20"
            >
              <span>{t("hero.feature1")}</span>
              <span className="text-white/10">—</span>
              <span>{t("hero.feature2")}</span>
              <span className="text-white/10">—</span>
              <span>{t("hero.feature3")}</span>
            </motion.div>
          </motion.div>

          {/* ══ PRODUCT ══ */}
          <motion.div
            style={{ y: productY }}
            {...fade(0.18)}
            className="flex flex-col items-center md:w-[36%]"
          >
            {/* Glow */}
            <div className="pointer-events-none absolute h-72 w-56 rounded-full bg-[#A8926E]/[0.055] blur-[90px]" />

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="relative mx-auto h-[360px] w-[230px] overflow-hidden rounded-[34px] border border-white/[0.08] bg-[#0c0c0e] shadow-[0_56px_100px_rgba(0,0,0,0.75)] md:h-[450px] md:w-[278px]">

                {/* Gradient layers */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_48%_at_62%_14%,rgba(168,146,110,0.15),transparent)]" />
                <div className="absolute inset-x-9 bottom-0 h-[78%] rounded-t-[88px] border border-white/[0.055] bg-gradient-to-b from-white/[0.05] to-transparent" />
                <div className="absolute right-6 top-9 h-14 w-14 rounded-full border border-white/[0.055] bg-white/[0.012]" />
                <div className="absolute right-4 top-5 h-2 w-2 rounded-full bg-[#A8926E]/20" />

                {/* Vertical accent */}
                <div className="absolute left-0 top-[22%] h-[32%] w-px bg-gradient-to-b from-transparent via-[#A8926E]/18 to-transparent" />

                {/* Drop badge */}
                <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-[#A8926E]/20 bg-[#A8926E]/[0.07] px-2.5 py-[5px]">
                  <span className="h-[5px] w-[5px] rounded-full bg-[#A8926E]/50" />
                  <span className="text-[7.5px] uppercase tracking-[0.3em] text-[#A8926E]/75">Drop 01</span>
                </div>

                {/* Ghost number */}
                <div className="absolute bottom-2 right-3 select-none font-[family-name:var(--font-after)] text-[8rem] font-[300] italic leading-none text-white/[0.03]">
                  01
                </div>

                {/* KŪRA */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[9.5px] uppercase tracking-[0.44em] text-white/22">
                  KŪRA
                </div>
              </div>

              {/* Cast shadow */}
              <div className="mx-auto mt-3 h-3 w-28 rounded-full bg-black/55 blur-xl" />
            </motion.div>

            <motion.p {...fade(0.5)} className="mt-6 text-center text-[8.5px] uppercase tracking-[0.36em] text-white/18">
              3&thinsp;pièces&thinsp;·&thinsp;Séries limitées
            </motion.p>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity: scrollO }}
        className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[7.5px] uppercase tracking-[0.38em] text-white/18">Scroll</span>
        <motion.div
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
          style={{ originY: 0 }}
          className="h-9 w-px bg-gradient-to-b from-white/15 to-transparent"
        />
      </motion.div>
    </section>
  );
}
