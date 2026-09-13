import { NavigationLinks } from './NavigationLinks'

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 top-[77px] z-30 hidden w-52 border-r border-slate-200/80 bg-white/70 px-4 py-8 md:block" aria-label="WalletX sidebar">
      <div className="flex h-full flex-col">
        <nav aria-label="Main navigation">
          <NavigationLinks orientation="sidebar" />
        </nav>
      </div>
    </aside>
  )
}
