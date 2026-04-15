export default function RetoursPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0c] px-4 py-20 text-[#f5f5f2]">
      <div className="mx-auto max-w-4xl rounded-[28px] border border-white/10 bg-white/[0.02] p-8 shadow-2xl md:p-10">
        <div className="text-[12px] uppercase tracking-[0.2em] text-[#d9d4c7]">
          Retours
        </div>

        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
          Politique de retour
        </h1>

        <div className="mt-8 space-y-6 text-base leading-8 text-white/70">
          <p>
            Vous pouvez demander un retour dans un délai de 14 jours après réception,
            sous réserve que l’article soit neuf, non porté, non lavé et dans son
            état d’origine.
          </p>

          <p>
            Les frais de retour restent à la charge du client, sauf erreur de préparation
            ou produit défectueux.
          </p>

          <p>
            Pour toute demande, merci d’écrire à :
            {" "}
            <a
              href="mailto:contact@atelierkura.com"
              className="text-[#d9d4c7] underline underline-offset-4"
            >
              contact@atelierkura.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}