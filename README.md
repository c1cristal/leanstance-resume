# Live Resume

Cristal Richardson's online resume, published at [leanstance.com](https://leanstance.com) in English (`/`) and Norwegian (`/no/`).

Built with Next.js (static export), React, TypeScript and Tailwind CSS.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run check   # lint + typecheck + build
```

The build writes plain static files to `out/`.

## Deploy

Pushes to `main` deploy to GitHub Pages through `.github/workflows/deploy.yml`.
To serve the site from a sub-path instead of a custom domain, build with `NEXT_PUBLIC_BASE_PATH=/live-resume`.

## Content

Resume text lives in `src/content/en.ts` and `src/content/no.ts`. CVs are in `public/resume/docs/`.

## Credits

Started from the MIT-licensed [ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) by JCodesMore; see `LICENSE`.
