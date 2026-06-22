# chillfunk.com

A fast, polished personal blog built with Astro, Markdown content, and a small session-only door intro.

## Requirements

- Node.js 20 or newer
- npm

## Setup

```bash
npm install
npm run dev
```

The local site runs at the URL shown by Astro, usually `http://localhost:4321`.

## Scripts

- `npm run dev` starts the development server.
- `npm run build` type-checks and builds the static site.
- `npm run preview` previews the production build locally.

## Content

Blog posts live in `src/content/blog`. Each post uses frontmatter:

```yaml
title: "Post title"
date: 2026-06-04
description: "Short summary."
tags: ["tag"]
draft: false
```

Timeline items are edited in `src/data/timeline.ts`.

## Deployment

This project builds to static files and is ready for Vercel. Import the repository in Vercel and use:

- Build command: `npm run build`
- Output directory: `dist`
