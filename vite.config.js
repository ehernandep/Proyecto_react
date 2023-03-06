import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Nba-app/",
  plugins: [react()],

  server: {
    port: 3000,
    proxy: {
      "/api": "http://localhost:5000",
    },
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
  esbuild: {
    jsxInject: `import React from 'react'`, // Inject React into every JSX file
  },
});
