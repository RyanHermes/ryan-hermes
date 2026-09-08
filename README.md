# Ryan Hermes — Personal Portfolio

Live website: [www.ryanhermes.ca](https://www.ryanhermes.ca).

A Next.js and TypeScript portfolio, styled with Tailwind CSS and deployed on Vercel. The page presents Ryan’s current role, selected projects, experience, education, and contact information.

## Development

Use Node.js 20 or newer and the pnpm version pinned in `package.json`.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## Validation

```sh
pnpm build
```

The production build runs compilation, lint, and TypeScript checks. Browser checks cover 320px, 390px, and desktop layouts, section links, project images, and mobile menu focus, Escape, and focus restoration.

## Content

- `app/page.tsx`: introduction and section order
- `components/TimelineInfo.tsx`: employment history
- `components/Projects.tsx`: project descriptions, links, and visuals
- `components/About.tsx`: biography, education, and contact details
- `components/Skills.tsx`: technology groups
- `app/layout.tsx`: search metadata and canonical URL

Role names and dates were checked against Ryan’s LinkedIn profile on September 8, 2026. His Amazon announcement identifies the Payment Products team in Vancouver. Earlier Property Revive experience and the Mathematics minor are retained from the existing portfolio.

## Project visual sources

Existing project assets are reused with their associated projects; no generated screenshots or performance figures are used.

- Cedar’s banner: [project repository](https://github.com/RyanHermes/cedars-mediterranean-lounge/blob/main/public/assets/images/cedars_banner.png)
- Tourify wireflow: [team project repository](https://github.com/BorhanSaflo/tourify-android-app/blob/main/docs/tourify-wireflow.png)
- Volt Vista dashboard: [project README](https://github.com/BorhanSaflo/volt-vista#screenshots)

Tourify contribution details are based on RyanHermes’s commits to the Explore and Explore Results screens. Volt Vista is described as a university prototype without assigning unverified individual contributions.

## Deployment

Use the existing Vercel project `ryan-hermes` in `abboudy-ryans-projects`, serving `www.ryanhermes.ca` and `ryanhermes.ca`. The GitHub repository’s website link should use the custom domain.
