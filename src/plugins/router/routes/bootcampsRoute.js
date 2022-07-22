export default [
    {
      path: "/bootcamps",
      name: "Bootcamps",
      component: () => import("@modules/bootcamps/views/Bootcamps.vue"),
      meta: { layout: "Reave", permission: "log" }
    },
  ];