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

export default function FabricationPage() {
  const { language } = useI18n();

  const copy = {
    eyebrow: { fr: "Fabrication", en: "Craft", de: "Fertigung" },
    titleLine1: { fr: "Matière,", en: "Material,", de: "Material," },
    titleLine2: { fr: "structure,", en: "structure,", de: "Struktur," },
    titleLine3: { fr: "intention.", en: "intention.", de: "Absicht." },
    intro: {
      fr: "Chaque pièce Atelier Kūra est pensée autour de la matière et de la tenue. Le vêtement n'est pas un simple objet visuel : il doit exister dans le mouvement, durer, et garder sa présence dans le temps.",
      en: "Each Atelier Kūra piece is designed around material and structure. The garment is not merely a visual object: it must exist in movement, last, and maintain its presence over time.",
      de: "Jedes Stück von Atelier Kūra ist rund um Material und Struktur konzipiert. Das Kleidungsstück ist kein bloßes visuelles Objekt: Es muss in der Bewegung existieren, dauern und seine Präsenz über die Zeit bewahren.",
    },
    p1: {
      fr: "Les matières sont sélectionnées pour leur densité, leur chute et leur capacité à structurer la silhouette. Les grammages sont volontairement élevés pour donner une présence réelle au vêtement.",
      en: "Materials are selected for their density, drape and ability to structure the silhouette. Weights are deliberately high to give the garment real presence.",
      de: "Materialien werden nach Dichte, Fall und der Fähigkeit zur Silhouettenstruktur ausgewählt. Grammaturen sind bewusst hoch, um dem Kleidungsstück echte Präsenz zu verleihen.",
    },
    p2: {
      fr: "La coupe est pensée pour accompagner le corps sans le contraindre : lignes nettes, volumes contrôlés, équilibre entre confort et précision.",
      en: "The cut is designed to follow the body without constraining it: clean lines, controlled volumes, balance between comfort and precision.",
      de: "Der Schnitt begleitet den Körper ohne ihn einzuengen: klare Linien, kontrollierte Volumen, Balance zwischen Komfort und Präzision.",
    },
    p3: {
      fr: "Chaque drop est produit en quantité limitée, afin de préserver la cohérence de la pièce et éviter toute dilution de l'identité.",
      en: "Each drop is produced in limited quantity, to preserve the integrity of the piece and avoid any dilution of identity.",
      de: "Jeder Drop wird in limitierter Stückzahl produziert, um die Integrität des Stücks zu wahren und jede Verwässerung der Identität zu vermeiden.",
    },
    specLabel1: { fr: "Hoodie lourd", en: "Heavy hoodie", de: "Schwerer Hoodie" },
    specLabel2: { fr: "Tee structuré", en: "Structured tee", de: "Strukturiertes Tee" },
    specLabel3: { fr: "Série limitée", en: "Limited series", de: "Limitierte Serie" },
    principlesEyebrow: { fr: "Principes", en: "Principles", de: "Prinzipien" },
    principles: [
      {
        num: "I",
        title: { fr: "Densité", en: "Density", de: "Dichte" },
        text: {
          fr: "Des grammages élevés pour une présence réelle. La matière se fait sentir.",
          en: "High weights for real presence. The material makes itself felt.",
          de: "Hohe Grammaturen für echte Präsenz. Das Material macht sich spürbar.",
        },
      },
      {
        num: "II",
        title: { fr: "Précision", en: "Precision", de: "Präzision" },
        text: {
          fr: "Des coupes ajustées à la silhouette voulue, sans compromis sur le confort.",
          en: "Cuts adjusted to the intended silhouette, without compromise on comfort.",
          de: "Schnitte angepasst an die gewünschte Silhouette, ohne Kompromisse beim Komfort.",
        },
      },
      {
        num: "III",
        title: { fr: "Rareté", en: "Rarity", de: "Seltenheit" },
        text: {
          fr: "Production limitée pour préserver l'identité et éviter la dilution.",
          en: "Limited production to preserve identity and avoid dilution.",
          de: "Limitierte Produktion zur Wahrung der Identität und Vermeidung von Verwässerung.",
        },
      },
    ],
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

          {/* Two-column text */}
          <div className="grid gap-8 md:grid-cols-2 md:gap-16">
            <motion.div
              {...inView}
              className="space-y-6 text-[14px] leading-[1.9] text-white/48"
            >
              <p>{copy.p1[language]}</p>
              <p>{copy.p2[language]}</p>
              <p>{copy.p3[language]}</p>
            </motion.div>

            {/* Specs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.1, ease: E }}
              className="space-y-0"
            >
              {[
                ["450 GSM", copy.specLabel1[language]],
                ["240 GSM", copy.specLabel2[language]],
                ["Drop 01", copy.specLabel3[language]],
              ].map(([spec, label], i) => (
                <div
                  key={spec}
                  className={`flex items-baseline justify-between gap-6 py-5 ${i < 2 ? "border-b border-white/[0.06]" : ""}`}
                >
                  <span className="font-[family-name:var(--font-after)] text-[2.2rem] font-[300] leading-none tracking-[-0.02em] text-[#f2efe8]/75">
                    {spec}
                  </span>
                  <span className="text-right text-[12px] uppercase tracking-[0.2em] text-white/35">
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Principles grid */}
          <motion.div {...inView} className="mt-16">
            <div className="mb-8 text-[10px] uppercase tracking-[0.38em] text-[#A8926E]">
              {copy.principlesEyebrow[language]}
            </div>
            <div className="grid gap-px border border-white/[0.06] bg-white/[0.06] md:grid-cols-3">
              {copy.principles.map(({ num, title, text }) => (
                <div
                  key={num}
                  className="group bg-[#0b0b0c] p-8 transition duration-500 hover:bg-white/[0.022] md:p-10"
                >
                  <div className="mb-5 font-[family-name:var(--font-after)] text-[11px] italic tracking-[0.15em] text-[#A8926E]/40">
                    {num}
                  </div>
                  <h3 className="font-[family-name:var(--font-after)] text-[clamp(1.8rem,3.5vw,2.8rem)] font-[300] leading-[0.92] tracking-[-0.025em] text-[#f2efe8]">
                    {title[language]}
                  </h3>
                  <p className="mt-4 text-[13px] leading-[1.8] text-white/38">
                    {text[language]}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
