import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Always send title, description and canonical in the <head>, including on per-request pages.
  htmlLimitedBots: /.*/,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/social-media-packages',
        destination: '/marketing-packages',
        statusCode: 301,
      },
      {
        source: '/social-media-packages/',
        destination: '/marketing-packages',
        statusCode: 301,
      },
      {
        source: '/social-media-packages-backup',
        destination: '/marketing-packages',
        statusCode: 301,
      },
      {
        source: '/social-media-packages-backup/',
        destination: '/marketing-packages',
        statusCode: 301,
      },
      {
        source: '/social-media-2',
        destination: '/marketing-packages',
        statusCode: 301,
      },
      {
        source: '/social-media-2/',
        destination: '/marketing-packages',
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
