import Link from "next/link";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Story from "../components/Story";
import Waitlist from "../components/Waitlist";
import Footer from "../components/Footer";
import { formatPrice, products } from "../lib/products";

export default function Home() {
  return (
    <main className="min-h-screen text-[#f5f5f2]">
      <Navbar />

      <Hero />

      <section className="px-4 py-10">
        <div className="mx-auto grid w-[min(1280px,100%)] gap-7 md:grid-cols-[1.15fr_.85fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/[0.035] p-8 shadow-2xl backdrop-blur-xl md:p-10">
            <div className="text-[11px] uppercase tracking-[0.28em] text-[#d9d4c7]">
              Matière
            </div>

            <h2 className="mt-4 text-4xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-6xl">
              Texture, tenue, gravité.
            </h2>

            <p className="mt-6 max-w-[68ch] text-base leading-8 text-white/70">
              La matière n’est pas un décor. Elle donne le rythme, la présence,
              la chute. Atelier Kūra travaille une esthétique dense, tactile,
              nette — avec des tons sobres, des volumes calmes et des finitions propres.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                ["450 GSM", "Hoodie lourd"],
                ["240 GSM", "Tee structuré"],
                ["Drop 01", "Série limitée"],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-[20px] border border-white/10 bg-black/30 p-5 backdrop-blur-md"
                >
                  <strong className="block text-2xl text-white">{title}</strong>
                  <span className="mt-2 block text-sm text-white/55">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="min-h-[360px] rounded-[32px] border border-white/10 bg-white/[0.035] p-6 shadow-2xl backdrop-blur-xl">
            <div className="h-full rounded-[24px] border border-white/10 bg-black/25" />
          </div>
        </div>
      </section>

      <section id="collection" className="px-4 py-10">
        <div className="mx-auto w-[min(1280px,100%)]">
          <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-[#d9d4c7]">
                Collection
              </div>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.055em] md:text-6xl">
                Drop 01.
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-white/65">
              Une capsule courte, pensée comme un premier manifeste. Peu de références,
              une exécution précise, une esthétique durable.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {products.map((item) => (
              <Link
                key={item.slug}
                href={`/produit/${item.slug}`}
                className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] shadow-2xl backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-[#A8926E]/40 hover:bg-white/[0.055]"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-black/25">
                  <div className="absolute inset-x-10 bottom-0 h-[82%] rounded-t-[120px] border border-white/10 bg-gradient-to-b from-white/[0.08] to-black/40 transition duration-500 group-hover:scale-[1.03]" />
                  <div className="absolute left-5 top-5 text-[10px] uppercase tracking-[0.24em] text-white/45">
                    Atelier Kūra
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold tracking-[-0.03em] transition group-hover:text-[#d9d4c7]">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#A8926E]">
                        Voir le produit
                      </p>
                    </div>

                    <span className="font-semibold text-[#F2EFE8]">
                      {formatPrice(item.price)}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-white/60">
                    {item.shortDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Story />
      <Waitlist />
      <Footer />
    </main>
  );
}