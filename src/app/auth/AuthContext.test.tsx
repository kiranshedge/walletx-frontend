import { act, render, screen, waitFor } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { AuthProvider } from './AuthContext'
import { clearStoredUser, setStoredUser } from './auth-storage'
import { useAuth } from './useAuth'

function AuthProbe() {
  const { user, status, isInitializing, login, register, logout } = useAuth()
  return <div>
    <span data-testid="status">{status}</span>
    <span data-testid="initializing">{String(isInitializing)}</span>
    <span data-testid="user">{user?.email ?? 'none'}</span>
    <button type="button" onClick={() => void login('user@example.com', 'password')}>Login</button>
    <button type="button" onClick={() => void login('error@example.com', 'password').catch(() => undefined)}>Fail login</button>
    <button type="button" onClick={() => void register('Kiran', 'register@example.com', 'password')}>Register</button>
    <button type="button" onClick={logout}>Logout</button>
  </div>
}

describe('AuthProvider', () => {
  afterEach(() => {
    vi.useRealTimers()
    clearStoredUser()
  })

  it('restores a valid persisted user', async () => {
    setStoredUser({ id: 'user@example.com', name: 'Kiran', email: 'user@example.com' })
    render(<AuthProvider><AuthProbe /></AuthProvider>)
    await waitFor(() => expect(screen.getByTestId('status')).toHaveTextContent('authenticated'))
    expect(screen.getByTestId('user')).toHaveTextContent('user@example.com')
    expect(screen.getByTestId('initializing')).toHaveTextContent('false')
  })

  it('ignores corrupted persisted data safely', async () => {
    window.localStorage.setItem('walletx.auth.user', '{invalid')
    render(<AuthProvider><AuthProbe /></AuthProvider>)
    await waitFor(() => expect(screen.getByTestId('status')).toHaveTextContent('unauthenticated'))
    expect(screen.getByTestId('user')).toHaveTextContent('none')
  })

  it('persists login and clears it on logout', async () => {
    vi.useFakeTimers()
    render(<AuthProvider><AuthProbe /></AuthProvider>)
    await act(async () => {
      vi.advanceTimersByTime(0)
      screen.getByRole('button', { name: 'Login' }).click()
      vi.advanceTimersByTime(500)
    })
    expect(screen.getByTestId('status')).toHaveTextContent('authenticated')
    expect(window.localStorage.getItem('walletx.auth.user')).toContain('user@example.com')
    await act(async () => {
      screen.getByRole('button', { name: 'Logout' }).click()
    })
    expect(screen.getByTestId('status')).toHaveTextContent('unauthenticated')
    expect(window.localStorage.getItem('walletx.auth.user')).toBeNull()
  })

  it('persists registration as the authenticated user', async () => {
    vi.useFakeTimers()
    render(<AuthProvider><AuthProbe /></AuthProvider>)
    await act(async () => {
      vi.advanceTimersByTime(0)
      screen.getByRole('button', { name: 'Register' }).click()
      vi.advanceTimersByTime(500)
    })
    expect(screen.getByTestId('status')).toHaveTextContent('authenticated')
    expect(screen.getByTestId('user')).toHaveTextContent('register@example.com')
    expect(window.localStorage.getItem('walletx.auth.user')).toContain('Kiran')
  })

  it('clears an existing session when simulated authentication fails', async () => {
    setStoredUser({ id: 'existing@example.com', name: 'Kiran', email: 'existing@example.com' })
    vi.useFakeTimers()
    render(<AuthProvider><AuthProbe /></AuthProvider>)
    await act(async () => {
      vi.advanceTimersByTime(0)
    })
    await act(async () => {
      screen.getByRole('button', { name: 'Fail login' }).click()
      vi.advanceTimersByTime(500)
    })
    expect(screen.getByTestId('status')).toHaveTextContent('unauthenticated')
    expect(window.localStorage.getItem('walletx.auth.user')).toBeNull()

    await act(async () => {
      screen.getByRole('button', { name: 'Login' }).click()
      vi.advanceTimersByTime(500)
    })
    expect(screen.getByTestId('status')).toHaveTextContent('authenticated')
  })
})