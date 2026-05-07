"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Story from "../components/Story";
import Waitlist from "../components/Waitlist";
import Footer from "../components/Footer";
import Marquee from "../components/Marquee";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import { useI18n } from "../components/LanguageProvider";
import { formatPrice, getLocalizedText, products } from "../lib/products";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const inView = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.6, ease: EASE },
};

export default function Home() {
  const { language, t } = useI18n();

  return (
    <main className="min-h-screen text-[#f5f5f2]">
      <Navbar />

      <Hero />

      <Marquee />

      {/* ── Material section — open editorial, no cards ── */}
      <motion.section
        {...inView}
        className="px-8 py-20 md:px-14 md:py-28"
      >
        {/* Eyebrow rule */}
        <div className="mb-14 flex items-center gap-6">
          <span className="shrink-0 text-[9px] uppercase tracking-[0.38em] text-[#A8926E]">
            {t("home.materialEyebrow")}
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-white/[0.08] to-transparent" />
        </div>

        <div className="grid gap-16 md:grid-cols-[1fr_1px_1fr] md:gap-0">
          {/* Left: title + text */}
          <div className="md:pr-16">
            <h2 className="font-[family-name:var(--font-after)] text-[clamp(2.4rem,5.5vw,5.5rem)] font-[300] leading-[0.92] tracking-[-0.03em] text-[#f2efe8]">
              {t("home.materialTitle")}
            </h2>
            <p className="mt-6 text-[15px] leading-[1.88] text-white/45">
              {t("home.materialText")}
            </p>
          </div>

          {/* Vertical divider */}
          <div className="hidden bg-gradient-to-b from-transparent via-white/[0.07] to-transparent md:block" />

          {/* Right: specs */}
          <div className="space-y-0 md:pl-16">
            {[
              ["450 GSM", t("home.materialCard1")],
              ["240 GSM", t("home.materialCard2")],
              ["Drop 01", t("home.materialCard3")],
            ].map(([spec, desc], i) => (
              <div
                key={spec}
                className={`flex items-baseline justify-between gap-6 py-5 ${i < 2 ? "border-b border-white/[0.06]" : ""}`}
              >
                <span className="font-[family-name:var(--font-after)] text-[2rem] font-[300] leading-none tracking-[-0.02em] text-[#f2efe8]/80">
                  {spec}
                </span>
                <span className="max-w-[28ch] text-right text-[13px] leading-relaxed text-white/38">
                  {desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <section id="collection" className="px-4">
        <ContainerScroll
          titleComponent={
            <div className="space-y-3">
              <div className="text-[10px] uppercase tracking-[0.32em] text-[#A8926E]">
                {t("home.collectionEyebrow")}
              </div>
              <h2 className="font-[family-name:var(--font-after)] text-[clamp(3rem,8vw,7rem)] font-light leading-[0.92] tracking-[-0.03em] text-[#f2efe8]">
                Drop 01.
              </h2>
              <p className="mx-auto max-w-lg text-sm leading-7 text-white/50">
                {t("home.collectionText")}
              </p>
            </div>
          }
        >
          {/* Product grid inside the scroll card */}
          <div className="flex h-full items-stretch gap-0 overflow-x-auto md:overflow-visible md:grid md:grid-cols-3">
            {products.map((item, index) => {
              const name = getLocalizedText(item.name, language);
              const shortDescription = getLocalizedText(item.shortDescription, language);
              const visualLabel = getLocalizedText(item.visualLabel, language);

              return (
                <Link
                  key={item.slug}
                  href={`/produit/${item.slug}`}
                  className="group relative flex min-w-[72vw] flex-col border-r border-white/[0.06] transition duration-500 hover:bg-white/[0.025] md:min-w-0"
                >
                  {/* Product visual */}
                  <div data-cursor="view" className="relative aspect-[4/5] overflow-hidden bg-black/20">
                    {item.image ? (
                      <>
                        <Image
                          src={item.image}
                          alt={name}
                          fill
                          sizes="(max-width: 768px) 72vw, 33vw"
                          className="object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_18%,rgba(168,146,110,0.13),transparent_35%)]" />
                        <div className="absolute inset-x-8 bottom-0 h-[85%] rounded-t-[90px] border border-white/[0.07] bg-gradient-to-b from-white/[0.06] to-black/50 transition duration-700 group-hover:scale-[1.03]" />
                        <div className="absolute right-5 top-6 h-14 w-14 rounded-full border border-white/[0.07] bg-white/[0.02]" />
                      </>
                    )}
                    <div className="absolute left-4 top-4 text-[9px] uppercase tracking-[0.26em] text-white/35">
                      Atelier Kūra
                    </div>
                    <div className="absolute bottom-4 left-4 text-[9px] uppercase tracking-[0.26em] text-white/30">
                      {visualLabel}
                    </div>
                    <div className="absolute right-4 bottom-4 font-[family-name:var(--font-after)] text-5xl font-light leading-none text-white/[0.06]">
                      0{index + 1}
                    </div>

                    {/* Slide-up reveal */}
                    <div className="absolute inset-x-0 bottom-0 translate-y-full opacity-0 transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="flex items-center justify-between border-t border-white/[0.08] bg-black/80 px-5 py-4 backdrop-blur-md">
                        <span className="text-[11px] uppercase tracking-[0.3em] text-white/80">{t("shop.viewProduct")}</span>
                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden className="text-white/40">
                          <path d="M1 4h12M9 1l3 3-3 3" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="border-t border-white/[0.06] p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-sm font-semibold tracking-[-0.02em] transition duration-300 group-hover:text-[#d9d4c7]">
                          {name}
                        </h3>
                      </div>
                      <span className="text-sm font-semibold text-[#F2EFE8]">
                        {formatPrice(item.price)}
                      </span>
                    </div>
                    <p className="mt-3 text-xs leading-5 text-white/45">
                      {shortDescription}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </ContainerScroll>
      </section>

      <Story />
      <Waitlist />
      <Footer />
    </main>
  );
}
