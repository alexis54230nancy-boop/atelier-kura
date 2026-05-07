import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import ProductDetail from "../../../components/ProductDetail";
import {
  getLocalizedText,
  getProductBySlug,
  products,
} from "../../../lib/products";
import { defaultLanguage } from "../../../lib/i18n";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://atelier--kura.com";

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

  const name = getLocalizedText(product.name, defaultLanguage);
  const description = getLocalizedText(product.shortDescription, defaultLanguage);
  const imageUrl = product.image
    ? `${SITE_URL}${product.image}`
    : `${SITE_URL}/brand/og-image.jpg`;

  const productUrl = `${SITE_URL}/produit/${product.slug}`;

  return {
    title: `${name} — Atelier Kūra`,
    description,
    alternates: {
      canonical: productUrl,
      languages: {
        fr: productUrl,
        en: productUrl,
        de: productUrl,
      },
    },
    openGraph: {
      title: `${name} — Atelier Kūra`,
      description,
      url: productUrl,
      type: "website",
      images: [{ url: imageUrl, width: 800, height: 1000, alt: name }],
      alternateLocale: ["en_US", "de_DE"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${name} — Atelier Kūra`,
      description,
      images: [imageUrl],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const name = getLocalizedText(product.name, defaultLanguage);
  const description = getLocalizedText(product.description, defaultLanguage);
  const totalStock = Object.values(product.stock).reduce((s, n) => s + n, 0);
  const imageUrl = product.image
    ? `${SITE_URL}${product.image}`
    : undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    brand: { "@type": "Brand", name: "Atelier Kūra" },
    ...(imageUrl && { image: imageUrl }),
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: (product.price / 100).toFixed(2),
      availability:
        totalStock > 0
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
      url: `${SITE_URL}/produit/${product.slug}`,
      seller: { "@type": "Organization", name: "Atelier Kūra" },
    },
  };

  return (
    <>
      <Script
        id={`jsonld-${product.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductDetail product={product} />
    </>
  );
}
