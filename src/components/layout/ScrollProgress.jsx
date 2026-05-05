import { motion, useScroll, useSpring } from "framer-motion"

/**
 * Thin accent-colored bar pinned to the very top of the viewport.
 * Fills as the user scrolls down the page. Decorative-only, so it
 * is hidden from assistive tech via aria-hidden.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  })

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="
        pointer-events-none fixed inset-x-0 top-0 z-[60]
        h-0.5 origin-left bg-accent
      "
    />
  )
}
