import { useLanguage } from "../../hooks/useLanguage.js"

/**
 * Hidden link that becomes visible when focused with the keyboard.
 * Lets users (especially keyboard / screen-reader users) jump past the
 * navbar straight to the main content. First focusable element on the
 * page so it is reached with a single Tab from the page load.
 */
export function SkipToContent() {
  const { t } = useLanguage()

  return (
    <a
      href="#main-content"
      className="
        sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60]
        focus:rounded-full focus:bg-accent focus:px-4 focus:py-2
        focus:text-sm focus:font-medium focus:text-white focus:shadow-lg
        focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2
        focus:ring-offset-bg
      "
    >
      {t("a11y.skipToContent")}
    </a>
  )
}
