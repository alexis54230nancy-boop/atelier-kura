"use client";

import { useI18n } from "./LanguageProvider";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="px-4 pb-10 pt-16">
      <div className="mx-auto grid w-[min(1280px,100%)] gap-7 md:grid-cols-2">
        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.035] shadow-2xl backdrop-blur-xl transition duration-300 hover:bg-white/[0.05]">
          <div className="p-8 md:p-12">
            <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-[#d9d4c7]">
              <span className="h-px w-10 bg-[#d9d4c7]" />
              {t("hero.eyebrow")}
            </div>

            <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.055em] md:text-7xl">
              {t("hero.titleLine1")}
              <br />
              {t("hero.titleLine2")}
              <br />
              {t("hero.titleLine3")}
            </h1>

            <p className="mt-6 max-w-[58ch] text-base leading-8 text-white/72 md:text-lg">
              {t("hero.text")}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#collection"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#f2efe8] px-6 text-sm font-semibold text-black shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-[1px] hover:brightness-105"
              >
                {t("hero.primaryCta")}
              </a>

              <a
                href="#waitlist"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 text-sm font-semibold text-white transition duration-300 hover:border-white/30 hover:bg-white/[0.08]"
              >
                {t("hero.secondaryCta")}
              </a>
            </div>

            <div className="mt-8 grid gap-4 border-t border-white/10 pt-6 text-sm text-white/65 md:grid-cols-3">
              <span>{t("hero.feature1")}</span>
              <span>{t("hero.feature2")}</span>
              <span>{t("hero.feature3")}</span>
            </div>
          </div>
        </div>

        <div className="relative min-h-[560px] overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.035] shadow-2xl backdrop-blur-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(217,212,199,0.12),transparent_28%)]" />

          <div className="absolute bottom-0 right-[8%] h-[88%] w-[78%] max-w-[560px] rounded-t-[34px] border border-white/10 bg-gradient-to-b from-white/[0.08] to-black/30 shadow-2xl backdrop-blur-md transition duration-700 hover:scale-[1.015]" />

          <div className="absolute right-8 top-8 h-28 w-28 rounded-full border border-white/10 bg-white/[0.025] blur-[1px]" />

          <div className="absolute bottom-6 left-6 max-w-[280px] rounded-[22px] border border-white/10 bg-black/45 p-5 backdrop-blur-xl">
            <h3 className="text-base font-semibold">{t("hero.cardTitle")}</h3>
            <p className="mt-2 text-sm leading-6 text-white/72">
              {t("hero.cardText")}
            </p>
          </div>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[0.32em] text-white/45">
            KŪRA
          </div>
        </div>
      </div>
    </section>
  );
}