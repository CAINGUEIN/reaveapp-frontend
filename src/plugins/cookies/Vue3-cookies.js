import VueCookies from "vue3-cookies";

const cookiesConfig = {
  expireTimes: "30d",
  path: "/",
  domain: "",
  secure: true,
  sameSite: "None",
};

export default { VueCookies, cookiesConfig }