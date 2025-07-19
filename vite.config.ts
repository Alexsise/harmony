import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsConfigPaths from 'vite-tsconfig-paths'
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), tsConfigPaths()],
  resolve: {
    alias: {
      "@icons": path.resolve(__dirname, "src", "assets"),
    },
  },
});
