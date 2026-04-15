export default function CgvPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0c] px-4 py-20 text-[#f5f5f2]">
      <div className="mx-auto max-w-5xl rounded-[28px] border border-white/10 bg-white/[0.02] p-8 shadow-2xl md:p-10">
        <div className="text-[12px] uppercase tracking-[0.2em] text-[#d9d4c7]">
          CGV
        </div>

        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
          Conditions générales de vente
        </h1>

        <div className="mt-8 space-y-6 text-base leading-8 text-white/70">
          <p>
            Les présentes conditions encadrent les ventes effectuées sur le site Atelier Kūra.
          </p>

          <p>
            Les produits proposés sont décrits avec la plus grande précision possible.
            Les visuels ont une valeur indicative.
          </p>

          <p>
            Les prix sont indiqués en euros. La commande est considérée comme définitive
            après validation du paiement.
          </p>

          <p>
            Atelier Kūra se réserve le droit de modifier ses prix, produits et contenus
            à tout moment.
          </p>

          <p>
            Pour toute question relative à une commande :
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