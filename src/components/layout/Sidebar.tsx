import { NavigationLinks } from './NavigationLinks'

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-slate-200 bg-white px-5 py-6 md:block" aria-label="Primary navigation">
      <div className="flex h-full flex-col">
        <p className="font-display text-xl font-extrabold tracking-tight text-slate-950"><span className="mr-2 text-2xl text-brand-700" aria-hidden="true">W</span>WalletX</p>
        <nav className="mt-10" aria-label="Main navigation">
          <NavigationLinks orientation="sidebar" />
        </nav>
      </div>
    </aside>
  )
}
