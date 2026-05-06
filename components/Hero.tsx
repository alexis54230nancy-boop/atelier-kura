"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useI18n } from "./LanguageProvider";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 28, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.9, delay, ease },
});

export default function Hero() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const rawTitleY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const titleY = useSpring(rawTitleY, { stiffness: 80, damping: 20 });
  const titleOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);

  const rawProductY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const productY = useSpring(rawProductY, { stiffness: 80, damping: 20 });

  const rawScrollOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const scrollIndicatorOpacity = useSpring(rawScrollOpacity, {
    stiffness: 80,
    damping: 20,
  });

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16 text-center"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_50%,rgba(168,146,110,0.07),transparent)]" />
      <div className="pointer-events-none absolute top-0 left-1/2 h-px w-[60vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Eyebrow */}
      <motion.div
        {...reveal(0.05)}
        className="mb-10 flex items-center gap-3 text-[10px] uppercase tracking-[0.38em] text-white/35"
      >
        <span className="h-px w-8 bg-white/20" />
        {t("hero.eyebrow")}
        <span className="h-px w-8 bg-white/20" />
      </motion.div>

      {/* Title — scroll-linked parallax */}
      <motion.div style={{ y: titleY, opacity: titleOpacity }} className="relative z-10">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.0, delay: 0.12, ease }}
            className="block font-[family-name:var(--font-cormorant)] text-[clamp(3.8rem,11vw,10.5rem)] font-light leading-[0.88] tracking-[-0.03em] text-[#f2efe8]"
          >
            {t("hero.titleLine1")}
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.0, delay: 0.2, ease }}
            className="block font-[family-name:var(--font-cormorant)] text-[clamp(3.2rem,9vw,8.5rem)] font-light italic leading-[0.88] tracking-[-0.02em] text-[#A8926E]"
          >
            {t("hero.titleLine2")}
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.0, delay: 0.28, ease }}
            className="block font-[family-name:var(--font-cormorant)] text-[clamp(3.8rem,11vw,10.5rem)] font-light leading-[0.88] tracking-[-0.03em] text-[#f2efe8]"
          >
            {t("hero.titleLine3")}
          </motion.h1>
        </div>
      </motion.div>

      {/* Floating product silhouette */}
      <motion.div
        style={{ y: productY }}
        className="relative z-0 mt-14 mb-10"
      >
        {/* Glow beneath */}
        <div className="absolute -bottom-6 left-1/2 h-16 w-48 -translate-x-1/2 rounded-full bg-[#A8926E]/10 blur-3xl" />

        {/* Float animation wrapper */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          {/* Product frame */}
          <div className="relative mx-auto h-[320px] w-[220px] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.025] shadow-[0_40px_80px_rgba(0,0,0,0.6)] backdrop-blur-sm md:h-[380px] md:w-[260px]">
            {/* Inner gradient layers */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_18%,rgba(168,146,110,0.18),transparent_45%)]" />
            <div className="absolute inset-x-8 bottom-0 h-[82%] rounded-t-[70px] border border-white/[0.08] bg-gradient-to-b from-white/[0.07] to-black/50" />
            <div className="absolute right-5 top-7 h-12 w-12 rounded-full border border-white/[0.07] bg-white/[0.02]" />
            <div className="absolute left-4 right-4 top-[38%] h-px bg-white/[0.04]" />

            {/* Drop badge */}
            <div className="absolute left-4 top-4 rounded-full border border-[#A8926E]/30 bg-[#A8926E]/10 px-2.5 py-1 text-[9px] uppercase tracking-[0.26em] text-[#A8926E]">
              Drop 01
            </div>

            {/* KŪRA watermark */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 font-[family-name:var(--font-cormorant)] text-[11px] uppercase tracking-[0.38em] text-white/30">
              KŪRA
            </div>

            {/* Giant index number */}
            <div className="absolute right-4 bottom-4 font-[family-name:var(--font-cormorant)] text-7xl font-light leading-none text-white/[0.04]">
              01
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Description */}
      <motion.p
        {...reveal(0.5)}
        className="mx-auto max-w-[44ch] text-sm leading-7 text-white/45"
      >
        {t("hero.text")}
      </motion.p>

      {/* CTAs */}
      <motion.div
        {...reveal(0.6)}
        className="mt-8 flex flex-wrap justify-center gap-3"
      >
        <a
          href="#collection"
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#f2efe8] px-7 text-sm font-semibold text-black transition duration-300 hover:-translate-y-[2px] hover:shadow-[0_16px_48px_rgba(242,239,232,0.15)]"
        >
          {t("hero.primaryCta")}
        </a>
        <a
          href="#waitlist"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-7 text-sm font-semibold text-white transition duration-300 hover:border-white/25 hover:bg-white/[0.07]"
        >
          {t("hero.secondaryCta")}
        </a>
      </motion.div>

      {/* Feature pills */}
      <motion.div
        {...reveal(0.7)}
        className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[10px] uppercase tracking-[0.22em] text-white/25"
      >
        <span>{t("hero.feature1")}</span>
        <span className="text-white/10">·</span>
        <span>{t("hero.feature2")}</span>
        <span className="text-white/10">·</span>
        <span>{t("hero.feature3")}</span>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity: scrollIndicatorOpacity }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/25">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-gradient-to-b from-white/20 to-transparent"
        />
      </motion.div>
    </section>
  );
}
