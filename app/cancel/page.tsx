import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function CancelPage() {
  return (
    <main className="min-h-screen text-[#f5f5f2]">
      <Navbar />

      <section className="px-4 py-16">
        <div className="mx-auto w-[min(900px,100%)]">
          <div className="rounded-[34px] border border-white/10 bg-white/[0.035] p-8 text-center shadow-2xl backdrop-blur-xl md:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-black/30 text-2xl text-white/70">
              ×
            </div>

            <div className="mt-8 text-[11px] uppercase tracking-[0.28em] text-[#A8926E]">
              Paiement annulé
            </div>

            <h1 className="mt-4 text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
              Rien n’a été
              <br />
              prélevé.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/68">
              Votre paiement n’a pas été finalisé. Vous pouvez revenir à la
              boutique et reprendre votre commande quand vous le souhaitez.
            </p>

            <div className="mt-10 rounded-[28px] border border-white/10 bg-black/30 p-6 text-left backdrop-blur-md">
              <div className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                Information
              </div>

              <div className="mt-5 grid gap-5 text-sm leading-7 text-white/65 md:grid-cols-2">
                <div>
                  <strong className="block text-white">Panier</strong>
                  Si vous étiez connecté au même navigateur, votre panier peut
                  encore être disponible.
                </div>

                <div>
                  <strong className="block text-white">Assistance</strong>
                  En cas de problème, contactez-nous depuis la page contact.
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
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.08]"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}