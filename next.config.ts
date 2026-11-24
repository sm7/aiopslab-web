import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  // Deal board: a self-contained static page in public/deals/index.html, served at /deals
  async rewrites() {
    return [{ source: "/deals", destination: "/deals/index.html" }];
  },
  async redirects() {
    return [
      {
        source: "/eagleeye",
        destination: "https://app.eagleeye.aiopslab.co",
        permanent: false,
      },
      {
        source: "/eagleeye/:path*",
        destination: "https://app.eagleeye.aiopslab.co/:path*",
        permanent: false,
      },
    ];
  },
};

export default withMDX(nextConfig);
