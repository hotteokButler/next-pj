/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['picsum.photos']
  }
  
};

export default nextConfig;
