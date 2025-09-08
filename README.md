# React Mastery Playground

A practical roadmap to learn **React (frontend)** and later **backend (Node or Go)**, **DB**, **Docker**, and **deployment**. Designed as a unified project with multiple real-life clone pages to be used as portfolio material.

## 🎯 Goals

* Master React fundamentals (components, state, effects, routing, forms, fetch, performance).
* Build 3–4 demo apps/pages: **Landing**, **E‑commerce**, **Fake‑Netflix**, **Fake‑Deliveroo**.
* Progress from **mock APIs** → **real APIs** (Node *or* Go) with full CRUD and relational DB.
* Containerize everything with **Docker** and deploy with CI/CD.
* Produce a credible **portfolio** for the Berlin job market.

---

## 📦 Proposed Stack

**Frontend**

* React 18 + **TypeScript**
* Vite (dev server & build) — later possibly Next.js
* React Router v6
* Styling: **Tailwind CSS** (or CSS Modules)
* Forms & validation: React Hook Form + Zod
* Testing: Vitest + React Testing Library; E2E: Playwright
* Lint/format: ESLint + Prettier
* State: Context; later **Redux Toolkit** or Zustand if needed
* Async data: fetch initially; later **TanStack Query**

**Backend (Phase 3+)**

* **Node path**: Fastify (or Express) + **Prisma** + PostgreSQL
* **Go path**: Gin/Fiber + GORM or sqlc + PostgreSQL
* Auth: JWT (access + refresh) with **httpOnly** cookies
* DB migrations: Prisma Migrate / golang-migrate
* Docs: OpenAPI/Swagger

**Infra/DevOps**

* Docker + Docker Compose (web, api, db, migrations)
* GitHub Actions (lint, test, build, push images, deploy)
* Deployment: FE on Vercel/Netlify; BE on Fly.io/Render/Hetzner; images on GHCR

> Note for Angular developers: think of **components** and **hooks** as analogues of **components** and **lifecycle**; React focuses on **composition** + **hooks** instead of classes/decorators.

---

## 🗂️ Repository Structure (simple monorepo)

```
react-mastery-playground/
  apps/
    web/                 # React app (Vite)
    api-node/            # Node API (optional, one at a time)
    api-go/              # Go API  (optional)
  packages/
    ui/                  # (optional) shared UI components
  docker/                # (optional) nginx, compose override
  .github/workflows/     # CI/CD
```

Start only with `apps/web`. Add the chosen API later.

---

## ✅ Roadmap Phases (checklist)

Each phase has **deliverables**, **completion criteria**, and **suggested commands**.

### Phase 0 — Environment & repo setup

* [x] Install Node LTS, pnpm (or npm), Git.
* [x] Create GitHub repo `react-mastery-playground` (private/public).


### Phase 1 — Bootstrap React + TS

* [x] `pnpm create vite web --template react-ts`
* [x] Folder structure: `components/`, `pages/`, `features/`, `hooks/`, `lib/`, `assets/`.
* [x] Tailwind CSS installed and configured; reset CSS.
* **Done when**: app runs (`pnpm dev`), lint clean, build works.

### Phase 2 — React Fundamentals

* [ ] Components & Props; conditional rendering; lists & keys.
* [ ] State with `useState`; effects with `useEffect` (mock fetch); basic `useMemo`/`useCallback`.
* [ ] Custom hooks (`useLocalStorage`, `useDebounce`).
* [ ] Controlled vs uncontrolled forms; React Hook Form + Zod.
* **Done when**: demo page shows examples and unit tests cover base cases.

### Phase 3 — Routing & Layout

* [ ] React Router: nested routes, persistent layout, 404, lazy loading.
* [ ] Protected routes (fake auth placeholder).
* **Done when**: navigation works and URL reflects state.

### Phase 4 — UI/UX basics

* [ ] Minimal design system (palette, spacing, typography, radius).
* [ ] Dark mode; reusable UI components (Button, Card, Modal, Input, Badge).
* [ ] Accessibility (ARIA roles, focus ring, skip link) + i18n (it/en).
* **Done when**: Lighthouse (Performance ≥ 90, A11y ≥ 95 on Landing).

### Phase 5 — **Landing Page**

