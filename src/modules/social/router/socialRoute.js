export default [
    {
      path: "/social",
      name: "Social",
      component: () => import("../views/Social.vue"),
      meta: { layout: "Reave", permission: "log" }
    },
  ];