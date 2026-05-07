"use client";

import { motion } from "framer-motion";
import { useI18n } from "./LanguageProvider";

const E = [0.16, 1, 0.3, 1] as [number, number, number, number];

const inV = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.95, delay, ease: E },
});

const fadeV = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 } as const,
  viewport: { once: true },
  transition: { duration: 0.85, delay, ease: E },
});

export default function Story() {
  const { t } = useI18n();

  const values = [
    { label: t("story.v1.label"), desc: t("story.v1.desc"), num: "I" },
    { label: t("story.v2.label"), desc: t("story.v2.desc"), num: "II" },
    { label: t("story.v3.label"), desc: t("story.v3.desc"), num: "III" },
  ];

  return (
    <section id="story" className="px-8 py-20 md:px-14 md:py-32">

      {/* ── ACT 1: Quote ── */}
      <motion.div {...fadeV(0)} className="mb-14 flex items-center gap-6">
        <span className="shrink-0 text-[8.5px] uppercase tracking-[0.42em] text-[#A8926E]">
          {t("story.eyebrow")}
        </span>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: E }}
          style={{ originX: 0 }}
          className="h-px flex-1 bg-gradient-to-r from-white/[0.07] to-transparent"
        />
      </motion.div>

      <div className="relative">
        {/* Giant decorative numeral */}
        <div className="pointer-events-none absolute -left-2 -top-6 select-none font-[family-name:var(--font-after)] text-[12rem] font-[300] italic leading-none text-white/[0.025] md:text-[18rem]">
          01
        </div>

        <motion.blockquote
          {...inV(0.08)}
          className="relative max-w-4xl font-[family-name:var(--font-after)] text-[clamp(1.65rem,4vw,3.8rem)] font-[300] italic leading-[1.2] tracking-[-0.02em] text-[#f2efe8]/72"
        >
          {t("story.quote")}
        </motion.blockquote>

        <motion.div {...fadeV(0.25)} className="mt-7 flex items-center gap-3">
          <div className="h-px w-7 bg-[#A8926E]/38" />
          <span className="text-[8.5px] uppercase tracking-[0.42em] text-white/25">
            Atelier Kūra
          </span>
        </motion.div>
      </div>

      {/* ── ACT 2: Manifesto values ── */}
      <div className="mt-24 grid gap-px border border-white/[0.06] md:grid-cols-3">
        {values.map(({ label, desc, num }, i) => (
          <motion.div
            key={label}
            {...inV(0.08 + i * 0.1)}
            className="group relative overflow-hidden border-white/[0.06] p-8 transition duration-500 hover:bg-white/[0.03] md:p-10"
          >
            {/* Top gold border on hover */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              style={{ originX: 0 }}
              className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-[#A8926E]/45 to-transparent"
            />

            {/* Roman numeral */}
            <div className="mb-5 font-[family-name:var(--font-after)] text-[11px] italic tracking-[0.15em] text-[#A8926E]/40 transition duration-500 group-hover:text-[#A8926E]/65">
              {num}
            </div>

            {/* Value label */}
            <h3 className="font-[family-name:var(--font-after)] text-[clamp(2rem,4vw,3.2rem)] font-[300] leading-[0.92] tracking-[-0.025em] text-[#f2efe8]">
              {label}
            </h3>

            {/* Description */}
            <p className="mt-4 text-[13px] leading-[1.82] text-white/38 transition duration-500 group-hover:text-white/52">
              {desc}
            </p>

            {/* Bottom accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              style={{ originX: 0 }}
              className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#A8926E]/30 to-transparent"
            />
          </motion.div>
        ))}
      </div>

      {/* ── ACT 3: Brand text ── */}
      <div className="mt-24 grid gap-x-20 gap-y-12 md:grid-cols-[1fr_1fr] md:items-start">
        <motion.div {...inV(0.05)}>
          <h2 className="font-[family-name:var(--font-after)] text-[clamp(2.2rem,5vw,4.5rem)] font-[300] leading-[0.92] tracking-[-0.03em] text-[#f2efe8]">
            {t("story.title")}
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, delay: 0.25, ease: E }}
            style={{ originX: 0 }}
            className="mt-8 h-px bg-gradient-to-r from-white/[0.09] to-transparent"
          />
        </motion.div>

        <motion.div {...inV(0.15)} className="space-y-6 text-[14.5px] leading-[1.92] text-white/42">
          <p>{t("story.text1")}</p>
          <p>{t("story.text2")}</p>
        </motion.div>
      </div>
    </section>
  );
}
