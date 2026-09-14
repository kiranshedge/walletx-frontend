import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../app/auth'
import { Icon } from '../primitives'
import { cn } from '../../lib/cn'

interface LogoutButtonProps {
  orientation: 'sidebar' | 'mobile'
}

export function LogoutButton({ orientation }: LogoutButtonProps) {
  const { logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <button type="button" onClick={handleLogout} className={cn('flex min-h-10 items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] font-semibold text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-100', orientation === 'mobile' && 'min-h-10 flex-1 justify-center flex-col gap-0.5 px-2 py-1.5 text-[11px]')}>
      <Icon className="size-5 shrink-0" aria-hidden="true"><path d="M10 17l5-5-5-5" /><path d="M15 12H3" /><path d="M21 19V5a2 2 0 0 0-2-2h-6" /></Icon>
      <span>Logout</span>
    </button>
  )
}
