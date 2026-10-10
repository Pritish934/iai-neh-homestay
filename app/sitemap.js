import { site, posts, rooms } from "@/data/site";

export default function sitemap() {
  const now = new Date();
  const staticPages = [
    "", "/rooms", "/about", "/experiences", "/gallery", "/location", "/contact", "/faq", "/blog"
  ].map((path) => ({
    url: `${site.siteUrl}${path}`,
    lastModified: now,
    changeFrequency: path === "/blog" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7
  }));

  const roomPages = rooms.map((room) => ({
    url: `${site.siteUrl}/rooms/${room.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75
  }));

  const blogPages = posts.map((post) => ({
    url: `${site.siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.65
  }));

  return [...staticPages, ...roomPages, ...blogPages];
}
