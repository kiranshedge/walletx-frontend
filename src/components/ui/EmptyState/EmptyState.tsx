import type { ReactNode } from 'react'

export interface EmptyStateProps { title: string; description: string; icon?: ReactNode; action?: ReactNode }

export function EmptyState({ title, description, icon, action }: EmptyStateProps) {
  return <div className="grid justify-items-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-10 text-center" role="status">{icon && <div className="mb-3 text-violet-700" aria-hidden="true">{icon}</div>}<h2 className="text-base font-bold text-slate-900">{title}</h2><p className="mt-1 max-w-sm text-sm text-slate-500">{description}</p>{action && <div className="mt-5">{action}</div>}</div>
}
