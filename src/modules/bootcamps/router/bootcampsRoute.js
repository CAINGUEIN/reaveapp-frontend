export default [
    {
      path: "/bootcamps",
      name: "Bootcamps",
      component: () => import("../views/Bootcamps.vue"),
      meta: { layout: "Reave", permission: "log" }
    },
  ];