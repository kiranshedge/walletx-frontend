import { act, fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { AuthProvider } from '../app/auth'
import { LoginPage } from './LoginPage'

function renderLogin() {
  return render(<AuthProvider><MemoryRouter><LoginPage /></MemoryRouter></AuthProvider>)
}

describe('LoginPage', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the approved login fields and accessible controls', () => {
    renderLogin()
    expect(screen.getByRole('heading', { name: 'Your money,in your hands.' })).toBeInTheDocument()
    expect(screen.getByLabelText('Email or phone')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Log in' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Show password' })).toBeInTheDocument()
  })

  it('shows validation feedback before submitting incomplete credentials', () => {
    renderLogin()
    fireEvent.click(screen.getByRole('button', { name: 'Log in' }))
    expect(screen.getByText('Enter your email or phone.')).toBeInTheDocument()
    expect(screen.getByText('Enter your password.')).toBeInTheDocument()
    expect(screen.getAllByRole('alert')).toHaveLength(2)
  })

  it('shows a loading state and mocked authentication error for valid credentials', async () => {
    vi.useFakeTimers()
    renderLogin()
    fireEvent.change(screen.getByLabelText('Email or phone'), { target: { value: 'error@example.com' } })
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'password' } })
    fireEvent.click(screen.getByRole('button', { name: 'Log in' }))

    expect(screen.getByRole('button', { name: 'Loading' })).toBeDisabled()
    expect(screen.getByText('Loading')).toBeInTheDocument()

    await act(async () => {
      vi.advanceTimersByTime(500)
    })
    expect(screen.getByRole('alert')).toHaveTextContent("We couldn't sign you in.")
    expect(screen.getByRole('button', { name: 'Log in' })).not.toBeDisabled()
  })
})
