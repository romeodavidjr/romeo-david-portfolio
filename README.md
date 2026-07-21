# Romeo David Jr. — Portfolio

Modern personal portfolio built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Features

- Dark professional theme with teal/blue accents
- Sections: Hero, About, Experience, Projects, Skills, Education & Certifications, Contact
- Responsive, mobile-first layout
- Smooth scroll animations
- Profile photo placeholder
- Contact form (mailto fallback)
- Ready for Vercel deployment

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

| Item | Location |
|------|----------|
| Content (copy, jobs, skills) | `src/data/portfolio.ts` |
| Profile photo | Add `public/profile.jpg`, set `HAS_PROFILE_PHOTO = true` in `src/components/Hero.tsx` |
| CV download | Place PDF at `public/cv/Romeo-David-Jr-CV.pdf` |

## Scripts

```bash
npm run dev      # development server
npm run build    # production build
npm run start    # serve production build
npm run lint     # ESLint
```

## Deploy on Vercel

1. Push this folder to a GitHub repository.
2. Import the repo in [Vercel](https://vercel.com).
3. Framework preset: **Next.js** (auto-detected).
4. Deploy — no extra env vars required for the static portfolio.

Or use the CLI:

```bash
npx vercel
```

## License

Personal portfolio © 2026 Romeo David Jr.
