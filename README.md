# Deep Integrated Lab Services Limited — Website

Next.js 14 (App Router) + Tailwind CSS site for Deep Integrated Lab Services Limited.

## Getting started

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## About the logo

No logo image file was actually attached in the request, so `public/logo.svg` is a
placeholder wordmark (graduated-cylinder mark + company name) built to match the
`width={280} height={80}` sizing used in `Navbar.jsx`.

To use your real logo:
1. Save your PNG as `public/logo.png`.
2. In `components/Navbar.jsx`, change `src="/logo.svg"` to `src="/logo.png"`.

## Structure

- `app/layout.js` — root layout, fonts, Navbar/Footer
- `app/page.js` — home page
- `app/services/page.js` — Chemical Supply & Equipment sections
- `app/contact/page.js` — contact details + form
- `components/Navbar.jsx` — logo + nav links
- `components/Footer.jsx` — contact info footer
- `app/globals.css` — Tailwind base + the "scale rail" signature motif
