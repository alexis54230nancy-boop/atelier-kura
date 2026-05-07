"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "./LanguageProvider";

export type CartItem = {
  id: string;
  slug: string;
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

const CART_STORAGE_KEY = "atelier-kura-cart-v2";

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
  const [toast, setToast] = useState<string | null>(null);

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

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 4500);
  };

  useEffect(() => {
    try {
      const savedCart = window.localStorage.getItem(CART_STORAGE_KEY);
      if (savedCart) {
        const parsed: unknown = JSON.parse(savedCart);
        if (Array.isArray(parsed)) {
          const valid = parsed.filter(
            (item): item is CartItem =>
              typeof item === "object" &&
              item !== null &&
              typeof (item as CartItem).slug === "string" &&
              typeof (item as CartItem).size === "string" &&
              typeof (item as CartItem).price === "number" &&
              typeof (item as CartItem).quantity === "number"
          );
          setCart(valid);
        }
      }
    } catch {
      window.localStorage.removeItem(CART_STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (!cartOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setCartOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [cartOpen]);

  const totalItems = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  );

  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  const addToCart = (item: Omit<CartItem, "id" | "quantity">) => {
    const id = `${item.slug}-${item.size}`;

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

      const payload = {
        language,
        items: cart.map((item) => ({
          slug: item.slug,
          size: item.size,
          quantity: item.quantity,
        })),
      };

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.url) {
        window.location.href = data.url;
      } else {
        showToast(data?.error || t("cart.checkoutError"));
      }
    } catch (error) {
      console.error(error);
      showToast(t("cart.checkoutCrash"));
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

      <AnimatePresence>
        {cartOpen && (
        <motion.div
          key="cart-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          onClick={() => setCartOpen(false)}
        >
          <motion.aside
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 34, stiffness: 320 }}
            className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-white/10 bg-[#0f0f11]/92 shadow-2xl backdrop-blur-xl"
            onClick={(event) => event.stopPropagation()}
            aria-label={t("cart.title")}
          >
            <div className="border-b border-white/10 p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.28em] text-[#A8926E]">
                    Atelier Kūra
                  </div>
                  <h2 className="mt-2 font-[family-name:var(--font-after)] text-[2rem] font-[300] leading-[0.92] tracking-[-0.03em] text-[#f2efe8]">
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
                  <span className="mt-1 block">
                    {copy.privateCheckout[language]}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="relative flex min-h-[320px] flex-col items-center justify-center overflow-hidden rounded-[26px] border border-white/[0.07] bg-white/[0.02] p-8 text-center">
                  {/* Ghost KŪRA */}
                  <div className="pointer-events-none absolute inset-0 flex items-end justify-center select-none overflow-hidden">
                    <span className="font-[family-name:var(--font-after)] text-[9rem] font-[300] italic leading-none text-white/[0.04]">
                      Kūra
                    </span>
                  </div>
                  <div className="relative flex flex-col items-center gap-5">
                    <div className="h-px w-8 bg-[#A8926E]/35" />
                    <p className="text-[11px] uppercase tracking-[0.3em] text-white/38">
                      {t("cart.empty")}
                    </p>
                    <Link
                      href="/shop"
                      onClick={() => setCartOpen(false)}
                      className="text-[10px] uppercase tracking-[0.26em] text-[#A8926E] transition duration-200 hover:text-[#d9c79c]"
                    >
                      {t("nav.shop")} →
                    </Link>
                  </div>
                </div>
              ) : (
                <motion.div layout className="space-y-4">
                  <AnimatePresence initial={false}>
                    {cart.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, x: 18, scale: 0.97 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -14, scale: 0.96, transition: { duration: 0.2 } }}
                        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                        className="rounded-[24px] border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl"
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
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
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
                className="shimmer mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full bg-[#F2EFE8] px-6 font-semibold text-black transition duration-300 hover:-translate-y-[1px] hover:shadow-[0_18px_60px_rgba(242,239,232,0.13)] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none"
              >
                {loading && (
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.5" className="opacity-20" />
                    <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="opacity-75" />
                  </svg>
                )}
                {loading ? t("cart.redirecting") : t("cart.checkout")}
              </button>
            </div>
          </motion.aside>
        </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.22 }}
            className="fixed bottom-6 left-1/2 z-[9999] -translate-x-1/2 whitespace-nowrap rounded-2xl border border-white/15 bg-[#0f0f11]/95 px-6 py-3.5 text-sm text-white/90 shadow-2xl backdrop-blur-xl"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </CartContext.Provider>
  );
}
