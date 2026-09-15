import type { ButtonHTMLAttributes, ReactNode } from "react"
import clsx from "clsx"

export type ButtonVariant = "primary" | "secondary" | "ghost" | "text"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: ButtonVariant
  icon?: ReactNode
  iconPosition?: "left" | "right"
  className?: string
}

// Base styles shared by every variant. Kept minimal on purpose so
// `className` can freely override spacing/color/etc. per usage.
const baseStyles =
  "inline-flex items-center justify-center gap-1.5 rounded-full font-medium " +
  "transition-all duration-300 ease-out active:scale-95 cursor-pointer select-none " +
  "touch-manipulation focus-visible:outline-none focus-visible:ring-2 " +
  "focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black"

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-white leading-6 text-[#1d1e19] text-xs sm:text-sm px-4 py-2 sm:px-5 sm:py-2.5 " +
    "shadow-sm shadow-black/20 hover:bg-white/90 hover:scale-[1.02]",
  secondary:
    "bg-[#285340] leading-6 text-white text-xs sm:text-sm px-4 py-2 sm:px-5 sm:py-2.5 " +
    "shadow-sm shadow-black/20 hover:bg-[#285340]/90 hover:scale-[1.02]",
  ghost:
    "bg-white/10 leading-6 text-white/90 text-xs sm:text-sm border border-white/10 backdrop-blur-md " +
    "px-3 py-1.5 sm:px-4 sm:py-2 hover:bg-white/20 hover:border-white/20 hover:scale-[1.02]",
  text:
    "text-white/80 leading-6 text-sm px-2 py-1 hover:text-white",
}

/**
 * Reusable CTA/button component.
 *
 * `className` is merged *after* the variant styles via clsx, so callers
 * can override anything (padding, colors, radius, etc.) without touching
 * this file:
 *
 *   <Button variant="primary" className="px-8 py-3 text-base">Book now</Button>
 */
export function Button({
  children,
  variant = "primary",
  icon,
  iconPosition = "right",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={clsx(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </button>
  )
}
