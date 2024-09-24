/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@thirdweb-dev/react", "@thirdweb-dev/sdk"],
  experimental: {
    staleTimes: {
      default: 30, // 30 seconds
    },
  },
};

export default nextConfig;
