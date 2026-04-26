import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const faqs = [
  {
    question: "Quand ouvre le Drop 01 ?",
    answer:
      "Le Drop 01 sera annoncé via la waitlist et les réseaux Atelier Kūra. Les membres de la liste privée seront prévenus avant l’ouverture publique.",
  },
  {
    question: "Les pièces seront-elles réassorties ?",
    answer:
      "Aucun réassort n’est garanti. Les drops Atelier Kūra sont pensés en séries limitées afin de préserver une identité forte et une production courte.",
  },
  {
    question: "Où livrez-vous ?",
    answer:
      "Atelier Kūra livre en France, au Luxembourg et en Belgique. Les options de livraison sont affichées au moment du paiement.",
  },
  {
    question: "Quels sont les délais de livraison ?",
    answer:
      "Les délais estimés sont généralement de 3 à 6 jours ouvrés après préparation de la commande. En cas de précommande, le délai peut être plus long et sera indiqué sur la fiche produit.",
  },
  {
    question: "Puis-je retourner un article ?",
    answer:
      "Oui, vous pouvez demander un retour sous 14 jours après réception si l’article est neuf, non porté, non lavé et dans son état d’origine.",
  },
  {
    question: "Comment choisir ma taille ?",
    answer:
      "Chaque pièce possède une coupe pensée différemment. Consultez le guide des tailles avant achat, surtout si vous hésitez entre deux tailles.",
  },
  {
    question: "Les paiements sont-ils sécurisés ?",
    answer:
      "Oui, les paiements sont traités via Stripe. Atelier Kūra ne stocke pas vos informations bancaires.",
  },
];

export default function FaqPage() {
  return (
    <main className="min-h-screen text-[#f5f5f2]">
      <Navbar />

      <section className="px-4 py-16">
        <div className="mx-auto w-[min(1000px,100%)]">
          <div className="rounded-[34px] border border-white/10 bg-white/[0.035] p-8 shadow-2xl backdrop-blur-xl md:p-12">
            <div className="text-[11px] uppercase tracking-[0.28em] text-[#A8926E]">
              Assistance
            </div>

            <h1 className="mt-4 text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
              Questions
              <br />
              fréquentes.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/68">
              Les réponses essentielles avant de rejoindre un drop Atelier Kūra :
              livraison, tailles, retours, paiement et fonctionnement des séries limitées.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            {faqs.map((item) => (
              <div
                key={item.question}
                className="rounded-[28px] border border-white/10 bg-white/[0.035] p-6 shadow-2xl backdrop-blur-xl"
              >
                <h2 className="text-xl font-semibold tracking-[-0.04em]">
                  {item.question}
                </h2>
                <p className="mt-3 text-sm leading-7 text-white/65">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}