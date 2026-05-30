/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://sbay-sdab-back-end.onrender.com/api/:path*',
      },
      {
        source: '/downloads/:path*',
        destination: 'https://sbay-sdab-back-end.onrender.com/downloads/:path*',
      },
    ];
  },
};

export default nextConfig;
