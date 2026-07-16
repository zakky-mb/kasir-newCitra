// App configuration derived from the New Citra POS spec (v3.2.0).

export const sidebarMenu = [
  { label: 'Dashboard', path: '/admin/dashboard', icon: '📊' },
  { label: 'Outlet', path: '/admin/outlets', icon: '🏪' },
  { label: 'Admin', path: '/admin/users?role=admin', icon: '🛡️' },
  { label: 'Manager', path: '/admin/users?role=manager', icon: '👔' },
  { label: 'Kasir', path: '/admin/users?role=cashier', icon: '👤' },
  { label: 'Produk', path: '/admin/products', icon: '📦' },
  { label: 'Kategori', path: '/admin/categories', icon: '🏷️' },
  { label: 'Pelanggan', path: '/admin/customers', icon: '👥' },
  { label: 'Laporan', path: '/admin/reports', icon: '📈' },
  { label: 'Pengaturan', path: '/admin/settings', icon: '⚙️' },
]

export const quickMenu = [
  { label: 'Tambah Produk', icon: '📦', path: '/admin/products' },
  { label: 'Tambah Kasir', icon: '👤', path: '/admin/users?role=cashier' },
  { label: 'Tambah Manager', icon: '👔', path: '/admin/users?role=manager' },
  { label: 'Tambah Admin', icon: '🛡️', path: '/admin/users?role=admin' },
  { label: 'Tambah Outlet', icon: '🏪', path: '/admin/outlets' },
  { label: 'Laporan', icon: '📊', path: '/admin/reports' },
]

export const dashboardWidgets = [
  { id: 'todaySales', label: 'Penjualan Hari Ini', type: 'currency', icon: '💰' },
  { id: 'monthlySales', label: 'Penjualan Bulan Ini', type: 'currency', icon: '📅' },
  { id: 'totalTransactions', label: 'Total Transaksi', type: 'number', icon: '🧾' },
  { id: 'totalProducts', label: 'Total Produk', type: 'number', icon: '📦' },
  { id: 'totalOutlets', label: 'Total Outlet', type: 'number', icon: '🏪' },
  { id: 'totalCashiers', label: 'Total Kasir', type: 'number', icon: '👤' },
  { id: 'totalManagers', label: 'Total Manager', type: 'number', icon: '👔' },
  { id: 'totalCustomers', label: 'Total Pelanggan', type: 'number', icon: '👥' },
]

export const recentTransactionsConfig = {
  label: '10 Transaksi Terakhir',
  limit: 10,
  columns: ['invoice', 'customer', 'cashier', 'total', 'date'],
}

export const apiEndpoints = {
  login: '/auth/login',
  dashboardStats: '/admin/dashboard/stats',
  outlets: '/outlets',
  users: '/admin/users',
  products: '/products',
  categories: '/categories',
  customers: '/customers',
  reports: '/reports',
}

export const formatCurrency = (value) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(Number(value) || 0)

export const formatNumber = (value) =>
  new Intl.NumberFormat('id-ID').format(Number(value) || 0)
