# salih SALMAN — digital business card

A single-page contact card. Scan the QR → land on this page → tap **Kişi Ekle** to save to phone. 6 languages (TR/EN/RU/PL/DE/UA) with auto-detect.

## Live site

After enabling GitHub Pages, the site will be at:

```
https://<your-github-username>.github.io/salihsalmanhomes/
```

That is the URL to encode into the printed QR code.

## Enable GitHub Pages (one-time)

1. Push this repo to GitHub.
2. Open the repo on github.com → **Settings** → **Pages**.
3. Under **Source**, pick **Deploy from a branch**. Branch: `main`, folder: `/ (root)`. Save.
4. Wait ~30 seconds. Refresh — GitHub shows the live URL at the top of the Pages settings.

## Editing contact info

All editable values live at the top of `script.js` in the `CONFIG` object — name, phone, email, website, location, company, and the five social URLs. Leave a social URL empty (`""`) to hide that icon.

To edit on the web: go to `script.js` on github.com → click the pencil icon → change the values → commit to `main`. The site updates in ~30 seconds.

## Local preview

Just open `index.html` in a browser. No build step.
