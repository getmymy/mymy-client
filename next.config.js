/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yt3.ggpht.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/v1/:path*/',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*/`,
      },
    ];
  },
};

module.exports = nextConfig;
