export default function StatusBadge({ value }) {
  const active = String(value).toLowerCase() === 'aktif'
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
        active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
      }`}
    >
      {value}
    </span>
  )
}
