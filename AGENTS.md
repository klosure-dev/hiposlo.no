# About the project

Website for alternative music festival: *Hærverk i Parken*. The festival is based in Oslo and is a multi-day event. Project consists of two applications: frontend and a CMS.

## Frontend

Hosted at `hiposlo.no` on Cloudflare workers. Lives under `frontend/`, built with Nuxt, uses `pnpm` for packages. Shipped as a static prerendered website. All content is fetched from the CMS at build time.

### Formatting

Run `pnpm lint:fix` to autoformat code.

## CMS

Hosted at `cms.hiposlo.no` on a Hetzner VPS. Lives under `cms/`, built with Strapi and uses `npm` for packages.
