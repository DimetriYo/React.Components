import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      coverage: {
        provider: 'v8',
        exclude: ['**/tests'],
      },
      setupFiles: ['./vitest-setup.ts'],
    },
  })
);
