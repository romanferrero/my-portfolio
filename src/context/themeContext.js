import { createContext } from "react"

/**
 * Storage key used to persist the user's manual theme preference.
 * Exported so the anti-flash bootstrap script in index.html and any
 * future reset utility can stay in sync.
 */
export const THEME_STORAGE_KEY = "theme"

/**
 * React context shared by ThemeProvider (writer) and useTheme (reader).
 * Lives in its own module so Fast Refresh can hot-reload the Provider
 * without invalidating consumers.
 */
export const ThemeContext = createContext({
  theme: "dark",
  setTheme: () => {},
  toggleTheme: () => {},
})
