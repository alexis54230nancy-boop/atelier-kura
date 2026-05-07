import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen text-[#f5f5f2]">
      <Navbar />

      <section className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_50%_50%,rgba(168,146,110,0.055),transparent)]" />

        <div className="relative">
          <div className="select-none font-[family-name:var(--font-after)] text-[22vw] font-[300] italic leading-none tracking-[-0.04em] text-white/[0.03]">
            404
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
            <div className="text-[10px] uppercase tracking-[0.4em] text-[#A8926E]">
              Page introuvable
            </div>
            <h1 className="font-[family-name:var(--font-after)] text-[clamp(2rem,5vw,4rem)] font-[300] leading-[0.92] tracking-[-0.03em] text-[#f2efe8]">
              Cette page n'existe pas.
            </h1>
            <p className="max-w-[34ch] text-[13px] leading-[1.85] text-white/38">
              La page que vous cherchez a peut-être été déplacée ou n'existe plus.
            </p>

            <div className="mt-2 flex flex-wrap justify-center gap-4">
              <Link
                href="/"
                className="shimmer inline-flex min-h-11 items-center justify-center rounded-full bg-[#F2EFE8] px-7 text-[13px] font-semibold text-black transition hover:-translate-y-[1px]"
              >
                Accueil
              </Link>
              <Link
                href="/shop"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] px-7 text-[13px] font-semibold text-white/70 transition hover:border-white/20 hover:text-white"
              >
                Shop
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
