import { NextResponse } from "next/server";
import Stripe from "stripe";
import {
  getLocalizedText,
  getProductBySlug,
} from "../../../lib/products";
import { isLanguage, type Language } from "../../../lib/i18n";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

type CheckoutItemInput = {
  slug: unknown;
  size: unknown;
  quantity: unknown;
};

type LineItem = {
  price_data: {
    currency: "eur";
    product_data: {
      name: string;
      metadata: { slug: string; size: string };
    };
    unit_amount: number;
  };
  quantity: number;
};

const ALLOWED_SIZES = ["XS", "S", "M", "L", "XL"] as const;
type AllowedSize = (typeof ALLOWED_SIZES)[number];

function isAllowedSize(value: unknown): value is AllowedSize {
  return (
    typeof value === "string" &&
    (ALLOWED_SIZES as readonly string[]).includes(value)
  );
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const rawItems: unknown = body?.items;
    const rawLanguage: unknown = body?.language;

    const language: Language = isLanguage(rawLanguage) ? rawLanguage : "fr";

    if (!Array.isArray(rawItems) || rawItems.length === 0) {
      return NextResponse.json({ error: "Panier vide." }, { status: 400 });
    }

    if (rawItems.length > 20) {
      return NextResponse.json(
        { error: "Trop d'articles dans le panier." },
        { status: 400 }
      );
    }

    const lineItems: LineItem[] = [];

    for (const raw of rawItems as CheckoutItemInput[]) {
      if (typeof raw?.slug !== "string") {
        return NextResponse.json(
          { error: "Article invalide (slug manquant)." },
          { status: 400 }
        );
      }

      if (!isAllowedSize(raw.size)) {
        return NextResponse.json(
          { error: "Taille invalide." },
          { status: 400 }
        );
      }

      const quantity = Number(raw.quantity);
      if (!Number.isInteger(quantity) || quantity < 1 || quantity > 10) {
        return NextResponse.json(
          { error: "Quantité invalide." },
          { status: 400 }
        );
      }

      const product = getProductBySlug(raw.slug);
      if (!product) {
        return NextResponse.json(
          { error: `Produit introuvable : ${raw.slug}` },
          { status: 400 }
        );
      }

      const stockForSize = product.stock[raw.size];
      if (stockForSize < quantity) {
        const localizedName = getLocalizedText(product.name, language);
        return NextResponse.json(
          {
            error: `Stock insuffisant pour ${localizedName} (taille ${raw.size}). Disponible : ${stockForSize}.`,
          },
          { status: 409 }
        );
      }

      const trustedName = getLocalizedText(product.name, language);
      const trustedPrice = product.price;

      lineItems.push({
        price_data: {
          currency: "eur",
          product_data: {
            name: `${trustedName} — ${raw.size}`,
            metadata: {
              slug: product.slug,
              size: raw.size,
            },
          },
          unit_amount: trustedPrice,
        },
        quantity,
      });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
      shipping_address_collection: {
        allowed_countries: ["FR", "LU", "BE"],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: { amount: 790, currency: "eur" },
            display_name: "Livraison standard",
            delivery_estimate: {
              minimum: { unit: "business_day", value: 3 },
              maximum: { unit: "business_day", value: 6 },
            },
          },
        },
      ],
      locale: language === "de" ? "de" : language === "en" ? "en" : "fr",
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe error:", error);
    return NextResponse.json(
      { error: "Erreur serveur pendant le checkout." },
      { status: 500 }
    );
  }
}