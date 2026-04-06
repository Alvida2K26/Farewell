import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  experimental: {
    allowedDevOrigins: ['https://6000-firebase-studio-1775365666384.cluster-fkltigo73ncaixtmokrzxhwsfc.cloudworkstations.dev'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
