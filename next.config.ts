import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // Required for GitHub Pages
  basePath: "/Datalog-AI-Startup-", // MUST match your repository name exactly
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
