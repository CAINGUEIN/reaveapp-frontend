export default [
    {
      path: "/academy",
      name: "Academy",
      component: () => import("@modules/academy/views/Academy.vue"),
      meta: { layout: "Reave", permission: "log" }
    },
  ];