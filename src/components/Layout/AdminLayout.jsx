import { Outlet } from 'react-router-dom'
import Sidebar from '../Common/Sidebar'
import Navbar from '../Common/Navbar'

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />
      <div className="ml-[260px] flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
