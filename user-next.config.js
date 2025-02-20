/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["placeholder.com"], // Add any other domains you might use for images
  },
  transpilePackages: ["framer-motion"],
}

module.exports = nextConfig

