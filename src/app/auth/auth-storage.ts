import type { AuthUser } from './auth.types'

const storageKey = 'walletx.auth.user'

function isAuthUser(value: unknown): value is AuthUser {
  if (!value || typeof value !== 'object') return false
  const candidate = value as Record<string, unknown>
  return typeof candidate.id === 'string' && candidate.id.length > 0
    && typeof candidate.name === 'string' && candidate.name.length > 0
    && typeof candidate.email === 'string' && candidate.email.length > 0
}

export function getStoredUser(): AuthUser | null {
  try {
    const storedValue = window.localStorage.getItem(storageKey)
    if (!storedValue) return null
    const parsedValue: unknown = JSON.parse(storedValue)
    return isAuthUser(parsedValue) ? parsedValue : null
  } catch {
    return null
  }
}

export function setStoredUser(user: AuthUser): void {
  try {
    window.localStorage.setItem(storageKey, JSON.stringify(user))
  } catch {
    // Persistence is best effort for this client-side MVP.
  }
}

export function clearStoredUser(): void {
  try {
    window.localStorage.removeItem(storageKey)
  } catch {
    // Storage can be unavailable in restricted browser contexts.
  }
}
