/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  reactStrictMode: true,
  images: {
    domains: ['storage.theoryandpractice.ru', 'lh3.googleusercontent.com']
  }
}

module.exports = nextConfig
