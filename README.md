# Kristina Lavrikova — iOS Developer Portfolio

A personal portfolio site built with **React + TypeScript + Vite + Tailwind CSS**.
Apple-inspired: white space, tight display type, rounded cards, restrained motion,
and hand-drawn SVG iPhone mockups for each project.

## Run it locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

```bash
npm run build     # production build into dist/
npm run preview   # preview the production build
```

## Where to edit content

All copy lives in one file: **`src/data/portfolio.ts`**.
Name, contact links, project descriptions, and skill groups are all there — you
can update the site without touching any component.

| File | What it holds |
| --- | --- |
| `src/data/portfolio.ts` | All text content, projects, skills, links |
| `public/screens/` | Real app screenshots (GoDecor, MixCafe) |
| `src/components/PhoneMockup.tsx` | The iPhone frame + the illustrated screens (SVG) |
| `src/index.css` | Colour tokens, type treatment, animations |
| `tailwind.config.js` | Colour names mapped to the CSS variables |

### Adding or replacing screenshots

GoDecor and MixCafe use real screenshots, cropped to the device screen and saved
as WebP in `public/screens/`. To add one: drop the file in that folder and add an
entry to the project's `screens` array in `src/data/portfolio.ts`:

```ts
{ file: 'godecor-report.webp', alt: 'Reporting screen', caption: 'Monthly report' }
```

A project with more than four screens renders as a horizontal scroll rail; four
or fewer render as a grid. 3D Scanner (under NDA) and Movie App use the SVG
screens in `src/components/PhoneMockup.tsx` instead.

## Deploy

### Vercel (simplest)

1. Push this folder to GitHub.
2. In Vercel: **New Project → Import** the repo.
3. Framework preset **Vite**, build command `npm run build`, output `dist`.
4. Deploy. Every push to `main` redeploys automatically.

### GitHub Pages

A workflow is already included at `.github/workflows/deploy.yml`.

1. Push to the `main` branch of your repo.
2. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. The next push builds and publishes the site.

`vite.config.ts` uses `base: './'`, so the build works both at a domain root
(Vercel) and under `/RepoName/` (GitHub Pages project site) with no changes.

Alternative, without Actions:

```bash
npm run deploy   # builds and pushes dist/ to the gh-pages branch
```

## Notes

- Fonts: Inter from Google Fonts, falling back to the system San Francisco stack
  on Apple devices.
- Dark mode follows the visitor's system setting via CSS variables. To force one
  theme, set `data-theme="light"` or `data-theme="dark"` on `<html>`.
- Motion respects `prefers-reduced-motion`; all animation is disabled for
  visitors who ask for that.
