import { motion } from "framer-motion"

import { SectionTitle } from "../ui/SectionTitle.jsx"
import { Container } from "../ui/Container.jsx"
import { useLanguage } from "../../hooks/useLanguage.js"
import { ABOUT_STATS } from "../../data/stats.js"

const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-24 scroll-mt-20 sm:py-28">
      <SectionTitle
        eyebrow={t("about.eyebrow")}
        title={t("about.title")}
        subtitle={t("about.lead")}
      />

      <Container className="mt-12">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
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
