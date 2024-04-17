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
        hostname: "172.20.10.11",
      },
    ],
  },
};

export default nextConfig;
