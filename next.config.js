/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  env: {
    SITE_URL: process.env.SITE_URL || "https://example.com",
    SITE_NAME: process.env.SITE_NAME || "Portfolio",
    AUTHOR_NAME: process.env.AUTHOR_NAME || "Ian Davison",
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || "http://localhost:3000",
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET || "development-secret",
  },
};

module.exports = nextConfig;
