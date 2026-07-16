import PageHeader from '../components/Common/PageHeader'
import DataTable from '../components/Common/DataTable'
import { apiEndpoints, formatNumber } from '../config/appConfig'
import { useResource } from '../useResource'
import { mockCategories } from '../mockData'

export default function Categories() {
  const { rows, loading } = useResource(apiEndpoints.categories, mockCategories)

  const columns = [
    { key: 'name', header: 'Nama Kategori' },
    { key: 'description', header: 'Deskripsi' },
    { key: 'productCount', header: 'Jumlah Produk', render: (r) => formatNumber(r.productCount) },
  ]

  return (
    <div>
      <PageHeader
        title="Manajemen Kategori"
        subtitle="Kelola kategori produk"
        actionLabel="Tambah Kategori"
      />
      <DataTable columns={columns} rows={rows} loading={loading} />
    </div>
  )
}
