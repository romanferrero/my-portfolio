/**
 * Merges class names, filtering out falsy values.
 * Lightweight alternative to `clsx` for our needs.
 *
 * @param  {...(string | false | null | undefined)} classes
 * @returns {string}
 *
 * @example
 *   cn("btn", isActive && "btn-active", disabled && "opacity-50")
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}
