"use client";

import Link from "next/link";
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

      <motion.section {...inView} className="px-4 py-10">
        <div className="mx-auto grid w-[min(1280px,100%)] gap-7 md:grid-cols-[1.15fr_.85fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/[0.035] p-8 shadow-2xl backdrop-blur-xl md:p-10">
            <div className="text-[11px] uppercase tracking-[0.28em] text-[#d9d4c7]">
              {t("home.materialEyebrow")}
            </div>

            <h2 className="mt-4 text-4xl font-semibold leading-[0.98] tracking-[-0.045em] md:text-6xl">
              {t("home.materialTitle")}
            </h2>

            <p className="mt-6 max-w-[68ch] text-base leading-8 text-white/70">
              {t("home.materialText")}
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                ["450 GSM", t("home.materialCard1")],
                ["240 GSM", t("home.materialCard2")],
                ["Drop 01", t("home.materialCard3")],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-[20px] border border-white/10 bg-black/30 p-5 backdrop-blur-md transition duration-300 hover:-translate-y-[2px] hover:border-[#A8926E]/30 hover:bg-black/40"
                >
                  <strong className="block text-2xl text-white">{title}</strong>
                  <span className="mt-2 block text-sm text-white/55">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="min-h-[360px] rounded-[32px] border border-white/10 bg-white/[0.035] p-6 shadow-2xl backdrop-blur-xl">
            <div className="relative h-full overflow-hidden rounded-[24px] border border-white/10 bg-black/25">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_20%,rgba(168,146,110,0.16),transparent_30%)]" />
              <div className="absolute inset-x-12 bottom-0 h-[80%] rounded-t-[140px] border border-white/10 bg-gradient-to-b from-white/[0.08] to-black/35" />
              <div className="absolute bottom-6 left-6 text-[10px] uppercase tracking-[0.28em] text-white/38">
                {t("home.materialVisual")}
              </div>
            </div>
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
              <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(3rem,8vw,7rem)] font-light leading-[0.92] tracking-[-0.03em] text-[#f2efe8]">
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
                  {/* Gradient placeholder */}
                  <div className="relative flex-1 overflow-hidden bg-black/20">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_18%,rgba(168,146,110,0.13),transparent_35%)]" />
                    <div className="absolute inset-x-8 bottom-0 h-[85%] rounded-t-[90px] border border-white/[0.07] bg-gradient-to-b from-white/[0.06] to-black/50 transition duration-700 group-hover:scale-[1.03]" />
                    <div className="absolute right-5 top-6 h-14 w-14 rounded-full border border-white/[0.07] bg-white/[0.02]" />
                    <div className="absolute left-4 top-4 text-[9px] uppercase tracking-[0.26em] text-white/35">
                      Atelier Kūra
                    </div>
                    <div className="absolute bottom-4 left-4 text-[9px] uppercase tracking-[0.26em] text-white/30">
                      {visualLabel}
                    </div>
                    {/* Index number */}
                    <div className="absolute right-4 bottom-4 font-[family-name:var(--font-cormorant)] text-5xl font-light leading-none text-white/[0.06]">
                      0{index + 1}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="border-t border-white/[0.06] p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-sm font-semibold tracking-[-0.02em] transition duration-300 group-hover:text-[#d9d4c7]">
                          {name}
                        </h3>
                        <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#A8926E]">
                          {t("shop.viewProduct")}
                        </p>
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
