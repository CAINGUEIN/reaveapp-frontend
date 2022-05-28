export default [
    {
      path: "/jobs",
      name: "Jobs",
      component: () => import("../views/Jobs.vue"),
      meta: { layout: "Reave", permission: "log" }
    },
  ];