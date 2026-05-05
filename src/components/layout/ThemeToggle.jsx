import { motion, AnimatePresence } from "framer-motion"
import { Moon, Sun } from "lucide-react"

import { useTheme } from "../../hooks/useTheme.js"
import { useLanguage } from "../../hooks/useLanguage.js"

/**
 * Round icon button that toggles between light and dark theme.
 * Uses Framer Motion to crossfade the sun/moon icon.
 */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useLanguage()

  const isDark = theme === "dark"
  const label = isDark ? t("theme.light") : t("theme.dark")

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="
        relative inline-flex h-9 w-9 items-center justify-center
        rounded-full border border-border bg-bg-elevated
        text-text-strong transition-colors
        hover:border-accent/50 hover:text-accent
      "
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="flex"
        >
          {isDark ? <Moon size={16} /> : <Sun size={16} />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
