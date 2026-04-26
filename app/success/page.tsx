import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function SuccessPage() {
  return (
    <main className="min-h-screen text-[#f5f5f2]">
      <Navbar />

      <section className="px-4 py-16">
        <div className="mx-auto w-[min(900px,100%)]">
          <div className="rounded-[34px] border border-white/10 bg-white/[0.035] p-8 text-center shadow-2xl backdrop-blur-xl md:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#A8926E]/40 bg-[#A8926E]/10 text-2xl">
              ✓
            </div>

            <div className="mt-8 text-[11px] uppercase tracking-[0.28em] text-[#A8926E]">
              Commande confirmée
            </div>

            <h1 className="mt-4 text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
              Merci.
              <br />
              Votre pièce est réservée.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/68">
              Votre paiement a bien été pris en compte. Un email de confirmation
              vous sera envoyé avec les détails de votre commande.
            </p>

            <div className="mt-10 rounded-[28px] border border-white/10 bg-black/30 p-6 text-left backdrop-blur-md">
              <div className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                Prochaine étape
              </div>

              <div className="mt-5 grid gap-5 text-sm leading-7 text-white/65 md:grid-cols-3">
                <div>
                  <strong className="block text-white">01 — Préparation</strong>
                  Votre commande est préparée avec soin.
                </div>

                <div>
                  <strong className="block text-white">02 — Expédition</strong>
                  Livraison standard France / Luxembourg / Belgique.
                </div>

                <div>
                  <strong className="block text-white">03 — Réception</strong>
                  Une pièce limitée, pensée pour durer.
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/shop"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#F2EFE8] px-6 text-sm font-semibold text-black transition hover:-translate-y-[1px]"
              >
                Retour au shop
              </Link>

              <Link
                href="/story"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.08]"
              >
                Découvrir l’histoire
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}