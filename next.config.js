/** @type {import('next').NextConfig} */
const nextConfig = {
          experimental: {
                    appDir: true
          },
          images: {
                    remotePatterns: [
                              {
                                protocol: 'https',
                                hostname: 'i.pravatar.cc',
                              }
                    ]
          },
          reactStrictMode: true,
}

module.exports = nextConfig
