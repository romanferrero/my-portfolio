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
    id: "ecommerce-platform",
    name: "E-commerce Platform",
    description: {
      es: "Plataforma de comercio electrónico con catálogo dinámico, carrito persistente y checkout integrado. Backend en Node.js con autenticación JWT.",
      en: "E-commerce platform with dynamic catalog, persistent cart and integrated checkout. Node.js backend with JWT authentication.",
    },
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind"],
    github: "https://github.com/",
    demo: null,
  },
  {
    id: "task-manager",
    name: "Task Manager",
    description: {
      es: "Aplicación de gestión de tareas con tableros estilo Kanban, drag & drop, etiquetas y filtros avanzados. Diseño centrado en velocidad.",
      en: "Task management app with Kanban boards, drag & drop, labels and advanced filters. Speed-focused design.",
    },
    tags: ["React", "TypeScript", "MongoDB", "Express"],
    github: "https://github.com/",
    demo: "https://example.com/",
  },
  {
    id: "rest-api-library",
    name: "Library REST API",
    description: {
      es: "API RESTful para gestión de biblioteca con autenticación, paginación, búsqueda y documentación OpenAPI. Cobertura de tests con Jest.",
      en: "RESTful API for library management with authentication, pagination, search and OpenAPI documentation. Test coverage with Jest.",
    },
    tags: [".NET", "C#", "SQL Server", "Swagger"],
    github: "https://github.com/",
    demo: null,
  },
  {
    id: "chat-realtime",
    name: "Realtime Chat",
    description: {
      es: "Chat en tiempo real con salas múltiples, indicador de typing y notificaciones. Comunicación bidireccional con WebSockets.",
      en: "Realtime chat with multiple rooms, typing indicators and notifications. Bidirectional communication via WebSockets.",
    },
    tags: ["React", "Socket.io", "Node.js", "Redis"],
    github: "https://github.com/",
    demo: "https://example.com/",
  },
  {
    id: "inventory-system",
    name: "Inventory System",
    description: {
      es: "Sistema de inventario para PyMEs con control de stock, movimientos, reportes en PDF y dashboards en tiempo real.",
      en: "Inventory system for SMEs with stock control, movement tracking, PDF reports and realtime dashboards.",
    },
    tags: ["Java", "Spring Boot", "PostgreSQL", "React"],
    github: "https://github.com/",
    demo: null,
  },
  {
    id: "personal-portfolio",
    name: "Personal Portfolio",
    description: {
      es: "Este mismo sitio. Construido con React + Vite, Tailwind CSS v4, Framer Motion y soporte bilingüe ES/EN con dark mode.",
      en: "This very site. Built with React + Vite, Tailwind CSS v4, Framer Motion and bilingual ES/EN support with dark mode.",
    },
    tags: ["React", "Vite", "Tailwind", "Framer Motion", "i18next"],
    github: "https://github.com/",
    demo: null,
  },
]
