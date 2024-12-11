import pandaCss from '@pandacss/dev/postcss';
import { reactRouter } from '@react-router/dev/vite';
import autoprefixer from 'autoprefixer';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode, isSsrBuild }) => {
  console.info(`Mode is: ${mode}`);

  return {
    build: {
      rollupOptions: isSsrBuild
        ? {
            input: './workers/app.ts',
          }
        : undefined,
    },
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
      VitePWA({ registerType: 'autoUpdate', base: '/' }),
      tsconfigPaths({ root: './' }),
    ],
    define: {
      'import.meta.env.VITE_VERSION': JSON.stringify(
        process.env.npm_package_version,
      ),
    },
  };
});
