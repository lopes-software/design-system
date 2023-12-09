import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';
import viteConfig from "./vite.config.mjs";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'happy-dom',
      include: ['./src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      exclude: [
        '**/node_modules/**',
        '**/dist/**',
        '**/cypress/**',
        '**/.{idea,git,cache,output,temp}/**',
      ],
      coverage: {
        provider: 'v8',
        reporter: ['text', 'json', 'html'],
        lines: 100,
        functions: 100,
        branches: 100,
        statements: 100,
        exclude: [
          '.storybook/',
          'storybook-static',
          'src/components/**/*.stories.js',
          'src/index.js',
          'src/components/index.js'
        ],
      },
    },
  }),
);
