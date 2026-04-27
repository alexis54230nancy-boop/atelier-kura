"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useCart } from "./CartProvider";
import { useI18n } from "./LanguageProvider";
import type { Product, Size } from "../lib/products";
import { formatPrice, getLocalizedText } from "../lib/products";

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

  const copy = {
    limitedEdition: {
      fr: "Édition limitée",
      en: "Limited edition",
      de: "Limitierte Edition",
    },
    lowStock: {
      fr: "Stock limité",
      en: "Limited stock",
      de: "Limitierter Bestand",
    },
    securePayment: {
      fr: "Paiement sécurisé Stripe",
      en: "Secure Stripe payment",
      de: "Sichere Stripe-Zahlung",
    },
    shippingNote: {
      fr: "Expédition suivie après validation de la commande.",
      en: "Tracked shipping after order confirmation.",
      de: "Sendungsverfolgung nach Bestätigung der Bestellung.",
    },
    sizeHelp: {
      fr: "Choisis ta taille habituelle pour une coupe fidèle à la silhouette prévue.",
      en: "Choose your usual size for a fit close to the intended silhouette.",
      de: "Wähle deine übliche Größe für eine Passform nahe an der vorgesehenen Silhouette.",
    },
    sizeGuide: {
      fr: "Consulter le guide des tailles",
      en: "View size guide",
      de: "Größenguide ansehen",
    },
  };

  function handleAddToCart() {
    if (!canAdd || !selectedSize) return;

    addToCart({
      name,
      size: selectedSize,
      price: product.price,
    });
  }

  return (
    <main className="min-h-screen text-[#f5f5f2]">
      <Navbar />

      <section className="px-4 py-14">
        <div className="mx-auto grid w-[min(1280px,100%)] gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div className="animate-[productFadeIn_700ms_ease-out_both] rounded-[34px] border border-white/10 bg-white/[0.035] p-6 shadow-2xl backdrop-blur-xl transition duration-700 hover:border-white/15 hover:bg-white/[0.045]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-white/10 bg-black/30">
              <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/35 px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-white/45 backdrop-blur-xl">
                {product.collection}
              </div>

              <div className="absolute inset-x-10 bottom-0 h-[82%] rounded-t-[120px] border border-white/10 bg-gradient-to-b from-white/[0.08] to-black/40 transition duration-700 hover:scale-[1.03]" />

              <div className="relative flex h-full items-center justify-center text-sm uppercase tracking-[0.3em] text-white/35 transition duration-700 hover:text-white/45">
                {visualLabel}
              </div>
            </div>
          </div>

          <div className="animate-[productFadeInUp_800ms_ease-out_120ms_both] rounded-[34px] border border-white/10 bg-white/[0.035] p-8 shadow-2xl backdrop-blur-xl transition duration-700 hover:border-white/15 hover:bg-white/[0.045] md:p-10">
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

            <h1 className="mt-4 text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
              {name}
            </h1>

            <p className="mt-5 text-2xl font-semibold">
              {formatPrice(product.price)}
            </p>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/68">
              {description}
            </p>

            <div className="mt-8 rounded-[24px] border border-white/10 bg-black/20 p-5">
              <div className="flex items-center justify-between gap-4">
                <div className="text-sm uppercase tracking-[0.2em] text-white/50">
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
                          ? "border-[#A8926E] bg-[#A8926E]/20 text-white shadow-[0_0_24px_rgba(168,146,110,0.12)]"
                          : "border-white/10 bg-black/30 text-white"
                      } ${
                        isSoldOut
                          ? "cursor-not-allowed opacity-35"
                          : "hover:-translate-y-[1px] hover:border-[#A8926E]/60 hover:bg-white/[0.04]"
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>

              {selectedSize && (
                <p className="mt-4 animate-[productFadeIn_350ms_ease-out_both] text-sm text-white/50">
                  {selectedStock === 0
                    ? t("product.sizeSoldOut")
                    : `${selectedStock} ${t(
                        "product.remainingPrefix"
                      )} ${selectedSize}.`}
                </p>
              )}

              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs leading-6 text-white/42">
                  {copy.sizeHelp[language]}
                </p>

                <Link
                  href="/guide-tailles"
                  className="text-xs font-semibold uppercase tracking-[0.16em] text-[#A8926E] transition hover:text-[#d9c79c]"
                >
                  {copy.sizeGuide[language]}
                </Link>
              </div>
            </div>

            <button
              type="button"
              disabled={!canAdd}
              onClick={handleAddToCart}
              className="mt-9 min-h-14 w-full rounded-full bg-[#F2EFE8] px-6 font-semibold text-black transition duration-300 hover:-translate-y-[2px] hover:shadow-[0_18px_60px_rgba(242,239,232,0.13)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:shadow-none"
            >
              {!selectedSize
                ? t("product.chooseSize")
                : selectedStock === 0
                ? t("product.soldOut")
                : t("product.addToCart")}
            </button>

            <div className="mt-5 grid gap-3 text-xs text-white/50 md:grid-cols-2">
              <div className="rounded-[18px] border border-white/10 bg-black/20 p-4">
                {copy.securePayment[language]}
              </div>

              <div className="rounded-[18px] border border-white/10 bg-black/20 p-4">
                {copy.shippingNote[language]}
              </div>
            </div>

            <div className="mt-10 space-y-5 border-t border-white/10 pt-8 text-sm leading-7 text-white/62">
              <p>
                <strong className="text-white">
                  {t("product.composition")} :
                </strong>{" "}
                {composition}
              </p>

              <p>
                <strong className="text-white">{t("product.cut")} :</strong>{" "}
                {cut}
              </p>

              <p>
                <strong className="text-white">
                  {t("product.details")} :
                </strong>{" "}
                {details}
              </p>

              <p>
                <strong className="text-white">
                  {t("product.shipping")} :
                </strong>{" "}
                {t("product.shippingZones")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        @keyframes productFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes productFadeInUp {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}