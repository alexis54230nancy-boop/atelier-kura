export default function LivraisonPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0c] px-4 py-20 text-[#f5f5f2]">
      <div className="mx-auto max-w-4xl rounded-[28px] border border-white/10 bg-white/[0.02] p-8 shadow-2xl md:p-10">
        <div className="text-[12px] uppercase tracking-[0.2em] text-[#d9d4c7]">
          Livraison
        </div>

        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
          Politique de livraison
        </h1>

        <div className="mt-8 space-y-6 text-base leading-8 text-white/70">
          <p>
            Les commandes Atelier Kūra sont préparées avec soin et expédiées dans
            les meilleurs délais.
          </p>

          <p>
            Zones de livraison : France, Luxembourg, Belgique.
          </p>

          <p>
            Délais estimés : 3 à 6 jours ouvrés après validation de la commande,
            sauf indication contraire sur la fiche produit.
          </p>

          <p>
            Les délais peuvent varier lors des lancements en précommande ou des
            drops en séries limitées.
          </p>
        </div>
      </div>
    </main>
  );
}