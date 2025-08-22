/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // Enable static HTML export for Render
  output: 'export',
  // Disable image optimization to allow static hosting
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
