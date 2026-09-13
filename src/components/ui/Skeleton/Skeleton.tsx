import type { HTMLAttributes } from 'react'
import { cn } from '../../../lib/cn'

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> { rounded?: 'md' | 'full' }

export function Skeleton({ rounded = 'md', className, ...props }: SkeletonProps) {
  return <div className={cn('animate-pulse bg-slate-200', rounded === 'full' ? 'rounded-full' : 'rounded-md', className)} aria-hidden="true" {...props} />
}
