import { useSearchParams } from 'react-router-dom'
import PageHeader from '../components/Common/PageHeader'
import DataTable from '../components/Common/DataTable'
import StatusBadge from '../components/Common/StatusBadge'
import { apiEndpoints } from '../config/appConfig'
import { useResource } from '../useResource'
import { mockUsers, roleLabels } from '../mockData'

const titleByRole = {
  admin: 'Manajemen Admin',
  manager: 'Manajemen Manager',
  cashier: 'Manajemen Kasir',
}

export default function Users() {
  const [searchParams] = useSearchParams()
  const role = searchParams.get('role')
  const { rows, loading } = useResource(apiEndpoints.users, mockUsers)

  const filtered = role ? rows.filter((u) => u.role === role) : rows

  const columns = [
    { key: 'name', header: 'Nama' },
    { key: 'email', header: 'Email' },
    { key: 'role', header: 'Role', render: (r) => roleLabels[r.role] || r.role },
    { key: 'outlet', header: 'Outlet' },
    { key: 'status', header: 'Status', render: (r) => <StatusBadge value={r.status} /> },
  ]

  return (
    <div>
      <PageHeader
        title={titleByRole[role] || 'Manajemen User'}
        subtitle="Kelola pengguna sistem"
        actionLabel={role ? `Tambah ${roleLabels[role]}` : 'Tambah User'}
      />
      <DataTable columns={columns} rows={filtered} loading={loading} />
    </div>
  )
}
