/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    formats: ['image/webp'],
  },
  experimental: {
    esmExternals: true,
  },
};

module.exports = nextConfig;
