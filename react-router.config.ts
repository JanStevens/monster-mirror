import type { Config } from '@react-router/dev/config';

export default {
  appDirectory: 'src/app',
  future: {
    unstable_optimizeDeps: true,
  },
  ssr: true,
  prerender() {
    return [
      '/',
      ...Array.from(
        { length: 94 },
        (_, scenarioId) => `/scenarios/${scenarioId + 1}`,
      ),
    ];
  },
} satisfies Config;
