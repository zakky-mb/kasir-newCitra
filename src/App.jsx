import { Navigate, Route, Routes } from 'react-router-dom'
import AdminLayout from './components/Layout/AdminLayout'
import CashierLayout from './components/Layout/CashierLayout'
import ProtectedRoute from './components/Common/ProtectedRoute'
import Login from './pages/Login'
import AdminDashboard from './pages/AdminDashboard'
import CashierDashboard from './pages/CashierDashboard'
import Outlets from './pages/Outlets'
import Users from './pages/Users'
import Products from './pages/Products'
import Categories from './pages/Categories'
import Customers from './pages/Customers'
import Reports from './pages/Reports'
import Settings from './pages/Settings'

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="outlets" element={<Outlets />} />
        <Route path="users" element={<Users />} />
        <Route path="products" element={<Products />} />
        <Route path="categories" element={<Categories />} />
        <Route path="customers" element={<Customers />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      <Route
        path="/cashier"
        element={
          <ProtectedRoute>
            <CashierLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="/cashier/dashboard" replace />} />
        <Route path="dashboard" element={<CashierDashboard />} />
      </Route>

      <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
      <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
    </Routes>
  )
}
