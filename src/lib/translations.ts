export type Language = "es" | "en";

export const translations = {
  es: {
    locale: "es" as const,
    phone: "641 312 550",
    navItems: [
      { label: "servicios", href: "servicios" },
      { label: "trabajos", href: "trabajos" },
      { label: "contacto", href: "contacto" },
    ],
    hero: {
      title: "MANTENIMIENTO DE",
      highlight: "PISCINAS",
      subtitle: "Control de cloro y pH, limpieza completa, mantenimiento de filtros y bombas. Operamos en el municipio de Turre y alrededores.",
      btnQuote: "Presupuesto",
      btnServices: "Ver servicios",
      imageAlt: "Mantenimiento de piscina",
    },
    services: {
      sectionId: "servicios",
      title: "Servicios de",
      highlight: "Mantenimiento",
      description: "Soluciones profesionales para el cuidado de tu piscina en la comarca de Almería.",
      items: [
        {
          title: "Control de cloro y pH",
          desc: "Ajuste preciso y seguro del agua.",
          desc2: "Equilibrio químico constante para tu piscina",
        },
        {
          title: "Limpieza completa",
          desc: "Fondo, paredes, skimmers y superficie.",
          desc2: "Piscina limpia y cristalina todo el año",
        },
        {
          title: "Filtros y bombas",
          desc: "Mantenimiento y puesta a punto de equipos.",
          desc2: "Revisión y funcionamiento óptimo del sistema",
        },
        {
          title: "Mantenimientos periódicos",
          desc: "Visitas programadas según tus necesidades.",
          desc2: "Servicio continuo en Turre y Almería",
        },
      ],
    },
    gallery: {
      sectionId: "trabajos",
      title: "Nuestros",
      highlight: "Trabajos",
      description: "Resultados reales en piscinas mantenidas por nosotros. Echa un vistazo a algunos de nuestros proyectos recientes.",
      projects: [
        {
          id: 1,
          name: "Mantenimiento de bomba",
          category: "Mantenimiento",
          details: "Revisión completa de la bomba, limpieza de filtros y verificación de funcionamiento para un rendimiento óptimo.",
        },
        {
          id: 2,
          name: "Reparación de filtro de arena",
          category: "Reparación",
          details: "Sustitución de arena, limpieza del sistema y ajuste de válvulas para una filtración eficiente.",
        },
        {
          id: 3,
          name: "Limpieza integral de piscina",
          category: "Limpieza",
          details: "Aspirado de fondo, cepillado de paredes y skimmers, dejando el agua cristalina y el espacio impecable.",
        },
        {
          id: 4,
          name: "Control de pH y química",
          category: "Química",
          details: "Ajuste preciso del pH, alcalinidad y cloro para mantener el equilibrio químico del agua.",
        },
      ],
    },
    contact: {
      sectionId: "contacto",
      title: "¿Tu piscina",
      highlight: "necesita atención?",
      description: "Ponte en contacto con nosotros y te daremos un presupuesto ajustado. Operamos en Turre y el Levante Almeriense.",
      nameLabel: "Nombre completo",
      phoneLabel: "Teléfono de contacto",
      messageLabel: "¿Qué necesitas?",
      namePlaceholder: "Ej. Juan Pérez",
      phonePlaceholder: "600 000 000",
      messagePlaceholder: "Detalla un poco el estado de tu piscina...",
      whyTitle: "¿Por qué elegirnos?",
      whyItems: [
        "Equipo especializado y certificado",
        "Presupuestos sin compromiso",
        "Disponibilidad para emergencias",
        "Garantía en todos nuestros servicios",
      ],
      caseTitle: "Cuéntanos tu caso",
      submit: "Enviar consulta",
      submitted: "✓ Mensaje enviado",
      thankYou: "¡Gracias! Nos pondremos en contacto pronto.",
    },
    footer: "© {year} Piscinas El Rubillo. Todos los derechos reservados.",
    localeLabels: {
      es: "ES",
      en: "EN",
    },
    localeAria: {
      es: "Cambiar a español",
      en: "Cambiar a inglés",
    },
  },
  en: {
    locale: "en" as const,
    phone: "641 312 550",
    navItems: [
      { label: "services", href: "services" },
      { label: "projects", href: "projects" },
      { label: "contact", href: "contact" },
    ],
    hero: {
      title: "POOL",
      highlight: "MAINTENANCE",
      subtitle: "Chlorine and pH control, full cleaning, filter and pump maintenance. We operate in Turre and the surrounding area.",
      btnQuote: "Quote",
      btnServices: "View services",
      imageAlt: "Pool maintenance",
    },
    services: {
      sectionId: "services",
      title: "Services",
      highlight: "Maintenance",
      description: "Professional solutions for your pool care in the Almería region.",
      items: [
        {
          title: "Chlorine and pH control",
          desc: "Precise and safe water adjustment.",
          desc2: "Constant chemical balance for your pool",
        },
        {
          title: "Complete cleaning",
          desc: "Floor, walls, skimmers and surface.",
          desc2: "Crystal clear water all year round",
        },
        {
          title: "Filters and pumps",
          desc: "Equipment maintenance and tuning.",
          desc2: "Inspection and optimal system performance",
        },
        {
          title: "Regular maintenance",
          desc: "Scheduled visits according to your needs.",
          desc2: "Continuous service in Turre and Almería",
        },
      ],
    },
    gallery: {
      sectionId: "projects",
      title: "Our",
      highlight: "Projects",
      description: "Real results in pools maintained by us. Take a look at some of our recent projects.",
      projects: [
        {
          id: 1,
          name: "Pump maintenance",
          category: "Maintenance",
          details: "Full pump inspection, filter cleaning and performance verification for reliable operation.",
        },
        {
          id: 2,
          name: "Sand filter repair",
          category: "Repair",
          details: "Sand replacement, system cleaning and valve adjustment for efficient filtration.",
        },
        {
          id: 3,
          name: "Complete pool cleaning",
          category: "Cleaning",
          details: "Floor vacuuming, wall brushing and skimmer cleaning for crystal-clear water.",
        },
        {
          id: 4,
          name: "pH and chemistry control",
          category: "Chemistry",
          details: "Precise pH, alkalinity and chlorine adjustment to keep the water balanced.",
        },
      ],
    },
    contact: {
      sectionId: "contact",
      title: "Does your pool",
      highlight: "need attention?",
      description: "Contact us and we will give you a tailored estimate. We operate in Turre and eastern Almería.",
      nameLabel: "Full name",
      phoneLabel: "Contact phone",
      messageLabel: "What do you need?",
      namePlaceholder: "E.g. John Doe",
      phonePlaceholder: "600 000 000",
      messagePlaceholder: "Briefly describe your pool condition...",
      whyTitle: "Why choose us?",
      whyItems: [
        "Specialized and certified team",
        "No-obligation estimates",
        "Emergency availability",
        "Warranty on all our services",
      ],
      caseTitle: "Tell us your case",
      submit: "Send inquiry",
      submitted: "✓ Message sent",
      thankYou: "Thank you! We will contact you soon.",
    },
    footer: "© {year} Piscinas El Rubillo. All rights reserved.",
    localeLabels: {
      es: "ES",
      en: "EN",
    },
    localeAria: {
      es: "Switch to Spanish",
      en: "Switch to English",
    },
  },
} as const;

export type TranslationStrings = (typeof translations)[keyof typeof translations];
