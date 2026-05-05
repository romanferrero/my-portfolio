import { motion } from "framer-motion"

import { SectionTitle } from "../ui/SectionTitle.jsx"
import { Container } from "../ui/Container.jsx"
import { useLanguage } from "../../hooks/useLanguage.js"
import { ABOUT_STATS } from "../../data/stats.js"
import { PROFILE_PHOTO } from "../../data/profile.js"
import { cn } from "../../lib/cn.js"

const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

/**
 * Square portrait. Decorated with a subtle violet glow on hover.
 * Only rendered when PROFILE_PHOTO is configured in src/data/profile.js.
 */
function ProfilePhoto() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-[280px] lg:max-w-none"
    >
      {/* Glow behind the photo */}
      <div
        aria-hidden="true"
        className="
          absolute -inset-4 -z-10 rounded-3xl
          bg-gradient-to-br from-accent/30 to-accent/0 blur-2xl
        "
      />
      <img
        src={PROFILE_PHOTO}
        alt="Roman Ferrero"
        className="
          aspect-square w-full rounded-2xl border border-border
          object-cover shadow-xl shadow-black/10
        "
      />
    </motion.div>
  )
}

export function About() {
  const { t } = useLanguage()
  const hasPhoto = Boolean(PROFILE_PHOTO)

  return (
    <section id="about" className="py-24 scroll-mt-20 sm:py-28">
      <SectionTitle
        eyebrow={t("about.eyebrow")}
        title={t("about.title")}
        subtitle={t("about.lead")}
      />

      <Container className="mt-12">
        <div
          className={cn(
            "grid gap-10 lg:gap-16",
            hasPhoto
              ? "lg:grid-cols-[280px_1fr_minmax(220px,1fr)]"
              : "lg:grid-cols-[1.2fr_1fr]",
          )}
        >
          {hasPhoto && <ProfilePhoto />}

          {/* Long-form copy */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={reveal}
            className="space-y-5 text-base leading-relaxed text-text"
          >
            <p>{t("about.secondary")}</p>
          </motion.div>

          {/* Stats grid */}
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
            className="grid grid-cols-2 gap-3 self-start"
          >
            {ABOUT_STATS.map(({ Icon, value, labelKey }) => (
              <motion.li
                key={labelKey}
                variants={reveal}
                className="
                  group relative overflow-hidden rounded-2xl border border-border
                  bg-bg-elevated p-5 transition-colors hover:border-accent/40
                "
              >
                <Icon
                  size={20}
                  className="text-text-muted transition-colors group-hover:text-accent"
                />
                <p className="mt-4 text-2xl font-bold text-text-strong">
                  {value}
                </p>
                <p className="mt-1 text-xs text-text-muted">
                  {t(`about.stats.${labelKey}`)}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </Container>
    </section>
  )
}
