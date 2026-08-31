<div align="center">

# akifaziz.me

**Personal portfolio of Akif Aziz — AI Engineer**

Multi-agent systems, RAG pipelines, and the full-stack products they live in.

[**Live site →**](https://akifaziz.me)

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Deploy](https://github.com/akif-aziz06/akif-aziz06.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/akif-aziz06/akif-aziz06.github.io/actions/workflows/deploy.yml)

</div>

---

## Overview

A single-page portfolio built with the Next.js App Router and exported as fully static
HTML, then served from GitHub Pages on a custom domain. There is no runtime backend —
every route is prerendered at build time, so the whole site is a handful of static files
behind a CDN.

The frontend lives in [`client/`](client/), leaving the repository root free for a
backend or other services later on.

## Features

- **Content-driven** — all copy lives in one typed file; components render whatever it says
- **Light & dark themes** — applied before first paint via an inline script, so there's no flash
- **Fully static** — 4 prerendered routes, no server required
- **Accessible** — skip link, semantic landmarks, visible focus rings, `prefers-reduced-motion` honoured
- **SEO-ready** — Open Graph tags, JSON-LD `Person` schema, generated `sitemap.xml` and `robots.txt`
- **Zero animation dependencies** — scroll reveals use CSS plus `IntersectionObserver`
- **Responsive** — mobile-first, with a slide-in nav sheet on small screens

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19, TypeScript |
| Styling | Tailwind CSS v4 with CSS-variable theming |
| Icons | Hand-rolled inline SVG (no icon library) |
| Fonts | Inter + JetBrains Mono, with system fallbacks |
| Hosting | GitHub Pages via GitHub Actions |

## Project structure

```
akif-aziz06.github.io/
├── client/                        # the Next.js application
│   ├── public/                    # résumé PDF, favicon, CNAME, .nojekyll
│   └── src/
│       ├── app/
│       │   ├── layout.tsx         # metadata, fonts, theme script, JSON-LD
│       │   ├── page.tsx           # section composition
│       │   ├── globals.css        # design tokens + custom utilities
│       │   ├── sitemap.ts         # generates sitemap.xml
│       │   └── robots.ts          # generates robots.txt
│       ├── components/            # Nav, Hero, About, Experience, Projects,
│       │                          # Skills, Education, Contact, Footer,
│       │                          # Reveal, Section, ThemeToggle, Icons
│       └── data/
│           └── portfolio.ts       # ← all site content
├── .github/workflows/deploy.yml   # build + publish to GitHub Pages
└── CNAME                          # custom domain
```

## Getting started

**Prerequisites:** Node.js 20 or newer (developed on 24) and npm.

```bash
git clone https://github.com/akif-aziz06/akif-aziz06.github.io.git
cd akif-aziz06.github.io/client
npm install
npm run dev
```

Open <http://localhost:3000>.

### Scripts

Run these from inside `client/`:

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Type-check and export the static site to `client/out/` |
| `npm start` | Serve a production build locally |

## Editing the content

Everything you'd normally want to change lives in
[`client/src/data/portfolio.ts`](client/src/data/portfolio.ts):

| Export | Controls |
| --- | --- |
| `profile` | Name, role, tagline, contact details, social links, summary |
| `stats` | The four headline metrics under the hero |
| `experience` | Job history, bullets, and per-role tech chips |
| `projects` | Project cards, highlights, and stacks |
| `skills` | Skill groups and their chips |
| `education` | Degrees and institutions |
| `softSkills`, `languages` | Chips in the About section |
| `navLinks` | Nav items (each `href` must match a section `id`) |

Edit that file and the components pick it up — routine updates need no JSX changes.

**Other common tweaks**

- **Résumé PDF** — replace `client/public/Akif_Aziz_Resume.pdf`, keeping the filename
  (or update `profile.resume`).
- **Colours** — edit the CSS variables in
  [`client/src/app/globals.css`](client/src/app/globals.css). The `:root` block is the
  light palette, `.dark` the dark one; utilities like `text-accent` resolve through
  these, so changing a value re-themes the whole site.
- **Adding a section** — create the component, then render it in
  [`client/src/app/page.tsx`](client/src/app/page.tsx) and add an entry to `navLinks`.

## Deployment

Every push to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which installs dependencies, builds the static export from `client/`, and publishes
`client/out` to GitHub Pages.

> [!IMPORTANT]
> **One-time setup:** in the repository, go to **Settings → Pages → Build and deployment**
> and set **Source** to **GitHub Actions**. Left on the default "Deploy from a branch",
> Pages would serve the raw source files instead of the built site.

The custom domain is preserved by `client/public/CNAME`, which is copied into the export
at build time. `client/public/.nojekyll` stops GitHub from running Jekyll over the output,
which would otherwise strip the `_next/` asset directory.

## Troubleshooting

<details>
<summary><strong><code>npm install</code> fails with <code>ETIMEDOUT</code></strong></summary>

<br>

If installs die after roughly three seconds with a network error, this is a Node
connection-timing issue rather than a broken network. `registry.npmjs.org` resolves to
many Cloudflare addresses, and Node's Happy Eyeballs gives each one a 250 ms budget — if
your real connect time is higher, every attempt is abandoned and npm reports `ETIMEDOUT`.

Raise the per-address budget:

```bash
export NODE_OPTIONS="--network-family-autoselection-attempt-timeout=5000 --dns-result-order=ipv4first"
npm install
```

Add that `export` line to your `~/.bashrc` to make it permanent.

</details>

<details>
<summary><strong>Hydration mismatch warnings in the browser console</strong></summary>

<br>

Warnings mentioning attributes such as `bis_skin_checked`, `bis_register`, or scripts
loaded from `chrome-extension://` come from a browser extension modifying the DOM before
React hydrates — not from the site. Confirm by loading the page in an incognito window,
where extensions are disabled by default.

</details>

## Contact

**Akif Aziz** — AI Engineer, Lahore, Pakistan

[Email](mailto:makifaziz06@gmail.com) ·
[LinkedIn](https://linkedin.com/in/akif-aziz-211972281) ·
[GitHub](https://github.com/akif-aziz06)

---

<div align="center">
<sub>The source is free to learn from. Personal content — résumé, project write-ups,
and biography — belongs to Akif Aziz; please swap it for your own if you reuse the code.</sub>
</div>
