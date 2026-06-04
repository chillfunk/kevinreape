import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://kevinreape.com",
  vite: {
    optimizeDeps: {
      exclude: ["aria-query", "axobject-query"]
    }
  }
});
