import type { Config } from '@react-router/dev/config';

export default {
  appDirectory: 'src/app',
  future: {
    unstable_optimizeDeps: true,
  },
  ssr: true,
  serverBuildFile: 'server.js',
} satisfies Config;
