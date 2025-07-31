import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    domains: ['images.pexels.com', 'www.google.com', 'pilotedevie.com', 'localhost'],
  },
   experimental: {
    serverActions: {} 
  },
};

export default nextConfig;
