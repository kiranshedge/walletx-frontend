import { Link, Outlet } from 'react-router-dom'
import { MobileNavigation } from './MobileNavigation'
import { Sidebar } from './Sidebar'

export function AppShell() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_right,#eee9ff,transparent_38%),#f7f8fc] text-slate-950">
      <header className="border-b border-slate-200 bg-white/90 px-4 py-4 backdrop-blur sm:px-8 md:px-10" aria-label="WalletX header">
        <div className="mx-auto flex max-w-6xl items-center gap-5">
          <Link to="/" className="font-display text-lg font-extrabold tracking-tight text-slate-950 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-100"><span className="mr-2 text-2xl text-brand-700" aria-hidden="true">W</span>WalletX</Link>
          <span className="hidden h-8 w-px bg-slate-200 sm:block" aria-hidden="true" />
          <p className="hidden text-sm leading-tight text-slate-500 sm:block">Simple. Secure. Yours.<span className="block text-xs text-slate-400">A modern digital wallet for everyday life.</span></p>
        </div>
      </header>
      <Sidebar />
      <div className="min-h-screen md:pl-52">
        <main className="mx-auto min-h-[calc(100vh-77px)] max-w-6xl px-4 py-8 pb-28 sm:px-8 md:px-10 md:pb-10">
          <Outlet />
        </main>
      </div>
      <MobileNavigation />
    </div>
  )
}
