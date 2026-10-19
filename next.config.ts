import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/leistungen.html',
        destination: '/leistungen',
        permanent: true,
      },
      {
        source: '/impressum.html',
        destination: '/impressum',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'artdesignbau.de' }],
        destination: 'https://www.artdesignbau.de/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
