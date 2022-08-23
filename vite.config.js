import { fileURLToPath, URL } from "url";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default ({ mode }) => {
  let hmr = "";
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  if (process.env.VITE_APP_ENVIRONEMENT !== "local") {
    hmr = {
      clientPort: 443,
      path: "/sockIO/",
    };
  }
  return defineConfig({
    plugins: [vue(), vueJsx(), VitePWA({})],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "@stores": fileURLToPath(
          new URL("./src/plugins/stores", import.meta.url)
        ),
        "@router": fileURLToPath(
          new URL("./src/plugins/router", import.meta.url)
        ),
        "@axios": fileURLToPath(
          new URL("./src/plugins/axios", import.meta.url)
        ),
        "@cookies": fileURLToPath(
          new URL("./src/plugins/cookies", import.meta.url)
        ),
        "@core": fileURLToPath(new URL("./src/core", import.meta.url)),
        "@modules": fileURLToPath(new URL("./src/modules", import.meta.url)),
        "@assets": fileURLToPath(new URL("./src/core/assets", import.meta.url))
      },
    },
    server: {
      hmr: hmr,
    },
  });
};
