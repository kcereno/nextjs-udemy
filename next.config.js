/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    mongodb_username: 'kcereno',
    mongodb_password: 'kcereno',
    mongodb_clustername: 'cluster0',
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
