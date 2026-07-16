// Mock data used as a fallback when the backend API is unavailable, so the
// UI is fully browsable during development.

export const mockDashboardStats = {
  todaySales: 4520000,
  monthlySales: 128400000,
  totalTransactions: 1342,
  totalProducts: 214,
  totalOutlets: 4,
  totalCashiers: 12,
  totalManagers: 3,
  totalCustomers: 856,
  dailySales: [
    { label: 'Sen', value: 3200000 },
    { label: 'Sel', value: 4100000 },
    { label: 'Rab', value: 2800000 },
    { label: 'Kam', value: 5200000 },
    { label: 'Jum', value: 6100000 },
    { label: 'Sab', value: 7300000 },
    { label: 'Min', value: 4520000 },
  ],
  weeklySales: [
    { label: 'Minggu 1', value: 21000000 },
    { label: 'Minggu 2', value: 25400000 },
    { label: 'Minggu 3', value: 28900000 },
    { label: 'Minggu 4', value: 31200000 },
  ],
  monthlySalesTrend: [
    { label: 'Jan', value: 98000000 },
    { label: 'Feb', value: 104000000 },
    { label: 'Mar', value: 112000000 },
    { label: 'Apr', value: 119000000 },
    { label: 'Mei', value: 123000000 },
    { label: 'Jun', value: 128400000 },
  ],
  recentTransactions: [
    { invoice: 'INV-1042', customer: 'Budi Santoso', cashier: 'Rina', total: 125000, date: '2026-07-16 09:12' },
    { invoice: 'INV-1041', customer: 'Umum', cashier: 'Dedi', total: 48000, date: '2026-07-16 08:55' },
    { invoice: 'INV-1040', customer: 'Siti Aminah', cashier: 'Rina', total: 210000, date: '2026-07-16 08:40' },
    { invoice: 'INV-1039', customer: 'Umum', cashier: 'Joko', total: 32000, date: '2026-07-16 08:21' },
    { invoice: 'INV-1038', customer: 'Andi Wijaya', cashier: 'Dedi', total: 175000, date: '2026-07-16 08:05' },
    { invoice: 'INV-1037', customer: 'Umum', cashier: 'Rina', total: 59000, date: '2026-07-15 20:47' },
    { invoice: 'INV-1036', customer: 'Maya Putri', cashier: 'Joko', total: 143000, date: '2026-07-15 20:12' },
    { invoice: 'INV-1035', customer: 'Umum', cashier: 'Dedi', total: 27000, date: '2026-07-15 19:58' },
    { invoice: 'INV-1034', customer: 'Rudi Hartono', cashier: 'Rina', total: 320000, date: '2026-07-15 19:30' },
    { invoice: 'INV-1033', customer: 'Umum', cashier: 'Joko', total: 88000, date: '2026-07-15 19:02' },
  ],
}

export const mockOutlets = [
  { id: 1, name: 'Outlet Pusat', address: 'Jl. Merdeka No. 1, Bandung', phone: '022-1234567', status: 'Aktif' },
  { id: 2, name: 'Outlet Cabang 1', address: 'Jl. Asia Afrika No. 22, Bandung', phone: '022-7654321', status: 'Aktif' },
  { id: 3, name: 'Outlet Cabang 2', address: 'Jl. Dago No. 45, Bandung', phone: '022-9988776', status: 'Aktif' },
  { id: 4, name: 'Outlet Cabang 3', address: 'Jl. Riau No. 10, Bandung', phone: '022-5566778', status: 'Nonaktif' },
]

export const mockUsers = [
  { id: 1, name: 'Admin Utama', email: 'admin@citrapos.com', role: 'admin', outlet: 'Outlet Pusat', status: 'Aktif' },
  { id: 2, name: 'Rina Melati', email: 'rina@citrapos.com', role: 'cashier', outlet: 'Outlet Pusat', status: 'Aktif' },
  { id: 3, name: 'Dedi Kurnia', email: 'dedi@citrapos.com', role: 'cashier', outlet: 'Outlet Cabang 1', status: 'Aktif' },
  { id: 4, name: 'Joko Susilo', email: 'joko@citrapos.com', role: 'cashier', outlet: 'Outlet Cabang 2', status: 'Aktif' },
  { id: 5, name: 'Sri Wahyuni', email: 'sri@citrapos.com', role: 'manager', outlet: 'Outlet Pusat', status: 'Aktif' },
  { id: 6, name: 'Bambang P.', email: 'bambang@citrapos.com', role: 'manager', outlet: 'Outlet Cabang 1', status: 'Aktif' },
]

export const mockCategories = [
  { id: 1, name: 'Makanan', description: 'Produk makanan siap saji', productCount: 42 },
  { id: 2, name: 'Minuman', description: 'Minuman dingin dan panas', productCount: 38 },
  { id: 3, name: 'Snack', description: 'Camilan ringan', productCount: 55 },
  { id: 4, name: 'Kebutuhan Harian', description: 'Sabun, tisu, dll', productCount: 79 },
]

export const mockProducts = [
  { id: 1, name: 'Nasi Goreng Spesial', category: 'Makanan', price: 25000, stock: 120, sku: 'MK-001' },
  { id: 2, name: 'Es Teh Manis', category: 'Minuman', price: 5000, stock: 340, sku: 'MN-001' },
  { id: 3, name: 'Kopi Susu', category: 'Minuman', price: 18000, stock: 90, sku: 'MN-002' },
  { id: 4, name: 'Keripik Kentang', category: 'Snack', price: 12000, stock: 210, sku: 'SN-001' },
  { id: 5, name: 'Sabun Mandi', category: 'Kebutuhan Harian', price: 8000, stock: 150, sku: 'KH-001' },
  { id: 6, name: 'Air Mineral 600ml', category: 'Minuman', price: 4000, stock: 500, sku: 'MN-003' },
]

export const mockCustomers = [
  { id: 1, name: 'Budi Santoso', phone: '081234567890', email: 'budi@mail.com', points: 1250, totalSpent: 3450000 },
  { id: 2, name: 'Siti Aminah', phone: '081298765432', email: 'siti@mail.com', points: 890, totalSpent: 2100000 },
  { id: 3, name: 'Andi Wijaya', phone: '081211223344', email: 'andi@mail.com', points: 430, totalSpent: 980000 },
  { id: 4, name: 'Maya Putri', phone: '081255667788', email: 'maya@mail.com', points: 2100, totalSpent: 5600000 },
  { id: 5, name: 'Rudi Hartono', phone: '081299887766', email: 'rudi@mail.com', points: 60, totalSpent: 320000 },
]

export const roleLabels = {
  admin: 'Admin',
  manager: 'Manager',
  cashier: 'Kasir',
}
