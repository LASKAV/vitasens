import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';
import vercel from "@astrojs/vercel/serverless";
import node from "@astrojs/node";

const ssrAdapter = process.env.ADAPTER === 'node' ? node({mode: "standalone"}) : vercel({})

// https://astro.build/config
export default defineConfig({

  output: 'server',
  integrations: [solidJs(), tailwind()],
  devToolbar: {
    enabled: false
  },
  adapter: ssrAdapter,
});
