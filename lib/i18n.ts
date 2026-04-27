export type Language = "fr" | "en" | "de";

export const defaultLanguage: Language = "fr";

export const languages = [
  { code: "fr", label: "Français", shortLabel: "FR", flag: "🇫🇷" },
  { code: "en", label: "English", shortLabel: "EN", flag: "🇬🇧" },
  { code: "de", label: "Deutsch", shortLabel: "DE", flag: "🇩🇪" },
] as const;

export function isLanguage(value: unknown): value is Language {
  return value === "fr" || value === "en" || value === "de";
}

export const translations = {
  "nav.shop": {
    fr: "Shop",
    en: "Shop",
    de: "Shop",
  },
  "nav.capsule": {
    fr: "Capsule",
    en: "Capsule",
    de: "Capsule",
  },
  "nav.story": {
    fr: "Story",
    en: "Story",
    de: "Story",
  },
  "nav.fabrication": {
    fr: "Fabrication",
    en: "Craft",
    de: "Fertigung",
  },
  "nav.futures": {
    fr: "Futures",
    en: "Futures",
    de: "Zukunft",
  },
  "nav.waitlist": {
    fr: "Waitlist",
    en: "Waitlist",
    de: "Warteliste",
  },

  "language.label": {
    fr: "Langue",
    en: "Language",
    de: "Sprache",
  },

  "cart.button": {
    fr: "Panier",
    en: "Cart",
    de: "Warenkorb",
  },
  "cart.title": {
    fr: "Panier",
    en: "Cart",
    de: "Warenkorb",
  },
  "cart.close": {
    fr: "Fermer",
    en: "Close",
    de: "Schließen",
  },
  "cart.empty": {
    fr: "Votre panier est vide.",
    en: "Your cart is empty.",
    de: "Dein Warenkorb ist leer.",
  },
  "cart.size": {
    fr: "Taille",
    en: "Size",
    de: "Größe",
  },
  "cart.unit": {
    fr: "unité",
    en: "unit",
    de: "Stück",
  },
  "cart.remove": {
    fr: "Retirer",
    en: "Remove",
    de: "Entfernen",
  },
  "cart.total": {
    fr: "Total",
    en: "Total",
    de: "Gesamt",
  },
  "cart.shipping": {
    fr: "Livraison standard France / Luxembourg / Belgique calculée au checkout.",
    en: "Standard shipping for France / Luxembourg / Belgium calculated at checkout.",
    de: "Standardversand für Frankreich / Luxemburg / Belgien wird beim Checkout berechnet.",
  },
  "cart.checkout": {
    fr: "Payer avec Stripe",
    en: "Pay with Stripe",
    de: "Mit Stripe bezahlen",
  },
  "cart.redirecting": {
    fr: "Redirection...",
    en: "Redirecting...",
    de: "Weiterleitung...",
  },

  "shop.eyebrow": {
    fr: "Boutique",
    en: "Shop",
    de: "Shop",
  },
  "shop.title": {
    fr: "Drop 01.",
    en: "Drop 01.",
    de: "Drop 01.",
  },
  "shop.intro": {
    fr: "Une première capsule pensée comme un manifeste : peu de pièces, une direction précise, une présence silencieuse.",
    en: "A first capsule designed as a manifesto: few pieces, a precise direction, a quiet presence.",
    de: "Eine erste Capsule als Manifest: wenige Stücke, eine klare Richtung, eine stille Präsenz.",
  },
  "shop.viewProduct": {
    fr: "Voir le produit",
    en: "View product",
    de: "Produkt ansehen",
  },

  "product.size": {
    fr: "Taille",
    en: "Size",
    de: "Größe",
  },
  "product.chooseSize": {
    fr: "Choisir une taille",
    en: "Choose a size",
    de: "Größe wählen",
  },
  "product.soldOut": {
    fr: "Sold out",
    en: "Sold out",
    de: "Ausverkauft",
  },
  "product.addToCart": {
    fr: "Ajouter au panier",
    en: "Add to cart",
    de: "In den Warenkorb",
  },
  "product.sizeSoldOut": {
    fr: "Cette taille est sold out.",
    en: "This size is sold out.",
    de: "Diese Größe ist ausverkauft.",
  },
  "product.remainingPrefix": {
    fr: "pièce(s) restante(s) en taille",
    en: "piece(s) left in size",
    de: "Stück übrig in Größe",
  },
  "product.composition": {
    fr: "Composition",
    en: "Composition",
    de: "Zusammensetzung",
  },
  "product.cut": {
    fr: "Coupe",
    en: "Fit",
    de: "Schnitt",
  },
  "product.details": {
    fr: "Détails",
    en: "Details",
    de: "Details",
  },
  "product.shipping": {
    fr: "Livraison",
    en: "Shipping",
    de: "Versand",
  },
  "product.shippingZones": {
    fr: "France, Luxembourg, Belgique.",
    en: "France, Luxembourg, Belgium.",
    de: "Frankreich, Luxemburg, Belgien.",
  },

} as const;

export type TranslationKey = keyof typeof translations;

export function translate(language: Language, key: string): string {
  if (key in translations) {
    return translations[key as TranslationKey][language];
  }

  return key;
}