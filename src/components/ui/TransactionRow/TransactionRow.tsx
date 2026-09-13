import type { ReactNode } from 'react'
import { Avatar } from '../Avatar/Avatar'
import { MoneyAmount } from '../MoneyAmount/MoneyAmount'

export interface TransactionRowProps { title: string; description?: string; amount: number; direction: 'in' | 'out'; date?: string; avatar?: ReactNode }

export function TransactionRow({ title, description, amount, direction, date, avatar }: TransactionRowProps) {
  return <article className="flex items-center gap-3 border-b border-slate-100 py-3 last:border-b-0"><div className="relative">{avatar ?? <Avatar name={title} size="md" />}<span className={`absolute -bottom-1 -right-1 grid size-4 place-items-center rounded-full text-[10px] font-bold text-white ${direction === 'in' ? 'bg-emerald-500' : 'bg-red-500'}`} aria-hidden="true">{direction === 'in' ? '+' : '-'}</span></div><div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold text-slate-900">{title}</p>{description && <p className="truncate text-xs text-slate-500">{description}</p>}</div><div className="text-right"><MoneyAmount amount={amount} direction={direction} showSign className="text-sm" />{date && <p className="mt-0.5 text-xs text-slate-400">{date}</p>}</div></article>
}
