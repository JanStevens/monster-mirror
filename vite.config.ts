import netlifyPlugin from '@netlify/vite-plugin-react-router';
import pandaCss from '@pandacss/dev/postcss';
import { reactRouter } from '@react-router/dev/vite';
import autoprefixer from 'autoprefixer';
import fs from 'node:fs';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';
import { VitePWA } from 'vite-plugin-pwa';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
  console.info(`Mode is: ${mode}`);
  const packageJson = fs.readFileSync('./package.json', { encoding: 'utf-8' });
  const packageJsonVersion = JSON.parse(packageJson).version;

  return {
    css: {
      postcss: {
        plugins: [pandaCss, autoprefixer],
      },
    },
    server: {
      // TODO: not working in react-router for some reason
      // Allow to reuse existing cert file coming from env variable
      // ...(isSslCertGenerated
      //   ? {
      //       https: {
      //         cert: fs.readFileSync(process.env.SSL_CRT_FILE ?? ''),
      //         key: fs.readFileSync(process.env.SSL_KEY_FILE ?? ''),
      //       },
      //     }
      //   : {}),
      port: 4_000,
    },
    plugins: [
      reactRouter(),
      VitePWA({
        registerType: 'autoUpdate',
        strategies: 'generateSW',
        injectRegister: 'script-defer',
        base: '/',
        workbox: {
          skipWaiting: true,
        },
        manifest: {
          name: 'Monster Mirror',
          short_name: 'Monster Mirror',
          description: 'Easily show ability card of monsters for Gloomhaven',
          icons: [
            {
              src: '/icon-192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: '/icon-512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable',
            },
          ],
          theme_color: '#ffca16',
          background_color: '#111110',
          start_url: '/',
          scope: '/',
          display: 'fullscreen',
          display_override: [
            'fullscreen',
            'standalone',
            'minimal-ui',
            'browser',
          ],
          orientation: 'landscape',
        },
        devOptions: {
          enabled: true,
          navigateFallback: '/',
          navigateFallbackAllowlist: [/^\/$/],
        },
      }),
      tsconfigPaths({ root: './' }),
      imagetools(),
      netlifyPlugin(),
    ],
    define: {
      'import.meta.env.VITE_VERSION': JSON.stringify(packageJsonVersion),
    },
  };
});
