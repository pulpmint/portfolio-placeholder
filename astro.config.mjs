// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel";

const getSiteUrl = () => {
  const site = `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

  console.log(
    "[config] Using domain:",
    site,
    "for Vercel env:",
    process.env.VERCEL_ENV
  );

  return site;
};

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  vite: { plugins: [tailwindcss()] },
  site: getSiteUrl(),
  integrations: [sitemap()]
});
