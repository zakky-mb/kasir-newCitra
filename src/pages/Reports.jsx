import { useState } from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import PageHeader from '../components/Common/PageHeader'
import CardStats from '../components/Common/CardStats'
import DataTable from '../components/Common/DataTable'
import { formatCurrency } from '../config/appConfig'
import { mockDashboardStats } from '../mockData'

export default function Reports() {
  const [range, setRange] = useState('7d')
  const stats = mockDashboardStats

  const summaryColumns = [
    { key: 'invoice', header: 'Invoice' },
    { key: 'customer', header: 'Pelanggan' },
    { key: 'cashier', header: 'Kasir' },
    { key: 'total', header: 'Total', render: (r) => formatCurrency(r.total) },
    { key: 'date', header: 'Tanggal' },
  ]

  return (
    <div>
      <PageHeader title="Laporan" subtitle="Analisa penjualan dan transaksi" />

      <div className="mb-6 flex items-center gap-3">
        <label className="text-sm text-gray-500">Periode:</label>
        <select
          value={range}
          onChange={(e) => setRange(e.target.value)}
          className="rounded-md border border-gray-300 px-3 py-1.5 text-sm focus:border-primary focus:outline-none"
        >
          <option value="7d">7 Hari Terakhir</option>
          <option value="30d">30 Hari Terakhir</option>
          <option value="month">Bulan Ini</option>
        </select>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <CardStats label="Penjualan Hari Ini" value={stats.todaySales} type="currency" icon="💰" />
        <CardStats label="Penjualan Bulan Ini" value={stats.monthlySales} type="currency" icon="📅" />
        <CardStats label="Total Transaksi" value={stats.totalTransactions} type="number" icon="🧾" />
      </div>

      <div className="mb-6 rounded-lg bg-white p-4 shadow-sm">
        <h3 className="mb-4 text-sm font-semibold text-gray-700">
          Grafik Penjualan
        </h3>
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={stats.dailySales}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="label" fontSize={12} />
              <YAxis fontSize={12} tickFormatter={(v) => `${v / 1000000}jt`} width={40} />
              <Tooltip formatter={(v) => formatCurrency(v)} />
              <Bar dataKey="value" fill="#dc2626" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <h3 className="mb-3 text-sm font-semibold text-gray-700">
        Detail Transaksi
      </h3>
      <DataTable columns={summaryColumns} rows={stats.recentTransactions} />
    </div>
  )
}
