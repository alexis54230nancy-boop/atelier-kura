"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useI18n } from "./LanguageProvider";

export type CartItem = {
  id: string;
  name: string;
  size: string;
  price: number;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  cartOpen: boolean;
  loading: boolean;
  totalItems: number;
  total: number;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (item: Omit<CartItem, "id" | "quantity">) => void;
  removeFromCart: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  handleCheckout: () => Promise<void>;
};

const CartContext = createContext<CartContextType | null>(null);

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}

function formatCartPrice(price: number) {
  return `${(price / 100).toFixed(2)}€`;
}

export default function CartProvider({ children }: { children: ReactNode }) {
  const { language, t } = useI18n();

  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const copy = {
    securePayment: {
      fr: "Paiement sécurisé Stripe",
      en: "Secure Stripe payment",
      de: "Sichere Stripe-Zahlung",
    },
    privateCheckout: {
      fr: "Checkout privé, redirection sécurisée.",
      en: "Private checkout, secure redirection.",
      de: "Privater Checkout, sichere Weiterleitung.",
    },
    summary: {
      fr: "Résumé",
      en: "Summary",
      de: "Übersicht",
    },
    quantity: {
      fr: "Quantité",
      en: "Quantity",
      de: "Menge",
    },
  };

  useEffect(() => {
    try {
      const savedCart = window.localStorage.getItem("atelier-kura-cart");

      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch {
      window.localStorage.removeItem("atelier-kura-cart");
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("atelier-kura-cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (!cartOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setCartOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [cartOpen]);

  const totalItems = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }, [cart]);

  const total = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cart]);

  const addToCart = (item: Omit<CartItem, "id" | "quantity">) => {
    const id = `${item.name}-${item.size}`;

    setCart((prev) => {
      const existing = prev.find((cartItem) => cartItem.id === id);

      if (existing) {
        return prev.map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      return [...prev, { ...item, id, quantity: 1 }];
    });

    setCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const increaseQuantity = (id: string) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: string) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

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
        alert(
          language === "fr"
            ? "Impossible de lancer le paiement."
            : language === "en"
            ? "Unable to start payment."
            : "Zahlung konnte nicht gestartet werden."
        );
      }
    } catch (error) {
      console.error(error);
      alert(
        language === "fr"
          ? "Erreur pendant le checkout."
          : language === "en"
          ? "Error during checkout."
          : "Fehler während des Checkouts."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartOpen,
        loading,
        totalItems,
        total,
        openCart: () => setCartOpen(true),
        closeCart: () => setCartOpen(false),
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        handleCheckout,
      }}
    >
      {children}

      <button
        type="button"
        onClick={() => setCartOpen(true)}
        className="fixed right-4 top-24 z-50 rounded-full border border-white/10 bg-black/50 px-4 py-3 text-sm text-white shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-[1px] hover:border-[#A8926E]/40 hover:bg-black/65"
        aria-label={t("cart.button")}
      >
        {t("cart.button")} ({totalItems})
      </button>

      {cartOpen && (
        <div
          className="fixed inset-0 z-[60] animate-[cartOverlayIn_240ms_ease-out_both] bg-black/60 backdrop-blur-sm"
          onClick={() => setCartOpen(false)}
        >
          <aside
            className="absolute right-0 top-0 flex h-full w-full max-w-md animate-[cartPanelIn_360ms_ease-out_both] flex-col border-l border-white/10 bg-[#0f0f11]/90 shadow-2xl backdrop-blur-xl"
            onClick={(event) => event.stopPropagation()}
            aria-label={t("cart.title")}
          >
            <div className="border-b border-white/10 p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.28em] text-[#A8926E]">
                    Atelier Kūra
                  </div>

                  <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">
                    {t("cart.title")}
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={() => setCartOpen(false)}
                  className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm text-white/60 transition hover:border-white/20 hover:text-white"
                >
                  {t("cart.close")}
                </button>
              </div>

              <div className="mt-5 grid gap-3 text-xs text-white/50">
                <div className="rounded-[18px] border border-white/10 bg-white/[0.035] p-4">
                  <span className="block text-white/80">
                    {copy.securePayment[language]}
                  </span>
                  <span className="mt-1 block">{copy.privateCheckout[language]}</span>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="flex min-h-[320px] items-center justify-center rounded-[26px] border border-white/10 bg-white/[0.025] p-8 text-center">
                  <p className="text-sm leading-7 text-white/55">
                    {t("cart.empty")}
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-[24px] border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl transition duration-300 hover:border-white/15 hover:bg-white/[0.05]"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-semibold tracking-[-0.02em]">
                            {item.name}
                          </h3>

                          <p className="mt-1 text-sm text-white/60">
                            {t("cart.size")} : {item.size}
                          </p>

                          <p className="mt-1 text-sm text-white/60">
                            {formatCartPrice(item.price)} / {t("cart.unit")}
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="text-sm text-[#d9d4c7] transition hover:text-white"
                        >
                          {t("cart.remove")}
                        </button>
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-3">
                        <div className="text-xs uppercase tracking-[0.18em] text-white/35">
                          {copy.quantity[language]}
                        </div>

                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => decreaseQuantity(item.id)}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white transition hover:bg-white/10"
                            aria-label="Decrease quantity"
                          >
                            -
                          </button>

                          <span className="min-w-6 text-center">
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() => increaseQuantity(item.id)}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white transition hover:bg-white/10"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="border-t border-white/10 p-6">
              <div className="rounded-[24px] border border-white/10 bg-black/25 p-5">
                <div className="mb-4 text-[10px] uppercase tracking-[0.28em] text-[#A8926E]">
                  {copy.summary[language]}
                </div>

                <div className="flex items-center justify-between text-lg">
                  <span>{t("cart.total")}</span>
                  <span className="font-semibold">{formatCartPrice(total)}</span>
                </div>

                <p className="mt-3 text-sm leading-6 text-white/50">
                  {t("cart.shipping")}
                </p>
              </div>

              <button
                type="button"
                onClick={handleCheckout}
                disabled={cart.length === 0 || loading}
                className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#F2EFE8] px-6 font-semibold text-black transition duration-300 hover:-translate-y-[1px] hover:shadow-[0_18px_60px_rgba(242,239,232,0.13)] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none"
              >
                {loading ? t("cart.redirecting") : t("cart.checkout")}
              </button>
            </div>
          </aside>
        </div>
      )}

      <style jsx global>{`
        @keyframes cartOverlayIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes cartPanelIn {
          from {
            opacity: 0;
            transform: translateX(24px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </CartContext.Provider>
  );
}