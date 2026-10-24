# FORM: Aviv Agami's Artlist home assignment page

This is a static single-page site. There's no build step, framework or server code, and nothing to install.

## What's in the folder

```
index.html                  the whole page (HTML, CSS and JS in one file)
js/                         GSAP 3.12.5, ScrollTrigger, Lenis 1.1.13 (local copies, no CDN needed)
media/                      images (.webp), videos (.mp4), sounds (.mp3), brand book PDF
  brandbook/                26 page images + thumbnails for the in-page PDF reader
  video/                    720p/1080p web videos that play on the page
  video/dl/                 1080p versions behind the "Download MP4" buttons
  sfx/                      can-open and fizz sounds for the intro gate
  FORM_Brand_Book.pdf       behind the "Download PDF" button
  FORM_Process_and_Credit_Usage.pdf   behind the "Download the process & credit summary" button
```

## How to publish it

1. Upload the folder exactly as it is, keeping the same structure. All paths are relative, so it works at the domain root or in a subfolder, e.g. `avivagami.com/form/`.
2. Serve it over HTTPS. The videos need normal byte-range support, which any standard static host (Netlify, Vercel, Cloudflare Pages, S3, a WordPress uploads folder) already has.
3. The only external request is Google Fonts (DM Serif Display, Instrument Sans). Everything else is self-hosted.

## Optional after it's live

- **Social preview image:** in `index.html`, change `<meta property="og:image" content="media/img-master.webp">` to the full URL, e.g. `https://avivagami.com/form/media/img-master.webp`. Link previews on LinkedIn, WhatsApp and similar need an absolute URL.
- **Caching:** cache `media/` long-term. Keep `index.html` short-cache so text edits show up right away.

## Notes

- Total size is about 70 MB, mostly video. The page loads videos only when a visitor presses play (`preload="none"`).
- The intro "Open" gate plays a can-open sound. Browsers only allow audio after a click, which is why the gate exists. "Enter without sound" skips it.
- Respects `prefers-reduced-motion`: parallax and scroll animations switch off for those visitors.
