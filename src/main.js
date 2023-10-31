import { createApp } from "vue";
import App from "@core/App.vue";

// pinia store
import { createPinia } from "pinia";
const usePinia = createPinia()

import router from "@router";

// Axios
import VueAxios from "vue-axios";
import Axios from "@axios/axiosPlugin";

// Cookies
import Vue3Cookies from "@cookies/Vue3-cookies";

// DayJS
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration"
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)
dayjs.extend(duration)

//leaflet
//import "@core/assets/leaflet.css"; importé dans le composant

// CropperJS
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';

// TailwindCSS
import "@core/assets/base.css";


const app = createApp(App)
  .use(usePinia)
  .use(router)
  .use(VueAxios, Axios)
  .use(Vue3Cookies.VueCookies, Vue3Cookies.cookiesConfig)
  .use(VueCropper)

app.config.globalProperties.$dayjs = dayjs;

app.mount("#app");
