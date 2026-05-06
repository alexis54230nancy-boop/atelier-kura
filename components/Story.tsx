"use client";

import { motion } from "framer-motion";
import { useI18n } from "./LanguageProvider";

const E = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function Story() {
  const { t } = useI18n();

  return (
    <section id="story" className="px-8 py-20 md:px-14 md:py-28">
      {/* Top rule + eyebrow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: E }}
        className="mb-16 flex items-center gap-6"
      >
        <span className="shrink-0 text-[9px] uppercase tracking-[0.38em] text-[#A8926E]">
          {t("story.eyebrow")}
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-white/[0.08] to-transparent" />
      </motion.div>

      {/* Giant pull-quote */}
      <motion.blockquote
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.0, ease: E }}
        className="mx-auto max-w-5xl font-[family-name:var(--font-cormorant)] text-[clamp(1.7rem,4.2vw,4rem)] font-[300] italic leading-[1.18] tracking-[-0.02em] text-[#f2efe8]/75"
      >
        {t("story.quote")}
      </motion.blockquote>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: E }}
        className="mt-6 flex items-center gap-3"
      >
        <div className="h-px w-8 bg-[#A8926E]/40" />
        <span className="text-[9px] uppercase tracking-[0.38em] text-white/28">
          Atelier Kūra
        </span>
      </motion.div>

      {/* Two-column body */}
      <div className="mt-20 grid gap-x-20 gap-y-12 md:grid-cols-2 md:items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: 0.05, ease: E }}
        >
          <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2rem,4.5vw,4.2rem)] font-[300] leading-[0.93] tracking-[-0.03em] text-[#f2efe8]">
            {t("story.title")}
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: E }}
            style={{ originX: 0 }}
            className="mt-7 h-px bg-gradient-to-r from-white/[0.1] to-transparent"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: 0.15, ease: E }}
          className="space-y-5 text-[15px] leading-[1.88] text-white/48"
        >
          <p>{t("story.text1")}</p>
          <p>{t("story.text2")}</p>
        </motion.div>
      </div>
    </section>
  );
}
