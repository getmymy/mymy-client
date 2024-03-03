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
    /* 이미지 확인을 위한 임시 도메인 설정 - 나중에 지워야 합니다 */
    domains: ['i1.sndcdn.com'],
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
