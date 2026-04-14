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
      highlight: "PISCINAS EN ALMERÍA",
      subtitle: "Control de cloro y pH, limpieza completa y mantenimiento de bombas en Turre, Mojácar, Garrucha y Vera. Tu piscina siempre lista con Piscinas El Rubillo.",
      btnQuote: "Presupuesto Gratis",
      btnServices: "Ver servicios",
      imageAlt: "Mantenimiento profesional de piscinas en el Levante Almeriense",
    },
    services: {
      sectionId: "servicios",
      title: "Servicios de",
      highlight: "Mantenimiento",
      description: "Soluciones profesionales para el cuidado de tu piscina en Turre, Vera Playa, Villaricos y toda la comarca del Levante Almeriense.",
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
          desc2: "Servicio continuo en Turre y alrededores",
        },
      ],
    },
    gallery: {
      sectionId: "trabajos",
      title: "Nuestros",
      highlight: "Trabajos",
      description: "Resultados reales en piscinas mantenidas por nosotros. Echa un vistazo a algunos de nuestros proyectos recientes en Sierra Cabrera y alrededores.",
      projects: [
        {
          id: 1,
          name: "Mantenimiento de bomba",
          category: "Mantenimiento",
          details: "Revisión completa de la bomba, limpieza de filtros y verificación de funcionamiento en chalet de Sierra Cabrera.",
        },
        {
          id: 2,
          name: "Reparación de filtro de arena",
          category: "Reparación",
          details: "Sustitución de arena, limpieza del sistema y ajuste de válvulas en piscina privada de Sierra Cabrera.",
        },
        {
          id: 3,
          name: "Limpieza integral de piscina",
          category: "Limpieza",
          details: "Aspirado de fondo, cepillado de paredes y skimmers en Sierra Cabrera, dejando el agua cristalina.",
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
      description: "Ponte en contacto con nosotros para un presupuesto ajustado. Operamos en Turre, Mojácar, Garrucha, Vera Playa, Villaricos y Palomares.",
      nameLabel: "Nombre completo",
      phoneLabel: "Teléfono de contacto",
      messageLabel: "¿Qué necesitas?",
      namePlaceholder: "Ej. Juan Pérez",
      phonePlaceholder: "600 000 000",
      messagePlaceholder: "Ej: Limpieza en Sierra Cabrera o reparación en Mojácar...",
      whyTitle: "¿Por qué elegirnos?",
      whyItems: [
        "Especialistas en el Levante Almeriense",
        "Presupuestos sin compromiso",
        "Disponibilidad para emergencias",
        "Garantía en todos nuestros servicios",
      ],
      caseTitle: "Cuéntanos tu caso",
      submit: "Enviar consulta",
      submitted: "✓ Mensaje enviado",
      thankYou: "¡Gracias! Nos pondremos en contacto pronto.",
    },
    footer: "© {year} Piscinas El Rubillo - Mantenimiento en Turre, Mojácar, Vera y Sierra Cabrera.",
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
      subtitle: "Chlorine and pH control, full cleaning, filter and pump maintenance in Turre, Mojácar, Garrucha and Vera.",
      btnQuote: "Free Quote",
      btnServices: "View services",
      imageAlt: "Professional pool maintenance in Almería",
    },
    services: {
      sectionId: "services",
      title: "Services",
      highlight: "Maintenance",
      description: "Professional solutions for your pool care in Turre, Vera Playa, Villaricos and the Almería region.",
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
      description: "Real results in pools maintained by us. Check out our recent projects in Sierra Cabrera and nearby areas.",
      projects: [
        {
          id: 1,
          name: "Pump maintenance",
          category: "Maintenance",
          details: "Full pump inspection and filter cleaning in a Sierra Cabrera villa.",
        },
        {
          id: 2,
          name: "Sand filter repair",
          category: "Repair",
          details: "Sand replacement and valve adjustment in Sierra Cabrera.",
        },
        {
          id: 3,
          name: "Complete pool cleaning",
          category: "Cleaning",
          details: "Floor vacuuming and wall brushing in Sierra Cabrera for crystal-clear water.",
        },
        {
          id: 4,
          name: "pH and chemistry control",
          category: "Chemistry",
          details: "Precise pH and chlorine adjustment to keep the water balanced.",
        },
      ],
    },
    contact: {
      sectionId: "contact",
      title: "Does your pool",
      highlight: "need attention?",
      description: "Contact us for a tailored estimate. We operate in Turre, Mojácar, Garrucha, Vera Playa and Palomares.",
      nameLabel: "Full name",
      phoneLabel: "Contact phone",
      messageLabel: "What do you need?",
      namePlaceholder: "E.g. John Doe",
      phonePlaceholder: "600 000 000",
      messagePlaceholder: "E.g: Cleaning in Sierra Cabrera or repair in Mojácar...",
      whyTitle: "Why choose us?",
      whyItems: [
        "Local specialists in Eastern Almería",
        "Free no-obligation estimates",
        "Emergency availability",
        "Warranty on all our services",
      ],
      caseTitle: "Tell us your case",
      submit: "Send inquiry",
      submitted: "✓ Message sent",
      thankYou: "Thank you! We will contact you soon.",
    },
    footer: "© {year} Piscinas El Rubillo - Maintenance in Turre, Mojácar, Vera and Sierra Cabrera.",
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