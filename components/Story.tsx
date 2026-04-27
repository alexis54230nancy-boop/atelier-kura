"use client";

import { useI18n } from "./LanguageProvider";

export default function Story() {
  const { t } = useI18n();

  return (
    <section id="story" className="px-4 py-8">
      <div className="mx-auto grid w-[min(1200px,100%)] gap-7 md:grid-cols-[.92fr_1.08fr]">
        <div className="rounded-[28px] border border-white/10 bg-white/[0.02] p-8 shadow-2xl transition duration-500 hover:border-white/15 hover:bg-white/[0.03] md:p-10">
          <p className="text-2xl leading-[1.22] tracking-[-0.03em] md:text-4xl">
            {t("story.quote")}
          </p>

          <small className="mt-5 block text-sm uppercase tracking-[0.08em] text-white/60">
            Atelier Kūra
          </small>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-white/[0.02] p-8 shadow-2xl transition duration-500 hover:border-white/15 hover:bg-white/[0.03] md:p-10">
          <div className="text-[12px] uppercase tracking-[0.2em] text-[#d9d4c7]">
            {t("story.eyebrow")}
          </div>

          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
            {t("story.title")}
          </h2>

          <p className="mt-4 text-base leading-8 text-white/70">
            {t("story.text1")}
          </p>

          <p className="mt-4 text-base leading-8 text-white/70">
            {t("story.text2")}
          </p>
        </div>
      </div>
    </section>
  );
}