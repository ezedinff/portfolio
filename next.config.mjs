/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "app.cal.com",
      "d1.awsstatic.com",
      "microsoft.github.io",
      "cloud.google.com",
      "www.isc2.org",
      "training.linuxfoundation.org",
      "images.credly.com",
    ],
  },
};

export default nextConfig;
