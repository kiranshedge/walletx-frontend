import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../app/auth'
import { Button, Input, PasswordInput } from '../components/ui'
import walletxLogo from '../assets/logos/walletx-logo-horizontal.svg'

interface LoginErrors {
  identifier?: string
  password?: string
  form?: string
}

const validIdentifierPattern = /(?:^\S+@\S+\.\S+$)|(?:^\+?[\d\s().-]{7,}$)/

function validateLogin(identifier: string, password: string): LoginErrors {
  const errors: LoginErrors = {}
  if (!identifier.trim()) errors.identifier = 'Enter your email or phone.'
  else if (!validIdentifierPattern.test(identifier.trim())) errors.identifier = 'Enter a valid email or phone.'
  if (!password) errors.password = 'Enter your password.'
  return errors
}

export function LoginPage() {
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<LoginErrors>({})
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validateLogin(identifier, password)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setIsLoading(true)
    try {
      await login(identifier, password)
      navigate('/app')
    } catch {
      setErrors({ form: 'We couldn\'t sign you in. Check your details and try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#f7f8fc] px-4 py-6 sm:px-8 sm:py-10 lg:grid lg:place-items-center">
      <section className="mx-auto grid w-full max-w-4xl overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.08)] lg:min-h-[480px] lg:grid-cols-2" aria-labelledby="login-title">
        <div className="relative flex min-h-0 flex-col overflow-hidden bg-brand-50 p-6 sm:p-8 lg:p-12">
          <div>
            <img src={walletxLogo} alt="WalletX" className="h-12 w-auto sm:h-14" />
          </div>
          <div className="relative z-10 hidden max-w-xs flex-1 items-center lg:flex">
            <div>
              <h1 id="login-title" className="font-display text-2xl font-extrabold leading-[1.12] tracking-tight text-slate-950 sm:text-3xl"><span className="block">Your money,</span><span className="block">in your hands.</span></h1>
              <p className="mt-3 max-w-[13rem] text-xs leading-5 text-slate-600">Send, receive and manage your money easily and securely.</p>
            </div>
          </div>
          <div className="absolute -bottom-20 -left-10 hidden h-48 w-64 rotate-[-18deg] rounded-[45%] bg-violet-300/70 lg:block" aria-hidden="true" />
          <div className="absolute -bottom-24 left-20 hidden h-48 w-48 rotate-[24deg] rounded-[45%] bg-violet-700 lg:block" aria-hidden="true" />
        </div>
        <div className="flex items-center bg-white p-6 sm:p-8 lg:p-12">
          <form className="w-full max-w-sm" onSubmit={handleSubmit} noValidate>
            <div className="mb-6">
              <h2 className="font-display text-xl font-bold tracking-tight text-slate-950">Welcome back</h2>
              <p className="mt-1.5 text-sm text-slate-500">Sign in to your WalletX account</p>
            </div>
            {errors.form && <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700" role="alert">{errors.form}</div>}
            <div className="grid gap-4">
              <Input id="login-identifier" label="Email or phone" type="text" autoComplete="username" value={identifier} onChange={(event) => setIdentifier(event.target.value)} error={errors.identifier} disabled={isLoading} className="h-10 rounded-lg" />
              <PasswordInput id="login-password" label="Password" autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} error={errors.password} disabled={isLoading} className="h-10 rounded-lg" />
              <Button type="submit" className="mt-1 h-10 w-full rounded-lg" loading={isLoading}>Log in</Button>
            </div>
            <button type="button" className="mx-auto mt-3 block text-xs font-semibold text-brand-700 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-100">Forgot your password?</button>
            <p className="mt-7 text-center text-xs text-slate-500">Don&apos;t have an account? <Link to="/register" className="font-semibold text-brand-700 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-100">Register</Link></p>
          </form>
        </div>
      </section>
    </main>
  )
}
