// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel";

const getSiteUrl = () => {
  const env = process.env.VERCEL_ENV;

  const branchUrl = process.env.VERCEL_BRANCH_URL;
  const projectUrl = process.env.VERCEL_PROJECT_PRODUCTION_UR;

  const url = env === "production" ? projectUrl : branchUrl;

  const site = `https://${url}`;

  console.log("Using domain:", site, "for Vercel env:", env);

  return site;
};

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  vite: { plugins: [tailwindcss()] },
  site: getSiteUrl(),
  integrations: [sitemap()]
});
