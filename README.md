# Vinay Kumar Portfolio

Production-ready portfolio for software engineering intern and new grad roles, built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, MDX, shadcn-style UI primitives, and Lucide icons.

## Features

- Dark, technical, responsive portfolio design
- Home, Projects, Open Source, Experience, Blog, About, Resume, and Contact pages
- Dedicated project case studies with architecture and reliability sections
- MDX blog with frontmatter, reading time, and syntax highlighting
- Command palette and search via `Ctrl K` or `/`
- Project filtering
- Portfolio-first proof-of-work flow with a recruiter-friendly resume route
- Open Graph image, sitemap, robots, RSS feed, and manifest
- Vercel-ready Next.js App Router structure

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production

```bash
npm run build
npm run start
```

Set `NEXT_PUBLIC_SITE_URL` in Vercel to the deployed site URL so sitemap, RSS, and Open Graph metadata resolve to production.

## Content Notes

- The public LinkedIn URL is set to `https://www.linkedin.com/in/themanvk`.
- The profile PDF included a full street address. The site intentionally uses only the city-level location for public portfolio privacy.
