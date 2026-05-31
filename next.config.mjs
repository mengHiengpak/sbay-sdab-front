/** @type {import('next').NextConfig} */
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://sbay-sdab-back-end.onrender.com';

const nextConfig = {
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
