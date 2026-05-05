import { Container } from "../ui/Container.jsx"
import { SectionTitle } from "../ui/SectionTitle.jsx"
import { Timeline } from "../ui/Timeline.jsx"
import { useLanguage } from "../../hooks/useLanguage.js"
import { EXPERIENCE } from "../../data/experience.js"

export function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="py-24 scroll-mt-20 sm:py-28">
      <SectionTitle
        eyebrow={t("experience.eyebrow")}
        title={t("experience.title")}
        subtitle={t("experience.lead")}
      />

      <Container className="mt-12">
        <div className="mx-auto max-w-3xl">
          <Timeline entries={EXPERIENCE} />
        </div>
      </Container>
    </section>
  )
}
