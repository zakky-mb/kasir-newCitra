export default function PageHeader({ title, subtitle, actionLabel, onAction }) {
  return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      </div>
      {actionLabel && (
        <button
          type="button"
          onClick={onAction}
          className="rounded-md bg-button-bg px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-button-hover"
        >
          + {actionLabel}
        </button>
      )}
    </div>
  )
}
