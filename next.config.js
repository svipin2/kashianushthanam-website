/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Replace with your domains
  },
  env: {
    API_URL: 'https://api.example.com', // Replace with your API URL
  },
  // Add any other configuration options here
};

module.exports = nextConfig;