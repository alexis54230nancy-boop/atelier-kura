"use client";

import { motion } from "framer-motion";
import { useI18n } from "./LanguageProvider";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.9, delay, ease },
});

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative flex min-h-[92vh] flex-col justify-between overflow-hidden px-6 pb-10 pt-28 md:px-12 md:pt-32">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(168,146,110,0.07),transparent)]" />

      {/* Top bar */}
      <motion.div
        {...fadeIn(0.05)}
        className="flex items-center justify-between text-[10px] uppercase tracking-[0.32em] text-white/35"
      >
        <span>{t("hero.eyebrow")}</span>
        <span className="hidden md:block">Drop 01 — 2026</span>
        <span className="flex items-center gap-2">
          <span className="h-px w-6 bg-white/20" />
          KŪRA
        </span>
      </motion.div>

      {/* Giant editorial title */}
      <div className="relative my-auto py-10 md:py-14">
        <motion.h1
          {...fadeUp(0.1)}
          className="font-[family-name:var(--font-cormorant)] text-[clamp(4.5rem,14vw,14rem)] font-light leading-[0.88] tracking-[-0.03em] text-[#f2efe8]"
        >
          {t("hero.titleLine1")}
        </motion.h1>

        <motion.div
          {...fadeUp(0.18)}
          className="flex items-baseline gap-6 md:gap-10"
        >
          <span className="font-[family-name:var(--font-cormorant)] text-[clamp(4.5rem,14vw,14rem)] font-light italic leading-[0.88] tracking-[-0.03em] text-[#A8926E]">
            {t("hero.titleLine2")}
          </span>
          <span className="hidden h-[0.7em] w-px self-center bg-white/15 md:block" />
          <p className="hidden max-w-[36ch] text-sm leading-7 text-white/50 md:block">
            {t("hero.text")}
          </p>
        </motion.div>

        <motion.h1
          {...fadeUp(0.26)}
          className="font-[family-name:var(--font-cormorant)] text-[clamp(4.5rem,14vw,14rem)] font-light leading-[0.88] tracking-[-0.03em] text-[#f2efe8]"
        >
          {t("hero.titleLine3")}
        </motion.h1>
      </div>

      {/* Mobile description */}
      <motion.p
        {...fadeIn(0.3)}
        className="mb-6 max-w-[52ch] text-sm leading-7 text-white/50 md:hidden"
      >
        {t("hero.text")}
      </motion.p>

      {/* Bottom bar */}
      <motion.div
        {...fadeUp(0.35)}
        className="flex flex-col gap-6 border-t border-white/[0.07] pt-7 md:flex-row md:items-center md:justify-between"
      >
        <div className="flex flex-wrap gap-3">
          <a
            href="#collection"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#f2efe8] px-6 text-sm font-semibold text-black transition duration-300 hover:-translate-y-[1px] hover:brightness-105"
          >
            {t("hero.primaryCta")}
          </a>
          <a
            href="#waitlist"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 text-sm font-semibold text-white transition duration-300 hover:border-white/30 hover:bg-white/[0.08]"
          >
            {t("hero.secondaryCta")}
          </a>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] uppercase tracking-[0.22em] text-white/35">
          <span>{t("hero.feature1")}</span>
          <span className="hidden text-white/15 md:block">·</span>
          <span>{t("hero.feature2")}</span>
          <span className="hidden text-white/15 md:block">·</span>
          <span>{t("hero.feature3")}</span>
        </div>
      </motion.div>
    </section>
  );
}
