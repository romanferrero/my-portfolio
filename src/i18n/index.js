import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

import es from "./locales/es.json"
import en from "./locales/en.json"

/**
 * i18next configuration.
 *
 * - Default language: Spanish (project author is from Uruguay).
 * - Detection order: explicit user choice (localStorage) → browser language.
 * - Persists user choice in localStorage under "i18nextLng".
 * - Suspense disabled because we ship translations synchronously.
 */
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en },
    },
    fallbackLng: "es",
    supportedLngs: ["es", "en"],
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng",
    },
    react: { useSuspense: false },
  })

export default i18n
