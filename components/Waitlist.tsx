export default function Waitlist() {
  return (
    <section id="waitlist" className="px-4 py-8">
      <div className="mx-auto w-[min(1200px,100%)] rounded-[28px] border border-white/10 bg-white/[0.02] p-8 shadow-2xl md:p-10">
        <div className="text-[12px] uppercase tracking-[0.2em] text-[#d9d4c7]">
          Waitlist
        </div>

        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
          Accès anticipé au Drop 01.
        </h2>

        <p className="mt-4 max-w-[62ch] text-base leading-8 text-white/70">
          Rejoins la liste privée pour être averti avant l’ouverture.
        </p>

        <form
          action="https://cd8bef21.sibforms.com/serve/MUIFAJVSeo6fP48jo6DY0qyTt8FNnV8SWloCE0xgzdlkx-D3ZzGDG8MLNOSATrtwgdlQhbb8DIsMmZMOHq9-d4zNuzUJ6RngrcVCW8nSMIoP14nxWFkMm-c0p35plURZtRxSS0WlyEP0KwtWKCqOr0tcgRXwbrSbYb7mJafVUG-gsC0KljFkJeatU_l0lz1hCYLCQWbcXcMs7lrI"
          method="GET"
          target="_blank"
          className="mt-8 flex flex-wrap gap-4"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Votre email"
            className="min-h-12 min-w-[280px] rounded-full border border-white/10 bg-black/40 px-5 text-white outline-none placeholder:text-white/40"
          />

          <button
            type="submit"
            className="min-h-12 rounded-full bg-[#d9d4c7] px-6 font-semibold text-black transition hover:-translate-y-[1px]"
          >
            Rejoindre
          </button>
        </form>
      </div>
    </section>
  );
}