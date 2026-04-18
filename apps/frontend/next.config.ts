import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/pages',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
