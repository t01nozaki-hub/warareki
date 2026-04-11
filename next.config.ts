import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // trailingSlash を有効にして、ディレクトリ形式にする（403対策）
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
