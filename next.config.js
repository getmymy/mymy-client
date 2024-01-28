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
        source: '/public/v1/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/public/v1/:path*`,
      },
      {
        source: '/api/v1/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
