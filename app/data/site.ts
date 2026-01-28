import type { IconKey } from '../components/icons'

export type Feature = { name: string; description: string; icon?: IconKey }
export type Item = { id: number; title: string; desc: string; image?: string; features?: Feature[] }

export const site: {
  name: string
  tagline: string
  title: string
  description: string
  email: string
  phone: string
  phones: {
    ar: string
    cl: string
  }
  emails: {
    ar: string
    cl: string
  }
  address: string
  url: string
  logo: string
  sameAs: string[]
  services: Item[]
  testimonials: { id: number; name: string; quote: string }[]
  specializations: Item[]
} = {
  name: "IAFA",
  tagline: "soluciones integrales de mantenimiento",
  // SEO title + description (optimizado: título <70 chars, descripción 150-160 chars)
  title: "IAFA - Soluciones Integrales de Mantenimiento | Argentina y Chile",
  description: "Servicios profesionales de mantenimiento preventivo y correctivo. Instalaciones sanitarias, eléctricas, HVAC y sistemas críticos. Cobertura en AR y CL.",
  // --- SEO
  // generic fallback email (kept for backwards compatibility)
  email: "contacto.cl@iafacorp.com",
  emails: {
    ar: "contacto.ar@iafacorp.com",
    cl: "contacto.cl@iafacorp.com",
  },
  // Primary contact phone (kept for backwards compatibility) - prefer using `phones` below
  phone: "+54 9 11 2518 6253",
  // Country-specific phones (Argentina, Chile). Replace with your real numbers.
  phones: {
    ar: "+54 9 11 2518 6253",
    cl: "+56 9 3027 5672",
  },
  address: "Buenos Aires, Argentina",
  // `NEXT_PUBLIC_SITE_URL` allows overriding the canonical URL per-environment (set this on Vercel to https://iafacorp.com)
  // Fallback to localhost for local development.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://iafacorp.com',
  logo: "/logo_banner.png",
  // TODO: Descomentar cuando las redes sociales estén activas
  sameAs: [
    // "https://www.facebook.com/iafacorp",
    // "https://www.instagram.com/iafacorp",
    // "https://www.linkedin.com/company/iafacorp"
  ],
  services: [
  // {
  //   id: 1,
  //   title: "Mantenimiento Preventivo",
  //   desc: "Planes periódicos para mantener tus instalaciones en óptimas condiciones.",
  //   features: [
  //     { name: "Instalaciones sanitarias", description: "Instalación y reemplazo de griferías y flexibles, y trabajamos con sistemas de termofusión en PPR, cobre y plástico, garantizando instalaciones seguras y duraderas.", icon: "wrench" },
  //     { name: "Servicio Integral HVAC", description: "Limpieza de evaporadores, condensadores y filtros, aplicación de biocida y control técnico con revisión y carga de gas, garantizando eficiencia y condiciones sanitarias adecuadas.", icon: "gear" },
  //     { name: "Mantenimiento de Sistemas de Incendio", description: "Servicio a detectores térmicos y de humo, verificación de detección de flujo y mantenimiento de sistemas hidráulicos con bombas Jockey, eléctricas y diésel, asegurando operación continua y normativa.", icon: "shield" },
  //     { name: "Servicio Técnico de Generadores y ATS", description: "Mantenimiento integral de generadores y tableros de transferencia automática (ATS). Aseguramos arranque confiable, pruebas periódicas y funcionamiento continuo para que nunca falte energía.", icon: "bolt" },
  //     { name: "Mantenimiento Eléctrico Preventivo", description: "mantenimiento programado de tableros, pruebas de aislación, análisis termográfico y verificación de conexiones críticas, garantizando continuidad operativa y cumplimiento normativo.", icon: "bolt" },
  //     { name: "Servicios de Obra Civil y Acabados", description: "Servicio de albañilería, pintura y sistemas de construcción en seco, instalación especializada de porcelanatos, cerámicos, revestimientos, papel tapiz y alfombras para proyectos residenciales y comerciales.", icon: "wrench" },
  //     { name: "Soporte Técnico de Urgencias", description: "Atención permanente 24/7 para fallas críticas en instalaciones eléctricas, sanitarias y sistemas de aire acondicionado, con personal capacitado para resolver incidentes con eficiencia y seguridad.", icon: "wrench" },
  //     { name: "Montajes, Instalaciones y Renovaciones", description: "Diseño, proyecto y ejecución de instalaciones sanitarias y eléctricas, cálculo e instalación de sistemas de aire acondicionado, además de ampliaciones y remodelaciones completas de espacios.", icon: "wrench" },
  //   ],
  // },
    {
      id: 1,
      title: "Mantenimiento de Instalaciones Edilicias",
      image: "/cooling.jpg",
      desc: "Servicio integral de mantenimiento preventivo y correctivo para garantizar el funcionamiento seguro, eficiente y duradero de todas las instalaciones del edificio.",
      features: [
  { name: "Instalaciones Sanitarias", description: "Mantenimiento y reparación de sistemas sanitarios, asegurando una operación confiable y sin fugas.", icon: "bathroom" as IconKey },
  { name: "Griferías y Flexibles", description: "Reemplazo de griferías y flexibles para mejorar el caudal, evitar pérdidas y renovar terminaciones.", icon: "faucet" as IconKey },
  { name: "Termofusión y Cañerías", description: "Trabajos en cañerías PPR, cobre y plástico mediante técnicas de termofusión que garantizan estanqueidad y durabilidad.", icon: "pipeline" as IconKey },
  { name: "Aire Acondicionado (HVAC)", description: "Limpieza y mantenimiento técnico para mejorar el rendimiento, reducir consumos y extender la vida útil del equipo.", icon: "airconditioner" as IconKey },
  { name: "Limpieza de Evaporadores y Condensadores", description: "Eliminación de suciedad que afecta el intercambio térmico, mejorando la eficiencia del sistema.", icon: "airconditioner2" as IconKey },
  { name: "Aplicación de Biocida", description: "Desinfección interna del equipo para prevenir hongos y bacterias, mejorando la calidad del aire.", icon: "virus" as IconKey },
  { name: "Limpieza de Filtros", description: "Restauración del flujo de aire y mejora del rendimiento mediante limpieza o recambio de filtros.", icon: "airfilter" as IconKey },
  { name: "Revisión y Carga de Gas", description: "Control de presiones, detección de fugas y recarga de refrigerante para recuperar la capacidad frigorífica.", icon: "gauge" as IconKey },
  { name: "Mantenimiento de Tableros Eléctricos", description: "Limpieza, ajuste y verificación de protecciones eléctricas para evitar fallas inesperadas.", icon: "bolt" as IconKey },
  { name: "Detección de Problemas de Aislación", description: "Pruebas técnicas para identificar fallas que pueden provocar cortocircuitos o riesgos eléctricos.", icon: "bolt" as IconKey },
     ],
    },
    {
      id: 2,
      title: "Sistemas Críticos y Seguridad Operativa",
      image: "/boiler-room.jpg",
      desc: "Servicios orientados a mantener en funcionamiento los sistemas esenciales del edificio.",
      features: [
  { name: "Sistemas de Incendio", description: "Mantenimiento completo de detección y extinción para garantizar la seguridad y cumplir normativas.", icon: "fireextinguisher" as IconKey },
  { name: "Detectores Térmicos y de Humo", description: "Pruebas, calibración y limpieza para asegurar que el sistema responda correctamente ante un evento.", icon: "smokedetector" as IconKey },
  { name: "Sistemas Hidráulicos de Incendio", description: "Control de válvulas, presiones y alimentación de agua para asegurar la operatividad del sistema.", icon: "sprinkler" as IconKey },
  { name: "Bombas Jockey, Eléctricas y Diésel", description: "Servicio técnico preventivo que garantiza la activación y presión constante en caso de emergencia.", icon: "fireshield" as IconKey },
  { name: "Grupos Electrógenos", description: "Mantenimiento del motor, alternador y sistemas auxiliares para asegurar energía de respaldo disponible siempre.", icon: "bolt" as IconKey },
  { name: "Pruebas en Carga y Arranque Automático", description: "Simulación real de funcionamiento para validar que el equipo responda ante cortes de red.", icon: "bolt" as IconKey },
  { name: "Sistemas de Transferencia Automática (ATS)", description: "Control del tablero de transferencia que conmuta automáticamente entre red y generador.", icon: "bolt" as IconKey },

      ],
    },
    {
      id: 3,
      title: "Obras, Reformas y Remodelaciones",
      image:"/obra.jpg",
      desc: "Soluciones de obra civil y terminación para mejorar, ampliar o renovar todo tipo de ambientes.",
      features: [
  { name: "Albañilería y Pintura", description: "Reparaciones, revestimientos y acabados de paredes, techos y estructuras.", icon: "paint" as IconKey },
  { name: "Construcción en Seco", description: "Montaje de tabiques, cielorrasos y revestimientos en sistemas tipo Durlock.", icon: "worker" as IconKey },
  { name: "Instalación de Porcelanatos y Cerámicos", description: "Colocación profesional de pisos y revestimientos con terminaciones de alta calidad.", icon: "worker" as IconKey },
  { name: "Colocación de Papel Tapiz", description: "Aplicación precisa de revestimientos decorativos para renovar espacios sin obras mayores.", icon: "worker" as IconKey },
  { name: "Instalación de Alfombras", description: "Colocación de alfombras residenciales o comerciales, con detalles prolijos y uniformes.", icon: "worker" as IconKey },
  { name: "Instalaciones Sanitarias y Eléctricas (Proyecto + Obra)", description: "Diseño, cálculo y ejecución completa de nuevas instalaciones o renovaciones.", icon: "worker" as IconKey },
  { name: "Sistemas de Aire Acondicionado (Cálculo + Instalación)", description: "Provisión, dimensionamiento y montaje de equipos HVAC para hogares y empresas.", icon: "airconditioner" as IconKey },
  { name: "Ampliaciones y Remodelaciones de Espacios", description: "Transformación de ambientes mediante obra civil, instalaciones y nuevos diseños funcionales.", icon: "worker" as IconKey },
      ],
    },
    {
      id: 4,
      title: "Atención de Emergencias 24/7",
      image: "/plumber.jpg",
      desc: "Respuesta inmediata ante fallas críticas que requieren intervención urgente.",
      features: [
  { name: "Emergencias Eléctricas", description: "Cortocircuitos, fallas de tableros, cortes repentinos y riesgos eléctricos.", icon: "bolt" as IconKey },
  { name: "Emergencias de Plomería / Gasfitería", description: "Fugas, roturas, obstrucciones y problemas sanitarios urgentes.", icon: "faucet" as IconKey },
  { name: "Emergencias de Aire Acondicionado", description: "Fallas de equipos que afectan confort o actividad comercial, como cortes, pérdidas de gas o sobrecalentamiento.", icon: "airconditioner" as IconKey },
      ],
    },
  ],
  testimonials: [
    { id: 1, name: "Cliente A", quote: "Servicio profesional y rápido. Muy recomendados." },
    { id: 2, name: "Cliente B", quote: "Excelencia en atención y resultados." },
  ],
  specializations: [
    {
      id: 1,
      title: "Mantenimiento para Centros de Alta Concurrencia",
      desc: "Orientado a centros comerciales, hospitales, aeropuertos, instituciones educativas y edificios corporativos con gran flujo de personas. Operaciones continuas, obras con mínima interferencia y cumplimiento estricto de plazos",
      image: "/stairs.jpg",
    features: [
  { name: "Modificaciones y adecuaciones de locales y espacios comunes", description: "Reformas, ampliaciones y adaptaciones sin cortar la operación general.", icon: "worker" as IconKey },
  { name: "Trabajos fuera de horarios convencionales", description: "Minimizamos interrupciones realizando obras nocturnas o programadas.", icon: "time" as IconKey },
  { name: "Programas de mantenimiento preventivo y correctivo", description: "Diseñados para mantener la infraestructura siempre segura y operativa.", icon: "worker" as IconKey },
    ],
    },
    {
      id: 2,
      title: "Mantenimiento para Alojamientos Temporarios",
      desc: "Brindamos un servicio pensado específicamente para propietarios y administradores de alquileres temporarios, asegurando que cada huésped viva una experiencia sin contratiempos. Tu propiedad siempre lista, sin sorpresas, mejorando tu reputación, reseñas y ocupación.",
      image: "/airbnb.jpg",
    features: [
  { name: "Inspecciones de sistemas eléctricos", description: "Verificación de tableros, tomas, luminarias y protecciones.", icon: "bolt" as IconKey },
  { name: "Control de instalaciones sanitarias", description: "detección de fugas, presión de agua y correcto funcionamiento de artefactos.", icon: "faucet" as IconKey },
  { name: "Reparaciones de uso frecuente", description: "Griferías, llaves, artefactos, filtraciones, accesorios y detalles que impactan en la experiencia del huésped.", icon: "worker" as IconKey },
  { name: "Servicio programado o a demanda", description: "Chequeos periódicos para mantener la unidad siempre en perfecto estado y asistencia inmediata ante imprevistos o reclamos urgentes de huéspedes.", icon: "time" as IconKey },
   ],
    },
    {
      id: 3,
      title: "Mantenimiento para Hoteles",
      desc: "Contamos con amplia experiencia en instalaciones hoteleras y brindamos apoyo técnico permanente o por temporada, adaptándonos al ritmo del establecimiento.",
      image: "/architecture.jpg",
    features: [
  { name: "Mantenimiento de áreas comunes", description: "Revisión y limpieza de fachadas, pasillos y plazas internas para seguridad y estética.", icon: "worker" as IconKey },
  { name: "Soporte eléctrico y térmico", description: "Mantenimiento de tableros, iluminación y equipos HVAC de alta demanda.", icon: "worker" as IconKey },
  { name: "Gestión de incidencias", description: "Coordinación y reparación rápida de fallas que afecten el normal funcionamiento del centro.", icon: "warning" as IconKey },
  { name: "Mantenimiento de ascensores y montacargas", description: "Planes de revisión y contratos de mantenimiento preventivo para equipos verticales.", icon: "elevator" as IconKey },
    ],
    },
  ],
};
