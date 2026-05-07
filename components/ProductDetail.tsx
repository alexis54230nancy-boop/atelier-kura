"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useCart } from "./CartProvider";
import { useI18n } from "./LanguageProvider";
import type { Product, Size } from "../lib/products";
import { formatPrice, getLocalizedText, products } from "../lib/products";

const E = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function ProductDetail({ product }: { product: Product }) {
  const { language, t } = useI18n();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<Size | "">("");

  const name = getLocalizedText(product.name, language);
  const visualLabel = getLocalizedText(product.visualLabel, language);
  const description = getLocalizedText(product.description, language);
  const composition = getLocalizedText(product.composition, language);
  const cut = getLocalizedText(product.cut, language);
  const details = getLocalizedText(product.details, language);

  const selectedStock = selectedSize ? product.stock[selectedSize] : null;
  const totalStock = Object.values(product.stock).reduce(
    (total, quantity) => total + quantity,
    0
  );

  const canAdd = Boolean(
    selectedSize && selectedStock !== null && selectedStock > 0
  );

  // Related products — the other 2 in the drop
  const related = products.filter((p) => p.slug !== product.slug);

  const copy = {
    limitedEdition: { fr: "Edition limitee", en: "Limited edition", de: "Limitierte Edition" },
    lowStock: { fr: "Stock limite", en: "Limited stock", de: "Limitierter Bestand" },
    securePayment: { fr: "Paiement securise Stripe", en: "Secure Stripe payment", de: "Sichere Stripe-Zahlung" },
    shippingNote: { fr: "Expedition suivie apres validation.", en: "Tracked shipping after confirmation.", de: "Sendungsverfolgung nach Bestaetigung." },
    sizeHelp: { fr: "Choisis ta taille habituelle pour une coupe fidele.", en: "Choose your usual size for the intended fit.", de: "Waehle deine uebliche Groesse fuer die vorgesehene Passform." },
    sizeGuide: { fr: "Consulter le guide des tailles", en: "View size guide", de: "Groessenguide ansehen" },
    breadcrumbShop: { fr: "Shop", en: "Shop", de: "Shop" },
    alsoFrom: { fr: "Aussi dans le Drop 01", en: "Also in Drop 01", de: "Auch in Drop 01" },
  };

  const buttonLabel = !selectedSize
    ? t("product.chooseSize")
    : selectedStock === 0
    ? t("product.soldOut")
    : t("product.addToCart");

  function handleAddToCart() {
    if (!canAdd || !selectedSize) return;
    addToCart({ slug: product.slug, name, size: selectedSize, price: product.price });
  }

  return (
    <main className="min-h-screen text-[#f5f5f2]">
      <Navbar />

      <section className="px-4 pt-20 pb-8">
        <div className="mx-auto w-[min(1280px,100%)]">

          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-[10px] uppercase tracking-[0.26em]">
            <Link href="/" className="text-white/25 transition hover:text-white/60">
              Atelier Kūra
            </Link>
            <span className="text-white/15">/</span>
            <Link href="/shop" className="text-white/25 transition hover:text-white/60">
              {copy.breadcrumbShop[language]}
            </Link>
            <span className="text-white/15">/</span>
            <span className="text-[#A8926E]/70">{name}</span>
          </nav>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
            {/* Image */}
            <div className="rounded-[34px] border border-white/10 bg-white/[0.035] p-6 shadow-2xl backdrop-blur-xl">
              <div className="group relative aspect-[4/5] overflow-hidden rounded-[28px] border border-white/10 bg-black/30">
                <div className="absolute left-5 top-5 z-10 rounded-full border border-white/10 bg-black/35 px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-white/45 backdrop-blur-xl">
                  {product.collection}
                </div>

                {product.image ? (
                  <Image
                    src={product.image}
                    alt={name}
                    fill
                    sizes="(max-width: 768px) 100vw, 55vw"
                    className="object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                    priority
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_35%,rgba(168,146,110,0.09),transparent)]" />
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden px-4">
                      <div className="select-none text-center font-[family-name:var(--font-after)] text-[clamp(4rem,18vw,10rem)] font-[300] italic leading-[0.88] tracking-[-0.04em] text-white/[0.038]">
                        {name}
                      </div>
                    </div>
                    <div className="absolute inset-x-10 bottom-0 h-[82%] rounded-t-[120px] border border-white/[0.07] bg-gradient-to-b from-white/[0.06] to-black/40" />
                  </>
                )}
              </div>
            </div>

            {/* Info panel */}
            <div className="rounded-[34px] border border-white/10 bg-white/[0.035] p-8 shadow-2xl backdrop-blur-xl md:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <div className="text-[11px] uppercase tracking-[0.28em] text-[#A8926E]">
                  {product.collection}
                </div>
                {totalStock > 0 && (
                  <span className="rounded-full border border-[#A8926E]/25 bg-[#A8926E]/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-[#d9c79c]">
                    {copy.limitedEdition[language]}
                  </span>
                )}
              </div>

              <h1 className="mt-4 font-[family-name:var(--font-after)] text-[clamp(2.8rem,6vw,5rem)] font-[300] leading-[0.9] tracking-[-0.03em] text-[#f2efe8]">
                {name}
              </h1>

              <p className="mt-5 text-2xl font-semibold">
                {formatPrice(product.price)}
              </p>

              <p className="mt-6 max-w-xl text-[14px] leading-[1.9] text-white/60">
                {description}
              </p>

              {/* Size selector */}
              <div className="mt-8 rounded-[24px] border border-white/10 bg-black/20 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-white/45">
                    {t("product.size")}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#A8926E]">
                    {copy.lowStock[language]}
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-3">
                  {Object.entries(product.stock).map(([size, quantity]) => {
                    const typedSize = size as Size;
                    const isSelected = selectedSize === typedSize;
                    const isSoldOut = quantity === 0;

                    return (
                      <button
                        key={size}
                        type="button"
                        onClick={() => !isSoldOut && setSelectedSize(typedSize)}
                        disabled={isSoldOut}
                        className={`relative h-11 min-w-14 rounded-full border px-4 text-sm transition duration-300 ${
                          isSelected
                            ? "border-[#A8926E] bg-[#A8926E]/20 text-white"
                            : "border-white/10 bg-black/30 text-white"
                        } ${
                          isSoldOut
                            ? "cursor-not-allowed opacity-30"
                            : "hover:border-[#A8926E]/60 hover:bg-white/[0.04]"
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>

                {selectedSize && (
                  <p className="mt-4 text-[13px] text-white/48">
                    {selectedStock === 0
                      ? t("product.sizeSoldOut")
                      : `${selectedStock} ${t("product.remainingPrefix")} ${selectedSize}.`}
                  </p>
                )}

                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-[12px] leading-6 text-white/38">
                    {copy.sizeHelp[language]}
                  </p>
                  <Link
                    href="/guide-tailles"
                    className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#A8926E] transition hover:text-[#d9c79c]"
                  >
                    {copy.sizeGuide[language]}
                  </Link>
                </div>
              </div>

              <button
                type="button"
                disabled={!canAdd}
                onClick={handleAddToCart}
                className="shimmer mt-8 min-h-14 w-full rounded-full bg-[#F2EFE8] px-6 font-semibold text-black transition duration-300 hover:-translate-y-[2px] hover:shadow-[0_16px_50px_rgba(242,239,232,0.13)] disabled:cursor-not-allowed disabled:opacity-40"
              >
                {buttonLabel}
              </button>

              <div className="mt-5 grid gap-3 text-xs text-white/45 md:grid-cols-2">
                <div className="rounded-[18px] border border-white/[0.07] bg-black/20 p-4">
                  {copy.securePayment[language]}
                </div>
                <div className="rounded-[18px] border border-white/[0.07] bg-black/20 p-4">
                  {copy.shippingNote[language]}
                </div>
              </div>

              <div className="mt-10 space-y-5 border-t border-white/[0.07] pt-8 text-[13px] leading-7 text-white/55">
                <p>
                  <strong className="text-white/80">{t("product.composition")} :</strong>{" "}
                  {composition}
                </p>
                <p>
                  <strong className="text-white/80">{t("product.cut")} :</strong>{" "}
                  {cut}
                </p>
                <p>
                  <strong className="text-white/80">{t("product.details")} :</strong>{" "}
                  {details}
                </p>
                <p>
                  <strong className="text-white/80">{t("product.shipping")} :</strong>{" "}
                  {t("product.shippingZones")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="px-4 pb-16">
        <div className="mx-auto w-[min(1280px,100%)]">
          <div className="mb-8 flex items-center gap-6">
            <span className="shrink-0 text-[9px] uppercase tracking-[0.38em] text-[#A8926E]">
              {copy.alsoFrom[language]}
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-white/[0.07] to-transparent" />
          </div>

          <div className="grid gap-px border border-white/[0.06] bg-white/[0.06] md:grid-cols-2">
            {related.map((item, i) => {
              const relName = getLocalizedText(item.name, language);
              const relLabel = getLocalizedText(item.visualLabel, language);

              return (
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: i * 0.07, ease: E }}
                >
                  <Link
                    href={`/produit/${item.slug}`}
                    className="group relative flex flex-col bg-[#0b0b0c] transition duration-500 hover:bg-white/[0.022]"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden bg-black/40">
                      {item.image ? (
                        <>
                          <Image
                            src={item.image}
                            alt={relName}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover object-top transition duration-700 group-hover:scale-[1.04]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                        </>
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_62%_18%,rgba(168,146,110,0.1),transparent)]" />
                          <div className="absolute inset-x-10 bottom-0 h-[82%] rounded-t-[100px] border border-white/[0.07] bg-gradient-to-b from-white/[0.05] to-black/40 transition duration-700 group-hover:scale-[1.03]" />
                        </>
                      )}
                      <div className="absolute left-5 top-5 text-[9px] uppercase tracking-[0.3em] text-white/30">
                        {relLabel}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-400 group-hover:opacity-100">
                        <span className="rounded-full border border-white/20 bg-black/55 px-6 py-3 text-[11px] uppercase tracking-[0.28em] text-white/80 backdrop-blur-sm">
                          {t("shop.viewProduct")} →
                        </span>
                      </div>
                    </div>
                    <div className="border-t border-white/[0.06] p-5">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-[13px] font-semibold tracking-[-0.02em] transition duration-300 group-hover:text-[#d9d4c7]">
                          {relName}
                        </h3>
                        <span className="text-[13px] font-semibold text-[#f2efe8]">
                          {formatPrice(item.price)}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
