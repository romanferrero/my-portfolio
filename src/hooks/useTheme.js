import { useContext } from "react"

import { ThemeContext } from "../context/themeContext.js"

/**
 * Access the current theme ("light" | "dark") and helpers to change it.
 *
 * @returns {{
 *   theme: "light" | "dark",
 *   setTheme: (theme: "light" | "dark") => void,
 *   toggleTheme: () => void,
 * }}
 */
export function useTheme() {
  return useContext(ThemeContext)
}
