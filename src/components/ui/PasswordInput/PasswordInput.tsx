import { useState, type ComponentProps } from 'react'
import { Input } from '../Input/Input'

export interface PasswordInputProps extends Omit<ComponentProps<typeof Input>, 'type'> {
  showLabel?: string
  hideLabel?: string
}

export function PasswordInput({ showLabel = 'Show password', hideLabel = 'Hide password', ...props }: PasswordInputProps) {
  const [visible, setVisible] = useState(false)
  return (
    <div className="relative">
      <Input {...props} type={visible ? 'text' : 'password'} className="pr-14" />
      <button type="button" className="absolute right-2 top-8 rounded-lg px-2 py-1 text-xs font-semibold text-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400" onClick={() => setVisible((current) => !current)} aria-label={visible ? hideLabel : showLabel} aria-pressed={visible}>{visible ? 'Hide' : 'Show'}</button>
    </div>
  )
}
