"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useI18n } from "../../components/LanguageProvider";

const E = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function FaqPage() {
  const { language } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const copy = {
    eyebrow: { fr: "Assistance", en: "Assistance", de: "Hilfe" },
    titleLine1: { fr: "Questions", en: "Frequently", de: "Häufige" },
    titleLine2: { fr: "fréquentes.", en: "asked questions.", de: "Fragen." },
    intro: {
      fr: "Les réponses essentielles avant de rejoindre un drop Atelier Kūra : livraison, tailles, retours, paiement et fonctionnement des séries limitées.",
      en: "Essential answers before joining an Atelier Kūra drop: shipping, sizing, returns, payment and how limited series work.",
      de: "Die wichtigsten Antworten vor einem Atelier Kūra Drop: Versand, Größen, Retouren, Zahlung und das Prinzip limitierter Serien.",
    },
    sizeGuideCta: {
      fr: "Consulter le guide des tailles",
      en: "View size guide",
      de: "Größenguide ansehen",
    },
    shopCta: {
      fr: "Retour à la boutique",
      en: "Back to shop",
      de: "Zurück zum Shop",
    },
    items: [
      {
        question: {
          fr: "Quand ouvre le Drop 01 ?",
          en: "When does Drop 01 open?",
          de: "Wann öffnet Drop 01?",
        },
        answer: {
          fr: "Le Drop 01 sera annoncé via la waitlist et les réseaux Atelier Kūra. Les membres de la liste privée seront prévenus avant l'ouverture publique.",
          en: "Drop 01 will be announced through the waitlist and Atelier Kūra channels. Members of the private list will be notified before the public opening.",
          de: "Drop 01 wird über die Warteliste und die Kanäle von Atelier Kūra angekündigt. Mitglieder der privaten Liste werden vor dem öffentlichen Start informiert.",
        },
      },
      {
        question: {
          fr: "Les pièces seront-elles réassorties ?",
          en: "Will pieces be restocked?",
          de: "Werden die Teile nachproduziert?",
        },
        answer: {
          fr: "Aucun réassort n'est garanti. Les drops Atelier Kūra sont pensés en séries limitées afin de préserver une identité forte et une production courte.",
          en: "No restock is guaranteed. Atelier Kūra drops are designed as limited series to preserve a strong identity and short production runs.",
          de: "Ein Restock ist nicht garantiert. Atelier Kūra Drops sind als limitierte Serien konzipiert, um eine starke Identität und kurze Produktionsläufe zu bewahren.",
        },
      },
      {
        question: {
          fr: "Où livrez-vous ?",
          en: "Where do you ship?",
          de: "Wohin liefert ihr?",
        },
        answer: {
          fr: "Atelier Kūra livre en France, au Luxembourg et en Belgique. Les options de livraison sont affichées au moment du paiement.",
          en: "Atelier Kūra ships to France, Luxembourg and Belgium. Shipping options are displayed at checkout.",
          de: "Atelier Kūra liefert nach Frankreich, Luxemburg und Belgien. Die Versandoptionen werden beim Checkout angezeigt.",
        },
      },
      {
        question: {
          fr: "Quels sont les délais de livraison ?",
          en: "What are the delivery times?",
          de: "Wie lange dauert die Lieferung?",
        },
        answer: {
          fr: "Les délais estimés sont généralement de 3 à 6 jours ouvrés après préparation de la commande. En cas de précommande, le délai peut être plus long et sera indiqué sur la fiche produit.",
          en: "Estimated delivery times are usually 3 to 6 business days after order preparation. For pre-orders, the delay may be longer and will be shown on the product page.",
          de: "Die geschätzte Lieferzeit beträgt in der Regel 3 bis 6 Werktage nach Vorbereitung der Bestellung. Bei Vorbestellungen kann die Lieferzeit länger sein und wird auf der Produktseite angegeben.",
        },
      },
      {
        question: {
          fr: "Puis-je retourner un article ?",
          en: "Can I return an item?",
          de: "Kann ich einen Artikel zurückgeben?",
        },
        answer: {
          fr: "Oui, vous pouvez demander un retour sous 14 jours après réception si l'article est neuf, non porté, non lavé et dans son état d'origine.",
          en: "Yes, you can request a return within 14 days of receipt if the item is new, unworn, unwashed and in its original condition.",
          de: "Ja, du kannst innerhalb von 14 Tagen nach Erhalt eine Rückgabe anfragen, wenn der Artikel neu, ungetragen, ungewaschen und im Originalzustand ist.",
        },
      },
      {
        question: {
          fr: "Comment choisir ma taille ?",
          en: "How do I choose my size?",
          de: "Wie wähle ich meine Größe?",
        },
        answer: {
          fr: "Chaque pièce possède une coupe pensée différemment. Consultez le guide des tailles avant achat, surtout si vous hésitez entre deux tailles.",
          en: "Each piece has its own fit. Check the size guide before purchase, especially if you are between two sizes.",
          de: "Jedes Teil hat einen eigenen Schnitt. Schau vor dem Kauf in den Größenguide, besonders wenn du zwischen zwei Größen liegst.",
        },
      },
      {
        question: {
          fr: "Les paiements sont-ils sécurisés ?",
          en: "Are payments secure?",
          de: "Sind Zahlungen sicher?",
        },
        answer: {
          fr: "Oui, les paiements sont traités via Stripe. Atelier Kūra ne stocke pas vos informations bancaires.",
          en: "Yes, payments are processed through Stripe. Atelier Kūra does not store your banking information.",
          de: "Ja, Zahlungen werden über Stripe abgewickelt. Atelier Kūra speichert keine Bankdaten.",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen text-[#f5f5f2]">
      <Navbar />

      <section className="px-4 py-16">
        <div className="mx-auto w-[min(1000px,100%)]">
          {/* Header */}
          <div className="rounded-[34px] border border-white/10 bg-white/[0.035] p-8 shadow-2xl backdrop-blur-xl md:p-12">
            <div className="text-[11px] uppercase tracking-[0.28em] text-[#A8926E]">
              {copy.eyebrow[language]}
            </div>
            <h1 className="mt-4 font-[family-name:var(--font-after)] text-[clamp(3rem,8vw,6rem)] font-[300] leading-[0.92] tracking-[-0.03em] text-[#f2efe8]">
              {copy.titleLine1[language]}
              <br />
              <span className="italic text-[#A8926E]">{copy.titleLine2[language]}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/55">
              {copy.intro[language]}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/guide-tailles"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#F2EFE8] px-6 text-sm font-semibold text-black transition duration-300 hover:-translate-y-[1px]"
              >
                {copy.sizeGuideCta[language]}
              </Link>
              <Link
                href="/shop"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/10 bg-black/30 px-6 text-sm font-semibold text-white/75 transition duration-300 hover:-translate-y-[1px] hover:border-[#A8926E]/40 hover:text-white"
              >
                {copy.shopCta[language]}
              </Link>
            </div>
          </div>

          {/* Accordion */}
          <div className="mt-6 overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.025] shadow-2xl backdrop-blur-xl">
            {copy.items.map((item, i) => {
              const isOpen = openIndex === i;
              const isLast = i === copy.items.length - 1;

              return (
                <div
                  key={item.question.fr}
                  className={!isLast ? "border-b border-white/[0.06]" : ""}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="group flex w-full items-center justify-between gap-6 px-7 py-6 text-left transition duration-300 hover:bg-white/[0.025]"
                  >
                    {/* Index + question */}
                    <div className="flex items-baseline gap-5">
                      <span className="shrink-0 font-[family-name:var(--font-after)] text-[1.1rem] font-[300] leading-none text-[#A8926E]/40">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[15px] font-medium leading-snug tracking-[-0.02em] text-white/80 transition duration-300 group-hover:text-white">
                        {item.question[language]}
                      </span>
                    </div>

                    {/* Plus / minus icon */}
                    <span className="relative ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition duration-300 group-hover:border-[#A8926E]/40">
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.28, ease: E }}
                        className="block"
                      >
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden>
                          <line x1="5.5" y1="0" x2="5.5" y2="11" stroke="currentColor" strokeWidth="1.2" className="text-white/50" />
                          <line x1="0" y1="5.5" x2="11" y2="5.5" stroke="currentColor" strokeWidth="1.2" className="text-white/50" />
                        </svg>
                      </motion.span>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.38, ease: E }}
                        className="overflow-hidden"
                      >
                        <p className="px-7 pb-7 pl-[4.5rem] text-sm leading-7 text-white/52">
                          {item.answer[language]}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
