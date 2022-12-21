export default [
  {
    path: "/academy",
    name: "Academy",
    component: () => import("@modules/marketPlace/academy/views/Academy.vue"),
    meta: { layout: "Reave", permission: "log" },
  },
  {
    path: "/bootcamps",
    name: "Bootcamps",
    component: () =>
      import("@modules/marketPlace/bootcamps/views/Bootcamps.vue"),
    meta: { layout: "Reave", permission: "log" },
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: () => import("@modules/marketPlace/jobs/views/Jobs.vue"),
    meta: { layout: "Reave", permission: "log" },
  },
  {
    path: "/nft",
    name: "Nft",
    component: () => import("@modules/marketPlace/nft/views/Nft.vue"),
    meta: { layout: "Reave", permission: "log" },
  },
  {
    path: "/play",
    name: "Play",
    component: () => import("@modules/marketPlace/play/views/Play.vue"),
    meta: { layout: "Reave", permission: "log" },
  },
  {
    path: "/event",
    name: "Event",
    component: () => import("@modules/marketPlace/event/views/Event.vue"),
    meta: { layout: "Reave", permission: "log" },
  },
  {
    path: "/eventId/:id",
    name: "EventId",
    component: () => import("@modules/marketPlace/event/views/EventId.vue"),
    meta: { layout: "none", permission: "log" },
  },
  {
    path: "/eventBuyTicket/:id",
    name: "EventBuyTicket",
    component: () =>
      import("@modules/marketPlace/event/views/EventBuyTicket.vue"),
    meta: { layout: "none", permission: "log" },
  },
];
