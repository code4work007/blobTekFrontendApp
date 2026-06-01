# SaaS Platform Frontend

A production-ready React + TypeScript SaaS starter application built with Vite, Tailwind CSS, shadcn/ui, React Router, TanStack Query, Zustand, React Hook Form, Zod, and Axios.

---

## Tech Stack

| Layer | Library |
|---|---|
| Bundler | Vite 5 |
| UI Framework | React 18 + TypeScript (strict) |
| Styling | Tailwind CSS v3 + shadcn/ui |
| Routing | React Router DOM v6 |
| Server State | TanStack Query v5 |
| Client State | Zustand v5 (persisted) |
| Forms | React Hook Form v7 + Zod v3 |
| HTTP Client | Axios v1 |
| Icons | Lucide React |
| Toast | Sonner |
| Linting | ESLint + Prettier |

---

## Folder Structure

```
src/
  components/
    ui/           # shadcn/ui primitives (button, input, card, …)
    common/       # DataTable, Pagination, SearchInput, ThemeToggle, EmptyState, …
  pages/
    auth/         # Login, Register, ForgotPassword
    Dashboard.tsx
    Profile.tsx
    Settings.tsx
    Users.tsx
    NotFound.tsx
  layouts/        # AuthLayout, DashboardLayout, Sidebar, Topbar, MobileSidebar
  hooks/          # useAuth, useUsers, useDebounce, usePagination, useTheme
  services/       # axiosClient (interceptors), auth.service, user.service
  store/          # auth.store (Zustand + persist), ui.store
  lib/            # utils (cn), queryClient, validations (Zod schemas)
  utils/          # formatters, storage helpers
  types/          # api, auth, user, common
  constants/      # routes, queryKeys, app config
  routes/         # router (lazy), ProtectedRoute, PublicRoute
  mocks/          # fixtures, handlers (MSW-ready stub)
```

---

## Prerequisites

- Node.js >= 18
- npm >= 9

---

## Installation

```bash
# 1. Install dependencies
npm install

# 2. Copy environment file and configure
cp .env.example .env
```

Open `.env` and set your backend base URL:

```env
VITE_APP_NAME=My SaaS
VITE_API_BASE_URL=https://api.yourbackend.com/v1
VITE_USE_MOCK=false
```

---

## Development

```bash
npm run dev
```

Opens at `http://localhost:5173`.

---

## Production Build

```bash
npm run build     # TypeScript check + Vite bundle
npm run preview   # Preview the built output locally
```

Output is in `dist/`.

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint across all TS/TSX files |
| `npm run format` | Format all source files with Prettier |

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `VITE_APP_NAME` | No | Application name shown in the UI |
| `VITE_API_BASE_URL` | Yes | Full base URL of your REST API (no trailing slash) |
| `VITE_USE_MOCK` | No | Set `true` to enable MSW request mocking |

---

## Features

- **Authentication** — Login, Register, Forgot Password with RHF + Zod validation
- **Dashboard** — Stat cards, recent activity feed, top users panel
- **Users Table** — Server-side pagination, search, column sort, delete action
- **Profile** — Update name/phone/department/location/bio; change password
- **Settings** — Theme selector (light/dark/system), notification toggles, 2FA stub, danger zone
- **Dark Mode** — Class-based via Tailwind; persisted in `localStorage` via Zustand
- **Responsive** — Mobile sidebar (Sheet), collapsible desktop sidebar, fluid layouts
- **API Layer** — Axios instance with Bearer token injection, 401 auto-logout, error normalization
- **Code Splitting** — All routes lazy-loaded with `React.lazy` + `Suspense`
- **Toast Notifications** — Sonner integration on all async actions

---

## Adding Mock Data (Optional)

To develop without a backend:

1. Install MSW: `npm install -D msw`
2. Initialize the service worker: `npx msw init public/ --save`
3. Update `src/mocks/server.ts` to start MSW using the handlers in `src/mocks/handlers.ts`
4. Set `VITE_USE_MOCK=true` in `.env`

Sample fixtures are already defined in `src/mocks/fixtures.ts`.

---

## Adding a New Page

1. Create `src/pages/MyPage.tsx` (default export)
2. Add a route constant in `src/constants/routes.ts`
3. Register in `src/routes/index.tsx` (lazy import inside `ProtectedRoute`)
4. Add a `NavLink` entry in `src/layouts/Sidebar.tsx` and `MobileSidebar.tsx`

---

## Adding a New API Endpoint

1. Add the TypeScript types in `src/types/`
2. Create or extend a service file in `src/services/`
3. Add a query key in `src/constants/queryKeys.ts`
4. Create a custom hook in `src/hooks/` using `useQuery` / `useMutation`

---

## License

MIT
