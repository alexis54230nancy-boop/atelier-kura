"use client";

import Link from "next/link";
import { useI18n } from "./LanguageProvider";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="relative overflow-hidden px-8 pb-0 pt-16 text-white/45 md:px-14">

      {/* Top rule */}
      <div className="mb-14 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      {/* Links grid */}
      <div className="grid gap-10 text-[13px] md:grid-cols-4 md:gap-8">
        <div>
          <span className="block text-[10px] uppercase tracking-[0.38em] text-[#f2efe8]/60">
            Atelier Kūra
          </span>
          <p className="mt-4 max-w-[24ch] text-[13px] leading-[1.8] text-white/35">
            {t("footer.tagline")}
          </p>
        </div>

        <div className="space-y-3.5">
          <p className="text-[9px] uppercase tracking-[0.38em] text-[#A8926E]/70">
            {t("footer.shop")}
          </p>
          {[
            ["/shop", t("nav.shop")],
            ["/capsule", t("nav.capsule")],
            ["/guide-tailles", t("footer.sizeGuide")],
          ].map(([href, label]) => (
            <Link key={href} href={href} className="block transition duration-200 hover:translate-x-1 hover:text-white/80">
              {label}
            </Link>
          ))}
        </div>

        <div className="space-y-3.5">
          <p className="text-[9px] uppercase tracking-[0.38em] text-[#A8926E]/70">
            {t("footer.house")}
          </p>
          {[
            ["/story", t("nav.story")],
            ["/fabrication", t("nav.fabrication")],
            ["/futures", t("nav.futures")],
          ].map(([href, label]) => (
            <Link key={href} href={href} className="block transition duration-200 hover:translate-x-1 hover:text-white/80">
              {label}
            </Link>
          ))}
        </div>

        <div className="space-y-3.5">
          <p className="text-[9px] uppercase tracking-[0.38em] text-[#A8926E]/70">
            {t("footer.help")}
          </p>
          {[
            ["/faq", "FAQ"],
            ["/contact", "Contact"],
            ["/livraison", t("footer.shipping")],
            ["/retours", t("footer.returns")],
            ["/cgv", t("footer.terms")],
            ["/mentions-legales", t("footer.legal")],
          ].map(([href, label]) => (
            <Link key={href} href={href} className="block transition duration-200 hover:translate-x-1 hover:text-white/80">
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Giant KŪRA — architectural bottom statement */}
      <div className="relative mt-16 overflow-hidden">
        <div
          aria-hidden
          className="select-none whitespace-nowrap font-[family-name:var(--font-after)] text-[22vw] font-[300] italic leading-[0.82] tracking-[-0.04em] text-white/[0.028]"
        >
          Kūra
        </div>

        {/* Copyright overlay — sits on top of the big text */}
        <div className="absolute bottom-[18%] left-0 right-0 flex flex-col gap-1 text-[9px] uppercase tracking-[0.3em] text-white/20 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Atelier Kūra</span>
          <span>Drop 01 · French Limited Series</span>
        </div>
      </div>
    </footer>
  );
}
