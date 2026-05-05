import { motion } from "framer-motion"

import { Container } from "./Container.jsx"

/**
 * Consistent heading block used at the top of every content section.
 * Renders an "eyebrow" label, a big heading and an optional subtitle.
 * Animates into view when scrolled past.
 *
 * @param {object} props
 * @param {string} props.eyebrow  - Short label above the heading (e.g. "About me")
 * @param {string} props.title    - Main heading
 * @param {string} [props.subtitle] - Optional supporting paragraph
 * @param {"left" | "center"} [props.align="left"]
 */
export function SectionTitle({ eyebrow, title, subtitle, align = "left" }) {
  const isCenter = align === "center"

  return (
    <Container className={isCenter ? "text-center" : "text-left"}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={isCenter ? "mx-auto max-w-2xl" : "max-w-2xl"}
      >
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </p>
        )}
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-text-strong sm:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-base leading-relaxed text-text">
            {subtitle}
          </p>
        )}
      </motion.div>
    </Container>
  )
}
