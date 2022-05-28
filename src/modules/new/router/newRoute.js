export default [
    {
      path: "/new",
      name: "New",
      component: () => import("../views/New.vue"),
      meta: { layout: "Reave", permission: "log" }
    },
  ];