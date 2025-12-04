/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages configuration
  // If your repository is 'portfolio', the basePath should be '/portfolio'
  // If using a custom domain or repository named 'username.github.io', set basePath to ''
  basePath: process.env.NODE_ENV === 'production' ? (process.env.BASE_PATH || '/portfolio') : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? (process.env.ASSET_PREFIX || '/portfolio') : '',
}

module.exports = nextConfig

