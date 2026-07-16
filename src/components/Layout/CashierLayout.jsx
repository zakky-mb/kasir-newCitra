import { Outlet } from 'react-router-dom'
import Navbar from '../Common/Navbar'

export default function CashierLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
