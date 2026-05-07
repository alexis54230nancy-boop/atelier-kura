"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useI18n } from "../../components/LanguageProvider";
import { formatPrice, getLocalizedText, products } from "../../lib/products";

const E = [0.22, 1, 0.36, 1] as [number, number, number, number];

const inView = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.7, ease: E },
};

export default function ShopPage() {
  const { language, t } = useI18n();

  return (
    <main className="min-h-screen text-[#f5f5f2]">
      <Navbar />

      <section className="px-4 pt-20 pb-6">
        <div className="mx-auto w-[min(1280px,100%)]">

          {/* Editorial header */}
          <motion.div {...inView} className="mb-14 flex items-end justify-between gap-6 border-b border-white/[0.06] pb-10">
            <div>
              <div className="text-[10px] uppercase tracking-[0.38em] text-[#A8926E]">
                {t("shop.eyebrow")}
              </div>
              <h1 className="mt-4 font-[family-name:var(--font-after)] text-[clamp(3.5rem,9vw,8rem)] font-[300] leading-[0.88] tracking-[-0.035em] text-[#f2efe8]">
                {t("shop.title")}
              </h1>
            </div>
            <p className="hidden max-w-[36ch] text-right text-sm leading-7 text-white/38 md:block">
              {t("shop.intro")}
            </p>
          </motion.div>

          {/* Product grid */}
          <div className="grid gap-px border border-white/[0.06] bg-white/[0.06] md:grid-cols-3">
            {products.map((product, index) => {
              const name = getLocalizedText(product.name, language);
              const shortDescription = getLocalizedText(product.shortDescription, language);
              const visualLabel = getLocalizedText(product.visualLabel, language);
              const totalStock = Object.values(product.stock).reduce((s, n) => s + n, 0);

              return (
                <motion.div
                  key={product.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: E }}
                >
                  <Link
                    href={`/produit/${product.slug}`}
                    className="group relative flex flex-col bg-[#0b0b0c] transition duration-500 hover:bg-white/[0.022]"
                  >
                    {/* Image zone */}
                    <div className="relative aspect-[4/5] overflow-hidden bg-black/40">
                      {product.image ? (
                        <>
                          <Image
                            src={product.image}
                            alt={name}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover object-top transition duration-700 group-hover:scale-[1.04]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                        </>
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_62%_18%,rgba(168,146,110,0.11),transparent)]" />
                          <div className="absolute inset-x-10 bottom-0 h-[82%] rounded-t-[100px] border border-white/[0.07] bg-gradient-to-b from-white/[0.06] to-black/40 transition duration-700 group-hover:scale-[1.03]" />
                          <div className="absolute right-6 top-8 h-12 w-12 rounded-full border border-white/[0.07] bg-white/[0.02]" />
                        </>
                      )}

                      {/* Corner labels */}
                      <div className="absolute left-5 top-5 text-[9px] uppercase tracking-[0.3em] text-white/35">
                        Atelier Kūra
                      </div>
                      <div className="absolute right-5 bottom-5 font-[family-name:var(--font-after)] text-[5rem] font-[300] leading-none text-white/[0.05]">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      {/* Sold out badge */}
                      {totalStock === 0 && (
                        <div className="absolute left-5 bottom-5 rounded-full border border-white/15 bg-black/50 px-3 py-1 text-[9px] uppercase tracking-[0.22em] text-white/45 backdrop-blur-sm">
                          Sold out
                        </div>
                      )}

                      {/* Hover reveal overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-400 group-hover:opacity-100">
                        <span className="rounded-full border border-white/20 bg-black/55 px-6 py-3 text-[11px] uppercase tracking-[0.28em] text-white/80 backdrop-blur-sm">
                          {t("shop.viewProduct")} →
                        </span>
                      </div>
                    </div>

                    {/* Info bar */}
                    <div className="border-t border-white/[0.06] p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h2 className="text-[13px] font-semibold tracking-[-0.02em] transition duration-300 group-hover:text-[#d9d4c7]">
                            {name}
                          </h2>
                          <p className="mt-0.5 text-[10px] uppercase tracking-[0.22em] text-[#A8926E]/70">
                            {product.collection}
                          </p>
                        </div>
                        <span className="shrink-0 text-[13px] font-semibold text-[#f2efe8]">
                          {formatPrice(product.price)}
                        </span>
                      </div>
                      <p className="mt-3 text-[12px] leading-[1.75] text-white/38">
                        {shortDescription}
                      </p>

                      {/* Size dots */}
                      <div className="mt-4 flex items-center gap-1.5">
                        {(["XS", "S", "M", "L", "XL"] as const).map((size) => {
                          const qty = product.stock[size];
                          return (
                            <span
                              key={size}
                              className={`text-[9px] uppercase tracking-[0.12em] ${qty > 0 ? "text-white/40" : "text-white/12 line-through"}`}
                            >
                              {size}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom note */}
          <motion.p
            {...inView}
            className="mt-10 text-center text-[9px] uppercase tracking-[0.35em] text-white/18"
          >
            Drop 01 · {products.length} pièces · Séries limitées · Sans réassort garanti
          </motion.p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
