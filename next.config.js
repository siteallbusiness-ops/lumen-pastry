/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
