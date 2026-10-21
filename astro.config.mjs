// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.launchlinedesign.com",
  trailingSlash: "never",
  build: {
    format: "file",
  },
  redirects: {
    "/automation": "/keep-customers",
    "/custom-ai": "/operations",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes("/thanks") && !page.includes("/automation") && !page.includes("/custom-ai"),
    }),
  ],
});
