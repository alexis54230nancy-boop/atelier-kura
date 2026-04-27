"use client";

import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useI18n } from "../../components/LanguageProvider";

export default function LivraisonPage() {
  const { language } = useI18n();

  const copy = {
    eyebrow: {
      fr: "Livraison",
      en: "Shipping",
      de: "Versand",
    },
    title: {
      fr: "Politique de livraison",
      en: "Shipping policy",
      de: "Versandrichtlinie",
    },
    intro: {
      fr: "Les commandes Atelier Kūra sont préparées avec soin et expédiées dans les meilleurs délais. Chaque envoi est pensé pour accompagner une production courte, précise et limitée.",
      en: "Atelier Kūra orders are prepared with care and shipped as quickly as possible. Each shipment is designed to support short, precise and limited production.",
      de: "Bestellungen von Atelier Kūra werden sorgfältig vorbereitet und so schnell wie möglich versendet. Jede Sendung begleitet eine kurze, präzise und limitierte Produktion.",
    },
    zonesTitle: {
      fr: "Zones de livraison",
      en: "Shipping zones",
      de: "Versandzonen",
    },
    zonesText: {
      fr: "Atelier Kūra livre actuellement en France, au Luxembourg et en Belgique.",
      en: "Atelier Kūra currently ships to France, Luxembourg and Belgium.",
      de: "Atelier Kūra liefert derzeit nach Frankreich, Luxemburg und Belgien.",
    },
    delayTitle: {
      fr: "Délais estimés",
      en: "Estimated delivery times",
      de: "Geschätzte Lieferzeiten",
    },
    delayText: {
      fr: "Les délais estimés sont généralement de 3 à 6 jours ouvrés après validation de la commande, sauf indication contraire sur la fiche produit.",
      en: "Estimated delivery times are usually 3 to 6 business days after order confirmation, unless otherwise stated on the product page.",
      de: "Die geschätzte Lieferzeit beträgt in der Regel 3 bis 6 Werktage nach Bestätigung der Bestellung, sofern auf der Produktseite nichts anderes angegeben ist.",
    },
    dropsTitle: {
      fr: "Drops limités",
      en: "Limited drops",
      de: "Limitierte Drops",
    },
    dropsText: {
      fr: "Lors des lancements, précommandes ou séries limitées, les délais peuvent varier. Les informations spécifiques seront indiquées avant le paiement.",
      en: "During launches, pre-orders or limited series, delivery times may vary. Specific information will be shown before payment.",
      de: "Bei Launches, Vorbestellungen oder limitierten Serien können die Lieferzeiten variieren. Spezifische Informationen werden vor der Zahlung angezeigt.",
    },
    trackingTitle: {
      fr: "Suivi",
      en: "Tracking",
      de: "Sendungsverfolgung",
    },
    trackingText: {
      fr: "Lorsque le suivi est disponible, il est transmis après l’expédition de la commande.",
      en: "When tracking is available, it is sent after the order has been shipped.",
      de: "Wenn eine Sendungsverfolgung verfügbar ist, wird sie nach dem Versand der Bestellung übermittelt.",
    },
    note: {
      fr: "Les frais de livraison sont calculés au moment du checkout selon la destination et les options disponibles.",
      en: "Shipping fees are calculated at checkout depending on the destination and available options.",
      de: "Die Versandkosten werden beim Checkout je nach Zielort und verfügbaren Optionen berechnet.",
    },
    faqCta: {
      fr: "Voir la FAQ",
      en: "View FAQ",
      de: "FAQ ansehen",
    },
    shopCta: {
      fr: "Retour à la boutique",
      en: "Back to shop",
      de: "Zurück zum Shop",
    },
  };

  const cards = [
    {
      title: copy.zonesTitle[language],
      text: copy.zonesText[language],
    },
    {
      title: copy.delayTitle[language],
      text: copy.delayText[language],
    },
    {
      title: copy.dropsTitle[language],
      text: copy.dropsText[language],
    },
    {
      title: copy.trackingTitle[language],
      text: copy.trackingText[language],
    },
  ];

  return (
    <main className="min-h-screen text-[#f5f5f2]">
      <Navbar />

      <section className="px-4 py-16">
        <div className="mx-auto w-[min(1000px,100%)]">
          <div className="rounded-[34px] border border-white/10 bg-white/[0.035] p-8 shadow-2xl backdrop-blur-xl md:p-12">
            <div className="text-[11px] uppercase tracking-[0.28em] text-[#A8926E]">
              {copy.eyebrow[language]}
            </div>

            <h1 className="mt-4 text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
              {copy.title[language]}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/68">
              {copy.intro[language]}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/faq"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#F2EFE8] px-6 text-sm font-semibold text-black transition duration-300 hover:-translate-y-[1px]"
              >
                {copy.faqCta[language]}
              </Link>

              <Link
                href="/shop"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/10 bg-black/30 px-6 text-sm font-semibold text-white/75 transition duration-300 hover:-translate-y-[1px] hover:border-[#A8926E]/40 hover:text-white"
              >
                {copy.shopCta[language]}
              </Link>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {cards.map((card) => (
              <section
                key={card.title}
                className="rounded-[28px] border border-white/10 bg-white/[0.035] p-6 shadow-2xl backdrop-blur-xl transition duration-500 hover:border-white/15 hover:bg-white/[0.045]"
              >
                <h2 className="text-xl font-semibold tracking-[-0.04em]">
                  {card.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-white/65">
                  {card.text}
                </p>
              </section>
            ))}
          </div>

          <div className="mt-8 rounded-[28px] border border-[#A8926E]/20 bg-[#A8926E]/10 p-6 text-sm leading-7 text-[#e7dbc0] shadow-2xl backdrop-blur-xl">
            {copy.note[language]}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}