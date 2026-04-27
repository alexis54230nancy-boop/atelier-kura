export type Language = "fr" | "en" | "de";

export const defaultLanguage: Language = "fr";

export const languages: Array<{
  code: Language;
  label: string;
  shortLabel: string;
  flag: string;
}> = [
  { code: "fr", label: "Français", shortLabel: "FR", flag: "🇫🇷" },
  { code: "en", label: "English", shortLabel: "EN", flag: "🇬🇧" },
  { code: "de", label: "Deutsch", shortLabel: "DE", flag: "🇩🇪" },
];

export function isLanguage(value: string | null | undefined): value is Language {
  return value === "fr" || value === "en" || value === "de";
}

export const translations: Record<string, Record<Language, string>> = {
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
    de: "Waitlist",
  },

  "footer.tagline": {
    fr: "Vêtements en séries limitées. Présence, précision, silence.",
    en: "Limited-series garments. Presence, precision, silence.",
    de: "Kleidung in limitierten Serien. Präsenz, Präzision, Stille.",
  },
  "footer.shopTitle": {
    fr: "Boutique",
    en: "Shop",
    de: "Shop",
  },
  "footer.houseTitle": {
    fr: "Maison",
    en: "House",
    de: "Haus",
  },
  "footer.helpTitle": {
    fr: "Aide",
    en: "Help",
    de: "Hilfe",
  },
  "footer.sizeGuide": {
    fr: "Guide des tailles",
    en: "Size guide",
    de: "Größentabelle",
  },
  "footer.shipping": {
    fr: "Livraison",
    en: "Shipping",
    de: "Versand",
  },
  "footer.returns": {
    fr: "Retours",
    en: "Returns",
    de: "Rückgaben",
  },
  "footer.terms": {
    fr: "CGV",
    en: "Terms",
    de: "AGB",
  },
  "footer.legal": {
    fr: "Mentions légales",
    en: "Legal notice",
    de: "Impressum",
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
};

export function translate(language: Language, key: string) {
  return translations[key]?.[language] ?? translations[key]?.fr ?? key;
}