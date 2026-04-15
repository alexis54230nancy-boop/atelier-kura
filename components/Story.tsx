export default function Story() {
  return (
    <section id="story" className="px-4 py-8">
      <div className="mx-auto grid w-[min(1200px,100%)] gap-7 md:grid-cols-[.92fr_1.08fr]">
        <div className="rounded-[28px] border border-white/10 bg-white/[0.02] p-8 shadow-2xl md:p-10">
          <p className="text-2xl leading-[1.22] tracking-[-0.03em] md:text-4xl">
            « Une élégance qui ne force pas l’attention. Une présence qui tient
            par la coupe, la matière, le calme. »
          </p>
          <small className="mt-5 block text-sm uppercase tracking-[0.08em] text-white/60">
            Atelier Kūra
          </small>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-white/[0.02] p-8 shadow-2xl md:p-10">
          <div className="text-[12px] uppercase tracking-[0.2em] text-[#d9d4c7]">
            Histoire
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
            Une esthétique du mouvement.
          </h2>
          <p className="mt-4 text-base leading-8 text-white/70">
            Atelier Kūra naît d’un goût pour les silhouettes maîtrisées, les univers
            nocturnes, les lignes précises et les objets bien faits. Entre tension
            intérieure et retenue formelle, la marque avance sur une idée simple :
            faire peu, mais faire juste.
          </p>
          <p className="mt-4 text-base leading-8 text-white/70">
            Une garde-robe pensée pour durer, circuler, et habiter le quotidien
            avec intensité sans jamais crier.
          </p>
        </div>
      </div>
    </section>
  );
}