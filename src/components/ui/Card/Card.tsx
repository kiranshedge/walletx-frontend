import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../../../lib/cn'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  interactive?: boolean
}

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card({ interactive = false, className, ...props }, ref) {
  return <div ref={ref} className={cn('rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_8px_24px_rgba(71,53,130,0.07)]', interactive && 'transition-shadow hover:shadow-[0_12px_30px_rgba(71,53,130,0.12)]', className)} {...props} />
})
