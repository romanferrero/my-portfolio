/**
 * Generates a deterministic 2-color gradient from a string.
 *
 * Same input always returns the same output, so each project keeps
 * its own visual identity without us hand-picking colors. We bias the
 * hue space and clamp saturation/lightness to keep results readable
 * over both light and dark backgrounds.
 *
 * @param {string} input - Typically the project name or id.
 * @returns {{ from: string, to: string }} - HSL color strings.
 */
function hashCode(input) {
  let hash = 0
  for (let i = 0; i < input.length; i++) {
    hash = (Math.imul(31, hash) + input.charCodeAt(i)) | 0
  }
  return Math.abs(hash)
}

export function gradientFor(input) {
  const h = hashCode(input)
  const hue1 = h % 360
  const hue2 = (hue1 + 45 + (h % 35)) % 360
  return {
    from: `hsl(${hue1}, 70%, 55%)`,
    to: `hsl(${hue2}, 65%, 45%)`,
  }
}

/**
 * Pulls 1-2 uppercase initials from the project name for the card preview.
 *
 * @param {string} name
 * @returns {string}
 */
export function initialsFor(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase()
}
