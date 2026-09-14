import { act, fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { RegisterPage } from './RegisterPage'

function renderRegister() {
  return render(<MemoryRouter><RegisterPage /></MemoryRouter>)
}

describe('RegisterPage', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders all registration fields and accessible controls', () => {
    renderRegister()
    expect(screen.getByRole('heading', { name: 'Join WalletX' })).toBeInTheDocument()
    expect(screen.getByLabelText('Full name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
    expect(screen.getByLabelText('Confirm password')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Create account' })).toBeInTheDocument()
  })

  it('shows required and matching-password validation errors', () => {
    renderRegister()
    fireEvent.click(screen.getByRole('button', { name: 'Create account' }))
    expect(screen.getByText('Enter your full name.')).toBeInTheDocument()
    expect(screen.getByText('Enter your email.')).toBeInTheDocument()
    expect(screen.getByText('Enter a password.')).toBeInTheDocument()
    expect(screen.getByText('Confirm your password.')).toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('Full name'), { target: { value: 'Kiran' } })
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'kiran@example.com' } })
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'password' } })
    fireEvent.change(screen.getByLabelText('Confirm password'), { target: { value: 'different' } })
    fireEvent.click(screen.getByRole('button', { name: 'Create account' }))
    expect(screen.getByText('Passwords do not match.')).toBeInTheDocument()
  })

  it('shows loading and a simulated registration success state', async () => {
    vi.useFakeTimers()
    renderRegister()
    fireEvent.change(screen.getByLabelText('Full name'), { target: { value: 'Kiran' } })
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'kiran@example.com' } })
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'password' } })
    fireEvent.change(screen.getByLabelText('Confirm password'), { target: { value: 'password' } })
    fireEvent.click(screen.getByRole('button', { name: 'Create account' }))

    expect(screen.getByRole('button', { name: 'Loading' })).toBeDisabled()
    await act(async () => {
      vi.advanceTimersByTime(500)
    })
    expect(screen.getByRole('status')).toHaveTextContent('Account created successfully')
    expect(screen.getByRole('button', { name: 'Account created' })).toBeDisabled()
  })

  it('shows a simulated registration error without leaving the page', async () => {
    vi.useFakeTimers()
    renderRegister()
    fireEvent.change(screen.getByLabelText('Full name'), { target: { value: 'Kiran' } })
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'error@example.com' } })
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'password' } })
    fireEvent.change(screen.getByLabelText('Confirm password'), { target: { value: 'password' } })
    fireEvent.click(screen.getByRole('button', { name: 'Create account' }))
    await act(async () => {
      vi.advanceTimersByTime(500)
    })
    expect(screen.getByRole('alert')).toHaveTextContent("We couldn't create your account")
    expect(screen.getByDisplayValue('error@example.com')).toBeInTheDocument()
  })
})