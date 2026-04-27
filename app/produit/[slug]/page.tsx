import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetail from "../../../components/ProductDetail";
import {
  getLocalizedText,
  getProductBySlug,
  products,
} from "../../../lib/products";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Produit introuvable — Atelier Kūra",
    };
  }

  return {
    title: `${getLocalizedText(product.name, "fr")} — Atelier Kūra`,
    description: getLocalizedText(product.shortDescription, "fr"),
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}