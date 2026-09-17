# Muto Electric

Marketing website for Muto Electric, a residential and commercial electrical contractor serving Vaughan, Toronto, and the GTA.

Built with [Next.js](https://nextjs.org/docs/getting-started) (app directory), [HeroUI](https://heroui.com/), and [Tailwind CSS](https://tailwindcss.com/).

## Development

```bash
npm install
npm run dev
```

## Environment variables

- `NEXT_PUBLIC_SITE_URL` — the production URL of the site, used for SEO metadata, the sitemap, and robots.txt. Defaults to `https://www.mutoelectric.ca` if unset.

## Structure

- `app/` — routes (home, services, service detail pages, about, contact)
- `config/site.ts` — business info (name, phone, service area, nav links)
- `config/services.ts` — the list of services and their detail-page content
- `components/` — navbar, footer, and icon components