* [ ] Sections: Hero, Features, Pricing, Testimonials, FAQ, Footer.
* [ ] Newsletter form (mock) with validation; sending state + toast.
* [ ] Basic SEO (dynamic meta) with `react-helmet-async`.
* Tests: component snapshots, form validation, nav links.
* **Done when**: responsive, Lighthouse scores ok.

### Phase 6 — **E‑commerce (mock)**

* [ ] `products.json` dataset (id, title, price, rating, category, images).
* [ ] Product list with filters (category, price), sort, pagination/infinite scroll.
* [ ] Product detail + images; cart (Context → optional Redux Toolkit).
* [ ] Checkout form (mock) + order summary.
* [ ] Data via **TanStack Query** using **MSW** to mock APIs.
* Tests: add/remove cart, filters, routing.
* **Done when**: cart → checkout flow works end‑to‑end in E2E.

### Phase 7 — **Fake‑Netflix (mock)**

* [ ] Home with horizontal category rows; hover card + modal detail.
* [ ] Search with debounce; pagination/infinite scroll; skeleton loader.
* [ ] Favorites/watchlist state.
* **Done when**: smooth UX, 60fps scrolling, tests for search and modal.

### Phase 8 — **Fake‑Deliveroo (mock)**

* [ ] Restaurant list + restaurant page (menu, categories, variants).
* [ ] Persistent cart; mock delivery addresses.
* [ ] (Optional) Map with Leaflet and mock markers.
* **Done when**: creating a mock order is possible and tested.

### Phase 9 — State & Data Management

* [ ] Introduce **Redux Toolkit** where needed (complex cart, shared watchlist).
* [ ] Entity normalization; memoization with Reselect; split **client state** vs **server state** (TanStack Query).
* **Done when**: performance and state structure are solid and tested.

### Phase 10 — Quality & Performance

* [ ] Code splitting; lazy routes; Suspense fallback.
* [ ] Image optimization; prefetch on hover; measure Web Vitals.
* [ ] Error boundaries + error logging.
* **Done when**: Core Web Vitals within thresholds on main pages.

### Phase 11 — Solid Testing

* [ ] Unit (Vitest/RTL), Integration (RTL), E2E (Playwright).
* [ ] Coverage target: lines ≥ 70% (increase over time).
* [ ] Tests in CI (GitHub Actions); reports as artifacts.

### Phase 12 — Backend Choice (Node **or** Go)

* **Node Track**

  * [ ] Fastify + Zod; Prisma + PostgreSQL; JWT auth middleware; CORS.
  * [ ] CRUD: users, products, orders, restaurants, menus, watchlist.
  * [ ] Seeds + migrations; MSW → real API; Swagger UI.
* **Go Track**

  * [ ] Gin/Fiber; GORM/sqlc; auth middleware; migrations; Swagger.
* **Done when**: `/healthz` ok; CRUD works with integration tests.

### Phase 13 — Auth & Security

* [ ] Register/login, refresh token, logout, password reset (mock email).
* [ ] Password hashing (Argon2/bcrypt); rate limiting; CORS; CSRF if cookies.
* [ ] Roles (user/admin) + protected FE/BE routes.

### Phase 14 — Docker & Compose

* [ ] Multi‑stage Dockerfile for **web** and **api**.
* [ ] `docker-compose.yml` with `web`, `api`, `db` (PostgreSQL), `migrations`.
* [ ] Healthcheck, `.env`, volumes, internal network; Nginx reverse proxy (optional).
* **Done when**: `docker compose up` runs everything locally.

### Phase 15 — Observability (optional but useful)

* [ ] Structured logging; OpenTelemetry tracing; Prometheus metrics (BE).
* [ ] Sentry (or similar) for FE/BE.

### Phase 16 — Deployment & CI/CD

* [ ] FE on Vercel/Netlify; BE on Fly.io/Render/Hetzner (Docker image).
* [ ] GH Actions: lint → test → build → push → deploy; secrets managed.
* [ ] Versioning: tags `v0.1`, `v0.2`, … for milestones (Landing, E‑commerce, …).

### Phase 17 — Portfolio & Polish

* [ ] Screenshots, demo video, final README, changelog.
* [ ] “Case Study” page with challenges, tech choices, metrics.
* [ ] TODO/future ideas.

---

## 🧪 API (sample schema)

