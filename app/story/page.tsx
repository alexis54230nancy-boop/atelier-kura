import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function StoryPage() {
  return (
    <main className="min-h-screen text-[#f5f5f2]">
      <Navbar />

      <section className="px-4 py-16">
        <div className="mx-auto grid w-[min(1280px,100%)] gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[34px] border border-white/10 bg-white/[0.035] p-8 shadow-2xl backdrop-blur-xl md:p-12">
            <div className="text-[11px] uppercase tracking-[0.28em] text-[#A8926E]">
              Histoire
            </div>

            <h1 className="mt-4 text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
              Une présence qui ne cherche pas le bruit.
            </h1>
          </div>

          <div className="rounded-[34px] border border-white/10 bg-white/[0.035] p-8 shadow-2xl backdrop-blur-xl md:p-12">
            <div className="space-y-6 text-base leading-8 text-white/68">
              <p>
                Atelier Kūra naît d’une idée simple : créer des vêtements sobres,
                structurés et limités, capables d’habiter le quotidien sans jamais
                forcer l’attention.
              </p>

              <p>
                La marque explore une esthétique sombre, précise et silencieuse :
                le mouvement, la matière, la tension intérieure, la retenue.
              </p>

              <p>
                Kūra s’inspire du minimalisme japonais, des trajectoires nocturnes,
                du vêtement fonctionnel et d’une idée du luxe qui ne parle pas trop fort.
              </p>
            </div>

            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="text-2xl leading-snug tracking-[-0.04em] md:text-4xl">
                « Ce qui dure ne parle pas fort. »
              </p>
              <p className="mt-4 text-sm uppercase tracking-[0.2em] text-white/45">
                Atelier Kūra
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}