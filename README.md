# Mills Carter — website redesign (staging)

Static staging version of the redesigned millscarter.com, ready for Vercel. No build step.

## Pages

| URL | File |
| --- | --- |
| `/` | `index.html` |
| `/about` | `about.html` |
| `/services` | `services.html` |
| `/product-sourcing` | `product-sourcing.html` |
| `/warehousing` | `warehousing.html` |
| `/shipping` | `shipping.html` |
| `/construction-materials` | `construction-materials.html` |
| `/energy` | `energy.html` |
| `/gallery` | `gallery.html` |
| `/contact` | `contact.html` (old `/contact-8` redirects here) |
| any other URL | `404.html` |

Clean URLs (no `.html`) and the redirect are set in `vercel.json`.

## Deploy on Vercel

1. Upload all files in this folder to the root of the GitHub repo (keep the `assets` folder structure).
2. In Vercel: **Add New… → Project → Import** the repo.
3. Framework preset: **Other**. Leave Build Command and Output Directory empty. Click **Deploy**.

Every new commit to `main` redeploys automatically.

## Notes

- Images are the client's own photos, served from their existing Wix media library (`static.wixstatic.com`). The construction and energy pages use free photos from Unsplash (`images.unsplash.com`, Unsplash License); swap in the client's own photos when available.
- Font: Archivo (Google Fonts, SIL Open Font License).
- Every page has `<meta name="robots" content="noindex">` so the staging site stays out of Google. Remove it only if this code ever goes live.
- The contact form opens the visitor's email app addressed to inquiry@millscarter.com. In the final Wix build, use a native Wix Form instead (see `WIX-REBUILD-GUIDE.md`).
