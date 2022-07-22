export default [
    {
      path: "/league",
      name: "League",
      component: () => import("@modules/league/views/League.vue"),
      meta: { layout: "Reave", permission: "log" }
    },
  ];