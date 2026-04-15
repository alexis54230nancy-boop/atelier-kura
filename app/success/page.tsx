export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0c] px-4 py-24 text-[#f5f5f2]">
      <div className="mx-auto max-w-2xl rounded-[28px] border border-white/10 bg-white/[0.02] p-10 text-center shadow-2xl">
        <h1 className="text-4xl font-semibold tracking-[-0.04em]">Paiement confirmé.</h1>
        <p className="mt-4 text-white/70">
          Merci. Votre commande Atelier Kūra a bien été prise en compte.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#d9d4c7] px-6 font-semibold text-black"
        >
          Retour à l’accueil
        </a>
      </div>
    </main>
  );
}