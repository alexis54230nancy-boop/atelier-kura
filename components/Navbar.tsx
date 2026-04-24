import Image from "next/image";

<Image
  src="/brand/logos/logo.png"
  alt="Atelier Kūra"
  width={60}
  height={60}
/>



export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0b0c]/80 backdrop-blur">
      <div className="mx-auto flex min-h-[72px] w-[min(1200px,calc(100%-32px))] items-center justify-between">
        <div className="flex flex-col uppercase tracking-[0.22em]">
          <span className="text-sm font-bold text-white">Atelier Kūra</span>
          <span className="text-[11px] text-white/60">Drop 01 Preview</span>
        </div>

        <div className="hidden gap-8 text-sm text-white/70 md:flex">
          <a href="#collection" className="hover:text-white">
            Collection
          </a>
          <a href="#story" className="hover:text-white">
            Histoire
          </a>
          <a href="#waitlist" className="hover:text-white">
            Waitlist
          </a>
        </div>
      </div>
    </nav>
  );
}
