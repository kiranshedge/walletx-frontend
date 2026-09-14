import { AppRouter } from './app/AppRouter'
import { AuthProvider } from './app/auth'

function App() {
  return <AuthProvider><AppRouter /></AuthProvider>
}

export default App
