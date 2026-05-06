import type { MetadataRoute } from "next";
import { products } from "../lib/products";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://atelier--kura.com";

const STATIC_PAGES: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}> = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/shop", priority: 0.9, changeFrequency: "weekly" },
  { path: "/capsule", priority: 0.8, changeFrequency: "monthly" },
  { path: "/story", priority: 0.7, changeFrequency: "monthly" },
  { path: "/fabrication", priority: 0.7, changeFrequency: "monthly" },
  { path: "/futures", priority: 0.6, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.5, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.5, changeFrequency: "yearly" },
  { path: "/guide-tailles", priority: 0.5, changeFrequency: "yearly" },
  { path: "/livraison", priority: 0.4, changeFrequency: "yearly" },
  { path: "/retours", priority: 0.4, changeFrequency: "yearly" },
  { path: "/cgv", priority: 0.3, changeFrequency: "yearly" },
  { path: "/mentions-legales", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_PAGES.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    priority,
    changeFrequency,
    lastModified: new Date(),
  }));

  const productEntries = products.map((product) => ({
    url: `${SITE_URL}/produit/${product.slug}`,
    priority: 0.85,
    changeFrequency: "weekly" as const,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...productEntries];
}
