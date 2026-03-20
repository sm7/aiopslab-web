import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  async redirects() {
    return [
      {
        source: "/eagleeye",
        destination: "https://eagleeye-intel.vercel.app",
        permanent: false,
      },
      {
        source: "/eagleeye/:path*",
        destination: "https://eagleeye-intel.vercel.app/:path*",
        permanent: false,
      },
    ];
  },
};

export default withMDX(nextConfig);
