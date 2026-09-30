/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  // GitHub Pages serves static files only.
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Set NEXT_PUBLIC_BASE_PATH=/physio_website in the Pages build. Keeping
  // this empty locally means `npm run dev` continues to use root URLs.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
};

export default nextConfig;
