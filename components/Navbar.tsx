"use client";

import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { useI18n } from "./LanguageProvider";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[72px] w-[min(1280px,calc(100%-32px))] items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
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

          {/* Desktop links */}
          <div className="hidden items-center gap-7 text-sm text-white/70 md:flex">
            {NAV_LINKS.map(({ href, key }) => (
              <Link key={href} href={href} className="transition hover:text-white">
                {t(key)}
              </Link>
            ))}
          </div>

          {/* Right: language switcher + hamburger */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />

            <button
              className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
            >
              <span
                className={`block h-[1.5px] w-5 bg-white/80 transition-all duration-300 ${open ? "translate-y-[6.5px] rotate-45" : ""}`}
              />
              <span
                className={`block h-[1.5px] w-5 bg-white/80 transition-all duration-300 ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-[1.5px] w-5 bg-white/80 transition-all duration-300 ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
            />

            {/* Panel */}
            <motion.div
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 320 }}
              className="fixed right-0 top-0 bottom-0 z-50 flex w-[72vw] max-w-[300px] flex-col border-l border-white/10 bg-[#0b0b0c]/95 px-8 pb-10 pt-24 backdrop-blur-xl md:hidden"
            >
              <nav className="flex flex-col gap-7">
                {NAV_LINKS.map(({ href, key }, i) => (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 + i * 0.04, duration: 0.25 }}
                  >
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className="text-base tracking-[0.2em] text-white/60 transition-colors hover:text-white"
                    >
                      {t(key)}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto">
                <div className="mb-4 h-px w-8 bg-[#A8926E]/40" />
                <span className="text-[10px] tracking-[0.3em] text-white/25">
                  DROP 01 — LIMITED
                </span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
