"use client";

import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useI18n } from "../../components/LanguageProvider";

export default function RetoursPage() {
  const { language } = useI18n();

  const copy = {
    eyebrow: {
      fr: "Retours",
      en: "Returns",
      de: "Retouren",
    },
    title: {
      fr: "Politique de retour",
      en: "Return policy",
      de: "Rückgaberichtlinie",
    },
    intro: {
      fr: "Vous pouvez demander un retour dans un délai de 14 jours après réception, sous réserve que l’article soit neuf, non porté, non lavé et dans son état d’origine.",
      en: "You can request a return within 14 days of receipt, provided that the item is new, unworn, unwashed and in its original condition.",
      de: "Du kannst innerhalb von 14 Tagen nach Erhalt eine Rückgabe anfragen, sofern der Artikel neu, ungetragen, ungewaschen und im Originalzustand ist.",
    },
    conditionTitle: {
      fr: "Conditions",
      en: "Conditions",
      de: "Bedingungen",
    },
    conditionText: {
      fr: "L’article doit être retourné dans son état d’origine, avec ses éléments d’emballage lorsque cela s’applique. Les pièces portées, lavées ou endommagées ne pourront pas être reprises.",
      en: "The item must be returned in its original condition, with its packaging elements when applicable. Worn, washed or damaged pieces cannot be accepted.",
      de: "Der Artikel muss im Originalzustand zurückgegeben werden, wenn möglich mit der Verpackung. Getragene, gewaschene oder beschädigte Teile können nicht angenommen werden.",
    },
    delayTitle: {
      fr: "Délai",
      en: "Return window",
      de: "Frist",
    },
    delayText: {
      fr: "La demande de retour doit être effectuée sous 14 jours après réception de la commande.",
      en: "The return request must be made within 14 days after receiving the order.",
      de: "Die Rückgabeanfrage muss innerhalb von 14 Tagen nach Erhalt der Bestellung erfolgen.",
    },
    costTitle: {
      fr: "Frais de retour",
      en: "Return costs",
      de: "Rücksendekosten",
    },
    costText: {
      fr: "Les frais de retour restent à la charge du client, sauf erreur de préparation ou produit défectueux.",
      en: "Return shipping costs remain the customer’s responsibility, except in the case of a preparation error or defective product.",
      de: "Die Rücksendekosten trägt der Kunde, außer bei einem Vorbereitungsfehler oder einem defekten Produkt.",
    },
    refundTitle: {
      fr: "Remboursement",
      en: "Refund",
      de: "Rückerstattung",
    },
    refundText: {
      fr: "Après réception et vérification de l’article retourné, le remboursement est effectué via le moyen de paiement utilisé lors de la commande.",
      en: "After receiving and checking the returned item, the refund is issued through the payment method used for the order.",
      de: "Nach Erhalt und Prüfung des zurückgesendeten Artikels erfolgt die Rückerstattung über die bei der Bestellung verwendete Zahlungsmethode.",
    },
    contactTitle: {
      fr: "Demande de retour",
      en: "Return request",
      de: "Rückgabeanfrage",
    },
    contactText: {
      fr: "Pour toute demande, merci d’écrire à contact@atelierkura.com avec votre numéro de commande.",
      en: "For any request, please write to contact@atelierkura.com with your order number.",
      de: "Für jede Anfrage schreibe bitte an contact@atelierkura.com mit deiner Bestellnummer.",
    },
    note: {
      fr: "Les drops Atelier Kūra étant produits en séries limitées, aucun échange de taille ne peut être garanti. Si une taille est disponible, une solution pourra être proposée après contact.",
      en: "As Atelier Kūra drops are produced in limited series, size exchanges cannot be guaranteed. If a size is available, a solution may be offered after contact.",
      de: "Da Atelier Kūra Drops in limitierten Serien produziert werden, kann ein Größentausch nicht garantiert werden. Falls eine Größe verfügbar ist, kann nach Kontaktaufnahme eine Lösung angeboten werden.",
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
      title: copy.conditionTitle[language],
      text: copy.conditionText[language],
    },
    {
      title: copy.delayTitle[language],
      text: copy.delayText[language],
    },
    {
      title: copy.costTitle[language],
      text: copy.costText[language],
    },
    {
      title: copy.refundTitle[language],
      text: copy.refundText[language],
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

          <div className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.035] p-6 shadow-2xl backdrop-blur-xl">
            <h2 className="text-xl font-semibold tracking-[-0.04em]">
              {copy.contactTitle[language]}
            </h2>

            <p className="mt-3 text-sm leading-7 text-white/65">
              {copy.contactText[language]}{" "}
              <a
                href="mailto:contact@atelierkura.com"
                className="text-[#d9d4c7] underline underline-offset-4 transition hover:text-white"
              >
                contact@atelierkura.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}