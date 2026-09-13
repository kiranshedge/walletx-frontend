import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../../lib/cn'

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode
  label: string
  size?: 'sm' | 'md' | 'lg'
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton({ icon, label, size = 'md', className, ...props }, ref) {
  return <button ref={ref} type="button" aria-label={label} className={cn('inline-flex items-center justify-center rounded-xl text-violet-800 transition-colors hover:bg-violet-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-100 disabled:cursor-not-allowed disabled:opacity-50', { sm: 'size-8', md: 'size-10', lg: 'size-12' }[size], className)} {...props}>{icon}</button>
})
