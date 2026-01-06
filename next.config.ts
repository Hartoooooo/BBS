import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/leistungen.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/impressum.html',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
