/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dynamic-leopard-971.convex.cloud",
      },
      // {
      //   protocol: "https",
      //   hostname: "sleek-capybara-771.convex.cloud",
      // },
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
    ],
  },
};

export default nextConfig;
