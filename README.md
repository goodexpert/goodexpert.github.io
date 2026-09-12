# goodexpert.github.io

Steve Park's Android developer portfolio — a static, dependency-free single-page site
(hash-based routing, no build step) meant for GitHub Pages.

## Files

- `index.html` — page shell, header/nav, footer
- `styles.css` — all styling (minimal/light theme)
- `app.js` — content data + router + page rendering

No build tools, no npm install, no framework. Just static files.

## Publish to GitHub Pages (goodexpert.github.io)

Your repository name must be exactly `goodexpert.github.io` for GitHub to serve it
as your user site at the root domain.

### Option A — git command line

```bash
# 1) On github.com, create a new PUBLIC repo named exactly:
#    goodexpert.github.io
#    (no README/gitignore needed — leave it empty)

# 2) From this folder:
cd goodexpert-site
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/goodexpert/goodexpert.github.io.git
git push -u origin main
```

That's it — no GitHub Pages settings to configure. For a `<username>.github.io`
repo, GitHub automatically publishes the `main` branch at
`https://goodexpert.github.io/` (usually live within a minute or two).

### Option B — upload via the GitHub website (no git needed)

1. Create a new public repo named `goodexpert.github.io`.
2. Click **Add file → Upload files**.
3. Drag in `index.html`, `styles.css`, and `app.js`.
4. Commit directly to `main`.
5. Visit `https://goodexpert.github.io/` after a minute.

## Updating content later

All page copy lives in the `content.en` object at the top of `app.js` — project
descriptions, timeline, skills, bio, contact info. Edit the data there; the
rendering functions below it don't need to change for text edits.

## Adding a Korean version later

The content is already split out as `content.en = {...}`. To add Korean:

1. Duplicate the `en` object as `content.ko = {...}` inside `app.js` and translate
   the strings.
2. Add a small language switcher (e.g. a `EN / KO` toggle in the header) that sets
   a `lang` variable and calls `render()` again — the existing render functions
   already read from `data = content[lang]`, so only the toggle + `data` reassignment
   need to change.
3. Optionally persist the choice in `localStorage` so it's remembered on return visits.

Ask me any time and I can wire this up for you.

## Local preview

Any static file server works, e.g.:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```
