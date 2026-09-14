import { NavigationLinks } from './NavigationLinks'
import { LogoutButton } from './LogoutButton'

export function MobileNavigation() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-slate-200 bg-white/95 px-3 pb-[max(0.625rem,env(safe-area-inset-bottom))] pt-1.5 shadow-[0_-4px_16px_rgba(71,53,130,0.06)] backdrop-blur md:hidden" aria-label="Mobile navigation">
      <div className="flex gap-1">
        <NavigationLinks orientation="mobile" />
        <LogoutButton orientation="mobile" />
      </div>
    </nav>
  )
}
