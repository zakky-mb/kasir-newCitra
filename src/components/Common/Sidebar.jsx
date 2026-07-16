import { NavLink, useLocation } from 'react-router-dom'
import { sidebarMenu } from '../../config/appConfig'

// A menu item is "active" when its base path matches and, if it carries a
// role query param, that role matches the current URL's role param.
function useIsActive() {
  const location = useLocation()
  const currentParams = new URLSearchParams(location.search)
  const currentRole = currentParams.get('role')

  return (itemPath) => {
    const [path, query] = itemPath.split('?')
    if (location.pathname !== path) return false
    if (!query) {
      // Plain path is active only when there's no role filter in the URL,
      // otherwise the role-specific entries would also light this up.
      return !currentRole || path !== '/admin/users'
    }
    const itemRole = new URLSearchParams(query).get('role')
    return itemRole === currentRole
  }
}

export default function Sidebar() {
  const isActive = useIsActive()

  return (
    <aside
      className="app-scrollbar fixed left-0 top-0 z-20 flex h-screen w-[260px] flex-col overflow-y-auto bg-sidebar-bg text-sidebar-text"
    >
      <div className="flex items-center gap-2 px-6 py-5 text-lg font-bold">
        <span className="text-2xl">🧾</span>
        <span>New Citra POS</span>
      </div>
      <nav className="flex-1 px-3 pb-6">
        {sidebarMenu.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={() =>
              `mb-1 flex items-center gap-3 rounded-md px-4 py-2.5 text-sm font-medium transition-colors hover:bg-sidebar-hover ${
                isActive(item.path) ? 'bg-sidebar-hover' : ''
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
