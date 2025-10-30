import type { NextConfig } from "next";

const nextConfig = {
  output: 'export', // 👈 tells Next.js to generate a static /out directory
  images: {
    unoptimized: true, // required for static export
  },
};

export default nextConfig;
