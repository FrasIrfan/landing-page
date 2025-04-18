/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/**',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // Disable html-webpack-plugin
    config.plugins = config.plugins.filter(
      (plugin) => plugin.constructor.name !== 'HtmlWebpackPlugin'
    );
    return config;
  },
}

export default nextConfig