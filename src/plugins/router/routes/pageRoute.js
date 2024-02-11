export default [
  {
    path: "/:idSpace/eventPage/:id",
    name: "EventPage",
    props: true,
    component: () => import("@modules/pages/EventPage.vue"),
    meta: { layout: "Event" },
  },
  {
    path: "/venuePage/:id",
    name: "VenuePage",
    component: () => import("@modules/pages/VenuePage.vue"),
    props: true,
    meta: { layout: "none", permission: "log" },
  },
];
