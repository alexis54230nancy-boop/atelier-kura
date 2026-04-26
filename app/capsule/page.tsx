import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function CapsulePage() {
  return (
    <main className="min-h-screen text-[#f5f5f2]">
      <Navbar />

      <section className="px-4 py-16">
        <div className="mx-auto w-[min(1280px,100%)]">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[34px] border border-white/10 bg-white/[0.035] p-8 shadow-2xl backdrop-blur-xl md:p-12">
              <div className="text-[11px] uppercase tracking-[0.28em] text-[#A8926E]">
                Capsule
              </div>

              <h1 className="mt-4 text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-7xl">
                Drop 01.
                <br />
                Le premier
                <br />
                manifeste.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-white/68">
                Une capsule courte, pensée comme une entrée dans l’univers
                Atelier Kūra. Peu de pièces. Une direction claire. Aucun bruit
                inutile.
              </p>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {[
                  ["03", "Pièces"],
                  ["Limité", "Production"],
                  ["Aucun", "Réassort garanti"],
                ].map(([number, label]) => (
                  <div
                    key={label}
                    className="rounded-[22px] border border-white/10 bg-black/30 p-5 backdrop-blur-md"
                  >
                    <strong className="block text-3xl text-white">{number}</strong>
                    <span className="mt-2 block text-sm text-white/55">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[620px] overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.035] p-6 shadow-2xl backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(168,146,110,0.18),transparent_28%)]" />

              <div className="relative flex h-full min-h-[580px] items-end rounded-[28px] border border-white/10 bg-black/25 p-6">
                <div className="max-w-sm rounded-[24px] border border-white/10 bg-black/45 p-6 backdrop-blur-xl">
                  <div className="text-[11px] uppercase tracking-[0.28em] text-[#A8926E]">
                    Phase 01
                  </div>

                  <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em]">
                    Présence. Précision. Silence.
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-white/65">
                    Drop 01 pose les premières lignes : matières lourdes,
                    silhouettes calmes, tons sombres, identité rare.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <section className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Transit Hoodie",
                text: "La pièce centrale. Dense, noire, structurée.",
                href: "/produit/transit-hoodie",
              },
              {
                title: "Graphite Tee",
                text: "La base silencieuse. Épaisse, nette, quotidienne.",
                href: "/produit/graphite-tee",
              },
              {
                title: "Layer 01",
                text: "La superposition. Mouvement, volume, transition.",
                href: "/produit/layer-01",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-[30px] border border-white/10 bg-white/[0.035] p-6 shadow-2xl backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-[#A8926E]/40 hover:bg-white/[0.055]"
              >
                <div className="aspect-[4/5] rounded-[24px] border border-white/10 bg-black/30 transition duration-500 group-hover:bg-black/40" />

                <h3 className="mt-6 text-xl font-semibold tracking-[-0.04em]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/60">
                  {item.text}
                </p>

                <p className="mt-5 text-xs uppercase tracking-[0.2em] text-[#A8926E]">
                  Voir la pièce
                </p>
              </Link>
            ))}
          </section>

          <section className="mt-8 rounded-[34px] border border-white/10 bg-white/[0.035] p-8 shadow-2xl backdrop-blur-xl md:p-12">
            <div className="text-[11px] uppercase tracking-[0.28em] text-[#A8926E]">
              Rareté
            </div>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-6xl">
              Une pièce doit rester une rencontre.
            </h2>

            <div className="mt-8 grid gap-6 text-base leading-8 text-white/68 md:grid-cols-3">
              <p>
                Les drops Atelier Kūra ne sont pas pensés comme des collections
                permanentes, mais comme des moments précis.
              </p>

              <p>
                La rareté n’est pas un argument marketing. C’est une manière de
                garder une identité nette, une production courte, une intention.
              </p>

              <p>
                Drop 01 ouvre le langage : matière, silence, mouvement, tension.
                La suite ne sera jamais une répétition.
              </p>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}