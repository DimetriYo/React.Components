import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  // @ts-expect-error: bug with vitest
  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
    },
  },
});
