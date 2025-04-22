import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define locales with new marketing text keys
const locales = {
  en: {
    hero_title: "Unleash the power of numbers!",
    hero_description:
      "Dex10 is your fun and easy way to master math. Download now and start your journey to math excellence!",
    download_now: "Download Now",
    learn_more: "Learn More",
    cotd_marketing_title: "Creature of the Day",
    cotd_marketing_desc: "Discover a unique and fascinating creature every day! Tap to reveal and explore the wonders of our amazing creatures.",
    cotd_reveal: "Reveal Creature",
  },
  es: {
    hero_title: "¡Libera el poder de los números!",
    hero_description:
      "Dex10 es tu manera fácil y divertida de dominar las matemáticas. ¡Descarga ahora y comienza tu viaje hacia la excelencia matemática!",
    download_now: "Descargar Ahora",
    learn_more: "Aprende Más",
    cotd_marketing_title: "Criatura del Día",
    cotd_marketing_desc: "¡Descubre una criatura única y fascinante cada día! Toca para revelar y explorar las maravillas de nuestras increíbles criaturas.",
    cotd_reveal: "Revelar Criatura",
  },
  // Add translations for other languages similarly
};

interface LocaleContextProps {
  locale: string;
  setLocale: (locale: string) => void;
  t: any;
}

const LocaleContext = createContext<LocaleContextProps>({
  locale: 'en',
  setLocale: () => {},
  t: locales.en,
});

interface LocaleProviderProps {
  children: ReactNode;
}

const LocaleProvider: React.FC<LocaleProviderProps> = ({ children }) => {
  const [locale, setLocale] = useState<string>('en');

  const t = locales[locale] || locales.en;

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
};

const useLocale = () => useContext(LocaleContext);

export { LocaleProvider, useLocale };
