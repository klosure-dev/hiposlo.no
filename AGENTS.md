# About the project

Website for alternative music festival: *Hærverk i Parken*. The festival is based in Oslo and is a multi-day event. *Kafe Hærverk* is a bar in Oslo, which is closely affiliated with the festival. They also organise the festival.

## Architecture

The project consists of two applications: 

- **Frontend.** Hosted at `hiposlo.no` on Cloudflare workers. Lives under `frontend/` in this repository. It's built with Nuxt and uses `pnpm` for packages. Shipped as a static prerendered website. All content is fetched from the CMS at build time.

- **CMS.** Hosted at `cms.hiposlo.no` on a Hetzner VPS. Lives under `cms/`, built with Strapi and uses `npm` for packages. 
  
Deployment

- Both applications are deployed to production when changes land in `main`. For the CMS a GitHub Actions workflow publishes a docker image to GHCR which a watchtower instance on the VPS picks up and deploys.

## Frontend

- Fetch CMS content inside awaited `useAsyncData` calls. Content must be available during `nuxt generate`; the client should not depend on Strapi at runtime outside preview mode.

- Pass Strapi request parameters through `useCmsPreviewParams` so draft previews load live content.

- Resolve CMS media paths with `useMediaUrl` before passing them to Nuxt Image components.

- Constrain image widths, formats and densities explicitly. Unbounded `NuxtPicture` usage can make static generation very slow.

- Run `pnpm lint` and `pnpm typecheck` from `frontend/` after changes.

## CMS

- Use Strapi content types for editable content. Keep API field names stable and code-friendly; editor-facing labels can be customized separately.

- Enable Draft & Publish for content that editors should preview before publishing.

- Regenerate committed Strapi types with `npm run strapi -- ts:generate-types` after schema changes. Do not edit `cms/types/generated/` by hand.

- Keep secrets in `cms/.env`; document required variables in `cms/.env.example`.

- Run `npx tsc --noEmit` from `cms/` after changes.
