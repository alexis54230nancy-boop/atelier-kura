export default function Hero() {
  return (
    <section className="px-4 pb-8 pt-16">
      <div className="mx-auto grid w-[min(1200px,100%)] gap-7 md:grid-cols-2">
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02] shadow-2xl">
          <div className="p-10 md:p-14">
            <div className="mb-5 flex items-center gap-3 text-[12px] uppercase tracking-[0.22em] text-[#d9d4c7]">
              <span className="h-px w-8 bg-[#8e8a80]" />
              French limited series
            </div>

            <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
              Le silence
              <br />
              comme présence.
            </h1>

            <p className="mt-6 max-w-[56ch] text-base leading-8 text-white/70 md:text-lg">
              Atelier Kūra conçoit des vêtements en séries limitées, pensés pour
              le mouvement, la retenue et la précision. Une garde-robe sombre,
              nette, structurée — entre intensité intérieure et élégance de trajectoire.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#collection"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#d9d4c7] px-5 font-semibold text-black shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-[1px] hover:brightness-105"
              >
                Découvrir Drop 01
              </a>

              <a
                href="#waitlist"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-5 font-semibold text-white transition duration-300 hover:border-white/20 hover:bg-white/[0.06]"
              >
                Rejoindre la waitlist
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 border-t border-white/10 pt-5 text-sm text-white/60">
              <span>Confection en séries limitées</span>
              <span>Matières sélectionnées</span>
              <span>Direction artistique minimale</span>
            </div>
          </div>
        </div>

        <div className="relative min-h-[580px] overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#141416] to-[#0d0d0f] shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(217,212,199,0.12),transparent_28%)]" />

          <div className="absolute bottom-0 right-[8%] h-[90%] w-[78%] max-w-[560px] rounded-t-[30px] border border-white/10 bg-gradient-to-b from-[#1e1f23] to-[#09090a] shadow-2xl" />

          <div className="absolute bottom-6 left-6 max-w-[260px] rounded-[20px] border border-white/10 bg-black/50 p-5 backdrop-blur">
            <h3 className="text-base font-semibold">Drop 01</h3>
            <p className="mt-2 text-sm leading-6 text-white/70">
              Hoodie lourd, tee graphite, silhouettes épurées. Une première capsule
              pensée pour durer, circuler et marquer sans parler fort.
            </p>
          </div>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[0.32em] text-white/40">
            KŪRA
          </div>
        </div>
      </div>
    </section>
  );
}