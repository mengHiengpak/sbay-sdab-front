/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8000/api/:path*',
      },
      {
        source: '/downloads/:path*',
        destination: 'http://localhost:8000/downloads/:path*',
      },
    ];
  },
};

export default nextConfig;
