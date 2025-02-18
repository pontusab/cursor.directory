/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/popular",
        destination: "/rules/popular",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        hostname: "cdn.brandfetch.io",
      },
      {
        hostname: "pbs.twimg.com",
      },
    ],
  },
};

export default nextConfig;
