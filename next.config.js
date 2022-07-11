/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['dad2022rateme.blob.core.windows.net'],
  }
}

module.exports = nextConfig
