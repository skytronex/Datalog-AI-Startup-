import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. "export" tells Next.js to create a static HTML folder (./out)
  output: 'export', 
  
  // 2. Disable server-side image optimization (GitHub Pages cannot do this)
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;
