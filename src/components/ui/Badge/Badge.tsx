import type { HTMLAttributes } from 'react'
import { cn } from '../../../lib/cn'
import type { Status } from '../ui.types'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  status?: Status
}

export function Badge({ status = 'default', className, ...props }: BadgeProps) {
  return <span className={cn('inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold', { default: 'bg-slate-100 text-slate-700', success: 'bg-emerald-50 text-emerald-700', error: 'bg-red-50 text-red-700', warning: 'bg-amber-50 text-amber-700' }[status], className)} {...props} />
}
