# CLAUDE.md — Aviv Agami Creative Portfolio Site

Read this before touching anything.

---

## What this is

Portfolio site for Aviv Agami, Creative Director based in Tel Aviv.
Live URL: https://portfollioaviv.netlify.app
GitHub repo: https://github.com/avivagami/avivagami-creative-website

---

## Critical architecture fact — read this first

The repo contains the site files inside a **subfolder** called `website aviv agami creative/`.
Netlify is configured to serve from that subfolder as the publish directory.

This means:
- Files at the **repo root** are NOT served by Netlify
- Files inside `website aviv agami creative/` ARE served
- `/images/projects/aa-photo.jpg` on the live site = `website aviv agami creative/images/projects/aa-photo.jpg` in the repo
- The Decap CMS `admin/config.yml` must use full paths prefixed with `"website aviv agami creative/"` for all `file:` and `media_folder:` keys — otherwise the CMS writes to the wrong location and deploys get skipped

---

## Tech stack

- **No build step** — plain HTML, CSS, React loaded via CDN (unpkg)
- `index.html` — app shell, loads React, Babel, and `components.jsx`
- `components.jsx` — all React components in one file
- `styles.css` + `colors_and_type.css` — all styling
- `content/` — JSON files that drive the page content (edited via CMS)
  - `about.json` — portrait, bio paragraphs, availability
  - `projects.json` — array of project cards
  - `settings.json` — email, phone, social links
- `images/projects/` — all uploaded images including portrait
- `admin/config.yml` — Decap CMS configuration
- `netlify.toml` — publish dir is `.` (relative to the subfolder Netlify uses)

---

## Decap CMS (admin)

URL: https://portfollioaviv.netlify.app/admin/
Auth: Netlify Identity (git-gateway backend)

The CMS edits JSON files and uploads images via git-gateway, which commits directly to GitHub. Every CMS save = 1 GitHub commit = 1 Netlify deploy trigger.

**The config.yml paths must include the subfolder prefix:**
```yaml
media_folder: "website aviv agami creative/images/projects"
file: "website aviv agami creative/content/about.json"
```
If these paths are ever missing the prefix, CMS saves write to the repo root and Netlify sees no changes → deploys get silently skipped.

---

## Deploy behaviour

- Auto-deploy is ON for the `main` branch
- If multiple commits arrive in quick succession, Netlify auto-cancels older builds
- If a deploy shows "Canceled / Deploying: Skipped" it usually means either:
  1. A newer build superseded it, OR
  2. The CMS wrote files outside the publish directory (wrong paths in config.yml)
- To force a deploy: Netlify dashboard → Deploys → Trigger deploy → "Deploy project without cache"

---

## Portrait photo

- File: `website aviv agami creative/images/projects/aa-photo.jpg`
- Referenced in `content/about.json` as `"portrait": "/images/projects/aa-photo.jpg"`
- The component fallback in `components.jsx` (`ABOUT_DEFAULT`) still points to the old `images/portrait.png` — only matters if `about.json` fails to load

---

## Making changes

**Content only (bio, projects, settings):** Use the CMS at /admin/ — no code needed.

**Code changes:** Edit `components.jsx` or `styles.css` / `colors_and_type.css` directly. There is no build step — changes go live on next deploy.

**Images:** Upload via CMS media library, or commit directly to `website aviv agami creative/images/projects/`.

**After any GitHub commit:** Netlify auto-deploys within ~30 seconds. Check https://app.netlify.com/sites/portfollioaviv/deploys if something looks wrong.

---

## Netlify Forms

Contact form is wired to Netlify Forms. The hidden detection form in `index.html` must match the field names in the React `ContactSection` component exactly (`name`, `email`, `company`, `type`, `message`).

---

## Known past issues (resolved)

- `images/portrait.png` was a project card screenshot, not a photo — replaced by `images/projects/aa-photo.jpg`
- CMS was writing files to repo root instead of the subfolder — fixed by updating `admin/config.yml` paths
- All deploys were being "Canceled" because the CMS was committing to the wrong repo path, so Netlify saw no changes in the publish directory
