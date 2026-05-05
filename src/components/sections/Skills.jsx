import { motion } from "framer-motion"

import { SectionTitle } from "../ui/SectionTitle.jsx"
import { Container } from "../ui/Container.jsx"
import { useLanguage } from "../../hooks/useLanguage.js"
import { SKILL_CATEGORIES } from "../../data/skills.js"

const card = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
}

const list = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
}

/**
 * Single tech card. Inline style sets `--brand` so we can drive the hover
 * border + icon color from the official brand color stored in the data file.
 */
function SkillCard({ name, Icon, color }) {
  return (
    <motion.li variants={card}>
      <div
        style={{ "--brand": color }}
        className="
          group flex h-full flex-col items-center justify-center gap-2.5
          rounded-xl border border-border bg-bg-elevated p-4
          transition-all duration-200
          hover:-translate-y-0.5 hover:border-[color:var(--brand)]/60
          hover:shadow-[0_8px_24px_-12px_color-mix(in_oklab,var(--brand)_40%,transparent)]
        "
      >
        <Icon
          size={28}
          className="text-text-muted transition-colors group-hover:text-[color:var(--brand)]"
        />
        <span className="text-xs font-medium text-text">{name}</span>
      </div>
    </motion.li>
  )
}

function CategoryBlock({ category }) {
  const { t } = useLanguage()
  const { id, Icon, skills } = category

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={list}
      className="space-y-4"
    >
      <div className="flex items-center gap-2">
        <Icon size={16} className="text-accent" />
        <h3 className="text-sm font-semibold uppercase tracking-wider text-text-strong">
          {t(`skills.categories.${id}`)}
        </h3>
        <div className="ml-2 h-px flex-1 bg-border" />
      </div>

      <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7">
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </ul>
    </motion.div>
  )
}

export function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="py-24 scroll-mt-20 sm:py-28">
      <SectionTitle
        eyebrow={t("skills.eyebrow")}
        title={t("skills.title")}
        subtitle={t("skills.lead")}
      />

      <Container className="mt-12 space-y-10">
        {SKILL_CATEGORIES.map((category) => (
          <CategoryBlock key={category.id} category={category} />
        ))}
      </Container>
    </section>
  )
}
