import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import node from '@astrojs/node';
import { loadEnv } from 'vite';

const { ADAPTER } = loadEnv(process.env.ADAPTER, process.cwd(), '');

const ssrAdapter =
  ADAPTER === 'node' ? node({ mode: 'standalone' }) : vercel({});

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [solidJs(), tailwind()],
  devToolbar: {
    enabled: false,
  },
  adapter: ssrAdapter,
});
