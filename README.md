# Launchline Design

Marketing site for [Launchline Design](https://www.launchlinedesign.com), Myles Stute’s Miami studio for done-for-you AI. It replaces the old one-page web-design site.

The site is Astro and Tailwind, fully static, and deploys to Vercel. Instrument Sans and Newsreader are self-hosted from `public/fonts` (SIL Open Font License). No Google Fonts request.

## Office contact

These are live and linked throughout the site:

- Email: [mxstute@launchlinedesign.com](mailto:mxstute@launchlinedesign.com)
- Office phone: [(786) 229-4730](tel:+17862294730)
- Ava, the AI receptionist: [(786) 952-6775](tel:+17869526775)

Ava’s number lives in one constant, `DEMO_LINE`, in `src/data/site.ts`. It is not the office line. “Call Ava now” and “Hear it live” both dial `DEMO_LINE`.

## Run locally

Node.js 22.22 or newer.

```bash
npm install
npm run dev
```

The dev server listens on port **4731**.

```bash
npm run build
npm run preview
```

`npm run build` writes the static site to `dist/`.

## Form and booking

Defaults live in `src/data/site.ts`. A `PUBLIC_` variable overrides the matching default at build time. Leave the variables unset and the defaults are what ships.

| Variable | Default when unset | Override |
| --- | --- | --- |
| `PUBLIC_DEMO_FORM_ENDPOINT` | `https://formspree.io/f/xvzvrpow` | Another Formspree (or POST) URL |
| `PUBLIC_CAL_LINK` | `myles-stute-v7irmp` | A Cal.com path, such as `myles-stute-v7irmp/15min` |
| `PUBLIC_STREET_ADDRESS` | Miami, FL and Miami-Dade only | A street address for the footer and schema |

The demo form POSTs to the Formspree endpoint. Fields are `name`, `business`, `website`, `email`, `phone`, `notes`, and `source`, plus `_subject` and a `_gotcha` honeypot. A hidden `_next` is `https://www.launchlinedesign.com/thanks`. With JavaScript, a successful response also goes to `/thanks`.

Booking embeds the Cal.com profile at [cal.com/myles-stute-v7irmp](https://cal.com/myles-stute-v7irmp). That page lists the events, and the visitor picks one. There is no event slug in the default. A path with a slash, such as `myles-stute-v7irmp/15min`, embeds that event in month view instead.

Copy `.env.example` to `.env` only when you want to override a default. On Vercel, set the same variables in **Project → Settings → Environment Variables**, then redeploy. They are baked in at build time.

Also still open:

- A sample Loom embed on the homepage and the demo page.
- A lawyer’s pass on `src/pages/privacy.astro` and `src/pages/terms.astro` before treating them as the signed contract. Recording consent and SMS are flagged in the pages.
- A blog or guides section was not built. There are no articles yet, and an empty blog would be thin content.

The discovery call is **15 minutes**, matching the approved service menu (the earlier outline said 20).

## Deploy to Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket if it is not already connected.
2. In Vercel, **Add New → Project** and import the repo.
3. Framework preset: **Astro**. Build command: `npm run build`. Output directory: `dist`. Install command: `npm install`.
4. Leave the `PUBLIC_` variables unset to ship the Formspree and Cal.com defaults. Set one only to override it.
5. Deploy. Attach `launchlinedesign.com` and `www.launchlinedesign.com`. Canonical URLs use `https://www.launchlinedesign.com`.
6. After the first deploy, confirm `/sitemap-index.xml` and `/robots.txt` load, then submit the sitemap in Google Search Console.

No Vercel adapter is required. The site is static HTML. `vercel.json` sets the Astro framework, `npm run build`, output directory `dist`, clean URLs without a trailing slash, basic security headers, and a long cache on the font files.

GitHub Pages on `main` is the previous live site. Deploy this Astro build from the `astro-rebuild` branch, or from Vercel, and do not overwrite `main` until that cutover is intentional.

## Pages

- `/` Home
- `/services` and the four pillars: `/get-more-leads`, `/convert-and-book`, `/keep-customers`, `/operations`
- `/ai-receptionist`
- `/missed-call-text-back`, `/ai-chat-widget`, `/google-business-profile-optimization-miami`, `/review-automation`, `/customer-reactivation`
- `/industries/roofing`, `/industries/hvac`, `/industries/pest-control`, `/industries/plumbing`
- `/industries/home-services`, `/industries/law-firms`, `/industries/med-spas`, `/industries/dental`
- `/audit`, `/integrations`, `/es`
- `/demo`, `/how-it-works`, `/pricing`, `/about`, `/contact`
- `/privacy`, `/terms`
- `/thanks` (noindex, excluded from the sitemap; form redirect target)

`/automation` redirects to `/keep-customers`. `/custom-ai` redirects to `/operations`. There is no `/results` page.

## Screenshots

Homepage, after `npm run preview`:

![Homepage on a desktop browser](docs/screenshots/home-desktop.png)

![Homepage on a phone](docs/screenshots/home-mobile.png)

## Brand

Navy `#0C0F1A`, electric blue `#3B82F6` / `#60A5FA`, mint `#34D399`. Newsreader for headings, Instrument Sans for text. The header and footer use the combination mark (`public/brand/combination-dark.svg`). The favicon, app icon, schema logo, and Ava avatar use the monogram (`public/brand/mark-dark.svg`). The open-graph image is `public/og.png` at 1200×630.
