import { useTranslation } from "react-i18next"

/**
 * Thin wrapper around react-i18next's useTranslation that exposes a
 * concise API for switching languages from UI components.
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

  const language = i18n.resolvedLanguage || i18n.language || "es"

  const setLanguage = (lng) => i18n.changeLanguage(lng)

  const toggleLanguage = () =>
    i18n.changeLanguage(language === "es" ? "en" : "es")

  return { t, language, setLanguage, toggleLanguage }
}
