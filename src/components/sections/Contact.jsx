import { motion } from "framer-motion"
import { ArrowUpRight, Mail } from "lucide-react"
import { FiGithub, FiLinkedin } from "react-icons/fi"

import { Container } from "../ui/Container.jsx"
import { SectionTitle } from "../ui/SectionTitle.jsx"
import { Button } from "../ui/Button.jsx"
import { useLanguage } from "../../hooks/useLanguage.js"
import { SOCIAL_LINKS } from "../../data/social.js"

const card = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
}

const grid = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

function ContactCard({ href, Icon, label, description, accent }) {
  const isExternal = !href.startsWith("mailto:")
  return (
    <motion.a
      variants={card}
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      style={{ "--brand": accent }}
      className="
        group relative flex flex-col gap-3 overflow-hidden rounded-2xl border
        border-border bg-bg-elevated p-6 transition-all duration-300
        hover:-translate-y-1 hover:border-[color:var(--brand)]/50
        hover:shadow-2xl hover:shadow-[color:var(--brand)]/10
      "
    >
      <div className="flex items-center justify-between">
        <span
          className="
            flex h-11 w-11 items-center justify-center rounded-xl bg-bg
            text-[color:var(--brand)] transition-colors
            group-hover:bg-[color:var(--brand)]/10
          "
        >
          <Icon size={20} />
        </span>
        <ArrowUpRight
          size={18}
          className="
            text-text-muted transition-all duration-300
            group-hover:translate-x-0.5 group-hover:-translate-y-0.5
            group-hover:text-[color:var(--brand)]
          "
        />
      </div>
      <div>
        <h3 className="text-base font-semibold text-text-strong">{label}</h3>
        <p className="mt-1 text-sm leading-relaxed text-text-muted">
          {description}
        </p>
      </div>
    </motion.a>
  )
}

export function Contact() {
  const { t } = useLanguage()

  const cards = [
    {
      href: SOCIAL_LINKS.email,
      Icon: Mail,
      label: t("contact.emailLabel"),
      description: t("contact.emailDescription"),
      accent: "var(--accent)",
    },
    {
      href: SOCIAL_LINKS.linkedin,
      Icon: FiLinkedin,
      label: t("contact.linkedinLabel"),
      description: t("contact.linkedinDescription"),
      accent: "#0A66C2",
    },
    {
      href: SOCIAL_LINKS.github,
      Icon: FiGithub,
      label: t("contact.githubLabel"),
      description: t("contact.githubDescription"),
      accent: "#6e7781",
    },
  ]

  return (
    <section id="contact" className="py-24 scroll-mt-20 sm:py-28">
      <SectionTitle
        eyebrow={t("contact.eyebrow")}
        title={t("contact.title")}
        subtitle={t("contact.lead")}
        align="center"
      />

      <Container className="mt-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={grid}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {cards.map((c) => (
            <ContactCard key={c.label} {...c} />
          ))}
        </motion.div>

        {/* Direct email CTA */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <p className="text-sm text-text-muted">
            {SOCIAL_LINKS.emailAddress}
          </p>
          <Button
            as="a"
            href={SOCIAL_LINKS.email}
            variant="primary"
            leadingIcon={<Mail size={16} />}
          >
            {t("contact.ctaPrimary")}
          </Button>
        </div>
      </Container>
    </section>
  )
}
