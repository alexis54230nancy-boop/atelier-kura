"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useI18n } from "../../components/LanguageProvider";
import { getLocalizedText, products } from "../../lib/products";

const E = [0.22, 1, 0.36, 1] as [number, number, number, number];

const inView = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.7, ease: E },
};

export default function CapsulePage() {
  const { language, t } = useI18n();

  const copy = {
    eyebrow: { fr: "Capsule", en: "Capsule", de: "Kapsel" },
    titleLine1: { fr: "Drop 01.", en: "Drop 01.", de: "Drop 01." },
    titleLine2: { fr: "Le premier", en: "The first", de: "Das erste" },
    titleLine3: { fr: "manifeste.", en: "manifesto.", de: "Manifest." },
    intro: {
      fr: "Une capsule courte, pensée comme une entrée dans l'univers Atelier Kūra. Peu de pièces. Une direction claire. Aucun bruit inutile.",
      en: "A short capsule, designed as an entry into the Atelier Kūra universe. Few pieces. A clear direction. No unnecessary noise.",
      de: "Eine kurze Capsule, gedacht als Einstieg in das Atelier Kūra Universum. Wenige Teile. Eine klare Richtung. Kein unnötiger Lärm.",
    },
    stat1: { fr: "Pièces", en: "Pieces", de: "Teile" },
    stat2: { fr: "Production", en: "Production", de: "Produktion" },
    stat3: { fr: "Aucun réassort", en: "No restock", de: "Kein Restock" },
    phase: { fr: "Phase 01", en: "Phase 01", de: "Phase 01" },
    phaseTitle: {
      fr: "Présence. Précision. Silence.",
      en: "Presence. Precision. Silence.",
      de: "Präsenz. Präzision. Stille.",
    },
    phaseText: {
      fr: "Drop 01 pose les premières lignes : matières lourdes, silhouettes calmes, tons sombres, identité rare.",
      en: "Drop 01 sets the first lines: heavy materials, quiet silhouettes, dark tones, rare identity.",
      de: "Drop 01 setzt die ersten Linien: schwere Materialien, ruhige Silhouetten, dunkle Töne, seltene Identität.",
    },
    rarityEyebrow: { fr: "Rareté", en: "Rarity", de: "Seltenheit" },
    rarityTitle: {
      fr: "Une pièce doit rester une rencontre.",
      en: "A piece must remain an encounter.",
      de: "Ein Stück muss eine Begegnung bleiben.",
    },
    rarity1: {
      fr: "Les drops Atelier Kūra ne sont pas pensés comme des collections permanentes, mais comme des moments précis.",
      en: "Atelier Kūra drops are not designed as permanent collections, but as precise moments.",
      de: "Atelier Kūra Drops sind nicht als dauerhafte Kollektionen gedacht, sondern als präzise Momente.",
    },
    rarity2: {
      fr: "La rareté n'est pas un argument marketing. C'est une manière de garder une identité nette, une production courte, une intention.",
      en: "Rarity is not a marketing argument. It is a way of maintaining a clear identity, a short production, an intention.",
      de: "Seltenheit ist kein Marketingargument. Es ist eine Möglichkeit, eine klare Identität, eine kurze Produktion, eine Absicht zu bewahren.",
    },
    rarity3: {
      fr: "Drop 01 ouvre le langage : matière, silence, mouvement, tension. La suite ne sera jamais une répétition.",
      en: "Drop 01 opens the language: material, silence, movement, tension. What follows will never be a repetition.",
      de: "Drop 01 eröffnet die Sprache: Material, Stille, Bewegung, Spannung. Was folgt, wird nie eine Wiederholung sein.",
    },
    viewPiece: { fr: "Voir la pièce", en: "View piece", de: "Stück ansehen" },
  };

  return (
    <main className="min-h-screen text-[#f5f5f2]">
      <Navbar />

      <section className="px-4 py-16">
        <div className="mx-auto w-[min(1280px,100%)]">

          {/* Top grid */}
          <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
            {/* Left — editorial header */}
            <motion.div
              {...inView}
              className="rounded-[34px] border border-white/10 bg-white/[0.035] p-8 shadow-2xl backdrop-blur-xl md:p-12"
            >
              <div className="text-[11px] uppercase tracking-[0.28em] text-[#A8926E]">
                {copy.eyebrow[language]}
              </div>
              <h1 className="mt-5 font-[family-name:var(--font-after)] text-[clamp(3rem,7vw,6rem)] font-[300] leading-[0.9] tracking-[-0.035em] text-[#f2efe8]">
                {copy.titleLine1[language]}
                <br />
                <span className="text-white/40">{copy.titleLine2[language]}</span>
                <br />
                <span className="italic text-[#A8926E]">{copy.titleLine3[language]}</span>
              </h1>
              <p className="mt-7 max-w-xl text-[14px] leading-[1.88] text-white/50">
                {copy.intro[language]}
              </p>

              <div className="mt-10 grid gap-3 md:grid-cols-3">
                {[
                  ["03", copy.stat1[language]],
                  [{ fr: "Limité", en: "Limited", de: "Limitiert" }[language], copy.stat2[language]],
                  ["—", copy.stat3[language]],
                ].map(([number, label]) => (
                  <div
                    key={label}
                    className="rounded-[22px] border border-white/[0.07] bg-black/30 p-5 backdrop-blur-md"
                  >
                    <strong className="block font-[family-name:var(--font-after)] text-3xl font-[300] text-white">
                      {number}
                    </strong>
                    <span className="mt-2 block text-[11px] uppercase tracking-[0.2em] text-white/40">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — visual */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.1, ease: E }}
              className="relative min-h-[500px] overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.025] shadow-2xl backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(168,146,110,0.14),transparent_35%)]" />
              <div className="relative flex h-full min-h-[480px] items-end rounded-[28px] p-6">
                <div className="max-w-sm rounded-[24px] border border-white/10 bg-black/50 p-6 backdrop-blur-xl">
                  <div className="text-[11px] uppercase tracking-[0.28em] text-[#A8926E]">
                    {copy.phase[language]}
                  </div>
                  <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
                    {copy.phaseTitle[language]}
                  </h2>
                  <p className="mt-4 text-[13px] leading-7 text-white/55">
                    {copy.phaseText[language]}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Product grid — flat editorial style matching shop */}
          <div className="mt-4 grid gap-px border border-white/[0.06] bg-white/[0.06] md:grid-cols-3">
            {products.map((product, index) => {
              const name = getLocalizedText(product.name, language);
              const visualLabel = getLocalizedText(product.visualLabel, language);

              return (
                <motion.div
                  key={product.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.55, delay: index * 0.07, ease: E }}
                >
                  <Link
                    href={`/produit/${product.slug}`}
                    className="group relative flex flex-col bg-[#0b0b0c] transition duration-500 hover:bg-white/[0.022]"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden bg-black/40">
                      {product.image ? (
                        <>
                          <Image
                            src={product.image}
                            alt={name}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover object-top transition duration-700 group-hover:scale-[1.04]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                        </>
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_62%_18%,rgba(168,146,110,0.1),transparent)]" />
                          <div className="absolute inset-x-10 bottom-0 h-[82%] rounded-t-[100px] border border-white/[0.07] bg-gradient-to-b from-white/[0.05] to-black/40 transition duration-700 group-hover:scale-[1.03]" />
                          <div className="absolute right-6 top-8 h-12 w-12 rounded-full border border-white/[0.07] bg-white/[0.02]" />
                        </>
                      )}

                      <div className="absolute left-5 top-5 text-[9px] uppercase tracking-[0.3em] text-white/30">
                        {visualLabel}
                      </div>
                      <div className="absolute right-5 bottom-5 font-[family-name:var(--font-after)] text-[5rem] font-[300] leading-none text-white/[0.05]">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-400 group-hover:opacity-100">
                        <span className="rounded-full border border-white/20 bg-black/55 px-6 py-3 text-[11px] uppercase tracking-[0.28em] text-white/80 backdrop-blur-sm">
                          {copy.viewPiece[language]} →
                        </span>
                      </div>
                    </div>

                    <div className="border-t border-white/[0.06] p-5">
                      <h3 className="text-[13px] font-semibold tracking-[-0.02em] transition duration-300 group-hover:text-[#d9d4c7]">
                        {name}
                      </h3>
                      <p className="mt-0.5 text-[10px] uppercase tracking-[0.2em] text-[#A8926E]/60">
                        {copy.viewPiece[language]}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Rarity section */}
          <motion.section
            {...inView}
            className="mt-4 rounded-[34px] border border-white/10 bg-white/[0.035] p-8 shadow-2xl backdrop-blur-xl md:p-12"
          >
            <div className="text-[11px] uppercase tracking-[0.28em] text-[#A8926E]">
              {copy.rarityEyebrow[language]}
            </div>
            <h2 className="mt-5 max-w-3xl font-[family-name:var(--font-after)] text-[clamp(2rem,5vw,4rem)] font-[300] leading-[0.95] tracking-[-0.03em] text-[#f2efe8]">
              {copy.rarityTitle[language]}
            </h2>
            <div className="mt-8 grid gap-6 text-[14px] leading-[1.88] text-white/50 md:grid-cols-3">
              <p>{copy.rarity1[language]}</p>
              <p>{copy.rarity2[language]}</p>
              <p>{copy.rarity3[language]}</p>
            </div>
          </motion.section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
