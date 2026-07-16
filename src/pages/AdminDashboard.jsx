import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import api from '../api/axios'
import CardStats from '../components/Common/CardStats'
import {
  apiEndpoints,
  dashboardWidgets,
  formatCurrency,
  quickMenu,
  recentTransactionsConfig,
} from '../config/appConfig'
import { mockDashboardStats } from '../mockData'

const columnLabels = {
  invoice: 'Invoice',
  customer: 'Pelanggan',
  cashier: 'Kasir',
  total: 'Total',
  date: 'Tanggal',
}

function ChartCard({ title, children }) {
  return (
    <div className="rounded-lg bg-white p-4 shadow-sm">
      <h3 className="mb-4 text-sm font-semibold text-gray-700">{title}</h3>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          {children}
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default function AdminDashboard() {
  const [stats, setStats] = useState(mockDashboardStats)

  useEffect(() => {
    let active = true
    api
      .get(apiEndpoints.dashboardStats)
      .then(({ data }) => {
        if (active && data) setStats({ ...mockDashboardStats, ...data })
      })
      .catch(() => {
        // Keep mock data when the backend is unavailable.
      })
    return () => {
      active = false
    }
  }, [])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-sm text-gray-500">Ringkasan performa bisnis Anda</p>
      </div>

      {/* Quick menu */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {quickMenu.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className="flex flex-col items-center gap-2 rounded-lg border border-gray-200 bg-white p-4 text-center text-sm font-medium text-gray-700 shadow-sm transition-colors hover:border-primary hover:text-primary"
          >
            <span className="text-2xl">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </div>

      {/* Widgets */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {dashboardWidgets.map((w) => (
          <CardStats
            key={w.id}
            label={w.label}
            value={stats[w.id]}
            type={w.type}
            icon={w.icon}
          />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <ChartCard title="Grafik Penjualan 7 Hari Terakhir">
          <BarChart data={stats.dailySales}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="label" fontSize={12} />
            <YAxis
              fontSize={12}
              tickFormatter={(v) => `${v / 1000000}jt`}
              width={40}
            />
            <Tooltip formatter={(v) => formatCurrency(v)} />
            <Bar dataKey="value" fill="#dc2626" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartCard>

        <ChartCard title="Grafik Penjualan Mingguan">
          <LineChart data={stats.weeklySales}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="label" fontSize={12} />
            <YAxis
              fontSize={12}
              tickFormatter={(v) => `${v / 1000000}jt`}
              width={40}
            />
            <Tooltip formatter={(v) => formatCurrency(v)} />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#dc2626"
              strokeWidth={2}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ChartCard>

        <ChartCard title="Grafik Penjualan Bulanan">
          <LineChart data={stats.monthlySalesTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="label" fontSize={12} />
            <YAxis
              fontSize={12}
              tickFormatter={(v) => `${v / 1000000}jt`}
              width={40}
            />
            <Tooltip formatter={(v) => formatCurrency(v)} />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#991b1b"
              strokeWidth={2}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ChartCard>
      </div>

      {/* Recent transactions */}
      <div className="rounded-lg bg-white p-4 shadow-sm">
        <h3 className="mb-4 text-sm font-semibold text-gray-700">
          {recentTransactionsConfig.label}
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-gray-500">
                {recentTransactionsConfig.columns.map((col) => (
                  <th key={col} className="px-3 py-2 font-medium">
                    {columnLabels[col] || col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {(stats.recentTransactions || [])
                .slice(0, recentTransactionsConfig.limit)
                .map((tx) => (
                  <tr
                    key={tx.invoice}
                    className="border-b border-gray-100 last:border-0 hover:bg-gray-50"
                  >
                    <td className="px-3 py-2 font-medium text-gray-800">
                      {tx.invoice}
                    </td>
                    <td className="px-3 py-2 text-gray-600">{tx.customer}</td>
                    <td className="px-3 py-2 text-gray-600">{tx.cashier}</td>
                    <td className="px-3 py-2 text-gray-800">
                      {formatCurrency(tx.total)}
                    </td>
                    <td className="px-3 py-2 text-gray-500">{tx.date}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
