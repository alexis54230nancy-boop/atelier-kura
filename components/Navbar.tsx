"use client";

import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { useI18n } from "./LanguageProvider";

export default function Navbar() {
  const { t } = useI18n();

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[72px] w-[min(1280px,calc(100%-32px))] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/logos/logo.png"
            alt="Atelier Kūra"
            width={42}
            height={42}
            className="h-auto w-[42px] object-contain"
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

        <div className="hidden items-center gap-7 text-sm text-white/70 md:flex">
          <Link href="/shop" className="transition hover:text-white">
            {t("nav.shop")}
          </Link>

          <Link href="/capsule" className="transition hover:text-white">
            {t("nav.capsule")}
          </Link>

          <Link href="/story" className="transition hover:text-white">
            {t("nav.story")}
          </Link>

          <Link href="/fabrication" className="transition hover:text-white">
            {t("nav.fabrication")}
          </Link>

          <Link href="/futures" className="transition hover:text-white">
            {t("nav.futures")}
          </Link>

          <Link href="/#waitlist" className="transition hover:text-white">
            {t("nav.waitlist")}
          </Link>
        </div>

        <LanguageSwitcher />
      </div>
    </nav>
  );
}
