const isProd = process.env.NODE_ENV === 'production';
const repoName = 'techora';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : undefined,
};

export default nextConfig;
