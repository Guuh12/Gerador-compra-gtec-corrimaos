import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // Removido ignoreBuildErrors para detectar problemas no build
  },
  eslint: {
    // Removido ignoreDuringBuilds para detectar problemas de linting
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Otimizações para produção
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  // Configurações para Render
  output: 'standalone',
  trailingSlash: false,
  poweredByHeader: false,
};

export default nextConfig;
