---
name: testing-admin-dashboard
description: Test the New Citra POS admin dashboard frontend (Vite + React) end-to-end. Use when verifying login, dashboard widgets/charts, management pages, or the Users role filter.
---

# Testing the New Citra POS Admin Dashboard

Vite + React + Tailwind frontend. Runs standalone with a mock-data fallback, so
no backend is required to test the UI.

## Run it
```bash
npm install
npm run dev   # http://localhost:5173
```
`npm run lint` and `npm run build` should both pass.

## Key facts for testing
- **Login**: `/login`. With no backend reachable, `Login.jsx` catches the network
  error and sets a demo session, so ANY email/password logs you in and redirects
  to `/admin/dashboard`. (If a backend later exists, use real creds instead.)
- **Data source**: when the API (`VITE_API_BASE_URL`, default `http://localhost:5003/api`)
  is unreachable, pages fall back to `src/mockData.js`. Expected values come from
  there — e.g. dashboard "Penjualan Hari Ini" = Rp 4.520.000, Total Transaksi = 1.342,
  recent transactions first row = INV-1042.
- **Currency/number formatting**: Indonesian locale (`Rp 4.520.000`, `1.342`) via
  `formatCurrency`/`formatNumber` in `src/config/appConfig.js`.
- **Users role filter (adversarial check)**: sidebar Admin/Manager/Kasir link to
  `/admin/users?role=admin|manager|cashier`. `Users.jsx` filters `mockUsers` by the
  `role` query param. Verify content CHANGES per role: role=admin → 1 row (Admin
  Utama), role=cashier → 3 rows (Rina/Dedi/Joko). A broken filter shows the same
  rows regardless of role.
- **Charts**: Recharts renders inside `<svg>`; assert the SVG has visible geometry,
  don't rely on pixel-matching.

## Primary flow to record
Login → dashboard (widgets + charts + 10-row table) → click each sidebar page →
Admin then Kasir to prove role filter → Logout returns to `/login`.

## Gotchas
- "Tambah ..." create buttons exist but may not be wired to modals yet — don't
  assert create/edit works unless that has since been implemented.
- Maximize the browser before recording: `wmctrl -r :ACTIVE: -b add,maximized_vert,maximized_horz`.

## Devin Secrets Needed
- None. The frontend tests run fully offline against mock data. (A backend at
  `VITE_API_BASE_URL` would be needed only to test against real data.)
