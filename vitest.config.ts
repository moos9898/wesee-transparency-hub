import { defineConfig } from "vitest/config";
import path from "node:path";

// Standalone config so unit tests don't load the app's Cloudflare/SSR plugins.
export default defineConfig({
  test: { environment: "node", include: ["src/**/*.test.ts"] },
  resolve: { alias: { "@": path.resolve(import.meta.dirname, "./src") } },
});
