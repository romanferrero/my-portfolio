import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

import { Container } from "../ui/Container.jsx"
import { ThemeToggle } from "./ThemeToggle.jsx"
import { LanguageToggle } from "./LanguageToggle.jsx"
import { useLanguage } from "../../hooks/useLanguage.js"
import { useActiveSection } from "../../hooks/useActiveSection.js"
import { cn } from "../../lib/cn.js"

const NAV_ITEMS = [
  { id: "home", key: "nav.home" },
  { id: "about", key: "nav.about" },
  { id: "skills", key: "nav.skills" },
  { id: "projects", key: "nav.projects" },
  { id: "experience", key: "nav.experience" },
  { id: "contact", key: "nav.contact" },
]

const SECTION_IDS = NAV_ITEMS.map((item) => item.id)

export function Navbar() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const active = useActiveSection(SECTION_IDS)

  // Add a subtle border + blur once user scrolls past the top
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close mobile menu when viewport grows past the breakpoint
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)")
    const onChange = (e) => e.matches && setMobileOpen(false)
    mql.addEventListener("change", onChange)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-bg/80 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <Container as="nav" className="flex h-16 items-center justify-between">
        {/* Brand */}
        <a
          href="#home"
          className="
            text-base font-bold tracking-tight text-text-strong
            transition-colors hover:text-accent
          "
        >
          Roman<span className="text-accent">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={cn(
                  "relative rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
                  active === item.id
                    ? "text-accent"
                    : "text-text hover:text-text-strong",
                )}
              >
                {t(item.key)}
                {active === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-accent/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: toggles + mobile trigger */}
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? t("menu.close") : t("menu.open")}
            aria-expanded={mobileOpen}
            className="
              inline-flex h-9 w-9 items-center justify-center rounded-full
              border border-border bg-bg-elevated text-text-strong
              transition-colors hover:border-accent/50 hover:text-accent
              md:hidden
            "
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </Container>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="border-t border-border bg-bg/95 backdrop-blur-md md:hidden"
          >
            <Container>
              <ul className="flex flex-col gap-1 py-4">
                {NAV_ITEMS.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                        active === item.id
                          ? "bg-accent/10 text-accent"
                          : "text-text hover:bg-bg-elevated hover:text-text-strong",
                      )}
                    >
                      {t(item.key)}
                    </a>
                  </li>
                ))}
              </ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
