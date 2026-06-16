# CLAUDE.md — Aviv Agami Creative Portfolio Site

Read this before touching anything.

---

## What this is

Portfolio site for Aviv Agami, Creative Director based in Tel Aviv.
Live URL: https://avivagami.com
GitHub repo: https://github.com/avivagami/avivagami-creative-website

---

## Architecture — site lives at repo root

The site files live at the **repo root**. Netlify serves the root as the publish directory.

This means:
- `/images/projects/aa-photo.jpg` on the live site = `images/projects/aa-photo.jpg` in the repo
- The Decap CMS `admin/config.yml` uses repo-root-relative paths for all `file:` and `media_folder:` keys (no subfolder prefix)

> **History note:** the site used to live inside a `website aviv agami creative/` subfolder. That caused Netlify to skip deploys ("Deploying: Skipped") because its base-directory + smart-deploy SHA comparison couldn't reliably detect changes in the subfolder. Moving everything to root fixed the auto-deploy cancellations. Don't reintroduce the subfolder. The Netlify dashboard **base directory must be empty** and publish directory must be `.` (or empty).

---

## Tech stack

The home page is the **"Run of Show"** design: plain HTML/CSS/vanilla JS, **no build step**.

- `index.html` — the page markup (themed as a live theatrical/broadcast show)
- `app.js` — all behavior, a vanilla-JS IIFE (loader, cursor/spotlight, work cue
  list + hover preview, project overlay, creative-principles lighting desk, etc.)
- `styles.css` — all styling
- `content/` — JSON files that drive the page content (edited via CMS)
  - `about.json` — portrait, bio paragraphs, availability
  - `projects.json` — array of projects (incl. a `type` label shown above each title)
  - `settings.json` — email, phone, social links
- `images/projects/` — all uploaded images including portrait
- `images/logos/` — client marquee logos
- `admin/config.yml` — Decap CMS configuration
- `netlify.toml` — publish dir is `.` (the repo root)

**Asset paths are root-absolute** (`/content/...`, `/images/...`, `/favicon.svg`) so
they resolve from the root document. Netlify's Image CDN (`/.netlify/images?...`)
serves resized hover previews in production; on localhost `app.js` falls back to the
raw image path.

> **History note:** the site was originally a React-via-CDN app (`components.jsx` +
> `colors_and_type.css`). In June 2026 the "Run of Show" redesign (previously at
> `/redesign/`) was promoted to the home page and the old React site was moved to
> `archive/` (kept for reference, not linked). Don't resurrect the React site unless
> explicitly asked.

---

## Decap CMS (admin)

URL: https://avivagami.com/admin/
Auth: Netlify Identity (git-gateway backend)

The CMS edits JSON files and uploads images via git-gateway, which commits directly to GitHub. Every CMS save = 1 GitHub commit = 1 Netlify deploy trigger.

**The config.yml paths are repo-root-relative (no prefix):**
```yaml
media_folder: "images/projects"
file: "content/about.json"
```
These must point at the real served files at the repo root. If a prefix is ever added back, CMS saves write to the wrong location and Netlify sees no changes → deploys get silently skipped.

---

## Deploy behaviour

- Auto-deploy is ON for the `main` branch
- If multiple commits arrive in quick succession, Netlify auto-cancels older builds
- If a deploy shows "Canceled / Deploying: Skipped" it usually means either:
  1. A newer build superseded it, OR
  2. Files were committed outside the publish directory (e.g. wrong paths in config.yml, or a reintroduced subfolder)
- To force a deploy: Netlify dashboard → Deploys → Trigger deploy → "Deploy project without cache"

---

## Portrait photo

- File: `images/projects/aa-photo.jpg`
- Referenced in `content/about.json` as `"portrait": "/images/projects/aa-photo.jpg"`
- Rendered by `app.js` (`renderAbout`) into `#portraitImg`; if `about.json` fails to load the markup's default `src` in `index.html` is used

---

## Making changes

**Content only (bio, projects, settings):** Use the CMS at /admin/ — no code needed.

**Code changes:** Edit `index.html`, `app.js`, or `styles.css` directly. There is no build step — changes go live on next deploy.

**Images:** Upload via CMS media library, or commit directly to `images/projects/`.

**After any GitHub commit:** Netlify auto-deploys within ~30 seconds. Check https://app.netlify.com/sites/portfollioaviv/deploys if something looks wrong.

---

## Contact

The contact section uses a `mailto:` button plus direct **LinkedIn** and **WhatsApp**
links (no web form). The old Netlify Forms contact form lived in the archived React
site and is no longer used.

---

## Known past issues (resolved)

- `images/portrait.png` was a project card screenshot, not a photo — replaced by `images/projects/aa-photo.jpg`
- Site used to live in a `website aviv agami creative/` subfolder; CMS path drift and Netlify's subfolder base-directory smart-deploy caused silently skipped/canceled deploys — fixed by moving the whole site to the repo root and clearing the Netlify base directory
- The React home page (`components.jsx` + `colors_and_type.css`) was replaced by the "Run of Show" vanilla-JS design in June 2026; the old files now live in `archive/`
