import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { clearSession, getUser } from '../../auth'

const OUTLETS = ['Semua Outlet', 'Outlet Pusat', 'Outlet Cabang 1', 'Outlet Cabang 2']

export default function Navbar() {
  const navigate = useNavigate()
  const user = getUser()
  const [outlet, setOutlet] = useState(OUTLETS[0])

  const handleLogout = () => {
    clearSession()
    navigate('/login', { replace: true })
  }

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white px-6 py-3">
      <div className="flex items-center gap-3">
        <label className="text-sm text-gray-500">Outlet:</label>
        <select
          value={outlet}
          onChange={(e) => setOutlet(e.target.value)}
          className="rounded-md border border-gray-300 px-3 py-1.5 text-sm focus:border-primary focus:outline-none"
        >
          {OUTLETS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          className="relative text-xl"
          title="Notifikasi"
          aria-label="Notifikasi"
        >
          🔔
          <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-primary" />
        </button>
        <div className="hidden text-right sm:block">
          <p className="text-sm font-medium text-gray-800">
            {user?.name || 'Admin'}
          </p>
          <p className="text-xs text-gray-500">{user?.role || 'admin'}</p>
        </div>
        <button
          type="button"
          onClick={handleLogout}
          className="rounded-md bg-button-bg px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-button-hover"
        >
          Logout
        </button>
      </div>
    </header>
  )
}
