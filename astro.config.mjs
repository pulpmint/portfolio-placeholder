// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import { loadEnv } from "vite";

const env = loadEnv(process.env.NODE_ENV || "production", process.cwd(), "");
const siteUrl = env.PUBLIC_SITE_URL;

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: siteUrl,
  integrations: [sitemap()]
});
