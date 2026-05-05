import { cn } from "../../lib/cn.js"

/**
 * Centered, max-width wrapper used by every section to keep horizontal
 * rhythm consistent across the page.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className] - Extra utility classes to compose on top.
 * @param {keyof JSX.IntrinsicElements} [props.as="div"] - Render as a custom tag.
 */
export function Container({ children, className, as: Tag = "div", ...rest }) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8",
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  )
}
