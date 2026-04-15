export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0c] px-4 py-20 text-[#f5f5f2]">
      <div className="mx-auto max-w-4xl rounded-[28px] border border-white/10 bg-white/[0.02] p-8 shadow-2xl md:p-10">
        <div className="text-[12px] uppercase tracking-[0.2em] text-[#d9d4c7]">
          Informations
        </div>

        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
          Mentions légales
        </h1>

        <div className="mt-8 space-y-6 text-base leading-8 text-white/70">
          <p>Éditeur du site : Atelier Kūra</p>
          <p>Responsable de publication : Alexis Michaux</p>
          <p>Email : contact@atelierkura.com</p>
          <p>Statut : Entrepreneur individuel</p>
          <p>SIREN : 103469961</p>
        </div>
      </div>
    </main>
  );
}