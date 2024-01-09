/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "tanstack.com",
      "codeit-front.s3.ap-northeast-2.amazonaws.com",
      "s.pstatic.net",
      "storybook.js.org",
      "codeit-frontend.codeit.com",
      "assets.vercel.com",
      "reactjs.org",
      "jasonwatmore.com",
      "codeit.kr",
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
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "tanstack.com",
  //       port: "",
  //       pathname: "/_assets/**",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "codeit-front.s3.ap-northeast-2.amazonaws.com",
  //       port: "",
  //       pathname: "/images/**",
  //     },
  //   ],
  // },
};

module.exports = nextConfig;
