"use client";

import { motion } from "framer-motion";
import { useI18n } from "./LanguageProvider";

const E = [0.16, 1, 0.3, 1] as [number, number, number, number];

const inV = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.9, delay, ease: E },
});

export default function Waitlist() {
  const { t } = useI18n();

  return (
    <section id="waitlist" className="relative overflow-hidden px-8 py-24 md:px-14 md:py-36">

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_50%_50%,rgba(168,146,110,0.07),transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Ghost KŪRA behind */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center select-none overflow-hidden">
        <span className="font-[family-name:var(--font-after)] text-[22vw] font-[300] italic leading-none text-white/[0.022] md:text-[18vw]">
          Kūra
        </span>
      </div>

      <div className="relative mx-auto max-w-2xl text-center">

        {/* Eyebrow */}
        <motion.div {...inV(0)} className="mb-10 flex items-center justify-center gap-4">
          <div className="h-px w-10 bg-[#A8926E]/35" />
          <span className="text-[8.5px] uppercase tracking-[0.44em] text-[#A8926E]">
            {t("waitlist.eyebrow")}
          </span>
          <div className="h-px w-10 bg-[#A8926E]/35" />
        </motion.div>

        {/* Title */}
        <motion.h2
          {...inV(0.08)}
          className="font-[family-name:var(--font-after)] text-[clamp(2.8rem,7vw,6.5rem)] font-[300] leading-[0.92] tracking-[-0.03em] text-[#f2efe8]"
        >
          {t("waitlist.title")}
        </motion.h2>

        {/* Description */}
        <motion.p {...inV(0.18)} className="mx-auto mt-6 max-w-[44ch] text-[14px] leading-[1.88] text-white/40">
          {t("waitlist.text")}
        </motion.p>

        {/* Form */}
        <motion.form
          {...inV(0.28)}
          action="https://cd8bef21.sibforms.com/serve/MUIFAJVSeo6fP48jo6DY0qyTt8FNnV8SWloCE0xgzdlkx-D3ZzGDG8MLNOSATrtwgdlQhbb8DIsMmZMOHq9-d4zNuzUJ6RngrcVCW8nSMIoP14nxWFkMm-c0p35plURZtRxSS0WlyEP0KwtWKCqOr0tcgRXwbrSbYb7mJafVUG-gsC0KljFkJeatU_l0lz1hCYLCQWbcXcMs7lrI"
          method="GET"
          target="_blank"
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
        >
          <input
            type="email"
            name="email"
            required
            placeholder={t("waitlist.placeholder")}
            className="h-12 w-full rounded-full border border-white/[0.1] bg-white/[0.03] px-5 text-[13px] text-white outline-none transition duration-300 placeholder:text-white/28 focus:border-[#A8926E]/40 focus:bg-white/[0.05] sm:max-w-[280px]"
          />
          <button
            type="submit"
            className="shimmer h-12 shrink-0 rounded-full bg-[#f2efe8] px-8 text-[13px] font-semibold text-black transition duration-300 hover:-translate-y-[2px] hover:shadow-[0_12px_40px_rgba(242,239,232,0.15)]"
          >
            {t("waitlist.button")}
          </button>
        </motion.form>

        {/* Trust line */}
        <motion.p {...inV(0.36)} className="mt-7 text-[9px] uppercase tracking-[0.28em] text-white/18">
          Drop 01&thinsp;·&thinsp;3 pièces&thinsp;·&thinsp;Séries limitées&thinsp;·&thinsp;Sans spam
        </motion.p>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
    </section>
  );
}
