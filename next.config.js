/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        hostname: 'fatebe-strapi-images.s3.us-east-1.amazonaws.com',
      },
    ],
  },
  experimental: {
    esmExternals: true,
  },
};

module.exports = nextConfig;
