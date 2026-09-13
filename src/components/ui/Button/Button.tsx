import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../../lib/cn'
import type { Size } from '../ui.types'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: Size
  loading?: boolean
  leadingIcon?: ReactNode
  trailingIcon?: ReactNode
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-3 text-xs',
  md: 'h-11 px-4 text-sm',
  lg: 'h-12 px-5 text-sm',
}

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-violet-700 text-white shadow-sm hover:bg-violet-800 focus-visible:ring-violet-300',
  secondary: 'border border-violet-200 bg-white text-violet-800 hover:bg-violet-50 focus-visible:ring-violet-300',
  ghost: 'text-violet-800 hover:bg-violet-50 focus-visible:ring-violet-300',
  danger: 'bg-red-600 text-white shadow-sm hover:bg-red-700 focus-visible:ring-red-300',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', loading = false, leadingIcon, trailingIcon, children, className, disabled, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      type="button"
      className={cn('inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors focus-visible:outline-none focus-visible:ring-4 disabled:cursor-not-allowed disabled:opacity-50', sizes[size], variants[variant], className)}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? <span className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" aria-hidden="true" /> : leadingIcon}
      {loading ? <span className="sr-only">Loading</span> : children}
      {!loading && trailingIcon}
    </button>
  )
})
