import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { afterEach, describe, expect, it } from 'vitest'
import { AuthProvider } from './AuthContext'
import { clearStoredUser, setStoredUser } from './auth-storage'
import { RequireAuth } from './RequireAuth'

describe('RequireAuth', () => {
  afterEach(() => {
    clearStoredUser()
  })

  it('shows an accessible loading state during authentication initialization', () => {
    render(<AuthProvider><MemoryRouter initialEntries={['/app']}><Routes><Route element={<RequireAuth />}><Route path="/app" element={<h1>Protected home</h1>} /></Route></Routes></MemoryRouter></AuthProvider>)
    expect(screen.getByRole('status', { name: 'Loading authentication state' })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'Protected home' })).not.toBeInTheDocument()
  })

  it('redirects unauthenticated users to Login after initialization', async () => {
    render(<AuthProvider><MemoryRouter initialEntries={['/app']}><Routes><Route path="/login" element={<h1>Login</h1>} /><Route element={<RequireAuth />}><Route path="/app" element={<h1>Protected home</h1>} /></Route></Routes></MemoryRouter></AuthProvider>)
    await waitFor(() => expect(screen.getByRole('heading', { name: 'Login' })).toBeInTheDocument())
    expect(screen.queryByRole('heading', { name: 'Protected home' })).not.toBeInTheDocument()
  })

  it('renders protected content for an authenticated user', async () => {
    setStoredUser({ id: 'user@example.com', name: 'Kiran', email: 'user@example.com' })
    render(<AuthProvider><MemoryRouter initialEntries={['/app']}><Routes><Route element={<RequireAuth />}><Route path="/app" element={<h1>Protected home</h1>} /></Route></Routes></MemoryRouter></AuthProvider>)
    await waitFor(() => expect(screen.getByRole('heading', { name: 'Protected home' })).toBeInTheDocument())
  })
})
