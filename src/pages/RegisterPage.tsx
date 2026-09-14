import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../app/auth'
import { Button, Input, PasswordInput } from '../components/ui'
import walletxLogo from '../assets/logos/walletx-logo-horizontal.svg'

interface RegisterErrors {
  name?: string
  identifier?: string
  password?: string
  confirmPassword?: string
  form?: string
}

interface RegisterValues {
  name: string
  identifier: string
  password: string
  confirmPassword: string
}

const validEmailPattern = /^\S+@\S+\.\S+$/
const minimumPasswordLength = 8

function validateRegister(values: RegisterValues): RegisterErrors {
  const errors: RegisterErrors = {}
  if (!values.name.trim()) errors.name = 'Enter your full name.'
  if (!values.identifier.trim()) errors.identifier = 'Enter your email.'
  else if (!validEmailPattern.test(values.identifier.trim())) errors.identifier = 'Enter a valid email.'
  if (!values.password) errors.password = 'Enter a password.'
  else if (values.password.length < minimumPasswordLength) errors.password = `Use at least ${minimumPasswordLength} characters.`
  if (!values.confirmPassword) errors.confirmPassword = 'Confirm your password.'
  else if (values.confirmPassword !== values.password) errors.confirmPassword = 'Passwords do not match.'
  return errors
}

export function RegisterPage() {
  const [values, setValues] = useState<RegisterValues>({ name: '', identifier: '', password: '', confirmPassword: '' })
  const [errors, setErrors] = useState<RegisterErrors>({})
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { register } = useAuth()

  function updateValue(field: keyof RegisterValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined, form: undefined }))
    setIsSuccess(false)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validateRegister(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setIsLoading(true)
    try {
      await register(values.name, values.identifier, values.password)
      setIsSuccess(true)
    } catch {
      setErrors({ form: 'We couldn\'t create your account. Check your details and try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#f7f8fc] px-4 py-6 sm:px-8 sm:py-10 lg:grid lg:place-items-center">
      <section className="mx-auto grid w-full max-w-4xl overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.08)] lg:min-h-[520px] lg:grid-cols-2" aria-labelledby="register-title">
        <div className="relative flex min-h-0 flex-col overflow-hidden bg-brand-50 p-6 sm:p-8 lg:p-12">
          <div><img src={walletxLogo} alt="WalletX" className="h-12 w-auto sm:h-14" /></div>
          <div className="relative z-10 hidden max-w-xs flex-1 items-center lg:flex">
            <div>
              <h1 id="register-title" className="font-display text-2xl font-extrabold leading-[1.12] tracking-tight text-slate-950 sm:text-3xl"><span className="block">Your money,</span><span className="block">in your hands.</span></h1>
              <p className="mt-3 max-w-[13rem] text-xs leading-5 text-slate-600">Send, receive and manage your money easily and securely.</p>
            </div>
          </div>
          <div className="absolute -bottom-20 -left-10 hidden h-48 w-64 rotate-[-18deg] rounded-[45%] bg-violet-300/70 lg:block" aria-hidden="true" />
          <div className="absolute -bottom-24 left-20 hidden h-48 w-48 rotate-[24deg] rounded-[45%] bg-violet-700 lg:block" aria-hidden="true" />
        </div>
        <div className="flex items-center bg-white p-6 sm:p-8 lg:p-12">
          <form className="w-full max-w-sm" onSubmit={handleSubmit} noValidate>
            <div className="mb-6">
              <h2 className="font-display text-xl font-bold tracking-tight text-slate-950">Join WalletX</h2>
              <p className="mt-1.5 text-sm text-slate-500">Create your account in minutes</p>
            </div>
            {errors.form && <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700" role="alert">{errors.form}</div>}
            {isSuccess && <div className="mb-4 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs text-emerald-700" role="status">Account created successfully. You can now sign in.</div>}
            <div className="grid gap-4">
              <Input id="register-name" label="Full name" autoComplete="name" value={values.name} onChange={(event) => updateValue('name', event.target.value)} error={errors.name} disabled={isLoading || isSuccess} className="h-10 rounded-lg" />
              <Input id="register-identifier" label="Email" type="email" autoComplete="email" value={values.identifier} onChange={(event) => updateValue('identifier', event.target.value)} error={errors.identifier} disabled={isLoading || isSuccess} className="h-10 rounded-lg" />
              <PasswordInput id="register-password" label="Password" autoComplete="new-password" value={values.password} onChange={(event) => updateValue('password', event.target.value)} error={errors.password} disabled={isLoading || isSuccess} className="h-10 rounded-lg" />
              <PasswordInput id="register-confirm-password" label="Confirm password" autoComplete="new-password" value={values.confirmPassword} onChange={(event) => updateValue('confirmPassword', event.target.value)} error={errors.confirmPassword} disabled={isLoading || isSuccess} className="h-10 rounded-lg" />
              <Button type="submit" className="mt-1 h-10 w-full rounded-lg" loading={isLoading} disabled={isSuccess}>{isSuccess ? 'Account created' : 'Create account'}</Button>
            </div>
            <p className="mt-7 text-center text-xs text-slate-500">Already have an account? <Link to="/login" className="font-semibold text-brand-700 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-100">Log in</Link></p>
          </form>
        </div>
      </section>
    </main>
  )
}