```
GET  /api/v1/healthz
POST /api/v1/auth/register
POST /api/v1/auth/login
POST /api/v1/auth/refresh
POST /api/v1/auth/logout

GET  /api/v1/products
GET  /api/v1/products/:id
POST /api/v1/products
PUT  /api/v1/products/:id
DELETE /api/v1/products/:id

GET  /api/v1/restaurants
GET  /api/v1/restaurants/:id
POST /api/v1/restaurants
...

GET  /api/v1/movies
GET  /api/v1/movies/:id
...
```

---

## 🛠️ Useful Commands (pnpm)

```bash
pnpm dev           # start dev server
pnpm build         # production build
pnpm preview       # preview build
pnpm lint          # eslint
pnpm test          # unit/integration tests
pnpm test:e2e      # e2e (playwright)
```

---

## 📏 Quality Criteria

* Strict TypeScript types, no unnecessary `any`.
* Clean lint; consistent Prettier.
* Accessibility (ARIA, focus visible, contrast, keyboard friendly).
* Performance (code split, optimized images, memoization where needed).
* Tests on critical flows (cart, login, order, search).

---

## 🔀 Suggested Milestones

* `v0.1` — Setup + Fundamentals + Routing
* `v0.2` — Landing complete
* `v0.3` — E‑commerce mock
* `v0.4` — Fake‑Netflix mock
* `v0.5` — Fake‑Deliveroo mock
* `v0.6` — Advanced state + Quality
* `v0.7` — Chosen backend (CRUD + Auth)
* `v0.8` — Docker + Compose
* `v0.9` — Deployment + CI/CD
* `v1.0` — Portfolio ready

---

## 📚 Recommended Resources

* React docs (beta/modern) and Patterns.dev
* EpicReact.dev (advanced), UI Dev, Kent C. Dodds blog
* TanStack Query docs, Redux Toolkit docs
* Fastify/Gin docs, Prisma/GORM/sqlc docs
* Web.dev (Lighthouse, CWV), A11y Project

---

## 🧭 Angular → React Quick Map

* **Inputs/Outputs** → Props & callbacks
* **Services (DI)** → Hooks, Context, custom state modules
* **Lifecycle** → Hooks (`useEffect`, `useLayoutEffect`, `useMemo`)
* **Router** → React Router (nested layout)
* **Forms** → RHF + Zod (template‑driven vs reactive: here hook‑driven)

---

### Immediate Next Steps

1. Complete **Phase 0** (repo, lint, minimal CI).
2. Start **Phase 1** with Vite + TS + Tailwind.
3. Create base routes: `/`, `/shop`, `/flix`, `/food`.
4. Add a demo of state + mock fetch on home.



### front-end structure 
frontend/
│
├── public/                  # Static assets served as-is
│   └── favicon.ico
│
├── src/
│   ├── assets/              # Images, fonts, global static files
│   │   └── logo.svg
│   │
│   ├── components/          # Reusable UI components (buttons, inputs, etc.)
│   │   └── ui/
│   │       └── Button.tsx
│   │
│   ├── features/            # Feature-based components (modular)
│   │   ├── shop/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   └── hooks/
│   │   ├── flix/
│   │   ├── food/
│   │   └── landing/
│   │
│   ├── layouts/             # Shared layouts (navbar, sidebar, footer, etc.)
│   │   └── MainLayout.tsx
│   │
│   ├── pages/               # Top-level route pages
│   │   ├── Home.tsx
│   │   ├── Shop.tsx
│   │   ├── Flix.tsx
│   │   └── Food.tsx
│   │
│   ├── hooks/               # Custom React hooks
│   │   └── useAuth.ts
│   │
│   ├── lib/                 # Utilities, helpers, API clients
│   │   ├── api/
│   │   │   └── axiosClient.ts
│   │   └── utils.ts
│   │
│   ├── store/               # State management (Redux/Zustand/Context)
│   │   └── index.ts
│   │
│   ├── styles/              # Global styles, Tailwind configs, CSS vars
│   │   └── globals.css
│   │
│   ├── App.tsx              # Root React component
│   ├── main.tsx             # Entry point
│   └── vite-env.d.ts
│
├── .eslintrc.cjs
├── tsconfig.json
├── tailwind.config.js
├── package.json
└── pnpm-lock.yaml
