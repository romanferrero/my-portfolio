import { motion } from "framer-motion"
import { ArrowRight, Download, Mail } from "lucide-react"

import { Container } from "../ui/Container.jsx"
import { Button } from "../ui/Button.jsx"
import { useLanguage } from "../../hooks/useLanguage.js"
import { SOCIAL_LINKS } from "../../data/social.js"

/**
 * Variants for staggered entrance animation.
 */
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden scroll-mt-20"
    >
      {/* Background flourish: subtle radial gradient + grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 -z-10
          [background:radial-gradient(60%_50%_at_50%_0%,color-mix(in_oklab,var(--accent)_18%,transparent)_0%,transparent_70%)]
        "
      />
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 -z-10 opacity-[0.04]
          [background-image:linear-gradient(var(--text-strong)_1px,transparent_1px),linear-gradient(90deg,var(--text-strong)_1px,transparent_1px)]
          [background-size:48px_48px]
          [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black_30%,transparent_75%)]
        "
      />

      <Container>
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl text-center"
        >
          {/* Availability badge */}
          <motion.div variants={item}>
            <span
              className="
                inline-flex items-center gap-2 rounded-full border border-border
                bg-bg-elevated px-3 py-1 text-xs font-medium text-text-muted
              "
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {t("hero.available")}
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            variants={item}
            className="mt-8 text-base font-medium text-text-muted sm:text-lg"
          >
            {t("hero.greeting")}
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={item}
            className="
              mt-2 text-5xl font-bold tracking-tight text-text-strong
              sm:text-6xl md:text-7xl
            "
          >
            {t("hero.name")}
          </motion.h1>

          {/* Role */}
          <motion.p
            variants={item}
            className="
              mt-4 bg-gradient-to-r from-accent to-accent-hover
              bg-clip-text text-xl font-semibold text-transparent
              sm:text-2xl
            "
          >
            {t("hero.role")}
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text sm:text-lg"
          >
            {t("hero.tagline")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button
              as="a"
              href="#projects"
              variant="primary"
              trailingIcon={<ArrowRight size={16} />}
            >
              {t("hero.ctaProjects")}
            </Button>
            <Button
              as="a"
              href="#contact"
              variant="ghost"
              leadingIcon={<Mail size={16} />}
            >
              {t("hero.ctaContact")}
            </Button>
            <Button
              as="a"
              href={SOCIAL_LINKS.cv}
              download
              variant="ghost"
              leadingIcon={<Download size={16} />}
            >
              {t("hero.ctaResume")}
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
