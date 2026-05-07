"use client";

import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { useI18n } from "./LanguageProvider";
import { useCart } from "./CartProvider";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/shop", key: "nav.shop" },
  { href: "/capsule", key: "nav.capsule" },
  { href: "/story", key: "nav.story" },
  { href: "/fabrication", key: "nav.fabrication" },
  { href: "/futures", key: "nav.futures" },
  { href: "/#waitlist", key: "nav.waitlist" },
] as const;

export default function Navbar() {
  const { t } = useI18n();
  const { openCart, totalItems } = useCart();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0b0b0c]/80 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.05)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex min-h-[72px] w-[min(1280px,calc(100%-32px))] items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/brand/logos/logo.png"
              alt="Atelier Kūra"
              width={38}
              height={38}
              className="h-auto w-[38px] object-contain"
              priority
            />
            <div className="flex flex-col leading-none">
              <span className="text-[11px] font-semibold tracking-[0.32em] text-white">
                ATELIER KŪRA
              </span>
              <span className="mt-1.5 text-[8px] tracking-[0.34em] text-white/35">
                DROP 01
              </span>
            </div>
          </Link>

          {/* Desktop links — ultra-spaced uppercase */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map(({ href, key }) => {
              const isActive = !href.includes("#") && pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative text-[10px] uppercase tracking-[0.25em] transition duration-300 hover:text-white/90 ${isActive ? "text-white/85" : "text-white/45"}`}
                >
                  {t(key)}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-1 left-0 h-px w-full bg-[#A8926E]/60"
                      transition={{ type: "spring", damping: 28, stiffness: 300 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Cart */}
            <button
              type="button"
              onClick={openCart}
              aria-label={t("cart.button")}
              className="relative flex h-8 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 text-[10px] uppercase tracking-[0.2em] text-white/50 backdrop-blur-xl transition duration-300 hover:border-white/20 hover:text-white/90"
            >
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden>
                <rect x="1" y="4.5" width="12" height="8.5" rx="1.5" stroke="currentColor" strokeWidth="1.1" />
                <path d="M4 4.5V3.5a3 3 0 0 1 6 0v1" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
              </svg>
              <span className="hidden sm:inline">{t("cart.button")}</span>
              {totalItems > 0 && (
                <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#A8926E] text-[9px] font-bold text-black">
                  {totalItems}
                </span>
              )}
            </button>

            <LanguageSwitcher />

            {/* Hamburger */}
            <button
              className="flex h-8 w-8 flex-col items-center justify-center gap-[5px] md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
            >
              <span className={`block h-px w-4 bg-white/70 transition-all duration-300 ${open ? "translate-y-[5px] rotate-45" : ""}`} />
              <span className={`block h-px w-4 bg-white/70 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`block h-px w-4 bg-white/70 transition-all duration-300 ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
            />

            <motion.div
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 32, stiffness: 340 }}
              className="fixed right-0 top-0 bottom-0 z-50 flex w-[68vw] max-w-[280px] flex-col border-l border-white/[0.06] bg-[#0a0a0b]/98 px-8 pb-10 pt-24 backdrop-blur-xl md:hidden"
            >
              <nav className="flex flex-col gap-8">
                {NAV_LINKS.map(({ href, key }, i) => {
                  const isActive = !href.includes("#") && pathname.startsWith(href);
                  return (
                    <motion.div
                      key={href}
                      initial={{ opacity: 0, x: 14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.04, duration: 0.24 }}
                    >
                      <Link
                        href={href}
                        onClick={() => setOpen(false)}
                        className={`text-[11px] uppercase tracking-[0.3em] transition-colors hover:text-white/90 ${isActive ? "text-[#A8926E]" : "text-white/50"}`}
                      >
                        {t(key)}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="mt-auto space-y-2">
                <div className="h-px w-6 bg-[#A8926E]/35" />
                <span className="text-[8px] uppercase tracking-[0.38em] text-white/20">
                  Drop 01 · Limited Series
                </span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
