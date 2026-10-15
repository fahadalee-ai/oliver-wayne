import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vercel serves the site from the domain root.
const PRODUCTION_BASE = "/";

export default defineConfig({
  base: PRODUCTION_BASE,
  plugins: [react()],
  server: {
    allowedHosts: ["demo.sourapps.com", "localhost", "127.0.0.1"],
  },
  preview: {
    allowedHosts: ["demo.sourapps.com", "localhost", "127.0.0.1"],
  },
});
