"use client";

import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useI18n } from "../../components/LanguageProvider";

const E = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function ContactPage() {
  const { language } = useI18n();

  const copy = {
    eyebrow: { fr: "Contact", en: "Contact", de: "Kontakt" },
    title: { fr: "Écrivez-nous.", en: "Write to us.", de: "Schreiben Sie uns." },
    intro: {
      fr: "Pour toute demande concernant une commande, une collaboration ou un projet, vous pouvez écrire à l'adresse suivante.",
      en: "For any request regarding an order, collaboration or project, you can write to the following address.",
      de: "Für jede Anfrage bezüglich einer Bestellung, Kollaboration oder eines Projekts können Sie an folgende Adresse schreiben.",
    },
    emailLabel: { fr: "Email", en: "Email", de: "E-Mail" },
    companyLabel: { fr: "Entreprise", en: "Company", de: "Unternehmen" },
    locationLabel: { fr: "Localisation", en: "Location", de: "Standort" },
    responseLabel: {
      fr: "Délai de réponse",
      en: "Response time",
      de: "Antwortzeit",
    },
    responseText: {
      fr: "Nous répondons généralement sous 48h.",
      en: "We usually respond within 48 hours.",
      de: "Wir antworten in der Regel innerhalb von 48 Stunden.",
    },
    orderLabel: {
      fr: "Commandes",
      en: "Orders",
      de: "Bestellungen",
    },
    orderText: {
      fr: "Pour les questions relatives à une commande, merci d'indiquer votre numéro de commande Stripe.",
      en: "For order-related questions, please include your Stripe order number.",
      de: "Für auftragsbezogene Fragen geben Sie bitte Ihre Stripe-Bestellnummer an.",
    },
    collabLabel: {
      fr: "Collaborations",
      en: "Collaborations",
      de: "Kollaborationen",
    },
    collabText: {
      fr: "Atelier Kūra est ouvert à des collaborations officielles, cohérentes et rares.",
      en: "Atelier Kūra is open to official, consistent and rare collaborations.",
      de: "Atelier Kūra ist offen für offizielle, kohärente und seltene Kollaborationen.",
    },
  };

  return (
    <main className="min-h-screen text-[#f5f5f2]">
      <Navbar />

      <section className="px-4 pt-20 pb-16">
        <div className="mx-auto w-[min(900px,100%)]">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: E }}
            className="border-b border-white/[0.06] pb-12"
          >
            <div className="text-[10px] uppercase tracking-[0.38em] text-[#A8926E]">
              {copy.eyebrow[language]}
            </div>
            <h1 className="mt-5 font-[family-name:var(--font-after)] text-[clamp(3rem,8vw,7rem)] font-[300] leading-[0.9] tracking-[-0.035em] text-[#f2efe8]">
              {copy.title[language]}
            </h1>
            <p className="mt-6 max-w-xl text-[14px] leading-[1.9] text-white/48">
              {copy.intro[language]}
            </p>
          </motion.div>

          {/* Contact block */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18, ease: E }}
            className="mt-10 grid gap-4 md:grid-cols-2"
          >
            {/* Email card */}
            <div className="rounded-[28px] border border-[#A8926E]/20 bg-[#A8926E]/[0.05] p-7 backdrop-blur-xl">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#A8926E]/70">
                {copy.emailLabel[language]}
              </div>
              <a
                href="mailto:contact@atelierkura.com"
                className="mt-3 block font-[family-name:var(--font-after)] text-[1.4rem] font-[300] tracking-[-0.01em] text-[#f2efe8] transition hover:text-[#d9c79c]"
              >
                contact@atelierkura.com
              </a>
            </div>

            {/* Info card */}
            <div className="rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-7 backdrop-blur-xl">
              <div className="space-y-4">
                {[
                  [copy.companyLabel[language], "Atelier Kūra"],
                  [copy.locationLabel[language], "France"],
                  [copy.responseLabel[language], copy.responseText[language]],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-baseline gap-4">
                    <span className="w-32 shrink-0 text-[10px] uppercase tracking-[0.22em] text-white/30">
                      {label}
                    </span>
                    <span className="text-[13px] text-white/65">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Context cards */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3, ease: E }}
            className="mt-4 grid gap-4 md:grid-cols-2"
          >
            {[
              [copy.orderLabel[language], copy.orderText[language]],
              [copy.collabLabel[language], copy.collabText[language]],
            ].map(([label, text]) => (
              <div
                key={label}
                className="rounded-[28px] border border-white/[0.06] bg-white/[0.02] p-7"
              >
                <div className="text-[10px] uppercase tracking-[0.28em] text-white/35">
                  {label}
                </div>
                <p className="mt-3 text-[13px] leading-[1.8] text-white/50">
                  {text}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
