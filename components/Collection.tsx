export default function Collection() {
  const products = [
    {
      name: "Transit Hoodie",
      price: "140€",
      desc: "Coton lourd, coupe structurée, noir dense. Pensé pour les trajectoires lentes et les présences nettes.",
    },
    {
      name: "Graphite Tee",
      price: "65€",
      desc: "Jersey épais, teinte minérale, tombé propre. Une base silencieuse pour le quotidien premium.",
    },
    {
      name: "Layer 01",
      price: "À venir",
      desc: "Pièce de transition pensée pour la suite : superposition, matière, mouvement et précision visuelle.",
    },
  ];

  return (
    <section id="collection" className="px-4 py-8">
      <div className="mx-auto w-[min(1200px,100%)]">
        <div className="pb-6">
          <div className="text-[12px] uppercase tracking-[0.2em] text-[#d9d4c7]">
            Drop 01
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
            Une capsule courte, pensée juste.
          </h2>
          <p className="mt-4 max-w-[62ch] text-base leading-8 text-white/70">
            Le lancement se joue sur peu de références, beaucoup de cohérence
            et une exécution propre. Précommande courte, visuels précis,
            identité forte.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {products.map((item) => (
            <article
              key={item.name}
              className="group overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.02] shadow-2xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.03]"
            >
              <div className="aspect-[4/5] bg-gradient-to-b from-[#17181b] to-[#0d0d0f] transition duration-300 group-hover:scale-[1.02]" />

              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-base font-semibold">{item.name}</h3>
                  <span className="font-bold text-[#d9d4c7]">{item.price}</span>
                </div>

                <p className="mt-3 text-sm leading-6 text-white/70">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}