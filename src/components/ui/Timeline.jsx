import { motion } from "framer-motion"

import { useLanguage } from "../../hooks/useLanguage.js"
import { KIND_META } from "../../data/experience.js"
import { cn } from "../../lib/cn.js"

const item = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
}

const list = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

function formatPeriod(period, currentLabel) {
  const end = period.end ?? currentLabel
  return `${period.start} - ${end}`
}

function TimelineItem({ entry }) {
  const { language, t } = useLanguage()
  const { Icon } = KIND_META[entry.kind]
  const description =
    entry.description[language] ?? entry.description.en ?? ""

  const kindLabel = t(`experience.kinds.${entry.kind}`)
  const isWork = entry.kind === "work"

  return (
    <motion.li variants={item} className="relative pl-12">
      {/* Dot on the timeline rail */}
      <span
        className={cn(
          "absolute left-3 top-1.5 flex h-7 w-7 -translate-x-1/2 items-center justify-center",
          "rounded-full border-2 bg-bg",
          isWork
            ? "border-accent text-accent"
            : "border-border text-text-muted",
        )}
        aria-hidden="true"
      >
        <Icon size={14} />
      </span>

      <div className="rounded-2xl border border-border bg-bg-elevated p-5 transition-colors hover:border-accent/40">
        {/* Meta row */}
        <div className="mb-2 flex flex-wrap items-center gap-2 text-xs">
          <span
            className={cn(
              "rounded-full px-2 py-0.5 font-semibold uppercase tracking-wider",
              isWork
                ? "bg-accent/10 text-accent"
                : "bg-bg text-text-muted border border-border",
            )}
          >
            {kindLabel}
          </span>
          <span className="font-mono text-text-muted">
            {formatPeriod(entry.period, t("experience.current"))}
          </span>
          {entry.location && (
            <span className="text-text-muted">- {entry.location}</span>
          )}
        </div>

        {/* Title + org */}
        <h3 className="text-base font-bold text-text-strong">{entry.title}</h3>
        <p className="text-sm text-accent">{entry.org}</p>

        {/* Description */}
        <p className="mt-3 text-sm leading-relaxed text-text">{description}</p>

        {/* Tags */}
        {entry.tags?.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {entry.tags.map((tag) => (
              <li
                key={tag}
                className="
                  rounded-full border border-border bg-bg px-2 py-0.5
                  text-[11px] font-medium text-text-muted
                "
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.li>
  )
}

/**
 * Vertical timeline. Renders a list of `entries` (see data/experience.js
 * for the shape). Single-column layout that works equally well on mobile
 * and desktop without alternating sides.
 */
export function Timeline({ entries }) {
  return (
    <motion.ol
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={list}
      className="
        relative space-y-6
        before:absolute before:left-3 before:top-2 before:bottom-2
        before:w-px before:bg-border
      "
    >
      {entries.map((entry) => (
        <TimelineItem key={entry.id} entry={entry} />
      ))}
    </motion.ol>
  )
}
