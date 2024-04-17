/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "fs.univ-tlemcen.dz",
      },
      {
        protocol: "http",
        hostname: process.env.BASE_URL,
      },
    ],
  },
};

export default nextConfig;
