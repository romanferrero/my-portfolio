/**
 * Featured projects shown in the Projects section.
 *
 * Schema:
 *   - id:          stable slug used as React key and in URLs
 *   - name:        display name (also drives the auto-generated gradient)
 *   - description: { es, en } - short summary in both languages
 *   - tags:        array of tech labels shown as chips on the card
 *   - github:      repo URL, or null to hide the GitHub link
 *   - demo:        live site URL, or null to hide the demo link
 *   - featured:    optional - reserved for future "highlight" treatment
 *
 * These are placeholders. Replace freely - the section is data-driven.
 */
export const PROJECTS = [
  {
    id: "task-track-pro",
    name: "Task Track Pro",
    description: {
      es: "Aplicación académica de gestión y planificación de proyectos para equipos de trabajo. Permite administrar proyectos, tareas, recursos y dependencias, incorporando cálculo de ruta crítica, holguras, alertas y exportación de datos.",
      en: "Academic project management and planning application for work teams. It supports projects, tasks, resources and dependencies, including critical path calculation, slack time, alerts and data export.",
    },
    tags: ["C#", "Blazor", ".NET", "SQL Server", "Entity Framework Core", "Docker", "MSTest", "GitHub Actions"],
    github: "https://github.com/romanferrero/Obligatorio-TaskTrackPro",
    demo: null,
  },
  {
    id: "near-dup-finder",
    name: "NearDupFinder",
    description: {
      es: "Aplicación académica de gestión de catálogos que detecta productos duplicados o casi duplicados mediante reglas de similitud. Permite administrar ítems, confirmar detecciones, agrupar duplicados, fusionarlos y gestionar stock.",
      en: "Academic catalog management application that detects duplicate or near-duplicate products using similarity rules. It supports item management, duplicate review, clustering, merging and stock management.",
    },
    tags: ["C#", ".NET 8", "Blazor Server", "Entity Framework Core", "Azure SQL Edge", "Docker", "MSTest"],
    github: "https://github.com/romanferrero/Obligatorio-NearDupFinder",
    demo: null,
  },
  {
    id: "uruguay-sub200",
    name: "Uruguay Sub200",
    description: {
      es: "Sitio web responsive sobre la expedición científica Uruguay Sub200, que explora el fondo marino uruguayo a bordo del B/I Falkor (too). Incluye carousel interactivo, galería multimedia y diseño modular con SASS.",
      en: "Responsive website about the Uruguay Sub200 scientific expedition, exploring the Uruguayan seabed aboard the R/V Falkor (too). Features an interactive carousel, multimedia gallery and modular SASS architecture.",
    },
    tags: ["HTML5", "SASS", "Bootstrap", "CSS Grid", "Git"],
    github: "https://github.com/romanferrero/coderhouse-desarrolloweb",
    demo: "https://uruguaysub200.netlify.app/",
  },
  {
    id: "rf-converter",
    name: "RF Converter",
    description: {
      es: "Conversor de divisas en tiempo real que consume la ExchangeRate-API. Incluye tabla de tasas, historial persistente en localStorage con caché de respuestas y alertas con SweetAlert2.",
      en: "Real-time currency converter powered by ExchangeRate-API. Features a rates table, persistent conversion history with localStorage caching, and SweetAlert2 alerts.",
    },
    tags: ["JavaScript", "Bootstrap", "Fetch API", "SweetAlert2", "LocalStorage"],
    github: "https://github.com/romanferrero/coderhouse-javascript",
    demo: "https://rf-converter.netlify.app/",
  },
  {
    id: "olimpiadas-familiares",
    name: "Olimpiadas Familiares",
    description: {
      es: "App para organizar jornadas de juegos en familia con gestión de equipos, puntajes en vivo, ranking con podio y desafíos. Sincronización en tiempo real con Supabase y acceso por roles (admin/jugador).",
      en: "Family game day organizer with team management, live scoring, podium ranking and challenges. Real-time sync with Supabase and role-based access (admin/player).",
    },
    tags: ["React", "Tailwind CSS", "Vite", "Supabase"],
    github: "https://github.com/romanferrero/family-games",
    demo: "https://olimpiadas-familiares.netlify.app/",
  },
  {
    id: "ruta-del-surf",
    name: "Ruta del Surf",
    description: {
      es: "E-commerce SPA de temática surf desarrollado con React 19. Incluye navegación con React Router, carrito de compras con Context API, integración con Firebase Firestore y UI con Tailwind CSS + DaisyUI.",
      en: "Surf-themed e-commerce SPA built with React 19. Features React Router navigation, shopping cart with Context API, Firebase Firestore integration, and Tailwind CSS + DaisyUI styling.",
    },
    tags: ["React", "React Router", "Firebase", "Tailwind CSS", "DaisyUI", "Vite"],
    github: "https://github.com/romanferrero/coderhouse-react",
    demo: "https://romanferrero.github.io/coderhouse-react/",
  },
  {
    id: "personal-portfolio",
    name: "Personal Portfolio",
    description: {
      es: "Portfolio personal con soporte bilingüe (ES/EN), dark mode, animaciones con Framer Motion y arquitectura data-driven. Construido con React 19, Tailwind CSS 4 y i18next.",
      en: "Personal portfolio with bilingual support (ES/EN), dark mode, Framer Motion animations and data-driven architecture. Built with React 19, Tailwind CSS 4 and i18next.",
    },
    tags: ["React", "Tailwind CSS", "Framer Motion", "i18next", "Vite"],
    github: "https://github.com/romanferrero/my-portfolio",
    demo: "https://roman-ferrero.vercel.app/",
  },
]
