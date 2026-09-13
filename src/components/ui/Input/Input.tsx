import { forwardRef, useId, type InputHTMLAttributes } from 'react'
import { cn } from '../../../lib/cn'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  hint?: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { id, label, hint, error, className, ...props },
  ref,
) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const messageId = `${inputId}-message`
  return (
    <div className="grid gap-2">
      {label && <label htmlFor={inputId} className="text-sm font-semibold text-slate-800">{label}</label>}
      <input ref={ref} id={inputId} className={cn('h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-violet-600 focus:ring-4 focus:ring-violet-100 disabled:cursor-not-allowed disabled:bg-slate-50', error && 'border-red-500 focus:border-red-600 focus:ring-red-100', className)} aria-invalid={error ? true : undefined} aria-describedby={(hint || error) ? messageId : undefined} {...props} />
      {(hint || error) && <p id={messageId} className={cn('text-xs', error ? 'text-red-600' : 'text-slate-500')} role={error ? 'alert' : undefined}>{error ?? hint}</p>}
    </div>
  )
})
