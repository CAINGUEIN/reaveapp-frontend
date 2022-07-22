export default [
    {
      path: "/new",
      name: "New",
      component: () => import("@modules/new/views/new.vue"),
      meta: { layout: "Reave", permission: "log" }
    },
  ];