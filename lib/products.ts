export type Size = "XS" | "S" | "M" | "L" | "XL";

export type Product = {
  slug: string;
  name: string;
  price: number;
  collection: string;
  visualLabel: string;
  shortDescription: string;
  description: string;
  composition: string;
  cut: string;
  details: string;
  stock: Record<Size, number>;
};

export const products: Product[] = [
  {
    slug: "transit-hoodie",
    name: "Transit Hoodie",
    price: 14000,
    collection: "Drop 01",
    visualLabel: "Visuel hoodie",
    shortDescription:
      "Hoodie lourd, noir dense, coupe structurée.",
    description:
      "Hoodie lourd en coton premium, pensé pour une silhouette dense, calme et structurée. Une pièce noire, discrète, faite pour durer.",
    composition: "Coton lourd 450 GSM.",
    cut: "Légèrement oversize, épaules tombantes, tenue structurée.",
    details: "Logo Kūra discret, finitions sobres, production limitée.",
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
    name: "Graphite Tee",
    price: 6500,
    collection: "Drop 01",
    visualLabel: "Visuel tee",
    shortDescription:
      "Tee épais, teinte graphite, silhouette minimale.",
    description:
      "Tee épais en jersey premium, pensé comme une base silencieuse : dense, minimale, nette. Une pièce quotidienne, mais jamais neutre.",
    composition: "Jersey coton 240 GSM.",
    cut: "Coupe droite, structurée, légèrement ample.",
    details: "Logo discret, col renforcé, finition premium.",
    stock: {
      XS: 3,
      S: 5,
      M: 4,
      L: 0,
      XL: 2,
    },
  },
  {
    slug: "layer-01",
    name: "Layer 01",
    price: 9500,
    collection: "Drop 01",
    visualLabel: "Visuel layer",
    shortDescription:
      "Pièce de transition, matière calme, présence nette.",
    description:
      "Une pièce de transition pensée pour la superposition, le mouvement et la présence. Layer 01 accompagne la silhouette sans la surcharger.",
    composition: "Matière structurée, toucher sec, rendu minéral.",
    cut: "Coupe clean, modulable, pensée pour le layering.",
    details: "Lignes sobres, finitions discrètes, logo Kūra ton sur ton.",
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

export function formatPrice(price: number) {
  return `${(price / 100).toFixed(2)}€`;
}