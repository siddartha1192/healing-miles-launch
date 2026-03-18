# Healing Miles Launch

A landing page for Dr. Aman Khanna's gut health platform — featuring a webinar registration page, consultation booking, and patient resources.

Built with **React + TypeScript + Vite**, styled with **Tailwind CSS** and **shadcn/ui**.

---

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) **v18 or higher** (v22 recommended)
- **npm** v9 or higher (comes with Node.js)

Check your versions:

```bash
node --version
npm --version
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/siddartha1192/healing-miles-launch.git
cd healing-miles-launch
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The app will be available at **http://localhost:8080**

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server at `localhost:8080` with hot reload |
| `npm run build` | Build for production (output in `dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check for code issues |
| `npm test` | Run tests once with Vitest |
| `npm run test:watch` | Run tests in watch mode |

---

## Project Structure

```
src/
├── pages/
│   ├── Index.tsx            # Main landing page
│   ├── WebinarPage.tsx      # Webinar registration page
│   ├── ConsultationPage.tsx # Consultation booking page
│   └── NotFound.tsx         # 404 page
├── components/
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── WebinarSection.tsx   # Full webinar page content + sticky CTA
│   ├── ConsultationBooking.tsx
│   ├── Footer.tsx
│   └── ui/                  # shadcn/ui component library
├── hooks/
│   └── use-reveal.ts        # Intersection observer for scroll animations
├── assets/                  # Images and static assets
└── index.css                # Global styles and CSS custom properties
```

---

## Routes

| Path | Page |
|---|---|
| `/` | Home / Landing page |
| `/webinar` | Webinar registration |
| `/consultation` | Consultation booking |

---

## Tech Stack

- **Framework** — React 18 + TypeScript
- **Build tool** — Vite
- **Styling** — Tailwind CSS + CSS custom properties
- **UI components** — shadcn/ui (Radix UI)
- **Routing** — React Router v6
- **Forms** — React Hook Form + Zod
- **Icons** — Lucide React
- **Fonts** — DM Sans (body), Playfair Display (headings)
