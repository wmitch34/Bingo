import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  watch: false,

  plugins: [react()],

  server: {
    open: true,
    port: 3000,
  },

  build: {
    assetsDir: "assets",
  },
});
