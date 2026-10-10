import type { NextConfig } from 'next';

// SITE_BASE serves the site from a sub-path, e.g. /UpTux-Website on github.io.
const basePath = process.env.SITE_BASE || '';

const nextConfig: NextConfig = {
  output: 'export', // static HTML for every page, ready for GitHub Pages
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  experimental: { globalNotFound: true }, // our own 404 page for both languages
};

export default nextConfig;
