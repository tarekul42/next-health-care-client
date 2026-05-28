# Healthcare Client

A healthcare management platform built with Next.js 16, featuring role-based dashboards for admins, doctors, and patients with a modern, accessible UI.

## Features

- **Role-based layouts**: Separate dashboard areas for Admin, Doctor, and Patient roles
- **Route groups**: Clean URL structure with shared layouts via Next.js route groups
- **Authentication**: Login and registration forms with validation
- **Modern UI**: shadcn/ui components built on Radix UI primitives
- **Responsive design**: Tailwind CSS 4 with mobile-first approach
- **Type-safe**: Full TypeScript support

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 + shadcn/ui |
| UI | Radix UI primitives, Lucide React |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project Structure

```
src/
├── app/
│   ├── (commonLayout)/    # Public pages (home, auth, consultation, doctors)
│   ├── (dashboardLayout)/ # Role-based dashboards (admin, doctor, patient)
│   └── components/        # Shared components (Navbar, Footer, Sidebar)
├── components/
│   ├── ui/                # shadcn/ui components
│   ├── login-form.tsx     # Login form
│   └── register-form.tsx  # Registration form
├── lib/                   # Utilities
├── services/
│   └── auth/              # Auth services
└── types/                 # Shared TypeScript types
```

## API

Connects to the [next-health-care-server](https://github.com/tarekul42/next-health-care-server) backend.
