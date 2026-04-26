import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

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
  return (
    <main className="min-h-screen text-[#f5f5f2]">
      <Navbar />

      <section className="px-4 py-16">
        <div className="mx-auto w-[min(1100px,100%)]">
          <div className="rounded-[34px] border border-white/10 bg-white/[0.035] p-8 shadow-2xl backdrop-blur-xl md:p-12">
            <div className="text-[11px] uppercase tracking-[0.28em] text-[#A8926E]">
              Guide
            </div>

            <h1 className="mt-4 text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
              Guide
              <br />
              des tailles.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/68">
              Les coupes Atelier Kūra sont pensées pour une silhouette légèrement
              ample, structurée et confortable. Si vous êtes entre deux tailles,
              choisissez la taille au-dessus pour un rendu plus oversize.
            </p>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <section className="rounded-[34px] border border-white/10 bg-white/[0.035] p-6 shadow-2xl backdrop-blur-xl md:p-8">
              <div className="text-[11px] uppercase tracking-[0.28em] text-[#A8926E]">
                Transit Hoodie
              </div>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em]">
                Coupe légèrement oversize.
              </h2>

              <div className="mt-6 overflow-hidden rounded-[22px] border border-white/10">
                <table className="w-full text-left text-sm">
                  <thead className="bg-black/35 text-white/55">
                    <tr>
                      <th className="p-4">Taille</th>
                      <th className="p-4">Longueur</th>
                      <th className="p-4">Poitrine</th>
                      <th className="p-4">Manches</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hoodieSizes.map((row) => (
                      <tr key={row[0]} className="border-t border-white/10">
                        {row.map((cell) => (
                          <td key={cell} className="p-4 text-white/70">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="rounded-[34px] border border-white/10 bg-white/[0.035] p-6 shadow-2xl backdrop-blur-xl md:p-8">
              <div className="text-[11px] uppercase tracking-[0.28em] text-[#A8926E]">
                Graphite Tee
              </div>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em]">
                Coupe droite structurée.
              </h2>

              <div className="mt-6 overflow-hidden rounded-[22px] border border-white/10">
                <table className="w-full text-left text-sm">
                  <thead className="bg-black/35 text-white/55">
                    <tr>
                      <th className="p-4">Taille</th>
                      <th className="p-4">Longueur</th>
                      <th className="p-4">Poitrine</th>
                      <th className="p-4">Manches</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teeSizes.map((row) => (
                      <tr key={row[0]} className="border-t border-white/10">
                        {row.map((cell) => (
                          <td key={cell} className="p-4 text-white/70">
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
              Conseil
            </div>

            <div className="mt-5 grid gap-6 text-sm leading-7 text-white/65 md:grid-cols-3">
              <p>
                <strong className="block text-white">Entre deux tailles</strong>
                Prenez la taille au-dessus pour une silhouette plus ample.
              </p>

              <p>
                <strong className="block text-white">Rendu ajusté</strong>
                Prenez votre taille habituelle si vous voulez un tombé plus proche du corps.
              </p>

              <p>
                <strong className="block text-white">Mesures</strong>
                Les mesures sont indicatives et peuvent légèrement varier selon la production.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}