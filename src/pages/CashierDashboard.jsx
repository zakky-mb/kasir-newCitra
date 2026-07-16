import CardStats from '../components/Common/CardStats'
import { formatCurrency } from '../config/appConfig'
import { mockDashboardStats, mockProducts } from '../mockData'

export default function CashierDashboard() {
  const stats = mockDashboardStats

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Dashboard Kasir</h1>
        <p className="text-sm text-gray-500">Ringkasan penjualan Anda hari ini</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <CardStats label="Penjualan Hari Ini" value={stats.todaySales} type="currency" icon="💰" />
        <CardStats label="Total Transaksi" value={stats.totalTransactions} type="number" icon="🧾" />
        <CardStats label="Total Produk" value={stats.totalProducts} type="number" icon="📦" />
      </div>

      <div className="rounded-lg bg-white p-4 shadow-sm">
        <h3 className="mb-4 text-sm font-semibold text-gray-700">Produk Populer</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {mockProducts.map((p) => (
            <div
              key={p.id}
              className="rounded-lg border border-gray-200 p-3 text-sm transition-colors hover:border-primary"
            >
              <p className="font-medium text-gray-800">{p.name}</p>
              <p className="text-gray-500">{p.category}</p>
              <p className="mt-1 font-semibold text-primary">
                {formatCurrency(p.price)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
