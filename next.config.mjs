/* eslint-disable @typescript-eslint/no-unsafe-call */
import withSerwistInit from '@serwist/next';

const revision = crypto.randomUUID();

const scenarioEntries = [...new Array(94)].map((_, i) => ({
  url: `/scenarios/${i + 1}`,
  revision,
}));

const withPWA = withSerwistInit({
  swSrc: 'src/app/sw.ts',
  swDest: 'public/sw.js',
  cacheOnNavigation: true,
  injectionPoint: 'self.__MM_MANIFEST',
  additionalPrecacheEntries: [...scenarioEntries, { url: '/', revision }],
  reloadOnOnline: false,
  register: false,
});

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracing: true,
  poweredByHeader: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
  optimizeFonts: false,
  productionBrowserSourceMaps: true,
  transpilePackages: ['auto-text-size'],
  headers: () => {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
  env: {
    NEXT_PUBLIC_APP_VERSION: process.env.npm_package_version,
  },
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

export default withPWA(nextConfig);
