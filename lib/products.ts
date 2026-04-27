import type { Language } from "./i18n";

export type Size = "XS" | "S" | "M" | "L" | "XL";

export type LocalizedText = Record<Language, string>;

export type Product = {
  slug: string;
  name: LocalizedText;
  price: number;
  collection: string;
  visualLabel: LocalizedText;
  shortDescription: LocalizedText;
  description: LocalizedText;
  composition: LocalizedText;
  cut: LocalizedText;
  details: LocalizedText;
  stock: Record<Size, number>;
};

export const products: Product[] = [
  {
    slug: "transit-hoodie",
    name: {
      fr: "Transit Hoodie",
      en: "Transit Hoodie",
      de: "Transit Hoodie",
    },
    price: 14000,
    collection: "Drop 01",
    visualLabel: {
      fr: "Visuel hoodie",
      en: "Hoodie visual",
      de: "Hoodie-Visual",
    },
    shortDescription: {
      fr: "Hoodie lourd, noir dense, coupe structurée.",
      en: "Heavy hoodie, deep black, structured fit.",
      de: "Schwerer Hoodie, tiefes Schwarz, strukturierter Schnitt.",
    },
    description: {
      fr: "Hoodie lourd en coton premium, pensé pour une silhouette dense, calme et structurée. Une pièce noire, discrète, faite pour durer.",
      en: "Heavy hoodie in premium cotton, designed for a dense, quiet and structured silhouette. A black, discreet piece made to last.",
      de: "Schwerer Hoodie aus Premium-Baumwolle, entworfen für eine dichte, ruhige und strukturierte Silhouette. Ein schwarzes, dezentes Stück, gemacht für lange Dauer.",
    },
    composition: {
      fr: "Coton lourd 450 GSM.",
      en: "Heavyweight 450 GSM cotton.",
      de: "Schwere Baumwolle, 450 GSM.",
    },
    cut: {
      fr: "Légèrement oversize, épaules tombantes, tenue structurée.",
      en: "Slightly oversized, dropped shoulders, structured hold.",
      de: "Leicht oversized, überschnittene Schultern, strukturierter Fall.",
    },
    details: {
      fr: "Logo Kūra discret, finitions sobres, production limitée.",
      en: "Discreet Kūra logo, understated finishes, limited production.",
      de: "Dezentes Kūra-Logo, zurückhaltende Verarbeitung, limitierte Produktion.",
    },
    stock: {
      XS: 2,
      S: 4,
      M: 0,
      L: 3,
      XL: 1,
    },
  },
  {
    slug: "graphite-tee",
    name: {
      fr: "Graphite Tee",
      en: "Graphite Tee",
      de: "Graphite Tee",
    },
    price: 6500,
    collection: "Drop 01",
    visualLabel: {
      fr: "Visuel tee",
      en: "Tee visual",
      de: "T-Shirt-Visual",
    },
    shortDescription: {
      fr: "Tee épais, teinte graphite, silhouette minimale.",
      en: "Heavy tee, graphite tone, minimal silhouette.",
      de: "Schweres T-Shirt, Graphitton, minimale Silhouette.",
    },
    description: {
      fr: "Tee épais en jersey premium, pensé comme une base silencieuse : dense, minimale, nette. Une pièce quotidienne, mais jamais neutre.",
      en: "Heavy tee in premium jersey, designed as a quiet base: dense, minimal, precise. An everyday piece, but never neutral.",
      de: "Schweres T-Shirt aus Premium-Jersey, als stille Basis gedacht: dicht, minimal, präzise. Ein Alltagsstück, aber niemals neutral.",
    },
    composition: {
      fr: "Jersey coton 240 GSM.",
      en: "240 GSM cotton jersey.",
      de: "Baumwolljersey, 240 GSM.",
    },
    cut: {
      fr: "Coupe droite, structurée, légèrement ample.",
      en: "Straight, structured, slightly relaxed fit.",
      de: "Gerader, strukturierter, leicht weiter Schnitt.",
    },
    details: {
      fr: "Logo discret, col renforcé, finition premium.",
      en: "Discreet logo, reinforced collar, premium finish.",
      de: "Dezentes Logo, verstärkter Kragen, hochwertige Verarbeitung.",
    },
    stock: {
      XS: 3,
      S: 5,
      M: 4,
      L: 15,
      XL: 2,
    },
  },
  {
    slug: "layer-01",
    name: {
      fr: "Layer 01",
      en: "Layer 01",
      de: "Layer 01",
    },
    price: 9500,
    collection: "Drop 01",
    visualLabel: {
      fr: "Visuel layer",
      en: "Layer visual",
      de: "Layer-Visual",
    },
    shortDescription: {
      fr: "Pièce de transition, matière calme, présence nette.",
      en: "Transitional piece, quiet material, precise presence.",
      de: "Übergangsstück, ruhiges Material, klare Präsenz.",
    },
    description: {
      fr: "Une pièce de transition pensée pour la superposition, le mouvement et la présence. Layer 01 accompagne la silhouette sans la surcharger.",
      en: "A transitional piece designed for layering, movement and presence. Layer 01 supports the silhouette without overloading it.",
      de: "Ein Übergangsstück für Layering, Bewegung und Präsenz. Layer 01 begleitet die Silhouette, ohne sie zu überladen.",
    },
    composition: {
      fr: "Matière structurée, toucher sec, rendu minéral.",
      en: "Structured fabric, dry touch, mineral finish.",
      de: "Strukturiertes Material, trockener Griff, mineralische Optik.",
    },
    cut: {
      fr: "Coupe clean, modulable, pensée pour le layering.",
      en: "Clean, modular fit, designed for layering.",
      de: "Klarer, modularer Schnitt, für Layering gedacht.",
    },
    details: {
      fr: "Lignes sobres, finitions discrètes, logo Kūra ton sur ton.",
      en: "Understated lines, discreet finishes, tone-on-tone Kūra logo.",
      de: "Zurückhaltende Linien, dezente Verarbeitung, Ton-in-Ton Kūra-Logo.",
    },
    stock: {
      XS: 1,
      S: 2,
      M: 3,
      L: 2,
      XL: 0,
    },
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getLocalizedText(text: LocalizedText, language: Language) {
  return text[language] ?? text.fr;
}

export function formatPrice(price: number) {
  return `${(price / 100).toFixed(2)}€`;
}