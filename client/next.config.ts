import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export -> lands in ./out, which GitHub Pages serves directly.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
