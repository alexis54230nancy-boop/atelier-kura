"use client";

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
            className={`inline-flex h-9 items-center gap-1 rounded-full px-3 text-xs font-semibold transition ${
              isActive
                ? "bg-[#F2EFE8] text-black"
                : "text-white/65 hover:bg-white/10 hover:text-white"
            }`}
          >
            <span aria-hidden="true">{item.flag}</span>
            <span>{item.shortLabel}</span>
          </button>
        );
      })}
    </div>
  );
}