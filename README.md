# Huzaifa Hassan · Portfolio

Personal portfolio of Huzaifa Hassan, NOC Engineer working across network operations, cybersecurity and full stack engineering.

**Live:** https://nextjs-portfolio-opal-one.vercel.app

## Stack

Next.js 15 (App Router) · React 19 · Tailwind CSS · Framer Motion · Geist fonts · EmailJS

## Structure

```
src/
  app/
    layout.js          Root layout, metadata, fonts
    page.js            Home: hero, about, work, skills, contact
    projects/page.js   Live archive of public GitHub repositories
  components/          UI sections and shared pieces
  data/site.js         All site content (edit this to update text, projects, skills)
```

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Updating content

Everything shown on the site (profile, experience, projects, skills, certifications) lives in `src/data/site.js`. Edit that file and redeploy.
