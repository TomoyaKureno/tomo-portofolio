import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://ap-south-1.graphassets.com/**')],
  },
};

export default nextConfig;
