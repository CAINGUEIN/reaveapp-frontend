export default [
    {
      path: "/eventPage/:id",
      name: "EventPage",
      component: () => import("@modules/pages/EventPage.vue"),
      meta: { layout: "none", permission: "log" },
    },
    {
      path: "/venuePage/:id",
      name: "VenuePage",
      component: () => import("@modules/pages/VenuePage.vue"),
      props: true,
      meta: { layout: "none", permission: "log" },
    }, 
    
  ];
  