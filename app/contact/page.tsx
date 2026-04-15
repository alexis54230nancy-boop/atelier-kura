export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0c] px-4 py-20 text-[#f5f5f2]">
      <div className="mx-auto max-w-3xl rounded-[28px] border border-white/10 bg-white/[0.02] p-8 shadow-2xl md:p-10">
        <div className="text-[12px] uppercase tracking-[0.2em] text-[#d9d4c7]">
          Contact
        </div>

        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
          Atelier Kūra
        </h1>

        <p className="mt-4 text-base leading-8 text-white/70">
          Pour toute demande concernant une commande, une collaboration ou un projet,
          vous pouvez écrire à l’adresse suivante.
        </p>

        <div className="mt-8 space-y-4 text-white/80">
          <p>
            Email :{" "}
            <a
              href="mailto:contact@atelierkura.com"
              className="text-[#d9d4c7] underline underline-offset-4"
            >
              contact@atelierkura.com
            </a>
          </p>

          <p>Entreprise : Atelier Kūra</p>
          <p>France</p>
        </div>
      </div>
    </main>
  );
}