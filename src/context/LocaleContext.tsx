
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
    ready_adventure: "Ready for an adventure?",
    ready_adventure_desc: "Download Dex10 now and start your journey to discover all the amazing creatures!",
    links: "Links",
    features: "Features",
    privacy_policy: "Privacy Policy",
    contact: "Contact Us",
    connect: "Connect",
    faq_desc: "Got questions? Follow us on social media for updates and support!",
    feedback_mail: "feedback@dex10app.com",
    legal_disclaimer_title: "Legal Disclaimer",
    legal_disclaimer: "Dex10 is a fan-made app and is not affiliated with, endorsed by, or related to any game company. All creature names, images, and related content are property of their respective owners.",
    copyright: "© {year} Dex10 App. All rights reserved.",
    encyclopedia_title: "Complete Creature Encyclopedia",
    encyclopedia_desc: "Access detailed information on over 1,000 creatures, including stats, abilities, evolutions and more!",
    comprehensive_db: "Comprehensive Database",
    comprehensive_db_desc: "Access complete information on all creatures, including stats, abilities, and evolutions.",
    advanced_search: "Advanced Search",
    advanced_search_desc: "Find exactly what you're looking for with powerful filtering and sorting options.",
    personalized_experience: "Personalized Experience",
    personalized_experience_desc: "Track your favorites and create custom lists for a tailored experience.",
    faq_title: "Frequently Asked Questions",
    faq_q1: "Is Dex10 free to use?",
    faq_a1: "Yes! Dex10 is completely free to download and use. There are optional in-app purchases for premium features.",
    faq_q2: "Do I need an internet connection?",
    faq_a2: "Most basic features work offline after initial download. Online connection is required for updates and some advanced features.",
    faq_q3: "How often is the app updated?",
    faq_a3: "We release updates regularly to add new creatures, fix bugs, and improve features. Check for updates monthly!",
    faq_q4: "Can I suggest new features?",
    faq_a4: "Absolutely! We love hearing from our users. Send your suggestions to our feedback email or social media channels."
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
    ready_adventure: "¿Listo para una aventura?",
    ready_adventure_desc: "¡Descarga Dex10 ahora y comienza tu viaje para descubrir todas las criaturas asombrosas!",
    links: "Enlaces",
    features: "Características",
    privacy_policy: "Política de Privacidad",
    contact: "Contáctanos",
    connect: "Conectar",
    faq_desc: "¿Tienes preguntas? ¡Síguenos en redes sociales para actualizaciones y soporte!",
    feedback_mail: "feedback@dex10app.com",
    legal_disclaimer_title: "Aviso Legal",
    legal_disclaimer: "Dex10 es una aplicación creada por fans y no está afiliada, respaldada o relacionada con ninguna compañía de juegos. Todos los nombres de criaturas, imágenes y contenido relacionado son propiedad de sus respectivos dueños.",
    copyright: "© {year} Dex10 App. Todos los derechos reservados.",
    encyclopedia_title: "Enciclopedia Completa de Criaturas",
    encyclopedia_desc: "¡Accede a información detallada sobre más de 1,000 criaturas, incluyendo estadísticas, habilidades, evoluciones y más!",
    comprehensive_db: "Base de Datos Completa",
    comprehensive_db_desc: "Accede a información completa sobre todas las criaturas, incluyendo estadísticas, habilidades y evoluciones.",
    advanced_search: "Búsqueda Avanzada",
    advanced_search_desc: "Encuentra exactamente lo que estás buscando con potentes opciones de filtrado y clasificación.",
    personalized_experience: "Experiencia Personalizada",
    personalized_experience_desc: "Haz seguimiento de tus favoritos y crea listas personalizadas para una experiencia a medida.",
    faq_title: "Preguntas Frecuentes",
    faq_q1: "¿Es Dex10 gratis?",
    faq_a1: "¡Sí! Dex10 es completamente gratuito para descargar y usar. Hay compras opcionales dentro de la aplicación para funciones premium.",
    faq_q2: "¿Necesito una conexión a internet?",
    faq_a2: "La mayoría de las funciones básicas funcionan sin conexión después de la descarga inicial. Se requiere conexión en línea para actualizaciones y algunas funciones avanzadas.",
    faq_q3: "¿Con qué frecuencia se actualiza la aplicación?",
    faq_a3: "Lanzamos actualizaciones regularmente para agregar nuevas criaturas, corregir errores y mejorar funciones. ¡Busca actualizaciones mensualmente!",
    faq_q4: "¿Puedo sugerir nuevas funciones?",
    faq_a4: "¡Absolutamente! Nos encanta escuchar a nuestros usuarios. Envía tus sugerencias a nuestro correo electrónico de comentarios o a nuestras redes sociales."
  },
  // Add translations for other languages similarly
};

// Define language display names
const languageDisplay = {
  en: "English",
  es: "Español",
};

interface LocaleContextProps {
  locale: string;
  setLocale: (locale: string) => void;
  t: any;
  languageDisplay: Record<string, string>;
}

const LocaleContext = createContext<LocaleContextProps>({
  locale: 'en',
  setLocale: () => {},
  t: locales.en,
  languageDisplay,
});

interface LocaleProviderProps {
  children: ReactNode;
}

const LocaleProvider: React.FC<LocaleProviderProps> = ({ children }) => {
  const [locale, setLocale] = useState<string>('en');

  const t = locales[locale as keyof typeof locales] || locales.en;

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t, languageDisplay }}>
      {children}
    </LocaleContext.Provider>
  );
};

const useLocale = () => useContext(LocaleContext);

export { LocaleProvider, useLocale };
