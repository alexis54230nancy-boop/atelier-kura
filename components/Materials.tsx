export default function Materials() {
  return (
    <section className="px-4 py-8">
      <div className="mx-auto grid w-[min(1200px,100%)] gap-7 md:grid-cols-[1.1fr_.9fr]">
        <div className="rounded-[28px] border border-white/10 bg-white/[0.02] p-8 shadow-2xl md:p-10">
          <div className="text-[12px] uppercase tracking-[0.2em] text-[#d9d4c7]">
            Matière
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
            Texture, tenue, gravité.
          </h2>
          <p className="mt-4 max-w-[62ch] text-base leading-8 text-white/70">
            La matière n’est pas un décor. Elle donne le rythme, la présence,
            la chute. Atelier Kūra travaille une esthétique dense, tactile,
            nette — avec des tons sobres, des volumes calmes et des finitions propres.
          </p>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            <div className="rounded-[18px] border border-white/10 bg-white/[0.02] p-5">
              <strong className="block text-2xl text-white">2</strong>
              <span className="mt-1 block text-sm text-white/60">
                pièces pour lancer proprement
              </span>
            </div>

            <div className="rounded-[18px] border border-white/10 bg-white/[0.02] p-5">
              <strong className="block text-2xl text-white">3</strong>
              <span className="mt-1 block text-sm text-white/60">
                teintes fondamentales
              </span>
            </div>

            <div className="rounded-[18px] border border-white/10 bg-white/[0.02] p-5">
              <strong className="block text-2xl text-white">1</strong>
              <span className="mt-1 block text-sm text-white/60">
                univers visuel cohérent
              </span>
            </div>
          </div>
        </div>

        <div className="min-h-[360px] rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,#17181b,#0e0f10)] shadow-2xl" />
      </div>
    </section>
  );
}