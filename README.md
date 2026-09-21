# My Personal Website

Personal portfolio website built with React, Vite, and TypeScript — part of Code Challenge 2.

## Tech Stack

- [React](https://react.dev/) + [Vite](https://vite.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [React Router](https://reactrouter.com/) for routing

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command           | Description                         |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start the development server        |
| `npm run build`   | Type-check and build for production |
| `npm run preview` | Preview the production build        |
| `npm run lint`    | Run the linter                      |

## Project Structure

```text
src/
├── assets/          # Static assets (images, icons)
├── components/
│   ├── common/      # Reusable UI components
│   ├── layout/      # Navbar, Footer
│   └── sections/    # Page sections (Hero, About, Skills, ...)
├── data/            # Content data (profile, projects, skills)
├── layouts/         # Page layout wrapper
├── pages/           # Route pages
├── types/           # TypeScript type definitions
├── utils/           # Constants and helpers
├── App.tsx
└── main.tsx
```

## Deployment

The site is deployed to [Vercel](https://vercel.com/).
