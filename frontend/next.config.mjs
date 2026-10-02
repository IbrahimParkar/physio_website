/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  // GitHub Pages serves static files only.
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // An empty base path keeps the production site at the domain root.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
};

export default nextConfig;
