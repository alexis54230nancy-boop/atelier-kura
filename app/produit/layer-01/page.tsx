"use client";

import { useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { useCart } from "../../../components/CartProvider";

const product = {
  name: "Layer 01",
  price: 9500,
  description:
    "Une pièce de transition pensée pour la superposition, le mouvement et la présence. Layer 01 accompagne la silhouette sans la surcharger.",
  composition: "Matière structurée, toucher sec, rendu minéral.",
  cut: "Coupe clean, modulable, pensée pour le layering.",
  details: "Lignes sobres, finitions discrètes, logo Kūra ton sur ton.",
};

const stock = {
  XS: 1,
  S: 2,
  M: 3,
  L: 2,
  XL: 0,
};

export default function Layer01Page() {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>("");

  const selectedStock = selectedSize
    ? stock[selectedSize as keyof typeof stock]
    : null;

  const canAdd = selectedSize && selectedStock && selectedStock > 0;

  return (
    <main className="min-h-screen text-[#f5f5f2]">
      <Navbar />

      <section className="px-4 py-14">
        <div className="mx-auto grid w-[min(1280px,100%)] gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-[34px] border border-white/10 bg-white/[0.035] p-6 shadow-2xl backdrop-blur-xl">
            <div className="aspect-[4/5] rounded-[28px] border border-white/10 bg-black/30">
              <div className="flex h-full items-center justify-center text-sm uppercase tracking-[0.3em] text-white/35">
                Visuel layer
              </div>
            </div>
          </div>

          <div className="rounded-[34px] border border-white/10 bg-white/[0.035] p-8 shadow-2xl backdrop-blur-xl md:p-10">
            <div className="text-[11px] uppercase tracking-[0.28em] text-[#A8926E]">
              Drop 01
            </div>

            <h1 className="mt-4 text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
              {product.name}
            </h1>

            <p className="mt-5 text-2xl font-semibold">
              {(product.price / 100).toFixed(2)}€
            </p>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/68">
              {product.description}
            </p>

            <div className="mt-8">
              <div className="text-sm uppercase tracking-[0.2em] text-white/50">
                Taille
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                {Object.entries(stock).map(([size, quantity]) => {
                  const isSelected = selectedSize === size;
                  const isSoldOut = quantity === 0;

                  return (
                    <button
                      key={size}
                      onClick={() => !isSoldOut && setSelectedSize(size)}
                      disabled={isSoldOut}
                      className={`relative h-11 min-w-14 rounded-full border px-4 text-sm transition ${
                        isSelected
                          ? "border-[#A8926E] bg-[#A8926E]/20 text-white"
                          : "border-white/10 bg-black/30 text-white"
                      } ${
                        isSoldOut
                          ? "cursor-not-allowed opacity-35"
                          : "hover:border-[#A8926E]/60"
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>

              {selectedSize && (
                <p className="mt-4 text-sm text-white/50">
                  {selectedStock === 0
                    ? "Cette taille est sold out."
                    : `${selectedStock} pièce(s) restante(s) en taille ${selectedSize}.`}
                </p>
              )}
            </div>

            <button
              disabled={!canAdd}
              onClick={() =>
                addToCart({
                  name: product.name,
                  size: selectedSize,
                  price: product.price,
                })
              }
              className="mt-9 min-h-14 w-full rounded-full bg-[#F2EFE8] px-6 font-semibold text-black transition hover:-translate-y-[1px] disabled:cursor-not-allowed disabled:opacity-40"
            >
              {!selectedSize
                ? "Choisir une taille"
                : selectedStock === 0
                ? "Sold out"
                : "Ajouter au panier"}
            </button>

            <div className="mt-10 space-y-5 border-t border-white/10 pt-8 text-sm leading-7 text-white/62">
              <p>
                <strong className="text-white">Composition :</strong>{" "}
                {product.composition}
              </p>
              <p>
                <strong className="text-white">Coupe :</strong> {product.cut}
              </p>
              <p>
                <strong className="text-white">Détails :</strong>{" "}
                {product.details}
              </p>
              <p>
                <strong className="text-white">Livraison :</strong> France,
                Luxembourg, Belgique.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}