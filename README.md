# New Citra POS — Admin Dashboard (Frontend)

Frontend for the **New Citra POS** admin dashboard (v3.2.0), built with **Vite +
React + Tailwind CSS**. It implements the layout, red theme, admin dashboard
(stats widgets, charts, recent transactions), and management pages defined in the
project spec.

## Tech stack

- [Vite](https://vite.dev/) + [React 18](https://react.dev/)
- [React Router](https://reactrouter.com/) for routing
- [Tailwind CSS](https://tailwindcss.com/) for styling (theme colors from the spec)
- [Recharts](https://recharts.org/) for charts
- [Axios](https://axios-http.com/) for API calls

## Getting started

```bash
npm install
cp .env.example .env   # adjust VITE_API_BASE_URL if needed
npm run dev
```

The app runs at http://localhost:5173.

### Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint

## Environment variables

| Variable             | Default                       | Description        |
| -------------------- | ----------------------------- | ------------------ |
| `VITE_API_BASE_URL`  | `http://localhost:5003/api`   | Backend API base   |

## Project structure

```
src/
├── api/axios.js              # Axios instance + auth interceptors
├── components/
│   ├── Layout/               # AdminLayout, CashierLayout
│   └── Common/               # Sidebar, Navbar, CardStats, DataTable, etc.
├── config/appConfig.js       # Menu, widgets, endpoints, formatters (from spec)
├── pages/                    # Login, dashboards, and management pages
├── mockData.js               # Fallback data when the backend is unavailable
├── App.jsx                   # Routing
└── main.jsx                  # Entry point
```

## Notes

- **Auth**: a JWT token is stored in `localStorage` and attached to every request.
  A 401 response clears the session and redirects to `/login`.
- **Backend fallback**: when the API is unreachable, pages fall back to mock data
  (see `src/mockData.js`) so the UI stays fully browsable. Login also accepts a
  demo login when no backend is present.
- Routes are protected via `ProtectedRoute`; unauthenticated users are sent to
  `/login`.
