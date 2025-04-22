
import React, { createContext, useContext, useState, ReactNode } from "react";

type LanguageKey = "en" | "pt" | "es" | "fr" | "hi" | "zh";

const languageDisplay = {
  en: "English",
  pt: "Português",
  es: "Español",
  fr: "Français",
  hi: "हिन्दी",
  zh: "中文",
} as const;

const translations = {
  en: {
    features: "Features",
    about: "About",
    faq: "FAQ",
    download: "Download",
  },
  pt: {
    features: "Recursos",
    about: "Sobre",
    faq: "Perguntas",
    download: "Baixar",
  },
  es: {
    features: "Características",
    about: "Acerca de",
    faq: "Preguntas",
    download: "Descargar",
  },
  fr: {
    features: "Fonctionnalités",
    about: "À propos",
    faq: "FAQ",
    download: "Télécharger",
  },
  hi: {
    features: "विशेषताएँ",
    about: "परिचय",
    faq: "सवाल",
    download: "डाउनलोड",
  },
  zh: {
    features: "功能",
    about: "关于",
    faq: "常见问题",
    download: "下载",
  },
};

interface LocaleContextValue {
  language: LanguageKey;
  setLanguage: (lang: LanguageKey) => void;
  t: typeof translations["en"];
  languageDisplay: typeof languageDisplay;
}

const LocaleContext = createContext<LocaleContextValue>({
  language: "en",
  setLanguage: () => {},
  t: translations["en"],
  languageDisplay,
});

export const useLocale = () => useContext(LocaleContext);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<LanguageKey>("en");
  const t = translations[language];
  return (
    <LocaleContext.Provider value={{ language, setLanguage, t, languageDisplay }}>
      {children}
    </LocaleContext.Provider>
  );
}
