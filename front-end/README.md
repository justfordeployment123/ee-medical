# Frontend

This is the React/Vite frontend for the E&E Medicals site. It serves the public website, the admin portal, and the generated sitemap used for search engine indexing.

## What this app does

- Renders the public marketing site.
- Loads homepage content from the backend API.
- Lets admins update homepage text and images from the `/admin` portal.
- Generates a sitemap at build time from the route list in `vite.config.ts`.

## Recent changes

### Sitemap

- Added sitemap generation through `vite-plugin-sitemap`.
- The sitemap is built from the route list defined in [vite.config.ts](vite.config.ts).
- This keeps indexed URLs aligned with the current frontend routes during deploys.

### Admin portal and homepage updates

- The homepage now reads content from the backend instead of relying on hardcoded image assets.
- Admin updates for homepage text and images are saved through the backend API and then reflected on the public site.
- Image paths are normalized so uploaded media works consistently across local, staging, and deployed environments.
- The admin portal supports updating the same homepage sections that appear on the public landing page.

## Key flow

1. Admin opens `/admin` and logs in.
2. Text changes are saved to the backend content store.
3. Image uploads are validated, stored, and linked to the correct homepage slot.
4. The public homepage fetches the latest content from the API and renders it on refresh.

## Local development

Install dependencies and run the app from the `front-end` folder.

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The build step also generates the sitemap.

## Configuration

The frontend expects the API base URL through `VITE_API_BASE_URL` when it is deployed behind a separate backend.

## Related backend settings

The admin portal depends on backend credentials configured in the rag API service:

- `ADMIN_USER`
- `ADMIN_PASS`

If those values are missing in the deployed backend, admin login and content updates will fail.

## Project structure

```text
src/
	components/   Reusable UI components
	hooks/        API/content hooks
	pages/        Route pages, including the admin portal
	config/       Route and chatbot flow configuration
vite.config.ts  Vite build config and sitemap generation
```