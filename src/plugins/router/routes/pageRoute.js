export default [
    {
      path: "/eventPage",
      name: "EventPage",
      component: () => import("@modules/pages/EventPage.vue"),
      meta: { layout: "none", permission: "log" },
    },
    {
      path: "/venuePage",
      name: "VenuePage",
      component: () => import("@modules/auth/views/VenuePage.vue"),
      meta: { layout: "none", permission: "log" },
    },
    
  ];
  