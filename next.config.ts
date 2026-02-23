import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  experimental: {
    reactCompiler: true,
  },
};

export default nextConfig;
