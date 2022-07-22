export default [
    {
      path: "/new",
      name: "New",
      component: () => import("@/modules/new/views/New.vue"),
      meta: { layout: "Reave", permission: "log" }
    },
  ];