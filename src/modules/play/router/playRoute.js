export default [
    {
      path: "/play",
      name: "Play",
      component: () => import("../views/Play.vue"),
      meta: { layout: "Reave", permission: "log" }
    },
  ];