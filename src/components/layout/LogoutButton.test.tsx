import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { AuthProvider } from '../../app/auth/AuthContext'
import { clearStoredUser, setStoredUser } from '../../app/auth/auth-storage'
import { LogoutButton } from './LogoutButton'

describe('LogoutButton', () => {
  it('clears authentication and replaces the route with Login', async () => {
    setStoredUser({ id: 'user@example.com', name: 'Kiran', email: 'user@example.com' })
    render(<AuthProvider><MemoryRouter initialEntries={['/app']}><Routes><Route path="/app" element={<LogoutButton orientation="sidebar" />} /><Route path="/login" element={<h1>Login</h1>} /></Routes></MemoryRouter></AuthProvider>)

    await waitFor(() => expect(screen.getByRole('button', { name: 'Logout' })).toBeInTheDocument())
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: 'Logout' }))
    })

    await waitFor(() => expect(screen.getByRole('heading', { name: 'Login' })).toBeInTheDocument())
    expect(window.localStorage.getItem('walletx.auth.user')).toBeNull()
    clearStoredUser()
  })
})
