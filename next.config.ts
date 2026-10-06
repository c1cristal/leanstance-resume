import type { NextConfig } from "next";

// Empty for a custom domain (leanstance.com); set to e.g. "/live-resume" for a GitHub project page.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Static export: `next build` writes plain HTML/CSS/JS to ./out, which any static host can serve.
  output: "export",
  basePath,
  // Writes no/index.html so GitHub Pages serves /no/ (and /no) reliably.
  trailingSlash: true,
};

export default nextConfig;
