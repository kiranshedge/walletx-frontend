import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { AuthContext } from './auth-context'
import { clearStoredUser, getStoredUser, setStoredUser } from './auth-storage'
import type { AuthContextValue, AuthStatus, AuthUser } from './auth.types'

const simulationDelay = 500

function waitForSimulation(): Promise<void> {
  return new Promise((resolve) => {
    window.setTimeout(resolve, simulationDelay)
  })
}

function createUser(identifier: string, name = identifier): AuthUser {
  return { id: identifier.trim().toLowerCase(), name: name.trim(), email: identifier.trim().toLowerCase() }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<AuthStatus>('initializing')
  const [user, setUser] = useState<AuthUser | null>(null)

  useEffect(() => {
    const initializationId = window.setTimeout(() => {
      const storedUser = getStoredUser()
      setUser(storedUser)
      setStatus(storedUser ? 'authenticated' : 'unauthenticated')
    }, 0)
    return () => window.clearTimeout(initializationId)
  }, [])

  async function login(identifier: string, password: string): Promise<AuthUser> {
    await waitForSimulation()
    void password
    if (identifier.trim().toLowerCase() === 'error@example.com') {
      clearStoredUser()
      setUser(null)
      setStatus('unauthenticated')
      throw new Error('Unable to sign in')
    }
    const nextUser = createUser(identifier)
    setStoredUser(nextUser)
    setUser(nextUser)
    setStatus('authenticated')
    return nextUser
  }

  async function register(name: string, email: string, password: string): Promise<AuthUser> {
    await waitForSimulation()
    void password
    if (email.trim().toLowerCase() === 'error@example.com') {
      clearStoredUser()
      setUser(null)
      setStatus('unauthenticated')
      throw new Error('Unable to create account')
    }
    const nextUser = createUser(email, name)
    setStoredUser(nextUser)
    setUser(nextUser)
    setStatus('authenticated')
    return nextUser
  }

  function logout() {
    clearStoredUser()
    setUser(null)
    setStatus('unauthenticated')
  }

  const value = useMemo<AuthContextValue>(() => ({
    user,
    status,
    isAuthenticated: status === 'authenticated',
    isInitializing: status === 'initializing',
    login,
    register,
    logout,
  }), [status, user])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
