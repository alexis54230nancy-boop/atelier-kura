"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useI18n } from "../../components/LanguageProvider";

const E = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function SuccessPage() {
  const { language } = useI18n();

  const copy = {
    eyebrow: {
      fr: "Commande confirmée",
      en: "Order confirmed",
      de: "Bestellung bestätigt",
    },
    title1: { fr: "Merci.", en: "Thank you.", de: "Danke." },
    title2: {
      fr: "Votre pièce est réservée.",
      en: "Your piece is reserved.",
      de: "Ihr Stück ist reserviert.",
    },
    text: {
      fr: "Votre paiement a bien été pris en compte. Un email de confirmation vous sera envoyé avec les détails de votre commande.",
      en: "Your payment has been confirmed. A confirmation email will be sent with your order details.",
      de: "Ihre Zahlung wurde bestätigt. Eine Bestätigungs-E-Mail mit Ihren Bestelldetails wird gesendet.",
    },
    nextEyebrow: {
      fr: "Prochaine étape",
      en: "What's next",
      de: "Nächste Schritte",
    },
    step1Title: { fr: "01 — Préparation", en: "01 — Preparation", de: "01 — Vorbereitung" },
    step1Text: {
      fr: "Votre commande est préparée avec soin.",
      en: "Your order is being prepared with care.",
      de: "Ihre Bestellung wird sorgfältig vorbereitet.",
    },
    step2Title: { fr: "02 — Expédition", en: "02 — Shipping", de: "02 — Versand" },
    step2Text: {
      fr: "Livraison standard France / Luxembourg / Belgique.",
      en: "Standard shipping France / Luxembourg / Belgium.",
      de: "Standardversand Frankreich / Luxemburg / Belgien.",
    },
    step3Title: { fr: "03 — Réception", en: "03 — Receipt", de: "03 — Empfang" },
    step3Text: {
      fr: "Une pièce limitée, pensée pour durer.",
      en: "A limited piece, designed to last.",
      de: "Ein limitiertes Stück, gemacht für die Dauer.",
    },
    cta1: { fr: "Retour au shop", en: "Back to shop", de: "Zurück zum Shop" },
    cta2: {
      fr: "Découvrir l'histoire",
      en: "Discover the story",
      de: "Die Geschichte entdecken",
    },
  };

  return (
    <main className="min-h-screen text-[#f5f5f2]">
      <Navbar />

      <section className="px-4 py-20">
        <div className="mx-auto w-[min(860px,100%)]">

          {/* Confirmation card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: E }}
            className="rounded-[34px] border border-white/10 bg-white/[0.035] p-8 text-center shadow-2xl backdrop-blur-xl md:p-14"
          >
            {/* SVG checkmark — cercle + tracé animé */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.15, ease: E }}
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#A8926E]/30 bg-[#A8926E]/[0.08]"
            >
              <svg width="22" height="17" viewBox="0 0 22 17" fill="none" aria-hidden>
                <motion.path
                  d="M1.5 8.5L8 15L20.5 2"
                  stroke="#A8926E"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.55, delay: 0.62, ease: E }}
                />
              </svg>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28, ease: E }}
            >
              <div className="mt-8 text-[10px] uppercase tracking-[0.32em] text-[#A8926E]">
                {copy.eyebrow[language]}
              </div>
              <h1 className="mt-5 font-[family-name:var(--font-after)] text-[clamp(3rem,8vw,6.5rem)] font-[300] leading-[0.9] tracking-[-0.03em] text-[#f2efe8]">
                {copy.title1[language]}
                <br />
                <span className="text-white/55">{copy.title2[language]}</span>
              </h1>
              <p className="mx-auto mt-7 max-w-xl text-[14px] leading-[1.9] text-white/48">
                {copy.text[language]}
              </p>
            </motion.div>
          </motion.div>

          {/* Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.42, ease: E }}
            className="mt-4 rounded-[34px] border border-white/[0.07] bg-black/30 p-7 backdrop-blur-md"
          >
            <div className="mb-6 text-[10px] uppercase tracking-[0.28em] text-white/30">
              {copy.nextEyebrow[language]}
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                [copy.step1Title[language], copy.step1Text[language]],
                [copy.step2Title[language], copy.step2Text[language]],
                [copy.step3Title[language], copy.step3Text[language]],
              ].map(([title, text], i) => (
                <div key={i} className="border-l border-[#A8926E]/20 pl-5">
                  <strong className="block text-[12px] font-semibold tracking-[-0.01em] text-white/80">
                    {title}
                  </strong>
                  <p className="mt-2 text-[12px] leading-[1.75] text-white/42">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.58 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/shop"
              className="shimmer inline-flex min-h-12 items-center justify-center rounded-full bg-[#F2EFE8] px-7 text-sm font-semibold text-black transition hover:-translate-y-[1px]"
            >
              {copy.cta1[language]}
            </Link>
            <Link
              href="/story"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] px-7 text-sm font-semibold text-white/70 transition hover:border-white/20 hover:text-white"
            >
              {copy.cta2[language]}
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
