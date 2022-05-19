import { createApp } from "vue";
import App from "./core/App.vue";

// pinia store
import { createPinia } from "pinia";
const usePinia = createPinia()

import router from "./plugins/router";

// Axios
import VueAxios from "vue-axios";
import Axios from "./plugins/axios/axiosPlugin";

// Cookies
import Vue3Cookies from "./plugins/cookies/Vue3-cookies";

// DayJS
import dayjs from "dayjs";

// TailwindCSS
import "./core/assets/base.css";

const app = createApp(App)
  .use(usePinia)
  .use(router)
  .use(VueAxios, Axios)
  .use(Vue3Cookies.VueCookies, Vue3Cookies.cookiesConfig);

app.config.globalProperties.$dayjs = dayjs;

app.mount("#app");
