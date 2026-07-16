import PageHeader from '../components/Common/PageHeader'
import DataTable from '../components/Common/DataTable'
import { apiEndpoints, formatCurrency, formatNumber } from '../config/appConfig'
import { useResource } from '../useResource'
import { mockProducts } from '../mockData'

export default function Products() {
  const { rows, loading } = useResource(apiEndpoints.products, mockProducts)

  const columns = [
    { key: 'sku', header: 'SKU' },
    { key: 'name', header: 'Nama Produk' },
    { key: 'category', header: 'Kategori' },
    { key: 'price', header: 'Harga', render: (r) => formatCurrency(r.price) },
    { key: 'stock', header: 'Stok', render: (r) => formatNumber(r.stock) },
  ]

  return (
    <div>
      <PageHeader
        title="Manajemen Produk"
        subtitle="Kelola daftar produk"
        actionLabel="Tambah Produk"
      />
      <DataTable columns={columns} rows={rows} loading={loading} />
    </div>
  )
}
