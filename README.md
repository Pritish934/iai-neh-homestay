# Iai-Neh Homestay

Production-ready Next.js App Router website for Iai-Neh Homestay, Smit, Meghalaya.

## Stack

- Next.js App Router
- JavaScript only
- Tailwind CSS v4
- Framer Motion
- Next Image
- Metadata API
- JSON-LD structured data

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
npm install
npm run dev
```

## Before deployment

1. Set `NEXT_PUBLIC_SITE_URL` to the real production domain.
2. Verify the WhatsApp number in `data/site.js`.
3. Replace the sample Unsplash images with the homestay's real images.
4. Replace/confirm room information and any amenities that are not actually offered.
5. Verify the Google Maps embed and external Maps URL.
6. Add Google Search Console and submit `/sitemap.xml`.
7. Connect the real domain to Google Business Profile.
8. Ask the owner for permission before publishing identifiable guest photos or review excerpts.

## SEO notes

- Canonicals are generated from `NEXT_PUBLIC_SITE_URL`.
- `robots.js` exposes the sitemap and blocks `/api/` and `/thank-you`.
- `/thank-you` is `noindex`.
- FAQ, lodging business, article and breadcrumb JSON-LD are included.
- Internal links connect major pages to avoid orphan content.
- Every image includes alt text.
- Fixed aspect ratios and `next/image` help prevent layout shift.
- The hero image is prioritized; below-fold images are lazy-loaded.

## Forbes backlink

No fabricated Forbes backlink is included. If the property is genuinely featured by Forbes, add the real article as a contextual citation. An unrelated external link is not a legitimate SEO strategy.

## Performance

The design deliberately avoids large client-side animation libraries beyond Framer Motion, autoplay video backgrounds, and unnecessary third-party scripts. Use compressed WebP/AVIF/WebP-equivalent source photography and keep individual hero images reasonably sized before launch.
