"use client";

import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useI18n } from "../../components/LanguageProvider";

const hoodieSizes = [
  ["XS", "62 cm", "56 cm", "58 cm"],
  ["S", "65 cm", "59 cm", "60 cm"],
  ["M", "68 cm", "62 cm", "62 cm"],
  ["L", "71 cm", "65 cm", "64 cm"],
  ["XL", "74 cm", "68 cm", "66 cm"],
];

const teeSizes = [
  ["XS", "66 cm", "50 cm", "21 cm"],
  ["S", "69 cm", "53 cm", "22 cm"],
  ["M", "72 cm", "56 cm", "23 cm"],
  ["L", "75 cm", "59 cm", "24 cm"],
  ["XL", "78 cm", "62 cm", "25 cm"],
];

export default function GuideTaillesPage() {
  const { language } = useI18n();

  const copy = {
    eyebrow: {
      fr: "Guide",
      en: "Guide",
      de: "Guide",
    },
    titleLine1: {
      fr: "Guide",
      en: "Size",
      de: "Größen",
    },
    titleLine2: {
      fr: "des tailles.",
      en: "guide.",
      de: "guide.",
    },
    intro: {
      fr: "Les coupes Atelier Kūra sont pensées pour une silhouette légèrement ample, structurée et confortable. Si vous êtes entre deux tailles, choisissez la taille au-dessus pour un rendu plus oversize.",
      en: "Atelier Kūra fits are designed for a slightly relaxed, structured and comfortable silhouette. If you are between two sizes, choose the size above for a more oversized look.",
      de: "Die Schnitte von Atelier Kūra sind für eine leicht lockere, strukturierte und komfortable Silhouette gedacht. Wenn du zwischen zwei Größen liegst, wähle die größere Größe für einen stärker oversized Look.",
    },
    hoodieFit: {
      fr: "Coupe légèrement oversize.",
      en: "Slightly oversized fit.",
      de: "Leicht oversized Schnitt.",
    },
    teeFit: {
      fr: "Coupe droite structurée.",
      en: "Straight structured fit.",
      de: "Gerader strukturierter Schnitt.",
    },
    headers: {
      fr: ["Taille", "Longueur", "Poitrine", "Manches"],
      en: ["Size", "Length", "Chest", "Sleeves"],
      de: ["Größe", "Länge", "Brust", "Ärmel"],
    },
    adviceEyebrow: {
      fr: "Conseil",
      en: "Advice",
      de: "Hinweis",
    },
    advice1Title: {
      fr: "Entre deux tailles",
      en: "Between two sizes",
      de: "Zwischen zwei Größen",
    },
    advice1Text: {
      fr: "Prenez la taille au-dessus pour une silhouette plus ample.",
      en: "Choose the size above for a more relaxed silhouette.",
      de: "Wähle die größere Größe für eine lockerere Silhouette.",
    },
    advice2Title: {
      fr: "Rendu ajusté",
      en: "Closer fit",
      de: "Körpernähere Passform",
    },
    advice2Text: {
      fr: "Prenez votre taille habituelle si vous voulez un tombé plus proche du corps.",
      en: "Choose your usual size if you want a fit closer to the body.",
      de: "Wähle deine übliche Größe, wenn du einen körpernäheren Fall möchtest.",
    },
    advice3Title: {
      fr: "Mesures",
      en: "Measurements",
      de: "Maße",
    },
    advice3Text: {
      fr: "Les mesures sont indicatives et peuvent légèrement varier selon la production.",
      en: "Measurements are indicative and may vary slightly depending on production.",
      de: "Die Maße sind Richtwerte und können je nach Produktion leicht variieren.",
    },
    cta: {
      fr: "Retour à la boutique",
      en: "Back to shop",
      de: "Zurück zum Shop",
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
              {copy.titleLine1[language]}
              <br />
              {copy.titleLine2[language]}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/68">
              {copy.intro[language]}
            </p>

            <Link
              href="/shop"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full border border-white/10 bg-black/30 px-6 text-sm font-semibold text-white/75 transition duration-300 hover:-translate-y-[1px] hover:border-[#A8926E]/40 hover:text-white"
            >
              {copy.cta[language]}
            </Link>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <section className="rounded-[34px] border border-white/10 bg-white/[0.035] p-6 shadow-2xl backdrop-blur-xl transition duration-500 hover:border-white/15 hover:bg-white/[0.045] md:p-8">
              <div className="text-[11px] uppercase tracking-[0.28em] text-[#A8926E]">
                Transit Hoodie
              </div>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em]">
                {copy.hoodieFit[language]}
              </h2>

              <div className="mt-6 overflow-x-auto rounded-[22px] border border-white/10">
                <table className="min-w-[560px] w-full text-left text-sm">
                  <thead className="bg-black/35 text-white/55">
                    <tr>
                      {copy.headers[language].map((header) => (
                        <th key={header} className="p-4">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {hoodieSizes.map((row) => (
                      <tr key={row[0]} className="border-t border-white/10">
                        {row.map((cell, index) => (
                          <td
                            key={`${row[0]}-${index}`}
                            className="p-4 text-white/70"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="rounded-[34px] border border-white/10 bg-white/[0.035] p-6 shadow-2xl backdrop-blur-xl transition duration-500 hover:border-white/15 hover:bg-white/[0.045] md:p-8">
              <div className="text-[11px] uppercase tracking-[0.28em] text-[#A8926E]">
                Graphite Tee
              </div>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em]">
                {copy.teeFit[language]}
              </h2>

              <div className="mt-6 overflow-x-auto rounded-[22px] border border-white/10">
                <table className="min-w-[560px] w-full text-left text-sm">
                  <thead className="bg-black/35 text-white/55">
                    <tr>
                      {copy.headers[language].map((header) => (
                        <th key={header} className="p-4">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {teeSizes.map((row) => (
                      <tr key={row[0]} className="border-t border-white/10">
                        {row.map((cell, index) => (
                          <td
                            key={`${row[0]}-${index}`}
                            className="p-4 text-white/70"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          <div className="mt-8 rounded-[34px] border border-white/10 bg-white/[0.035] p-8 shadow-2xl backdrop-blur-xl md:p-10">
            <div className="text-[11px] uppercase tracking-[0.28em] text-[#A8926E]">
              {copy.adviceEyebrow[language]}
            </div>

            <div className="mt-5 grid gap-6 text-sm leading-7 text-white/65 md:grid-cols-3">
              <p>
                <strong className="block text-white">
                  {copy.advice1Title[language]}
                </strong>
                {copy.advice1Text[language]}
              </p>

              <p>
                <strong className="block text-white">
                  {copy.advice2Title[language]}
                </strong>
                {copy.advice2Text[language]}
              </p>

              <p>
                <strong className="block text-white">
                  {copy.advice3Title[language]}
                </strong>
                {copy.advice3Text[language]}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}