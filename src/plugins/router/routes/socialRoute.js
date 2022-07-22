export default [
    {
      path: "/social",
      name: "Social",
      component: () => import("@modules/social/views/Social.vue"),
      meta: { layout: "Reave", permission: "log" }
    },
  ];