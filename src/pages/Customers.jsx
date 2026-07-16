import PageHeader from '../components/Common/PageHeader'
import DataTable from '../components/Common/DataTable'
import { apiEndpoints, formatCurrency, formatNumber } from '../config/appConfig'
import { useResource } from '../useResource'
import { mockCustomers } from '../mockData'

export default function Customers() {
  const { rows, loading } = useResource(apiEndpoints.customers, mockCustomers)

  const columns = [
    { key: 'name', header: 'Nama' },
    { key: 'phone', header: 'Telepon' },
    { key: 'email', header: 'Email' },
    { key: 'points', header: 'Poin', render: (r) => formatNumber(r.points) },
    { key: 'totalSpent', header: 'Total Belanja', render: (r) => formatCurrency(r.totalSpent) },
  ]

  return (
    <div>
      <PageHeader
        title="Manajemen Pelanggan"
        subtitle="Kelola data pelanggan"
        actionLabel="Tambah Pelanggan"
      />
      <DataTable columns={columns} rows={rows} loading={loading} />
    </div>
  )
}
