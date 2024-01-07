/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "codeit-front.s3.ap-northeast-2.amazonaws.com",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://bootcamp-api.codeit.kr/:path*", // 실제 API 엔드포인트로 변경
      },
    ];
  },
};

module.exports = nextConfig;
