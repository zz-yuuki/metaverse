/** @type {import('next').NextConfig} */
const nextConfig = {
  //  experimental: {
  //    appDir: false,
  //  },
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
},
};

module.exports = nextConfig;