// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  vite: { plugins: [tailwindcss()] },
  site: `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`,
  integrations: [sitemap()]
});
