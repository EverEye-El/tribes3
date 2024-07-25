/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    staleTimes: {
      default: 30, // 30 seconds
    },
  },
};

export default nextConfig;
