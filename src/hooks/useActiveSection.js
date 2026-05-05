import { useEffect, useState } from "react"

/**
 * Tracks which section id is currently in the viewport using
 * IntersectionObserver. Returns the id of the most-visible section.
 *
 * @param {string[]} sectionIds - DOM ids of sections to watch.
 * @param {object} [options]
 * @param {string} [options.rootMargin="-40% 0px -55% 0px"] - Bias toward
 *   the upper third of the viewport so the active link updates as you
 *   scroll a heading into view.
 * @returns {string} - The currently active section id.
 */
export function useActiveSection(
  sectionIds,
  { rootMargin = "-40% 0px -55% 0px" } = {},
) {
  const [active, setActive] = useState(sectionIds[0] ?? "")

  useEffect(() => {
    if (!sectionIds.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin, threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [sectionIds, rootMargin])

  return active
}
