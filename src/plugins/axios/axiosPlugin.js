import axios from "axios";
import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();

const Base = axios.create({
  baseURL: import.meta.env.VITE_API_BACKURL,
});
export default Base;

Base.interceptors.request.use(
  function (config) {
    if (
      config.headers["Authorization"] === undefined &&
      config.baseURL === import.meta.env.VITE_API_BACKURL &&
      cookies.get("userSession") !== null
    ) {
      config.headers["Authorization"] = "bearer " + cookies.get("userSession");
    } else {
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
   */
  if (response.data.token) {
    console.log("set token", response.data.token);
    cookies.set("userSession", response.data.token);
  }
  return response;
});

if (import.meta.env.VITE_API_WATCHSERVICES === "yes") {
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
