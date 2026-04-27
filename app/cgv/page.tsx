"use client";

import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useI18n } from "../../components/LanguageProvider";

export default function CgvPage() {
  const { language } = useI18n();

  const copy = {
    eyebrow: {
      fr: "CGV",
      en: "Terms",
      de: "AGB",
    },
    title: {
      fr: "Conditions générales de vente",
      en: "Terms and conditions of sale",
      de: "Allgemeine Verkaufsbedingungen",
    },
    intro: {
      fr: "Les présentes conditions encadrent les ventes effectuées sur le site Atelier Kūra. Toute commande passée sur le site implique l’acceptation des présentes conditions générales de vente.",
      en: "These terms govern sales made on the Atelier Kūra website. Any order placed on the website implies acceptance of these terms and conditions of sale.",
      de: "Diese Bedingungen regeln Verkäufe über die Website von Atelier Kūra. Jede Bestellung auf der Website setzt die Annahme dieser Verkaufsbedingungen voraus.",
    },
    shopCta: {
      fr: "Retour à la boutique",
      en: "Back to shop",
      de: "Zurück zum Shop",
    },
    faqCta: {
      fr: "Voir la FAQ",
      en: "View FAQ",
      de: "FAQ ansehen",
    },
    sections: [
      {
        title: {
          fr: "1. Produits",
          en: "1. Products",
          de: "1. Produkte",
        },
        text: {
          fr: "Les produits proposés sont décrits avec la plus grande précision possible. Les visuels, rendus, teintes et proportions peuvent légèrement varier selon les écrans, les productions ou les conditions de présentation.",
          en: "Products are described as accurately as possible. Visuals, renderings, colors and proportions may vary slightly depending on screens, production or presentation conditions.",
          de: "Die Produkte werden so genau wie möglich beschrieben. Bilder, Renderings, Farben und Proportionen können je nach Bildschirm, Produktion oder Präsentationsbedingungen leicht variieren.",
        },
      },
      {
        title: {
          fr: "2. Prix",
          en: "2. Prices",
          de: "2. Preise",
        },
        text: {
          fr: "Les prix sont indiqués en euros. Les frais de livraison, lorsqu’ils s’appliquent, sont calculés et affichés au moment du paiement. Atelier Kūra se réserve le droit de modifier ses prix à tout moment, sans impact sur les commandes déjà validées.",
          en: "Prices are displayed in euros. Shipping fees, when applicable, are calculated and shown at checkout. Atelier Kūra reserves the right to change prices at any time, without affecting orders already confirmed.",
          de: "Die Preise werden in Euro angegeben. Versandkosten werden, sofern sie anfallen, beim Checkout berechnet und angezeigt. Atelier Kūra behält sich das Recht vor, Preise jederzeit zu ändern, ohne bereits bestätigte Bestellungen zu beeinflussen.",
        },
      },
      {
        title: {
          fr: "3. Commande",
          en: "3. Order",
          de: "3. Bestellung",
        },
        text: {
          fr: "La commande est considérée comme définitive après validation du paiement. Un email de confirmation peut être envoyé à l’adresse renseignée lors de la commande. Le client est responsable de l’exactitude des informations transmises.",
          en: "The order is considered final after payment validation. A confirmation email may be sent to the address provided during checkout. The customer is responsible for the accuracy of the information provided.",
          de: "Die Bestellung gilt nach Bestätigung der Zahlung als endgültig. Eine Bestätigungs-E-Mail kann an die beim Checkout angegebene Adresse gesendet werden. Der Kunde ist für die Richtigkeit der übermittelten Informationen verantwortlich.",
        },
      },
      {
        title: {
          fr: "4. Paiement",
          en: "4. Payment",
          de: "4. Zahlung",
        },
        text: {
          fr: "Les paiements sont traités via Stripe. Atelier Kūra ne stocke pas les informations bancaires du client. En cas de refus de paiement, la commande ne pourra pas être validée.",
          en: "Payments are processed through Stripe. Atelier Kūra does not store customer banking information. If payment is refused, the order cannot be validated.",
          de: "Zahlungen werden über Stripe abgewickelt. Atelier Kūra speichert keine Bankdaten des Kunden. Wird die Zahlung abgelehnt, kann die Bestellung nicht bestätigt werden.",
        },
      },
      {
        title: {
          fr: "5. Livraison",
          en: "5. Shipping",
          de: "5. Versand",
        },
        text: {
          fr: "Atelier Kūra livre actuellement en France, au Luxembourg et en Belgique. Les délais estimés sont indiqués sur la page Livraison ou au moment du paiement. En cas de précommande ou de drop limité, les délais peuvent être adaptés et précisés avant validation de la commande.",
          en: "Atelier Kūra currently ships to France, Luxembourg and Belgium. Estimated delivery times are shown on the Shipping page or at checkout. In the case of pre-orders or limited drops, delivery times may be adjusted and specified before order confirmation.",
          de: "Atelier Kūra liefert derzeit nach Frankreich, Luxemburg und Belgien. Geschätzte Lieferzeiten werden auf der Versandseite oder beim Checkout angezeigt. Bei Vorbestellungen oder limitierten Drops können die Lieferzeiten angepasst und vor Bestätigung der Bestellung angegeben werden.",
        },
      },
      {
        title: {
          fr: "6. Retours et rétractation",
          en: "6. Returns and withdrawal",
          de: "6. Retouren und Widerruf",
        },
        text: {
          fr: "Le client peut demander un retour dans un délai de 14 jours après réception, sous réserve que l’article soit neuf, non porté, non lavé et dans son état d’origine. Les frais de retour restent à la charge du client, sauf erreur de préparation ou produit défectueux.",
          en: "The customer may request a return within 14 days of receipt, provided that the item is new, unworn, unwashed and in its original condition. Return shipping costs remain the customer’s responsibility, except in the case of a preparation error or defective product.",
          de: "Der Kunde kann innerhalb von 14 Tagen nach Erhalt eine Rückgabe anfragen, sofern der Artikel neu, ungetragen, ungewaschen und im Originalzustand ist. Die Rücksendekosten trägt der Kunde, außer bei einem Vorbereitungsfehler oder einem defekten Produkt.",
        },
      },
      {
        title: {
          fr: "7. Remboursement",
          en: "7. Refund",
          de: "7. Rückerstattung",
        },
        text: {
          fr: "Après réception et vérification de l’article retourné, le remboursement est effectué via le moyen de paiement utilisé lors de la commande. Atelier Kūra peut différer le remboursement jusqu’à réception du produit retourné.",
          en: "After receiving and checking the returned item, the refund is issued through the payment method used for the order. Atelier Kūra may defer the refund until the returned product has been received.",
          de: "Nach Erhalt und Prüfung des zurückgesendeten Artikels erfolgt die Rückerstattung über die bei der Bestellung verwendete Zahlungsmethode. Atelier Kūra kann die Rückerstattung bis zum Erhalt des zurückgesendeten Produkts aufschieben.",
        },
      },
      {
        title: {
          fr: "8. Garanties légales",
          en: "8. Legal warranties",
          de: "8. Gesetzliche Gewährleistung",
        },
        text: {
          fr: "Les produits bénéficient des garanties légales applicables, notamment en cas de défaut de conformité ou de vice caché. Pour toute demande, le client peut contacter Atelier Kūra avec son numéro de commande et des photos du produit concerné.",
          en: "Products benefit from applicable legal warranties, particularly in the event of lack of conformity or hidden defects. For any request, the customer may contact Atelier Kūra with their order number and photos of the item concerned.",
          de: "Die Produkte unterliegen den anwendbaren gesetzlichen Gewährleistungen, insbesondere bei Vertragswidrigkeit oder versteckten Mängeln. Für jede Anfrage kann der Kunde Atelier Kūra mit seiner Bestellnummer und Fotos des betroffenen Produkts kontaktieren.",
        },
      },
      {
        title: {
          fr: "9. Séries limitées",
          en: "9. Limited series",
          de: "9. Limitierte Serien",
        },
        text: {
          fr: "Les produits Atelier Kūra peuvent être proposés en quantités limitées. Aucun réassort, échange de taille ou disponibilité future ne peut être garanti après épuisement d’un produit.",
          en: "Atelier Kūra products may be offered in limited quantities. No restock, size exchange or future availability can be guaranteed once a product is sold out.",
          de: "Atelier Kūra Produkte können in begrenzten Mengen angeboten werden. Nach Ausverkauf eines Produkts können weder Restock, Größentausch noch zukünftige Verfügbarkeit garantiert werden.",
        },
      },
      {
        title: {
          fr: "10. Contact",
          en: "10. Contact",
          de: "10. Kontakt",
        },
        text: {
          fr: "Pour toute question relative à une commande, un retour ou un produit, le client peut écrire à contact@atelierkura.com.",
          en: "For any question regarding an order, return or product, the customer may write to contact@atelierkura.com.",
          de: "Für Fragen zu einer Bestellung, Rückgabe oder einem Produkt kann der Kunde an contact@atelierkura.com schreiben.",
        },
      },
    ],
    legalNote: {
      fr: "Cette page est fournie à titre informatif et devra être adaptée aux informations légales définitives de l’entreprise.",
      en: "This page is provided for informational purposes and should be adapted to the final legal information of the company.",
      de: "Diese Seite dient Informationszwecken und sollte an die endgültigen rechtlichen Informationen des Unternehmens angepasst werden.",
    },
  };

  return (
    <main className="min-h-screen text-[#f5f5f2]">
      <Navbar />

      <section className="px-4 py-16">
        <div className="mx-auto w-[min(1100px,100%)]">
          <div className="rounded-[34px] border border-white/10 bg-white/[0.035] p-8 shadow-2xl backdrop-blur-xl md:p-12">
            <div className="text-[11px] uppercase tracking-[0.28em] text-[#A8926E]">
              {copy.eyebrow[language]}
            </div>

            <h1 className="mt-4 text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
              {copy.title[language]}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-white/68">
              {copy.intro[language]}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/shop"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#F2EFE8] px-6 text-sm font-semibold text-black transition duration-300 hover:-translate-y-[1px]"
              >
                {copy.shopCta[language]}
              </Link>

              <Link
                href="/faq"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/10 bg-black/30 px-6 text-sm font-semibold text-white/75 transition duration-300 hover:-translate-y-[1px] hover:border-[#A8926E]/40 hover:text-white"
              >
                {copy.faqCta[language]}
              </Link>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {copy.sections.map((section) => (
              <section
                key={section.title.fr}
                className="rounded-[28px] border border-white/10 bg-white/[0.035] p-6 shadow-2xl backdrop-blur-xl transition duration-500 hover:border-white/15 hover:bg-white/[0.045] md:p-7"
              >
                <h2 className="text-xl font-semibold tracking-[-0.04em]">
                  {section.title[language]}
                </h2>

                <p className="mt-3 text-sm leading-7 text-white/65">
                  {section.text[language]}{" "}
                  {section.title.fr === "10. Contact" && (
                    <a
                      href="mailto:contact@atelierkura.com"
                      className="text-[#d9d4c7] underline underline-offset-4 transition hover:text-white"
                    >
                      contact@atelierkura.com
                    </a>
                  )}
                </p>
              </section>
            ))}
          </div>

          <div className="mt-8 rounded-[28px] border border-[#A8926E]/20 bg-[#A8926E]/10 p-6 text-sm leading-7 text-[#e7dbc0] shadow-2xl backdrop-blur-xl">
            {copy.legalNote[language]}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}