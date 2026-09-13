import { useEffect, useRef, type ReactNode } from 'react'
import { cn } from '../../../lib/cn'

export interface ModalProps {
  open: boolean
  onClose: () => void
  title: string
  children: ReactNode
  className?: string
}

export function Modal({ open, onClose, title, children, className }: ModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (!open) return
    const handleKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKeyDown)
    closeRef.current?.focus()
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])
  if (!open) return null
  return <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/40 p-4" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
    <section className={cn('w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl', className)} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="flex items-start justify-between gap-4">
        <h2 id="modal-title" className="text-lg font-bold text-slate-950">{title}</h2>
        <button ref={closeRef} type="button" onClick={onClose} className="rounded-lg px-2 text-xl leading-none text-slate-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-100" aria-label="Close dialog">&times;</button>
      </div>
      <div className="mt-4">{children}</div>
    </section>
  </div>
}
