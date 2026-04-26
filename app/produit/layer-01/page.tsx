import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function Layer01Page() {
  return (
    <main className="min-h-screen text-[#f5f5f2]">
      <Navbar />

      <section className="px-4 py-14">
        <div className="mx-auto grid w-[min(1280px,100%)] gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-[34px] border border-white/10 bg-white/[0.035] p-6 shadow-2xl backdrop-blur-xl">
            <div className="aspect-[4/5] rounded-[28px] border border-white/10 bg-black/30">
              <div className="flex h-full items-center justify-center text-sm uppercase tracking-[0.3em] text-white/35">
                Visuel layer
              </div>
            </div>
          </div>

          <div className="rounded-[34px] border border-white/10 bg-white/[0.035] p-8 shadow-2xl backdrop-blur-xl md:p-10">
            <div className="text-[11px] uppercase tracking-[0.28em] text-[#A8926E]">
              Drop 01
            </div>

            <h1 className="mt-4 text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
              Layer 01
            </h1>

            <p className="mt-5 text-2xl font-semibold">95,00€</p>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/68">
              Une pièce de transition pensée pour la superposition, le mouvement
              et la présence. Layer 01 accompagne la silhouette sans la surcharger.
            </p>

            <div className="mt-8">
              <div className="text-sm uppercase tracking-[0.2em] text-white/50">
                Taille
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    className="h-11 min-w-14 rounded-full border border-white/10 bg-black/30 px-4 text-sm transition hover:border-[#A8926E]/60"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button className="mt-9 min-h-14 w-full rounded-full bg-[#F2EFE8] px-6 font-semibold text-black transition hover:-translate-y-[1px]">
              Ajouter au panier
            </button>

            <div className="mt-10 space-y-5 border-t border-white/10 pt-8 text-sm leading-7 text-white/62">
              <p>
                <strong className="text-white">Composition :</strong> matière
                structurée, toucher sec, rendu minéral.
              </p>
              <p>
                <strong className="text-white">Coupe :</strong> clean,
                modulable, pensée pour le layering.
              </p>
              <p>
                <strong className="text-white">Détails :</strong> lignes
                sobres, finitions discrètes, logo Kūra ton sur ton.
              </p>
              <p>
                <strong className="text-white">Livraison :</strong> France,
                Luxembourg, Belgique.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}