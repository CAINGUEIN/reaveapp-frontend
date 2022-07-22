export default [
    {
      path: "/play",
      name: "Play",
      component: () => import("@modules/play/views/Play.vue"),
      meta: { layout: "Reave", permission: "log" }
    },
  ];