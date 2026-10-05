# About the project

Website for alternative music festival: *Hærverk i Parken*. The festival is based in Oslo and is a multi-day event. *Kafe Hærverk* is a bar in Oslo, which is closely affiliated with the festival. They also organise the festival.

## Architecture

The project consists of two applications: 

- **Frontend.** Hosted at `hiposlo.no` on Cloudflare workers. Lives under `frontend/` in this repository. It's built with Nuxt and uses `pnpm` for packages. Shipped as a static prerendered website. All content is fetched from the CMS at build time.

- **CMS.** Hosted at `cms.hiposlo.no` on a Hetzner VPS. Lives under `cms/`, built with Strapi and uses `npm` for packages. 
  
Deployment

- Both applications are deployed to production when changes land in `main`. For the CMS a GitHub Actions workflow publishes a docker image to GHCR which a watchtower instance on the VPS picks up and deploys.
