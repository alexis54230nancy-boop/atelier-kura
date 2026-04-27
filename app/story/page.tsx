"use client";

import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useI18n } from "../../components/LanguageProvider";
import {
  formatPrice,
  getLocalizedText,
  products,
} from "../../lib/products";

export default function ShopPage() {
  const { language, t } = useI18n();

  return (
    <main className="min-h-screen text-[#f5f5f2]">
      <Navbar />

      <section className="px-4 py-16">
        <div className="mx-auto w-[min(1280px,100%)]">
          <div className="rounded-[34px] border border-white/10 bg-white/[0.035] p-8 shadow-2xl backdrop-blur-xl md:p-12">
            <div className="text-[11px] uppercase tracking-[0.28em] text-[#A8926E]">
              {t("shop.eyebrow")}
            </div>

            <h1 className="mt-4 text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
              {t("shop.title")}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/65">
              {t("shop.intro")}
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {products.map((product) => {
              const name = getLocalizedText(product.name, language);
              const shortDescription = getLocalizedText(
                product.shortDescription,
                language
              );
              const visualLabel = getLocalizedText(
                product.visualLabel,
                language
              );

              return (
                <Link
                  key={product.slug}
                  href={`/produit/${product.slug}`}
                  className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] shadow-2xl backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-[#A8926E]/40 hover:bg-white/[0.055]"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-black/25">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_22%,rgba(168,146,110,0.14),transparent_30%)]" />
                    <div className="absolute inset-x-10 bottom-0 h-[82%] rounded-t-[120px] border border-white/10 bg-gradient-to-b from-white/[0.08] to-black/40 transition duration-500 group-hover:scale-[1.03]" />
                    <div className="absolute right-6 top-8 h-20 w-20 rounded-full border border-white/10 bg-white/[0.025]" />

                    <div className="absolute left-5 top-5 text-[10px] uppercase tracking-[0.24em] text-white/45">
                      Atelier Kūra
                    </div>

                    <div className="absolute bottom-5 left-5 text-[10px] uppercase tracking-[0.24em] text-white/35">
                      {visualLabel}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="text-lg font-semibold tracking-[-0.03em] transition group-hover:text-[#d9d4c7]">
                          {name}
                        </h2>

                        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#A8926E]">
                          {t("shop.viewProduct")}
                        </p>
                      </div>

                      <span className="font-semibold text-[#F2EFE8]">
                        {formatPrice(product.price)}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-white/60">
                      {shortDescription}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}