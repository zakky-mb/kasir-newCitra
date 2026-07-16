import { formatCurrency, formatNumber } from '../../config/appConfig'

export default function CardStats({ label, value, type = 'number', icon }) {
  const display =
    type === 'currency' ? formatCurrency(value) : formatNumber(value)

  return (
    <div className="flex items-center gap-4 rounded-lg border-l-4 border-card-border bg-white p-4 shadow-sm">
      {icon && (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-2xl">
          {icon}
        </div>
      )}
      <div className="min-w-0">
        <p className="truncate text-sm text-gray-500">{label}</p>
        <p className="truncate text-xl font-semibold text-gray-800">{display}</p>
      </div>
    </div>
  )
}
