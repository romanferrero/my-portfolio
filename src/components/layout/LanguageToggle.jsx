import { motion, AnimatePresence } from "framer-motion"

import { useLanguage } from "../../hooks/useLanguage.js"

/**
 * Toggle between Spanish and English. Renders the *next* language code
 * so users see what clicking will produce.
 */
export function LanguageToggle() {
  const { language, toggleLanguage, t } = useLanguage()

  const next = language === "es" ? "EN" : "ES"

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={t("language.toggle")}
      title={t("language.toggle")}
      className="
        relative inline-flex h-9 min-w-9 items-center justify-center
        rounded-full border border-border bg-bg-elevated px-2.5
        text-xs font-semibold text-text-strong transition-colors
        hover:border-accent/50 hover:text-accent
      "
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={next}
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
        >
          {next}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
