import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { formatPrice, products } from "../../lib/products";

export default function ShopPage() {
  return (
    <main className="min-h-screen text-[#f5f5f2]">
      <Navbar />

      <section className="px-4 py-16">
        <div className="mx-auto w-[min(1280px,100%)]">
          <div className="rounded-[34px] border border-white/10 bg-white/[0.035] p-8 shadow-2xl backdrop-blur-xl md:p-12">
            <div className="text-[11px] uppercase tracking-[0.28em] text-[#A8926E]">
              Boutique
            </div>

            <h1 className="mt-4 text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
              Drop 01.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/65">
              Une première capsule pensée comme un manifeste : peu de pièces,
              une direction précise, une présence silencieuse.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/produit/${product.slug}`}
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
                      <h2 className="text-lg font-semibold tracking-[-0.03em] transition group-hover:text-[#d9d4c7]">
                        {product.name}
                      </h2>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#A8926E]">
                        Voir le produit
                      </p>
                    </div>

                    <span className="font-semibold text-[#F2EFE8]">
                      {formatPrice(product.price)}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-white/60">
                    {product.shortDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}