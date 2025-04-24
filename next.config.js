/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Output as static site
  output: 'export',
  // Configure images for static export
  images: {
    unoptimized: true,
  },
  // To ensure proper handling of assets
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|svg)$/i,
      type: 'asset/resource',
    });
    return config;
  },
}

module.exports = nextConfig;
