const million = require('million/compiler');
const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  transpilePackages: ['auto-text-size'],
  webpack: (config) => {
    // Import svg as resources with a link
    config.module.rules?.push({
      test: /\.svg$/i,
      issuer: {
        and: [/\.(js|ts)x?$/],
      },
      type: 'asset/resource',
    });

    config.optimization.providedExports = true;
    config.optimization.minimize = true;
    config.module.rules = [
      ...config.module.rules,
      // ensure our barrel files don't constitute imports
      {
        test: /index.ts/i,
        sideEffects: false,
      },
      {
        test: /index.js/i,
        sideEffects: false,
      },
    ];

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return config;
  },
};

module.exports = million.next(withPWA(nextConfig), { auto: { rsc: true } });
