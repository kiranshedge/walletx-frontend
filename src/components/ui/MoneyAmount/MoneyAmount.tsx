import type { HTMLAttributes } from 'react'
import { cn } from '../../../lib/cn'

export interface MoneyAmountProps extends HTMLAttributes<HTMLSpanElement> { amount: number; currency?: string; locale?: string; direction?: 'in' | 'out' | 'neutral'; showSign?: boolean }

export function MoneyAmount({ amount, currency = 'BRL', locale = 'pt-BR', direction = 'neutral', showSign = false, className, ...props }: MoneyAmountProps) {
  const formatted = new Intl.NumberFormat(locale, { style: 'currency', currency }).format(Math.abs(amount))
  const sign = showSign || direction !== 'neutral' ? (direction === 'in' ? '+' : direction === 'out' ? '-' : '') : ''
  return <span className={cn('font-bold tabular-nums', { in: 'text-emerald-700', out: 'text-red-600', neutral: 'text-slate-950' }[direction], className)} aria-label={`${direction === 'in' ? 'Money in' : direction === 'out' ? 'Money out' : 'Amount'} ${sign}${formatted}`} {...props}>{sign}{formatted}</span>
}
