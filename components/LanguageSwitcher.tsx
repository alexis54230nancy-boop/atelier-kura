"use client";

import { motion } from "framer-motion";
import { languages } from "../lib/i18n";
import { useI18n } from "./LanguageProvider";

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useI18n();

  return (
    <div
      className="flex items-center gap-1 rounded-full border border-white/10 bg-black/30 p-1 backdrop-blur-xl"
      aria-label={t("language.label")}
    >
      {languages.map((item) => {
        const isActive = language === item.code;

        return (
          <button
            key={item.code}
            type="button"
            onClick={() => setLanguage(item.code)}
            aria-pressed={isActive}
            title={item.label}
            className="relative inline-flex h-9 items-center gap-1 rounded-full px-3 text-xs font-semibold transition-colors"
          >
            {isActive && (
              <motion.span
                layoutId="lang-pill"
                className="absolute inset-0 rounded-full bg-[#F2EFE8]"
                transition={{ type: "spring", damping: 26, stiffness: 320 }}
              />
            )}
            <span
              aria-hidden="true"
              className={`relative z-10 transition-colors duration-200 ${isActive ? "text-black" : "text-white/65"}`}
            >
              {item.flag}
            </span>
            <span
              className={`relative z-10 transition-colors duration-200 ${isActive ? "text-black" : "text-white/65"}`}
            >
              {item.shortLabel}
            </span>
          </button>
        );
      })}
    </div>
  );
}