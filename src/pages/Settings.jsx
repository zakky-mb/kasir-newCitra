import { useState } from 'react'
import PageHeader from '../components/Common/PageHeader'

export default function Settings() {
  const [form, setForm] = useState({
    storeName: 'New Citra POS',
    address: 'Jl. Merdeka No. 1, Bandung',
    phone: '022-1234567',
    currency: 'IDR',
    taxPercent: 11,
    receiptFooter: 'Terima kasih atas kunjungan Anda!',
  })

  const update = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // Persisting settings requires the backend; no-op in the scaffold.
  }

  const field = (label, key, props = {}) => (
    <div>
      <label className="mb-1 block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        value={form[key]}
        onChange={update(key)}
        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        {...props}
      />
    </div>
  )

  return (
    <div className="max-w-2xl">
      <PageHeader title="Pengaturan" subtitle="Konfigurasi toko dan aplikasi" />

      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-lg bg-white p-6 shadow-sm"
      >
        {field('Nama Toko', 'storeName')}
        {field('Alamat', 'address')}
        {field('Telepon', 'phone')}
        <div className="grid grid-cols-2 gap-4">
          {field('Mata Uang', 'currency')}
          {field('Pajak (%)', 'taxPercent', { type: 'number' })}
        </div>
        {field('Footer Struk', 'receiptFooter')}

        <div className="pt-2">
          <button
            type="submit"
            className="rounded-md bg-button-bg px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-button-hover"
          >
            Simpan Pengaturan
          </button>
        </div>
      </form>
    </div>
  )
}
