import { cn } from '../../../lib/cn'
import type { Status } from '../ui.types'

export interface ToastProps {
  title: string
  message?: string
  status?: Exclude<Status, 'default'>
  onClose?: () => void
}

export function Toast({ title, message, status = 'success', onClose }: ToastProps) {
  return <div className={cn('flex items-start gap-3 rounded-xl border bg-white p-4 shadow-lg', { success: 'border-emerald-200', error: 'border-red-200', warning: 'border-amber-200' }[status])} role="status" aria-live="polite">
    <span className={cn('mt-0.5 size-2 shrink-0 rounded-full', { success: 'bg-emerald-500', error: 'bg-red-500', warning: 'bg-amber-500' }[status])} aria-hidden="true" />
    <div className="min-w-0 flex-1"><p className="text-sm font-bold text-slate-900">{title}</p>{message && <p className="mt-1 text-sm text-slate-600">{message}</p>}</div>
    {onClose && <button type="button" onClick={onClose} className="text-lg leading-none text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400" aria-label="Dismiss notification">&times;</button>}
  </div>
}
