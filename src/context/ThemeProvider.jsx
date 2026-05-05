import { useEffect, useState, useCallback } from "react"

import { ThemeContext, THEME_STORAGE_KEY } from "./themeContext.js"

/**
 * Resolves the initial theme on first render:
 *  1. Manual preference in localStorage
 *  2. OS-level `prefers-color-scheme`
 *  3. Fallback to "dark"
 */
function getInitialTheme() {
  if (typeof window === "undefined") return "dark"

  const stored = window.localStorage.getItem(THEME_STORAGE_KEY)
  if (stored === "light" || stored === "dark") return stored

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
  return prefersDark ? "dark" : "light"
}

/**
 * Provides the current theme and helpers to update it.
 * Syncs the `<html class="dark">` toggle and persists the user's choice.
 *
 * Pairs with the inline bootstrap script in `index.html`, which sets the
 * initial class synchronously to prevent a flash of the wrong theme.
 */
export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle("dark", theme === "dark")
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  // Honor OS-level changes only while the user hasn't picked manually
  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)")
    const handler = (event) => {
      const userOverride = window.localStorage.getItem(THEME_STORAGE_KEY)
      if (userOverride) return
      setThemeState(event.matches ? "dark" : "light")
    }
    mql.addEventListener("change", handler)
    return () => mql.removeEventListener("change", handler)
  }, [])

  const setTheme = useCallback((next) => setThemeState(next), [])
  const toggleTheme = useCallback(
    () => setThemeState((prev) => (prev === "dark" ? "light" : "dark")),
    [],
  )

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
