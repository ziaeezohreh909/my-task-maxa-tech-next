/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cloudflare-ipfs.com", "your-other-domains.com"],
  },
};

export default nextConfig;
