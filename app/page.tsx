"use client";

import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Materials from "../components/Materials";
import Story from "../components/Story";
import Waitlist from "../components/Waitlist";
import Footer from "../components/Footer";

type CartItem = {
  name: string;
  price: number;
  quantity: number;
};

const products = [
  {
    name: "Transit Hoodie",
    price: 140,
    desc: "Coton lourd, coupe structurée, noir dense. Pensé pour les trajectoires lentes et les présences nettes.",
  },
  {
    name: "Graphite Tee",
    price: 65,
    desc: "Jersey épais, teinte minérale, tombé propre. Une base silencieuse pour le quotidien premium.",
  },
  {
    name: "Layer 01",
    price: 95,
    desc: "Pièce de transition pensée pour la suite : superposition, matière, mouvement et précision visuelle.",
  },
];

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (product: { name: string; price: number }) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.name === product.name);

      if (existing) {
        return prev.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });

    setCartOpen(true);
  };

  const decreaseQuantity = (name: string) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.name === name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const increaseQuantity = (name: string) => {
    setCart((prev) =>
      prev.map((item) =>
        item.name === name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const removeFromCart = (name: string) => {
    setCart((prev) => prev.filter((item) => item.name !== name));
  };

  const totalItems = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  );

  const totalPrice = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  return (
    <main className="min-h-screen bg-[#0b0b0c] text-[#f5f5f2]">
      <Navbar />

      <button
        onClick={() => setCartOpen(true)}
        className="fixed right-4 top-24 z-50 rounded-full border border-white/10 bg-black/70 px-4 py-3 text-sm text-white shadow-xl backdrop-blur transition hover:border-white/20 hover:bg-black/80"
      >
        Panier ({totalItems})
      </button>

      <Hero />
      <Materials />

      <section id="collection" className="px-4 py-8">
        <div className="mx-auto w-[min(1200px,100%)]">
          <div className="pb-6">
            <div className="text-[12px] uppercase tracking-[0.2em] text-[#d9d4c7]">
              Drop 01
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
              Une capsule courte, pensée juste.
            </h2>
            <p className="mt-4 max-w-[62ch] text-base leading-8 text-white/70">
              Le lancement se joue sur peu de références, beaucoup de cohérence
              et une exécution propre. Précommande courte, visuels précis,
              identité forte.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {products.map((item) => (
              <article
                key={item.name}
                className="group overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.02] shadow-2xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.03]"
              >
                <div className="aspect-[4/5] bg-gradient-to-b from-[#17181b] to-[#0d0d0f] transition duration-300 group-hover:scale-[1.02]" />

                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-semibold">{item.name}</h3>
                    <span className="font-bold text-[#d9d4c7]">
                      {item.price}€
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-white/70">
                    {item.desc}
                  </p>

                  <button
                    onClick={() =>
                      addToCart({ name: item.name, price: item.price })
                    }
                    className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-[#d9d4c7] px-5 font-semibold text-black transition hover:-translate-y-[1px] hover:brightness-105"
                  >
                    Ajouter au panier
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Story />
      <Waitlist />
      <Footer />

      {cartOpen && (
        <div className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm">
          <div className="absolute right-0 top-0 h-full w-full max-w-md border-l border-white/10 bg-[#0f0f11] p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Panier</h2>
              <button
                onClick={() => setCartOpen(false)}
                className="text-white/60 transition hover:text-white"
              >
                Fermer
              </button>
            </div>

            <div className="mt-6 space-y-4">
              {cart.length === 0 ? (
                <p className="text-white/60">Votre panier est vide.</p>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-2xl border border-white/10 bg-white/[0.02] p-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="mt-1 text-sm text-white/60">
                          {item.price}€ / unité
                        </p>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.name)}
                        className="text-sm text-[#d9d4c7] transition hover:text-white"
                      >
                        Retirer
                      </button>
                    </div>

                    <div className="mt-4 flex items-center gap-3">
                      <button
                        onClick={() => decreaseQuantity(item.name)}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition hover:bg-white/[0.08]"
                      >
                        -
                      </button>

                      <span className="min-w-6 text-center">{item.quantity}</span>

                      <button
                        onClick={() => increaseQuantity(item.name)}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition hover:bg-white/[0.08]"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <div className="flex items-center justify-between text-lg">
                <span>Total</span>
                <span className="font-semibold">{totalPrice}€</span>
              </div>

              <p className="mt-3 text-sm text-white/50">
                Livraison et paiement seront ajoutés à l’étape suivante.
              </p>

              <button
                disabled={cart.length === 0}
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#d9d4c7] px-6 font-semibold text-black transition disabled:cursor-not-allowed disabled:opacity-50"
              >
                Continuer vers le paiement
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}