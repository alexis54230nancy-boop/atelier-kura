"use client";

import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
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
    price: 14000,
    desc: "Coton lourd, coupe structurée, noir dense. Pensé pour les trajectoires lentes et les présences nettes.",
  },
  {
    name: "Graphite Tee",
    price: 6500,
    desc: "Jersey épais, teinte minérale, tombé propre. Une base silencieuse pour le quotidien premium.",
  },
  {
    name: "Layer 01",
    price: 9500,
    desc: "Pièce de transition pensée pour la suite : superposition, matière, mouvement et précision visuelle.",
  },
];

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const removeFromCart = (name: string) => {
    setCart((prev) => prev.filter((item) => item.name !== name));
  };

  const total = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cart]);

  const handleCheckout = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: cart }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Impossible de lancer le paiement.");
      }
    } catch (error) {
      console.error(error);
      alert("Erreur pendant le checkout.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen text-[#f5f5f2]">
      <Navbar />

      <button
        onClick={() => setCartOpen(true)}
        className="fixed right-4 top-24 z-50 rounded-full border border-white/10 bg-black/50 px-4 py-3 text-sm text-white shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-[1px] hover:border-[#A8926E]/40 hover:bg-black/65"
      >
        Panier ({cart.reduce((sum, item) => sum + item.quantity, 0)})
      </button>

      <Hero />

      <section className="px-4 py-10">
        <div className="mx-auto grid w-[min(1280px,100%)] gap-7 md:grid-cols-[1.15fr_.85fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/[0.035] p-8 shadow-2xl backdrop-blur-xl md:p-10">
            <div className="text-[11px] uppercase tracking-[0.28em] text-[#d9d4c7]">
              Matière
            </div>

            <h2 className="mt-4 text-4xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-6xl">
              Texture, tenue, gravité.
            </h2>

            <p className="mt-6 max-w-[68ch] text-base leading-8 text-white/70">
              La matière n’est pas un décor. Elle donne le rythme, la présence,
              la chute. Atelier Kūra travaille une esthétique dense, tactile,
              nette — avec des tons sobres, des volumes calmes et des finitions propres.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                ["450 GSM", "Hoodie lourd"],
                ["240 GSM", "Tee structuré"],
                ["Drop 01", "Série limitée"],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-[20px] border border-white/10 bg-black/30 p-5 backdrop-blur-md"
                >
                  <strong className="block text-2xl text-white">{title}</strong>
                  <span className="mt-2 block text-sm text-white/55">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="min-h-[360px] rounded-[32px] border border-white/10 bg-white/[0.035] p-6 shadow-2xl backdrop-blur-xl">
            <div className="h-full rounded-[24px] border border-white/10 bg-black/25" />
          </div>
        </div>
      </section>

      <section id="collection" className="px-4 py-10">
        <div className="mx-auto w-[min(1280px,100%)]">
          <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-[#d9d4c7]">
                Collection
              </div>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.055em] md:text-6xl">
                Drop 01.
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-white/65">
              Une capsule courte, pensée comme un premier manifeste. Peu de références,
              une exécution précise, une esthétique durable.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {products.map((item) => (
              <article
                key={item.name}
                className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] shadow-2xl backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-[#A8926E]/40 hover:bg-white/[0.055]"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-black/25">
                  <div className="absolute inset-x-10 bottom-0 h-[82%] rounded-t-[120px] border border-white/10 bg-gradient-to-b from-white/[0.08] to-black/40 transition duration-500 group-hover:scale-[1.03]" />
                  <div className="absolute left-5 top-5 text-[10px] uppercase tracking-[0.24em] text-white/45">
                    Atelier Kūra
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold tracking-[-0.03em]">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#A8926E]">
                        Drop 01
                      </p>
                    </div>

                    <span className="font-semibold text-[#F2EFE8]">
                      {(item.price / 100).toFixed(2)}€
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-white/60">{item.desc}</p>

                  <button
                    onClick={() => addToCart({ name: item.name, price: item.price })}
                    className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#F2EFE8] px-5 text-sm font-semibold text-black transition duration-300 hover:-translate-y-[1px] hover:shadow-[0_0_40px_rgba(168,146,110,0.22)] active:scale-[0.98]"
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
        <div className="fixed inset-0 z-[60] bg-black/55 backdrop-blur-sm">
          <div className="absolute right-0 top-0 h-full w-full max-w-md border-l border-white/10 bg-[#0f0f11]/85 p-6 shadow-2xl backdrop-blur-xl">
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
                    className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="mt-1 text-sm text-white/60">
                          Quantité : {item.quantity}
                        </p>
                        <p className="mt-1 text-sm text-white/60">
                          {(item.price / 100).toFixed(2)}€ / unité
                        </p>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.name)}
                        className="text-sm text-[#d9d4c7] transition hover:text-white"
                      >
                        Retirer
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <div className="flex items-center justify-between text-lg">
                <span>Total</span>
                <span className="font-semibold">{(total / 100).toFixed(2)}€</span>
              </div>

              <p className="mt-3 text-sm text-white/50">
                Livraison standard France / Luxembourg / Belgique calculée au checkout.
              </p>

              <button
                onClick={handleCheckout}
                disabled={cart.length === 0 || loading}
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#F2EFE8] px-6 font-semibold text-black transition disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Redirection..." : "Payer avec Stripe"}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}