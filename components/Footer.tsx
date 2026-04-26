import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-4 pb-16 pt-10 text-white/60">
      <div className="mx-auto grid w-[min(1280px,100%)] gap-8 border-t border-white/10 pt-8 text-sm md:grid-cols-4">
        <div>
          <strong className="text-white">Atelier Kūra</strong>
          <p className="mt-3 max-w-xs leading-6 text-white/50">
            Vêtements en séries limitées. Présence, précision, silence.
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.22em] text-[#A8926E]">
            Boutique
          </p>
          <Link href="/shop" className="block hover:text-white">
            Shop
          </Link>
          <Link href="/capsule" className="block hover:text-white">
            Capsule
          </Link>
          <Link href="/guide-tailles" className="block hover:text-white">
            Guide des tailles
          </Link>
        </div>

        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.22em] text-[#A8926E]">
            Maison
          </p>
          <Link href="/story" className="block hover:text-white">
            Story
          </Link>
          <Link href="/fabrication" className="block hover:text-white">
            Fabrication
          </Link>
          <Link href="/futures" className="block hover:text-white">
            Futures
          </Link>
        </div>

        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.22em] text-[#A8926E]">
            Aide
          </p>
          <Link href="/faq" className="block hover:text-white">
            FAQ
          </Link>
          <Link href="/contact" className="block hover:text-white">
            Contact
          </Link>
          <Link href="/livraison" className="block hover:text-white">
            Livraison
          </Link>
          <Link href="/retours" className="block hover:text-white">
            Retours
          </Link>
          <Link href="/cgv" className="block hover:text-white">
            CGV
          </Link>
          <Link href="/mentions-legales" className="block hover:text-white">
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}