import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import api from '../api/axios'
import { apiEndpoints } from '../config/appConfig'
import { setSession } from '../auth'

export default function Login() {
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/admin/dashboard'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const { data } = await api.post(apiEndpoints.login, { email, password })
      setSession(data.token, data.user)
      navigate(from, { replace: true })
    } catch (err) {
      // Allow a demo login when no backend is available.
      if (!err.response) {
        setSession('demo-token', { name: 'Admin Demo', role: 'admin' })
        navigate(from, { replace: true })
        return
      }
      setError(
        err.response?.data?.message || 'Login gagal. Periksa email dan password.',
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-secondary to-primary p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <div className="mb-6 text-center">
          <div className="mb-2 text-4xl">🧾</div>
          <h1 className="text-2xl font-bold text-gray-800">New Citra POS</h1>
          <p className="text-sm text-gray-500">Admin Dashboard</p>
        </div>

        {error && (
          <div className="mb-4 rounded-md bg-red-50 px-4 py-2 text-sm text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@citrapos.com"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-button-bg py-2.5 text-sm font-semibold text-white transition-colors hover:bg-button-hover disabled:opacity-60"
          >
            {loading ? 'Memproses...' : 'Masuk'}
          </button>
        </form>
      </div>
    </div>
  )
}
