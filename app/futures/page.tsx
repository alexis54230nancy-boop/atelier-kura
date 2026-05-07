"use client";

import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useI18n } from "../../components/LanguageProvider";

const E = [0.22, 1, 0.36, 1] as [number, number, number, number];
const inView = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.7, ease: E },
};

export default function FuturesPage() {
  const { language } = useI18n();

  const copy = {
    eyebrow: { fr: "Futures", en: "Futures", de: "Zukunft" },
    titleLine1: { fr: "Culture.", en: "Culture.", de: "Kultur." },
    titleLine2: { fr: "Collection.", en: "Collection.", de: "Kollektion." },
    titleLine3: { fr: "Rareté.", en: "Rarity.", de: "Seltenheit." },
    intro: {
      fr: "Cette page présente les territoires que la marque pourra explorer à l'avenir : capsules créatives, objets, archives, collaborations et pièces collectionnables.",
      en: "This page presents the territories the brand may explore in the future: creative capsules, objects, archives, collaborations and collectible pieces.",
      de: "Diese Seite zeigt die Territorien, die die Marke in Zukunft erkunden könnte: kreative Kapseln, Objekte, Archive, Kollaborationen und Sammlerstücke.",
    },
    noteEyebrow: { fr: "Note", en: "Note", de: "Hinweis" },
    noteTitle: {
      fr: "Inspiré par la culture. Jamais dans la copie.",
      en: "Inspired by culture. Never a copy.",
      de: "Inspiriert von der Kultur. Niemals eine Kopie.",
    },
    noteP1: {
      fr: "Atelier Kūra peut s'inspirer de la musique, de la collection, de la nuit, du Japon, du jeu, du voyage ou de la scène urbaine.",
      en: "Atelier Kūra may draw inspiration from music, collecting, night, Japan, play, travel or the urban scene.",
      de: "Atelier Kūra kann sich von Musik, Sammeln, Nacht, Japan, Spiel, Reise oder der urbanen Szene inspirieren lassen.",
    },
    noteP2: {
      fr: "La marque ne reprend pas de logos, personnages, noms protégés ou visuels appartenant à d'autres univers. Elle construit son propre langage.",
      en: "The brand does not use logos, characters, protected names or visuals belonging to other universes. It builds its own language.",
      de: "Die Marke verwendet keine Logos, Charaktere, geschützte Namen oder Visuals anderer Universen. Sie baut ihre eigene Sprache auf.",
    },
    concepts: [
      {
        title: "Archive Objects",
        text: {
          fr: "Objets limités, cartes, tags, numérotation, certificats. Une logique de collection autour des drops.",
          en: "Limited objects, cards, tags, numbering, certificates. A collection logic around drops.",
          de: "Limitierte Objekte, Karten, Tags, Nummerierung, Zertifikate. Eine Sammellogik rund um Drops.",
        },
        num: "01",
      },
      {
        title: "Sound & Silence",
        text: {
          fr: "Capsules inspirées par l'énergie musicale : visuels rares, phrases courtes, absence maîtrisée.",
          en: "Capsules inspired by musical energy: rare visuals, short phrases, controlled absence.",
          de: "Von musikalischer Energie inspirierte Kapseln: seltene Visuals, kurze Sätze, kontrollierte Abwesenheit.",
        },
        num: "02",
      },
      {
        title: "Japan Motion",
        text: {
          fr: "Travail autour des matières, du rituel, des lignes japonaises et des symboles minimalistes.",
          en: "Work around materials, ritual, Japanese lines and minimalist symbols.",
          de: "Arbeit rund um Materialien, Ritual, japanische Linien und minimalistische Symbole.",
        },
        num: "03",
      },
    ],
    collabEyebrow: { fr: "Vision collaboration", en: "Collaboration vision", de: "Kollaborationsvision" },
    collabTitle: {
      fr: "Des capsules futures, pensées comme des rencontres officielles.",
      en: "Future capsules, conceived as official encounters.",
      de: "Zukünftige Kapseln, gedacht als offizielle Begegnungen.",
    },
    collabP1: {
      fr: "La collaboration idéale pour Atelier Kūra n'est pas un simple logo posé sur un vêtement. C'est une rencontre entre deux univers, un langage commun, une rareté assumée.",
      en: "The ideal collaboration for Atelier Kūra is not a simple logo placed on a garment. It is an encounter between two universes, a shared language, an assumed rarity.",
      de: "Die ideale Kollaboration für Atelier Kūra ist kein simples Logo auf einem Kleidungsstück. Es ist eine Begegnung zweier Universen, eine gemeinsame Sprache, eine bewusste Seltenheit.",
    },
    collabP2: {
      fr: "Chaque capsule future devra respecter trois règles : cohérence artistique, autorisation claire, production limitée. Le prestige vient de la précision, pas du bruit.",
      en: "Each future capsule must respect three rules: artistic consistency, clear authorization, limited production. Prestige comes from precision, not noise.",
      de: "Jede zukünftige Kapsel muss drei Regeln respektieren: künstlerische Konsistenz, klare Genehmigung, limitierte Produktion. Prestige kommt aus Präzision, nicht aus Lärm.",
    },
  };

  return (
    <main className="min-h-screen text-[#f5f5f2]">
      <Navbar />

      <section className="px-4 pt-20 pb-16">
        <div className="mx-auto w-[min(1280px,100%)]">

          {/* Editorial header */}
          <motion.div
            {...inView}
            className="mb-14 border-b border-white/[0.06] pb-12"
          >
            <div className="text-[10px] uppercase tracking-[0.38em] text-[#A8926E]">
              {copy.eyebrow[language]}
            </div>
            <h1 className="mt-5 font-[family-name:var(--font-after)] text-[clamp(3.5rem,9vw,9rem)] font-[300] leading-[0.88] tracking-[-0.035em] text-[#f2efe8]">
              {copy.titleLine1[language]}
              <br />
              <span className="text-white/40">{copy.titleLine2[language]}</span>
              <br />
              <span className="italic text-[#A8926E]">{copy.titleLine3[language]}</span>
            </h1>
            <p className="mt-8 max-w-2xl text-[14px] leading-[1.9] text-white/48">
              {copy.intro[language]}
            </p>
          </motion.div>

          {/* Concept grid — flat editorial */}
          <div className="grid gap-px border border-white/[0.06] bg-white/[0.06] md:grid-cols-3">
            {copy.concepts.map(({ title, text, num }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: E }}
                className="group bg-[#0b0b0c] p-8 transition duration-500 hover:bg-white/[0.022] md:p-10"
              >
                <div className="font-[family-name:var(--font-after)] text-[11px] italic tracking-[0.15em] text-[#A8926E]/40">
                  {num}
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-after)] text-[clamp(1.6rem,3vw,2.4rem)] font-[300] leading-[0.92] tracking-[-0.025em] text-[#f2efe8]">
                  {title}
                </h3>
                <p className="mt-4 text-[13px] leading-[1.8] text-white/38">
                  {text[language]}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Note + collab */}
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <motion.div
              {...inView}
              className="rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-8 backdrop-blur-xl md:p-10"
            >
              <div className="text-[10px] uppercase tracking-[0.32em] text-[#A8926E]">
                {copy.noteEyebrow[language]}
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-after)] text-[clamp(1.6rem,3vw,2.4rem)] font-[300] leading-[0.95] tracking-[-0.025em] text-[#f2efe8]">
                {copy.noteTitle[language]}
              </h2>
              <div className="mt-6 space-y-4 text-[13px] leading-[1.85] text-white/45">
                <p>{copy.noteP1[language]}</p>
                <p>{copy.noteP2[language]}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.1, ease: E }}
              className="rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-8 backdrop-blur-xl md:p-10"
            >
              <div className="text-[10px] uppercase tracking-[0.32em] text-[#A8926E]">
                {copy.collabEyebrow[language]}
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-after)] text-[clamp(1.6rem,3vw,2.4rem)] font-[300] leading-[0.95] tracking-[-0.025em] text-[#f2efe8]">
                {copy.collabTitle[language]}
              </h2>
              <div className="mt-6 space-y-4 text-[13px] leading-[1.85] text-white/45">
                <p>{copy.collabP1[language]}</p>
                <p>{copy.collabP2[language]}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
