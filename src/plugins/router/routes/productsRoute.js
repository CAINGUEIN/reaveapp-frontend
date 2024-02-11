export default [
  {
    path: "/events",
    name: "Events",
    component: () => import("@modules/platforms/events/landing/Events.vue"),
    meta: {
      layout: "Reave",
    },
  },

  {
    path: "/:idSpace/eventBuyTicket/:id",
    name: "EventBuyTicket",
    props: true,
    component: () =>
      import("@modules/platforms/events/EventBuyTicket.vue"),
    meta: {
      layout: "Event",
      permission: "log"
    },
  },

  {
    path: "/shards",
    name: "Shards",
    component: () => import("@modules/platforms/shards/Shards.vue"),
    meta: {
      layout: "Reave",
      permission: "log",
    },
  },

  {
    path: "/hub",
    name: "Hub",
    component: () => import("@modules/platforms/hub/Hub.vue"),
    meta: {
      layout: "Reave",
      permission: "log"
    },
  },

  {
    path: "/jobs",
    name: "Jobs",
    component: () => import("@modules/platforms/jobs/Jobs.vue"),
    meta: {
      layout: "Reave",
      permission: "log"
    },
  },

  {
    path: "/academy",
    name: "Academy",
    component: () => import("@modules/experiences/academy/Academy.vue"),
    meta: {
      layout: "Reave",
      permission: "log"
    },
  },

  {
    path: "/bootcamps",
    name: "Bootcamps",
    component: () => import("@modules/platforms/bootcamps/Bootcamps.vue"),
    meta: {
      layout: "Reave",
      permission: "log"
    },
  },

  {
    path: "/maps",
    name: "Maps",
    component: () => import("@modules/systems/maps/maps.vue"),
    meta: {
      layout: "Reave",
      permission: "log",
    },
  },

  {
    path: "/scrims",
    name: "Scrims",
    component: () => import("@modules/platforms/scrims/Scrims.vue"),
    meta: {
      layout: "Reave",
      permission: "log",
    },
  },
];