/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['picsum.photos' ,'loremflickr.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "loremflickr.com",
        port: "",
        pathname: "/640/480/**",
      },
    ],
  }
  
};

export default nextConfig;
