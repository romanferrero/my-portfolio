import { motion } from "framer-motion"

import { Container } from "../ui/Container.jsx"
import { SectionTitle } from "../ui/SectionTitle.jsx"
import { ProjectCard } from "../ui/ProjectCard.jsx"
import { useLanguage } from "../../hooks/useLanguage.js"
import { PROJECTS } from "../../data/projects.js"

const grid = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

export function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="py-24 scroll-mt-20 sm:py-28">
      <SectionTitle
        eyebrow={t("projects.eyebrow")}
        title={t("projects.title")}
        subtitle={t("projects.lead")}
      />

      <Container className="mt-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={grid}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
