import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function FuturesPage() {
  return (
    <main className="min-h-screen text-[#f5f5f2]">
      <Navbar />

      <section className="px-4 py-16">
        <div className="mx-auto w-[min(1280px,100%)]">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[34px] border border-white/10 bg-white/[0.035] p-8 shadow-2xl backdrop-blur-xl md:p-12">
              <div className="text-[11px] uppercase tracking-[0.28em] text-[#A8926E]">
                Futures
              </div>

              <h1 className="mt-4 text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-7xl">
                Culture.
                <br />
                Collection.
                <br />
                Rareté.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-white/68">
                Cette page présente les territoires que la marque pourra explorer
                à l’avenir : capsules créatives, objets, archives, collaborations
                et pièces collectionnables.
              </p>
            </div>

            <div className="rounded-[34px] border border-white/10 bg-white/[0.035] p-8 shadow-2xl backdrop-blur-xl md:p-12">
              <div className="text-[11px] uppercase tracking-[0.28em] text-[#A8926E]">
                Note
              </div>

              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.05em] md:text-5xl">
                Inspiré par la culture. Jamais dans la copie.
              </h2>

              <div className="mt-8 space-y-6 text-base leading-8 text-white/68">
                <p>
                  Atelier Kūra peut s’inspirer de la musique, de la collection,
                  de la nuit, du Japon, du jeu, du voyage ou de la scène urbaine.
                </p>

                <p>
                  La marque ne reprend pas de logos, personnages, noms protégés
                  ou visuels appartenant à d’autres univers. Elle construit son
                  propre langage.
                </p>

                <p>
                  L’objectif : créer un jour des collaborations officielles,
                  propres, rares et cohérentes — jamais des copies.
                </p>
              </div>
            </div>
          </div>

          <section className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Archive Objects",
                text: "Objets limités, cartes, tags, numérotation, certificats. Une logique de collection autour des drops.",
              },
              {
                title: "Sound & Silence",
                text: "Capsules inspirées par l’énergie musicale : visuels rares, phrases courtes, absence maîtrisée.",
              },
              {
                title: "Japan Motion",
                text: "Travail autour des matières, du rituel, des lignes japonaises et des symboles minimalistes.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[30px] border border-white/10 bg-white/[0.035] p-6 shadow-2xl backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-[#A8926E]/40 hover:bg-white/[0.055]"
              >
                <div className="flex h-48 items-end rounded-[24px] border border-white/10 bg-black/30 p-5">
                  <p className="text-[10px] uppercase tracking-[0.26em] text-white/35">
                    Concept
                  </p>
                </div>

                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.05em]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/62">
                  {item.text}
                </p>
              </div>
            ))}
          </section>

          <section className="mt-8 rounded-[34px] border border-white/10 bg-white/[0.035] p-8 shadow-2xl backdrop-blur-xl md:p-12">
            <div className="text-[11px] uppercase tracking-[0.28em] text-[#A8926E]">
              Vision collaboration
            </div>

            <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-6xl">
              Des capsules futures, pensées comme des rencontres officielles.
            </h2>

            <div className="mt-8 grid gap-6 text-base leading-8 text-white/68 md:grid-cols-2">
              <p>
                La collaboration idéale pour Atelier Kūra n’est pas un simple
                logo posé sur un vêtement. C’est une rencontre entre deux univers,
                un langage commun, une rareté assumée.
              </p>

              <p>
                Chaque capsule future devra respecter trois règles : cohérence
                artistique, autorisation claire, production limitée. Le prestige
                vient de la précision, pas du bruit.
              </p>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}