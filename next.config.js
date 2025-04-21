/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Output as static site if needed
  // output: 'export',
  // Configure image domains if needed
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
