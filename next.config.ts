import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Configuré pour GitHub Pages - le nom exact du dépôt GitHub
  basePath: process.env.NODE_ENV === 'production' ? '/codeX' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/codeX/' : '',
  images: {
    unoptimized: true, // Désactive l'optimisation des images pour l'export statique
  },
};

export default nextConfig;
