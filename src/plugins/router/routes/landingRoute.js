export default [
  {
    path: "/home",
    name: "Landing",
    component: () => import("@components/events/Events.vue"),
    meta: {
      layout: localStorage.getItem("userSession") ? "Reave" : "Visitor",
    },
  },
];
