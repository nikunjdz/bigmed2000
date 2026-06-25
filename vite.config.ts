import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/bigmed2000/" : "/",
  build: {
    emptyOutDir: false,
  },
  server: {
    host: "::",
    port: 8087,
    strictPort: true,
    open: '/nan2002.html',
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    // componentTagger removed to fix ERR_MODULE_NOT_FOUND
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core"
    ],
  },
}));
