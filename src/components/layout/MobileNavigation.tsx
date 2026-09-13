import { NavigationLinks } from './NavigationLinks'

export function MobileNavigation() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-slate-200 bg-white/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 shadow-[0_-8px_24px_rgba(71,53,130,0.08)] backdrop-blur md:hidden" aria-label="Mobile navigation">
      <NavigationLinks orientation="mobile" />
    </nav>
  )
}
