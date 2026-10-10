import { site } from "@/data/site";

export default function robots() {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/thank-you"] }
    ],
    sitemap: `${site.siteUrl}/sitemap.xml`,
    host: site.siteUrl
  };
}
