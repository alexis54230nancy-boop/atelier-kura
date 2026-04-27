"use client";

import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useI18n } from "../../components/LanguageProvider";

export default function MentionsLegalesPage() {
  const { language } = useI18n();

  const copy = {
    eyebrow: {
      fr: "Informations",
      en: "Information",
      de: "Informationen",
    },
    title: {
      fr: "Mentions légales",
      en: "Legal notice",
      de: "Impressum",
    },
    intro: {
      fr: "Cette page rassemble les informations légales relatives au site Atelier Kūra, à son éditeur, à son hébergement et à ses moyens de contact.",
      en: "This page gathers the legal information relating to the Atelier Kūra website, its publisher, hosting provider and contact details.",
      de: "Diese Seite enthält die rechtlichen Informationen zur Website Atelier Kūra, zum Herausgeber, Hosting-Anbieter und den Kontaktmöglichkeiten.",
    },
    shopCta: {
      fr: "Retour à la boutique",
      en: "Back to shop",
      de: "Zurück zum Shop",
    },
    contactCta: {
      fr: "Nous contacter",
      en: "Contact us",
      de: "Kontakt",
    },
    sections: [
      {
        title: {
          fr: "Éditeur du site",
          en: "Website publisher",
          de: "Herausgeber der Website",
        },
        lines: {
          fr: [
            "Nom commercial : Atelier Kūra",
            "Responsable de publication : Alexis Michaux",
            "Statut : Entrepreneur individuel",
            "SIREN : 103469961",
            "Adresse : à compléter",
            "Email : contact@atelierkura.com",
          ],
          en: [
            "Trade name: Atelier Kūra",
            "Publication director: Alexis Michaux",
            "Status: Individual entrepreneur",
            "SIREN: 103469961",
            "Address: to be completed",
            "Email: contact@atelierkura.com",
          ],
          de: [
            "Handelsname: Atelier Kūra",
            "Verantwortlich für die Veröffentlichung: Alexis Michaux",
            "Status: Einzelunternehmer",
            "SIREN: 103469961",
            "Adresse: noch zu ergänzen",
            "E-Mail: contact@atelierkura.com",
          ],
        },
      },
      {
        title: {
          fr: "Hébergement",
          en: "Hosting",
          de: "Hosting",
        },
        lines: {
          fr: [
            "Hébergeur : Vercel Inc.",
            "Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, USA",
            "Site : vercel.com",
          ],
          en: [
            "Hosting provider: Vercel Inc.",
            "Address: 440 N Barranca Ave #4133, Covina, CA 91723, USA",
            "Website: vercel.com",
          ],
          de: [
            "Hosting-Anbieter: Vercel Inc.",
            "Adresse: 440 N Barranca Ave #4133, Covina, CA 91723, USA",
            "Website: vercel.com",
          ],
        },
      },
      {
        title: {
          fr: "Propriété intellectuelle",
          en: "Intellectual property",
          de: "Geistiges Eigentum",
        },
        lines: {
          fr: [
            "L’ensemble des éléments présents sur le site Atelier Kūra, incluant les textes, noms, visuels, interfaces, direction artistique, logos et éléments graphiques, est protégé.",
            "Toute reproduction, utilisation ou diffusion sans autorisation préalable est interdite.",
          ],
          en: [
            "All elements present on the Atelier Kūra website, including texts, names, visuals, interfaces, art direction, logos and graphic elements, are protected.",
            "Any reproduction, use or distribution without prior authorization is prohibited.",
          ],
          de: [
            "Alle Elemente der Website Atelier Kūra, einschließlich Texte, Namen, Visuals, Interfaces, Art Direction, Logos und grafische Elemente, sind geschützt.",
            "Jegliche Vervielfältigung, Nutzung oder Verbreitung ohne vorherige Genehmigung ist untersagt.",
          ],
        },
      },
      {
        title: {
          fr: "Données personnelles",
          en: "Personal data",
          de: "Personenbezogene Daten",
        },
        lines: {
          fr: [
            "Les données transmises via le site, la waitlist ou le checkout sont utilisées uniquement pour le traitement des demandes, des commandes et de la relation client.",
            "Pour toute demande liée aux données personnelles, vous pouvez écrire à contact@atelierkura.com.",
          ],
          en: [
            "Data submitted through the website, waitlist or checkout is used only to process requests, orders and customer relations.",
            "For any request relating to personal data, you can write to contact@atelierkura.com.",
          ],
          de: [
            "Daten, die über die Website, Warteliste oder den Checkout übermittelt werden, werden ausschließlich zur Bearbeitung von Anfragen, Bestellungen und Kundenbeziehungen verwendet.",
            "Für Anfragen zu personenbezogenen Daten kannst du an contact@atelierkura.com schreiben.",
          ],
        },
      },
      {
        title: {
          fr: "Contact",
          en: "Contact",
          de: "Kontakt",
        },
        lines: {
          fr: [
            "Pour toute question relative au site, à une commande ou à la marque : contact@atelierkura.com",
          ],
          en: [
            "For any question regarding the website, an order or the brand: contact@atelierkura.com",
          ],
          de: [
            "Für Fragen zur Website, zu einer Bestellung oder zur Marke: contact@atelierkura.com",
          ],
        },
      },
    ],
    note: {
      fr: "À compléter avec l’adresse officielle de l’entreprise si elle doit apparaître publiquement. Fais valider cette page avant une exploitation commerciale complète.",
      en: "Complete this page with the official business address if it must appear publicly. Have this page reviewed before full commercial operation.",
      de: "Ergänze diese Seite mit der offiziellen Geschäftsadresse, wenn sie öffentlich erscheinen muss. Lass diese Seite vor dem vollständigen kommerziellen Betrieb prüfen.",
    },
  };

  return (
    <main className="min-h-screen text-[#f5f5f2]">
      <Navbar />

      <section className="px-4 py-16">
        <div className="mx-auto w-[min(1000px,100%)]">
          <div className="rounded-[34px] border border-white/10 bg-white/[0.035] p-8 shadow-2xl backdrop-blur-xl md:p-12">
            <div className="text-[11px] uppercase tracking-[0.28em] text-[#A8926E]">
              {copy.eyebrow[language]}
            </div>

            <h1 className="mt-4 text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
              {copy.title[language]}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-white/68">
              {copy.intro[language]}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/shop"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#F2EFE8] px-6 text-sm font-semibold text-black transition duration-300 hover:-translate-y-[1px]"
              >
                {copy.shopCta[language]}
              </Link>

              <a
                href="mailto:contact@atelierkura.com"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/10 bg-black/30 px-6 text-sm font-semibold text-white/75 transition duration-300 hover:-translate-y-[1px] hover:border-[#A8926E]/40 hover:text-white"
              >
                {copy.contactCta[language]}
              </a>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {copy.sections.map((section) => (
              <section
                key={section.title.fr}
                className="rounded-[28px] border border-white/10 bg-white/[0.035] p-6 shadow-2xl backdrop-blur-xl transition duration-500 hover:border-white/15 hover:bg-white/[0.045] md:p-7"
              >
                <h2 className="text-xl font-semibold tracking-[-0.04em]">
                  {section.title[language]}
                </h2>

                <div className="mt-4 space-y-2 text-sm leading-7 text-white/65">
                  {section.lines[language].map((line) => (
                    <p key={line}>
                      {line.includes("contact@atelierkura.com") ? (
                        <>
                          {line.replace("contact@atelierkura.com", "")}
                          <a
                            href="mailto:contact@atelierkura.com"
                            className="text-[#d9d4c7] underline underline-offset-4 transition hover:text-white"
                          >
                            contact@atelierkura.com
                          </a>
                        </>
                      ) : (
                        line
                      )}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-8 rounded-[28px] border border-[#A8926E]/20 bg-[#A8926E]/10 p-6 text-sm leading-7 text-[#e7dbc0] shadow-2xl backdrop-blur-xl">
            {copy.note[language]}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}