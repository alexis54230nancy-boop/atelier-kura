"use client";

import Link from "next/link";
import { useI18n } from "./LanguageProvider";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="px-4 pb-16 pt-10 text-white/60">
      <div className="mx-auto grid w-[min(1280px,100%)] gap-8 border-t border-white/10 pt-8 text-sm md:grid-cols-4">
        <div>
          <strong className="text-white">Atelier Kūra</strong>
          <p className="mt-3 max-w-xs leading-6 text-white/50">
            {t("footer.tagline")}
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.22em] text-[#A8926E]">
            {t("footer.shop")}
          </p>

          <Link href="/shop" className="block hover:text-white">
            {t("nav.shop")}
          </Link>

          <Link href="/capsule" className="block hover:text-white">
            {t("nav.capsule")}
          </Link>

          <Link href="/guide-tailles" className="block hover:text-white">
            {t("footer.sizeGuide")}
          </Link>
        </div>

        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.22em] text-[#A8926E]">
            {t("footer.house")}
          </p>

          <Link href="/story" className="block hover:text-white">
            {t("nav.story")}
          </Link>

          <Link href="/fabrication" className="block hover:text-white">
            {t("nav.fabrication")}
          </Link>

          <Link href="/futures" className="block hover:text-white">
            {t("nav.futures")}
          </Link>
        </div>

        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.22em] text-[#A8926E]">
            {t("footer.help")}
          </p>

          <Link href="/faq" className="block hover:text-white">
            FAQ
          </Link>

          <Link href="/contact" className="block hover:text-white">
            Contact
          </Link>

          <Link href="/livraison" className="block hover:text-white">
            {t("footer.shipping")}
          </Link>

          <Link href="/retours" className="block hover:text-white">
            {t("footer.returns")}
          </Link>

          <Link href="/cgv" className="block hover:text-white">
            {t("footer.terms")}
          </Link>

          <Link href="/mentions-legales" className="block hover:text-white">
            {t("footer.legal")}
          </Link>
        </div>
      </div>
    </footer>
  );
}