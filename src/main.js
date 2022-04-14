import { createApp } from "vue";
import App from "./App.vue";
import router from "./plugins/router";

// Axios
import VueAxios from "vue-axios";
import Axios from "./plugins/axios/axiosPlugin";

// Cookies
import Vue3Cookies from "./plugins/cookies/Vue3-cookies";

// pinia store
import { createPinia } from "pinia";

// DayJS
import dayjs from "dayjs";

// TailwindCSS
import "./assets/base.css";

const app = createApp(App)
  .use(router)
  .use(VueAxios, Axios)
  .use(Vue3Cookies.VueCookies, Vue3Cookies.cookiesConfig)
  .use(createPinia());

app.config.globalProperties.$dayjs = dayjs;

app.mount("#app");
