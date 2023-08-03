import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://zaniluca.com",
  integrations: [react(), tailwind(), sitemap()],
  output: "static",
  adapter: vercel(),
});
