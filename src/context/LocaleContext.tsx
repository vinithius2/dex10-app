import React, { createContext, useContext, useState, ReactNode } from 'react';

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
    faq_a4: "Absolutely! We love hearing from our users. Send your suggestions to our feedback email or social media channels.",
    key_features: "Key Features",
    key_features_desc: "Discover what makes Dex10 special",
    feat_creatures: "Complete Creatures",
    feat_creatures_desc: "Access detailed information on over 1,000 creatures",
    feat_offline: "Offline Mode",
    feat_offline_desc: "Use the app even without an internet connection",
    feat_filters: "Advanced Filters",
    feat_filters_desc: "Find exactly what you're looking for with our advanced search",
    feat_daily: "Daily Content",
    feat_daily_desc: "Discover a new creature every day",
    feat_favorites: "Favorites",
    feat_favorites_desc: "Mark and organize your favorite creatures",
    feat_updates: "Regular Updates",
    feat_updates_desc: "New creatures and features added frequently",
    feat_nologin: "No Login",
    feat_nologin_desc: "Start using immediately, no registration required",
    feat_feedback: "Active Support",
    feat_feedback_desc: "Contact us for suggestions and help"
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
    faq_a4: "¡Absolutamente! Nos encanta escuchar a nuestros usuarios. Envía tus sugerencias a nuestro correo electrónico de comentarios o a nuestras redes sociales.",
    key_features: "Características Principales",
    key_features_desc: "Descubre lo que hace especial a Dex10",
    feat_creatures: "Criaturas Completas",
    feat_creatures_desc: "Accede a información detallada sobre más de 1.000 criaturas",
    feat_offline: "Modo Sin Conexión",
    feat_offline_desc: "Usa la aplicación incluso sin conexión a Internet",
    feat_filters: "Filtros Avanzados",
    feat_filters_desc: "Encuentra exactamente lo que buscas con nuestra búsqueda avanzada",
    feat_daily: "Contenido Diario",
    feat_daily_desc: "Descubre una nueva criatura cada día",
    feat_favorites: "Favoritos",
    feat_favorites_desc: "Marca y organiza tus criaturas favoritas",
    feat_updates: "Actualizaciones Regulares",
    feat_updates_desc: "Nuevas criaturas y funciones añadidas con frecuencia",
    feat_nologin: "Sin Inicio de Sesión",
    feat_nologin_desc: "Empieza a usarla inmediatamente, sin necesidad de registrarte",
    feat_feedback: "Soporte Activo",
    feat_feedback_desc: "Ponte en contacto con nosotros para sugerencias y ayuda"
  },
  pt: {
    hero_title: "Liberte o poder dos números!",
    hero_description: "Dex10 é sua maneira divertida e fácil de dominar matemática. Baixe agora e comece sua jornada para a excelência em matemática!",
    download_now: "Baixar Agora",
    learn_more: "Saiba Mais",
    cotd_marketing_title: "Criatura do Dia",
    cotd_marketing_desc: "Descubra uma criatura única e fascinante todos os dias! Toque para revelar e explorar as maravilhas de nossas incríveis criaturas.",
    cotd_reveal: "Revelar Criatura",
    ready_adventure: "Pronto para uma aventura?",
    ready_adventure_desc: "Baixe o Dex10 agora e comece sua jornada para descobrir todas as criaturas incríveis!",
    links: "Links",
    features: "Recursos",
    privacy_policy: "Política de Privacidade",
    contact: "Contato",
    connect: "Conecte-se",
    faq_desc: "Tem perguntas? Siga-nos nas redes sociais para atualizações e suporte!",
    feedback_mail: "feedback@dex10app.com",
    legal_disclaimer_title: "Aviso Legal",
    legal_disclaimer: "Dex10 é um aplicativo criado por fãs e não está afiliado, endossado ou relacionado a nenhuma empresa de jogos. Todos os nomes de criaturas, imagens e conteúdo relacionado são propriedade de seus respectivos donos.",
    copyright: "© {year} Dex10 App. Todos os direitos reservados.",
    encyclopedia_title: "Enciclopédia Completa de Criaturas",
    encyclopedia_desc: "Acesse informações detalhadas sobre mais de 1.000 criaturas, incluindo estatísticas, habilidades, evoluções e mais!",
    comprehensive_db: "Banco de Dados Completo",
    comprehensive_db_desc: "Acesse informações completas sobre todas as criaturas, incluindo estatísticas, habilidades e evoluções.",
    advanced_search: "Busca Avançada",
    advanced_search_desc: "Encontre exatamente o que está procurando com poderosas opções de filtro e classificação.",
    personalized_experience: "Experiência Personalizada",
    personalized_experience_desc: "Acompanhe seus favoritos e crie listas personalizadas para uma experiência sob medida.",
    faq_title: "Perguntas Frequentes",
    faq_q1: "O Dex10 é gratuito?",
    faq_a1: "Sim! O Dex10 é completamente gratuito para baixar e usar. Existem compras opcionais no aplicativo para recursos premium.",
    faq_q2: "Preciso de conexão com a internet?",
    faq_a2: "A maioria dos recursos básicos funciona offline após o download inicial. Conexão online é necessária para atualizações e alguns recursos avançados.",
    faq_q3: "Com que frequência o aplicativo é atualizado?",
    faq_a3: "Lançamos atualizações regularmente para adicionar novas criaturas, corrigir bugs e melhorar recursos. Verifique as atualizações mensalmente!",
    faq_q4: "Posso sugerir novos recursos?",
    faq_a4: "Absolutamente! Adoramos ouvir nossos usuários. Envie suas sugestões para nosso e-mail de feedback ou redes sociais.",
    key_features: "Recursos Principais",
    key_features_desc: "Descubra o que torna o Dex10 especial",
    feat_creatures: "Criaturas Completas",
    feat_creatures_desc: "Acesse informações detalhadas sobre mais de 1.000 criaturas",
    feat_offline: "Modo Offline",
    feat_offline_desc: "Use o aplicativo mesmo sem conexão com a internet",
    feat_filters: "Filtros Avançados",
    feat_filters_desc: "Encontre exatamente o que procura com nossa busca avançada",
    feat_daily: "Conteúdo Diário",
    feat_daily_desc: "Descubra uma nova criatura todos os dias",
    feat_favorites: "Favoritos",
    feat_favorites_desc: "Marque e organize suas criaturas favoritas",
    feat_updates: "Atualizações Regulares",
    feat_updates_desc: "Novas criaturas e recursos adicionados frequentemente",
    feat_nologin: "Sem Login",
    feat_nologin_desc: "Comece a usar imediatamente, sem necessidade de cadastro",
    feat_feedback: "Suporte Ativo",
    feat_feedback_desc: "Entre em contato conosco para sugestões e ajuda"
  }
};

// Update language display names to include Portuguese
const languageDisplay = {
  en: "English",
  es: "Español",
  pt: "Português"
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
