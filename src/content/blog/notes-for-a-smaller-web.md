---
title: "Notes for a Smaller Web"
date: 2026-05-18
description: "A few principles for keeping a personal website fast, maintainable, and pleasant."
tags: ["astro", "writing", "systems"]
draft: false
---

The smaller web still has a lot of room in it. A good personal site can be static, quick to load, pleasant to browse, and simple enough to understand six months later.

Astro is a good fit for that kind of site because content can stay close to the filesystem. Posts are files. Metadata is frontmatter. Deployment is a build step, not an operating model.

## Useful Constraints

No database means fewer moving parts. No WordPress means fewer updates to babysit. Markdown keeps the writing portable.

The trick is to make the structure feel polished without making the machinery heavy.
