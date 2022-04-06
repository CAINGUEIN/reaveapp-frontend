import axios from "axios";
import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();

const Base = axios.create({
  baseURL: process.env.VUE_APP_BACK_URL,
});

export default Base;

Base.interceptors.request.use(
  function (config) {
    if (
      config.headers["Authorization"] === undefined &&
      config.baseURL === process.env.VUE_APP_BACK_URL &&
      cookies.get("userSession") !== undefined
    ) {
      config.headers["Authorization"] = "bearer " + cookies.get("userSession");
      console.log("rajout du headers Authorization");
    } else {
      console.log("pas de rajout du headers Authorization");
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

Base.interceptors.response.use((response) => {
  console.log("dans le interceptor response", response);
  /* viser si possible la mise en cookies du token de connection
  cookies.set("userSession", response.data.access_token)
  */
});

if (process.env.VUE_APP_WATCH_SERVICES === "yes") {
  Base.interceptors.request.use(
    (request) => {
      console.log("\\\\\\\\");
      console.log(`SENDING FROM FRONTEND : ${request}`);
      console.log("\\\\\\\\");
      return request;
    },
    (err) => {
      console.log("\\\\\\\\");
      console.log(`RECEIVED RESPONSE FROM BACKEND : ${err.response}`);
      console.log("\\\\\\\\");
      return err.response;
    }
  );
  Base.interceptors.response.use(
    (response) => {
      console.log("\\\\\\\\");
      console.log(`RECEIVED RESPONSE FROM BACKEND : ${response}`);
      console.log("\\\\\\\\");
      return response;
    },
    (err) => {
      console.log("\\\\\\\\");
      console.log(`RECEIVED RESPONSE FROM BACKEND : ${err.response}`);
      console.log("\\\\\\\\");
      return err.response;
    }
  );
}
