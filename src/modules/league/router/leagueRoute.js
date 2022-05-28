export default [
    {
      path: "/league",
      name: "League",
      component: () => import("../views/League.vue"),
      meta: { layout: "Reave", permission: "log" }
    },
  ];