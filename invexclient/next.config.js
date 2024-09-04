/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true, // SWC minification is enabled
  images: {
    domains: ['s3-inventorymanagement.s3.us-east-2.amazonaws.com'], // Add your S3 domain here
  },
};

module.exports = nextConfig;
