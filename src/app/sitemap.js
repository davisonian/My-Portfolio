export default async function sitemap() {
  const siteUrl = process.env.SITE_URL || "https://example.com";

  const routes = ["", "/about", "/pricing", "/blog"].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes];
}
