import { useCookies } from "vue3-cookies";

export default [
  {
    path: "/home",
    name: "Landing",
    component: () => import("@components/events/Events.vue"),
    meta: {
      layout: getLayoutFromCookie(), // Utiliser une fonction pour déterminer le layout
    },
  },
];

function getLayoutFromCookie() {
  const { cookies } = useCookies();
  const token = cookies.get("userSession");
  if (token) {
    return "Reave";
  } else {
    return "Visitor";
  }
}
