export default [
    {
      path: "/academy",
      name: "Academy",
      component: () => import("../views/Academy.vue"),
      meta: { layout: "Reave", permission: "log" }
    },
  ];