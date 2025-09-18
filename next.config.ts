import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xizec-webapp-f1zqb78dn-sunfocus-projects.vercel.app",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "xizec-webapp.vercel.app",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
