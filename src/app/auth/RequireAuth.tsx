import { Navigate, Outlet } from 'react-router-dom'
import { Spinner } from '../../components/ui'
import { useAuth } from './useAuth'

export function RequireAuth() {
  const { isAuthenticated, isInitializing } = useAuth()

  if (isInitializing) {
    return <main className="grid min-h-screen place-items-center bg-[#f7f8fc]" aria-label="Loading application"><Spinner label="Loading authentication state" /></main>
  }

  if (!isAuthenticated) return <Navigate to="/login" replace />

  return <Outlet />
}
