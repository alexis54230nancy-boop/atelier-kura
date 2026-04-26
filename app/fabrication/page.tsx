import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function FabricationPage() {
  return (
    <main className="min-h-screen text-[#f5f5f2]">
      <Navbar />

      <section className="px-4 py-16">
        <div className="mx-auto grid w-[min(1280px,100%)] gap-8 lg:grid-cols-[1fr_1fr]">
          
          {/* LEFT */}
          <div className="rounded-[34px] border border-white/10 bg-white/[0.035] p-8 shadow-2xl backdrop-blur-xl md:p-12">
            <div className="text-[11px] uppercase tracking-[0.28em] text-[#A8926E]">
              Fabrication
            </div>

            <h1 className="mt-4 text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
              Matière,
              <br />
              structure,
              <br />
              intention.
            </h1>

            <p className="mt-6 text-base leading-8 text-white/68">
              Chaque pièce Atelier Kūra est pensée autour de la matière et de la
              tenue. Le vêtement n’est pas un simple objet visuel : il doit exister
              dans le mouvement, durer, et garder sa présence dans le temps.
            </p>
          </div>

          {/* RIGHT */}
          <div className="rounded-[34px] border border-white/10 bg-white/[0.035] p-8 shadow-2xl backdrop-blur-xl md:p-12">
            <div className="space-y-6 text-base leading-8 text-white/68">
              <p>
                Les matières sont sélectionnées pour leur densité, leur chute et
                leur capacité à structurer la silhouette. Les grammages sont
                volontairement élevés pour donner une présence réelle au vêtement.
              </p>

              <p>
                La coupe est pensée pour accompagner le corps sans le contraindre :
                lignes nettes, volumes contrôlés, équilibre entre confort et précision.
              </p>

              <p>
                Chaque drop est produit en quantité limitée, afin de préserver
                la cohérence de la pièce et éviter toute dilution de l’identité.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                ["450 GSM", "Hoodie"],
                ["240 GSM", "Tee"],
                ["Série limitée", "Drop 01"],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="rounded-[20px] border border-white/10 bg-black/30 p-5 backdrop-blur-md"
                >
                  <strong className="block text-2xl text-white">
                    {title}
                  </strong>
                  <span className="mt-2 block text-sm text-white/55">
                    {desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}