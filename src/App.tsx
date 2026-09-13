import { Badge, Button, Card, Input, MoneyAmount, PasswordInput, TransactionRow } from './components/ui'

function App() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_right,#eee9ff,transparent_38%),#f7f8fc] px-4 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 flex flex-wrap items-end justify-between gap-4"><div><p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-violet-700">WalletX</p><h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">Design system foundation</h1><p className="mt-2 max-w-xl text-slate-600">Reusable primitives for a simple, secure, and trustworthy wallet experience.</p></div><Badge status="success">Foundation ready</Badge></header>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"><Card><div className="flex items-start justify-between gap-4"><div><p className="text-sm font-semibold text-slate-500">Available balance</p><MoneyAmount amount={2480} className="mt-2 block text-3xl" /></div><Button size="sm">Add money</Button></div><div className="mt-8 space-y-1"><p className="text-xs font-bold uppercase tracking-wider text-slate-400">Recent transactions</p><TransactionRow title="Ana Silva" description="Transfer received" amount={150} direction="in" date="Today, 2:34 PM" /><TransactionRow title="Coffee Shop" description="Card payment" amount={12.5} direction="out" date="Today, 9:45 AM" /></div></Card><Card><h2 className="font-display text-lg font-bold text-slate-950">Form primitives</h2><div className="mt-5 grid gap-4"><Input label="Email or phone" placeholder="you@example.com" /><PasswordInput label="Password" placeholder="Enter your password" /><Button className="w-full">Continue</Button></div></Card></div>
      </div>
    </main>
  )
}

export default App
