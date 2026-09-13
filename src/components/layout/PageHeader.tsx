import type { ReactNode } from 'react'

export interface PageHeaderProps {
  title: string
  description?: string
  actions?: ReactNode
}

export function PageHeader({ title, description, actions }: PageHeaderProps) {
  return (
    <header className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-200 pb-6">
      <div>
        <h1 className="font-display text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">{title}</h1>
        {description && <p className="mt-2 text-sm text-slate-600">{description}</p>}
      </div>
      {actions}
    </header>
  )
}
