"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

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

export default function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedCart = window.localStorage.getItem("atelier-kura-cart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("atelier-kura-cart", JSON.stringify(cart));
  }, [cart]);

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
        onClick={() => setCartOpen(true)}
        className="fixed right-4 top-24 z-50 rounded-full border border-white/10 bg-black/50 px-4 py-3 text-sm text-white shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-[1px] hover:border-[#A8926E]/40 hover:bg-black/65"
      >
        Panier ({totalItems})
      </button>

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
                    key={item.id}
                    className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="mt-1 text-sm text-white/60">
                          Taille : {item.size}
                        </p>
                        <p className="mt-1 text-sm text-white/60">
                          {(item.price / 100).toFixed(2)}€ / unité
                        </p>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-sm text-[#d9d4c7] transition hover:text-white"
                      >
                        Retirer
                      </button>
                    </div>

                    <div className="mt-4 flex items-center gap-3">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white transition hover:bg-white/10"
                      >
                        -
                      </button>

                      <span className="min-w-6 text-center">{item.quantity}</span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white transition hover:bg-white/10"
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
    </CartContext.Provider>
  );
}