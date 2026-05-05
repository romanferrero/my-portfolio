import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { FiGithub } from "react-icons/fi"

import { useLanguage } from "../../hooks/useLanguage.js"
import { gradientFor, initialsFor } from "../../lib/gradient.js"

/**
 * Renders the top "preview" area of a project card.
 *
 * If `project.image` is provided, shows the image (lazy-loaded). Otherwise
 * falls back to a deterministic gradient with the project initials. The
 * gradient is the default so the section looks polished even before
 * screenshots are produced.
 */
function PreviewArea({ project }) {
  if (project.image) {
    return (
      <div className="relative h-32 w-full overflow-hidden">
        <img
          src={project.image}
          alt={`${project.name} preview`}
          loading="lazy"
          className="
            h-full w-full object-cover
            transition-transform duration-500 group-hover:scale-105
          "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
    )
  }

  const { from, to } = gradientFor(project.name)
  const initials = initialsFor(project.name)

  return (
    <div
      aria-hidden="true"
      className="relative h-32 w-full overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      <span
        className="
          absolute inset-0 flex items-center justify-center
          text-5xl font-black tracking-tight text-white/90
          transition-transform duration-500 group-hover:scale-110
        "
      >
        {initials}
      </span>
    </div>
  )
}

/**
 * Single project card. Visual structure:
 *
 *  ┌──────────────────────────┐
 *  │   image OR gradient      │  ← project.image if defined, else gradient
 *  │   (preview area)         │
 *  ├──────────────────────────┤
 *  │ Name                     │
 *  │ Description...           │
 *  │ [tag] [tag] [tag]        │
 *  │                          │
 *  │ Code ↗   Demo ↗          │
 *  └──────────────────────────┘
 */
export function ProjectCard({ project }) {
  const { language, t } = useLanguage()
  const description = project.description[language] ?? project.description.en

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className="
        group flex h-full flex-col overflow-hidden rounded-2xl border border-border
        bg-bg-elevated transition-all duration-300
        hover:-translate-y-1 hover:border-accent/40
        hover:shadow-2xl hover:shadow-accent/5
      "
    >
      <PreviewArea project={project} />

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-text-strong">{project.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-text">{description}</p>

        {/* Tags */}
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="
                rounded-full border border-border bg-bg px-2.5 py-0.5
                text-[11px] font-medium text-text-muted
              "
            >
              {tag}
            </li>
          ))}
        </ul>

        {/* Links */}
        <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={t("projects.viewCode")}
              className="
                inline-flex items-center gap-1.5 text-xs font-medium text-text
                transition-colors hover:text-accent
              "
            >
              <FiGithub size={14} />
              <span>{t("projects.viewCode")}</span>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              aria-label={t("projects.viewDemo")}
              className="
                inline-flex items-center gap-1.5 text-xs font-medium text-text
                transition-colors hover:text-accent
              "
            >
              <ArrowUpRight size={14} />
              <span>{t("projects.viewDemo")}</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
