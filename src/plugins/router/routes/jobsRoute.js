export default [
    {
      path: "/jobs",
      name: "Jobs",
      component: () => import("@modules/jobs/views/Jobs.vue"),
      meta: { layout: "Reave", permission: "log" }
    },
  ];