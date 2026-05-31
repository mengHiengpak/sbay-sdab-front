/** @type {import('next').NextConfig} */
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  serverExternalPackages: [],
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${API_URL}/api/:path*`,
      },
      {
        source: '/downloads/:path*',
        destination: `${API_URL}/downloads/:path*`,
      },
    ];
  },
};

export default nextConfig;
