import { Layout, Server, Database, Wrench } from "lucide-react"
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiDotnet,
  SiSharp,
  SiOpenjdk,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiSqlite,
  SiGit,
  SiGithub,
  SiDocker,
  SiFigma,
  SiPostman
} from "react-icons/si"

/**
 * Skills grouped by category. Edit this file to update what shows on the
 * portfolio - the Skills section is fully data-driven.
 *
 * Each skill needs:
 *  - name:  what to display
 *  - Icon:  a React component (we use react-icons/si for tech logos)
 *  - color: official brand hex, used as the hover tint
 */
export const SKILL_CATEGORIES = [
  {
    id: "frontend",
    Icon: Layout,
    skills: [
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", Icon: SiCss, color: "#1572B6" },
      { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Vite", Icon: SiVite, color: "#646CFF" },
    ],
  },
  {
    id: "backend",
    Icon: Server,
    skills: [
      { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express", Icon: SiExpress, color: "#E76F00" },
      { name: ".NET", Icon: SiDotnet, color: "#512BD4" },
      { name: "C#", Icon: SiSharp, color: "#9B4F96" },
      { name: "Java", Icon: SiOpenjdk, color: "#E76F00" }
    ],
  },
  {
    id: "databases",
    Icon: Database,
    skills: [
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
      { name: "SQLite", Icon: SiSqlite, color: "#003B57" },
    ],
  },
  {
    id: "tools",
    Icon: Wrench,
    skills: [
      { name: "Git", Icon: SiGit, color: "#F05032" },
      { name: "GitHub", Icon: SiGithub, color: "#646CFF" },
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
      { name: "Postman", Icon: SiPostman, color: "#FF6C37" }
    ],
  },
]
