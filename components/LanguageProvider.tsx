"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  defaultLanguage,
  isLanguage,
  translate,
  type Language,
} from "../lib/i18n";

const SITE_TITLES: Record<Language, string> = {
  fr: "Atelier Kūra — Vêtements en séries limitées",
  en: "Atelier Kūra — Limited-Series Garments",
  de: "Atelier Kūra — Kleidung in limitierten Serien",
};

const STORAGE_KEY = "kura-language";

type I18nContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export default function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage);

  // Restore from localStorage, fall back to browser language
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && isLanguage(stored)) {
      setLanguageState(stored);
      return;
    }
    const browserCode = navigator.language.slice(0, 2);
    if (isLanguage(browserCode)) {
      setLanguageState(browserCode);
    }
  }, []);

  // Keep <html lang> and tab title in sync
  useEffect(() => {
    document.documentElement.lang = language;
    // Only update title if it still matches one of our known site titles
    // (don't overwrite product-page titles set by Next.js)
    const current = document.title;
    const isRootTitle = Object.values(SITE_TITLES).some((t) => current === t);
    if (isRootTitle || current === "") {
      document.title = SITE_TITLES[language];
    }
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  }, []);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: (key: string) => translate(language, key),
    }),
    [language, setLanguage]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n must be used inside LanguageProvider");
  }

  return context;
}
