import type { ReactNode } from 'react'

export interface ErrorStateProps { title?: string; description: string; action?: ReactNode }

export function ErrorState({ title = 'Something went wrong', description, action }: ErrorStateProps) {
  return <div className="rounded-2xl border border-red-200 bg-red-50 p-5" role="alert"><p className="font-bold text-red-900">{title}</p><p className="mt-1 text-sm text-red-700">{description}</p>{action && <div className="mt-4">{action}</div>}</div>
}
