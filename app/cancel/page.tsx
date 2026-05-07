"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useI18n } from "../../components/LanguageProvider";

const E = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function CancelPage() {
  const { language } = useI18n();

  const copy = {
    eyebrow: { fr: "Paiement annulé", en: "Payment cancelled", de: "Zahlung abgebrochen" },
    title: { fr: "Rien n'a été\nprélevé.", en: "Nothing\nwas charged.", de: "Es wurde nichts\nbelastet." },
    intro: {
      fr: "Votre paiement n'a pas été finalisé. Vous pouvez revenir à la boutique et reprendre votre commande quand vous le souhaitez.",
      en: "Your payment was not completed. You can return to the shop and resume your order whenever you wish.",
      de: "Deine Zahlung wurde nicht abgeschlossen. Du kannst jederzeit in den Shop zurückkehren und deine Bestellung fortsetzen.",
    },
    cartLabel: { fr: "Panier", en: "Cart", de: "Warenkorb" },
    cartText: {
      fr: "Si vous étiez connecté au même navigateur, votre panier peut encore être disponible.",
      en: "If you were on the same browser, your cart may still be available.",
      de: "Wenn du denselben Browser verwendest, könnte dein Warenkorb noch verfügbar sein.",
    },
    helpLabel: { fr: "Assistance", en: "Support", de: "Hilfe" },
    helpText: {
      fr: "En cas de problème, contactez-nous depuis la page contact.",
      en: "If you have any issues, contact us from the contact page.",
      de: "Bei Problemen kontaktiere uns über die Kontaktseite.",
    },
    shopCta: { fr: "Retour au shop", en: "Back to shop", de: "Zurück zum Shop" },
    contactCta: { fr: "Contact", en: "Contact", de: "Kontakt" },
  };

  const titleLines = copy.title[language].split("\n");

  return (
    <main className="min-h-screen text-[#f5f5f2]">
      <Navbar />

      <section className="px-4 py-16">
        <div className="mx-auto w-[min(900px,100%)]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: E }}
            className="rounded-[34px] border border-white/10 bg-white/[0.035] p-8 text-center shadow-2xl backdrop-blur-xl md:p-12"
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15, ease: E }}
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-black/30"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M4 4L16 16M16 4L4 16"
                  stroke="white"
                  strokeOpacity="0.45"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25, ease: E }}
            >
              <div className="mt-8 text-[10px] uppercase tracking-[0.38em] text-[#A8926E]">
                {copy.eyebrow[language]}
              </div>

              <h1 className="mt-4 font-[family-name:var(--font-after)] text-[clamp(2.4rem,6vw,5rem)] font-[300] leading-[0.9] tracking-[-0.035em] text-[#f2efe8]">
                {titleLines.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < titleLines.length - 1 && <br />}
                  </span>
                ))}
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-[14px] leading-[1.9] text-white/50">
                {copy.intro[language]}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.38, ease: E }}
              className="mt-10 rounded-[28px] border border-white/[0.07] bg-black/20 p-6 text-left"
            >
              <div className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                Information
              </div>
              <div className="mt-5 grid gap-5 text-[13px] leading-7 text-white/55 md:grid-cols-2">
                <div>
                  <strong className="block text-white/75">{copy.cartLabel[language]}</strong>
                  {copy.cartText[language]}
                </div>
                <div>
                  <strong className="block text-white/75">{copy.helpLabel[language]}</strong>
                  {copy.helpText[language]}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.48, ease: E }}
              className="mt-10 flex flex-wrap justify-center gap-4"
            >
              <Link
                href="/shop"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#F2EFE8] px-7 text-[13px] font-semibold text-black transition hover:-translate-y-[1px]"
              >
                {copy.shopCta[language]}
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] px-7 text-[13px] font-semibold text-white/70 transition hover:border-white/20 hover:text-white"
              >
                {copy.contactCta[language]}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
