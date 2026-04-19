import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  site: "https://zaniluca.com",
  integrations: [react(), sitemap()],
  output: "static",

  vite: {
    plugins: [tailwindcss()],
  },
});
