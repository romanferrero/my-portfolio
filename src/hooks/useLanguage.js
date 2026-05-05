import { useEffect, useState, useCallback } from "react"
import { useTranslation } from "react-i18next"

const SUPPORTED = ["es", "en"]
const DEFAULT = "es"

/**
 * Normalizes any locale string to one of our supported base codes.
 * Examples:
 *   "es-UY" -> "es"
 *   "EN_US" -> "en"
 *   undefined -> "es"
 *   "fr" -> "es" (fallback to default)
 */
function normalizeLanguage(raw) {
  if (!raw) return DEFAULT
  const base = String(raw).toLowerCase().split(/[-_]/)[0]
  return SUPPORTED.includes(base) ? base : DEFAULT
}

/**
 * Wrapper around react-i18next's useTranslation that exposes a concise
 * API for components and guarantees the `language` value:
 *
 *   - is always one of "es" | "en" (never a regional code like "es-UY")
 *   - re-renders consumers when the language changes (via the
 *     i18next "languageChanged" event)
 *
 * @returns {{
 *   t: (key: string, options?: object) => string,
 *   language: "es" | "en",
 *   setLanguage: (lng: "es" | "en") => void,
 *   toggleLanguage: () => void,
 * }}
 */
export function useLanguage() {
  const { t, i18n } = useTranslation()

  const [language, setLanguageState] = useState(() =>
    normalizeLanguage(i18n.resolvedLanguage || i18n.language),
  )

  useEffect(() => {
    const onChange = (lng) => setLanguageState(normalizeLanguage(lng))
    i18n.on("languageChanged", onChange)
    return () => i18n.off("languageChanged", onChange)
  }, [i18n])

  const setLanguage = useCallback(
    (lng) => i18n.changeLanguage(normalizeLanguage(lng)),
    [i18n],
  )

  const toggleLanguage = useCallback(
    () => i18n.changeLanguage(language === "es" ? "en" : "es"),
    [i18n, language],
  )

  return { t, language, setLanguage, toggleLanguage }
}
