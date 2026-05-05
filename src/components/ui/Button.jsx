import { cn } from "../../lib/cn.js"

/**
 * Reusable Button. Polymorphic via the `as` prop so it can render as
 * `<a>` (anchor) or any other tag while keeping the same styles.
 *
 * Variants:
 *   - "primary"  → solid accent, used for the main CTA
 *   - "ghost"    → outlined, used for secondary CTAs
 *
 * @param {object} props
 * @param {"primary" | "ghost"} [props.variant="primary"]
 * @param {"sm" | "md"}          [props.size="md"]
 * @param {keyof JSX.IntrinsicElements} [props.as="button"]
 * @param {React.ReactNode} [props.leadingIcon]
 * @param {React.ReactNode} [props.trailingIcon]
 * @param {string} [props.className]
 * @param {React.ReactNode} props.children
 */
export function Button({
  variant = "primary",
  size = "md",
  as: Tag = "button",
  leadingIcon,
  trailingIcon,
  className,
  children,
  ...rest
}) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full " +
    "font-medium transition-all duration-200 " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent " +
    "focus-visible:ring-offset-2 focus-visible:ring-offset-bg " +
    "disabled:cursor-not-allowed disabled:opacity-50"

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-5 text-sm",
  }

  const variants = {
    primary:
      "bg-accent text-white shadow-lg shadow-accent/20 " +
      "hover:bg-accent-hover hover:shadow-accent/30 hover:-translate-y-0.5",
    ghost:
      "border border-border bg-transparent text-text-strong " +
      "hover:border-accent/60 hover:bg-bg-elevated hover:text-accent",
  }

  return (
    <Tag
      className={cn(base, sizes[size], variants[variant], className)}
      {...rest}
    >
      {leadingIcon && <span className="flex shrink-0">{leadingIcon}</span>}
      <span>{children}</span>
      {trailingIcon && (
        <span className="flex shrink-0 transition-transform group-hover:translate-x-0.5">
          {trailingIcon}
        </span>
      )}
    </Tag>
  )
}
