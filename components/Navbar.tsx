import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[72px] w-[min(1280px,calc(100%-32px))] items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/logos/logo.png"
            alt="Atelier Kūra"
            width={42}
            height={42}
            className="object-contain"
            priority
          />

          <div className="flex flex-col leading-none">
            <span className="text-sm font-semibold tracking-[0.25em] text-white">
              ATELIER KŪRA
            </span>
            <span className="mt-2 text-[10px] tracking-[0.3em] text-white/50">
              DROP 01
            </span>
          </div>
        </Link>

        <div className="hidden gap-8 text-sm text-white/70 md:flex">
          <Link href="/shop" className="transition hover:text-white">
            Shop
          </Link>

          <Link href="/story" className="transition hover:text-white">
            Story
          </Link>

          <Link href="/fabrication" className="transition hover:text-white">
            Fabrication
          </Link>

          <Link href="/#waitlist" className="transition hover:text-white">
            Waitlist
          </Link>
        </div>
      </div>
    </nav>
  );
}
