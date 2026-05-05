import { Briefcase, GraduationCap } from "lucide-react"

/**
 * Combined education + work timeline, sorted from newest to oldest.
 *
 * Schema:
 *   - id:           stable slug
 *   - kind:         "education" | "work"  (drives the icon and chip color)
 *   - title:        role / degree name
 *   - org:          institution / company
 *   - location:     city / country
 *   - period:       { start: "MM/YYYY", end: "MM/YYYY" | null }  null = current
 *   - description:  { es, en } - bilingual summary
 *   - tags:         optional list of relevant tech / skills
 *
 * The Timeline component picks the icon from KIND_META below.
 */
export const KIND_META = {
  education: { Icon: GraduationCap },
  work: { Icon: Briefcase },
}

export const EXPERIENCE = [
  {
    id: "coderhouse-react",
    kind: "education",
    title: "React JS - Desarrollo Full-Stack",
    org: "Coderhouse",
    location: "Online",
    period: { start: "01/2026", end: "04/2026" },
    description: {
      es: "Formación en desarrollo Full-Stack con enfoque en React JS, creando aplicaciones web dinámicas e interactivas con tecnologías modernas del ecosistema JavaScript.",
      en: "Full-Stack development training focused on React JS, building dynamic and interactive web applications with modern JavaScript ecosystem tools.",
    },
    tags: ["React", "JavaScript", "Full-Stack", "Firebase", "API REST"],
    certificate: "/certificates/Certificado-React.png"
  },
  {
    id: "coderhouse-js",
    kind: "education",
    title: "JavaScript - Desarrollo Full-Stack",
    org: "Coderhouse",
    location: "Online",
    period: { start: "11/2025", end: "02/2026" },
    description: {
      es: "Curso de JavaScript enfocado en desarrollo de aplicaciones web dinámicas. Lógica de programación, manipulación del DOM, manejo de eventos y consumo de APIs.",
      en: "JavaScript course focused on building dynamic web applications. Programming logic, DOM manipulation, event handling and API consumption.",
    },
    tags: ["JavaScript", "DOM", "REST"],
  },
  {
    id: "basf-intern",
    kind: "work",
    title: "Tech Team Intern",
    org: "BASF",
    location: "Montevideo, UY",
    period: { start: "08/2022", end: "02/2023" },
    description: {
      es: "Pasantía en el Tech Team. Desarrollo de macros en VBA sobre datos de SAP para optimizar procesos. Formación interna en .NET, Node.js, Git y SQL. Capacitación en metodologías de trabajo en equipo.",
      en: "Internship on the Tech Team. Built VBA macros over SAP data to optimize processes. Internal training in .NET, Node.js, Git and SQL. Hands-on practice with team-work methodologies.",
    },
    tags: ["VBA", "SAP", ".NET", "Node.js", "SQL", "Git"],
  },
  {
    id: "ort-engineering",
    kind: "education",
    title: "Ingeniería en Sistemas",
    org: "Universidad ORT Uruguay",
    location: "Montevideo, UY",
    period: { start: "03/2020", end: null },
    description: {
      es: "Estudiante avanzado, próximo a finalizar la carrera. Formación sólida en desarrollo de software, estructuras de datos, bases de datos y proyectos académicos orientados a la resolución de problemas reales.",
      en: "Advanced student, close to graduation. Solid foundation in software development, data structures, databases and academic projects focused on real-world problem solving.",
    },
    tags: ["Software Engineering", "Data Structures", "Databases"],
  },
]
