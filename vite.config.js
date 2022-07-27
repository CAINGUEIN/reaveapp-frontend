import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), VitePWA({})],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@stores": fileURLToPath(new URL("./src/plugins/stores", import.meta.url)),
      "@router": fileURLToPath(new URL("./src/plugins/router", import.meta.url)),
      "@axios": fileURLToPath(new URL("./src/plugins/axios", import.meta.url)),
      "@cookies": fileURLToPath(new URL("./src/plugins/cookies", import.meta.url)),
      "@core": fileURLToPath(new URL("./src/core", import.meta.url)),
      "@modules": fileURLToPath(new URL("./src/modules", import.meta.url)),
    },
  },
  server: {
    hmr: {
      port: 5555,
      path: "/sockIO/",
    },
  },
});
