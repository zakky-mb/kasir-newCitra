import PageHeader from '../components/Common/PageHeader'
import DataTable from '../components/Common/DataTable'
import StatusBadge from '../components/Common/StatusBadge'
import { apiEndpoints } from '../config/appConfig'
import { useResource } from '../useResource'
import { mockOutlets } from '../mockData'

export default function Outlets() {
  const { rows, loading } = useResource(apiEndpoints.outlets, mockOutlets)

  const columns = [
    { key: 'name', header: 'Nama Outlet' },
    { key: 'address', header: 'Alamat' },
    { key: 'phone', header: 'Telepon' },
    { key: 'status', header: 'Status', render: (r) => <StatusBadge value={r.status} /> },
  ]

  return (
    <div>
      <PageHeader
        title="Manajemen Outlet"
        subtitle="Kelola daftar outlet Anda"
        actionLabel="Tambah Outlet"
      />
      <DataTable columns={columns} rows={rows} loading={loading} />
    </div>
  )
}
