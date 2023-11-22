import { useCookies } from "vue3-cookies";

export default [
  /*OLD*/
  /*
  {
    path: "/academy",
    name: "Academy",
    component: () => import("@modules/marketPlace/academy/views/Academy.vue"),
    meta: {
      layout: "Reave",
      permission: "log"
    },
  },
  {
    path: "/bootcamps",
    name: "Bootcamps",
    component: () =>
      import("@modules/marketPlace/bootcamps/views/Bootcamps.vue"),
    meta: {
      layout: "Reave",
      permission: "log"
    },
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: () => import("@modules/marketPlace/jobs/views/Jobs.vue"),
    meta: {
      layout: "Reave",
      permission: "log"
    },
  },
  {
    path: "/nft",
    name: "Nft",
    component: () => import("@modules/marketPlace/nft/views/Nft.vue"),
    meta: {
      layout: "Reave",
      permission: "log"
    },
  },
  {
    path: "/play",
    name: "Play",
    component: () => import("@modules/marketPlace/play/views/Play.vue"),
    meta: {
      layout: "Reave",
      permission: "log"
    },
  },
  {
    path: "/event",
    name: "Event",
    component: () => import("@modules/platforms/events/views/Event.vue"),
    meta: {
      layout: "Reave",
      permission: "log"
    },
  },
  {
    path: "/maps",
    name: "Maps",
    component: () => import("@modules/marketPlace/maps/Maps.vue"),
    meta: {
      layout: "Reave",
      permission: "log"
    },
  },
  {
    path: "/eventId/:id",
    name: "EventId",
    component: () => import("@modules/platforms/events/views/EventId.vue"),
    meta: {
      layout: "none",
      permission: "log"
    },
  },
  {
    path: "/eventBuyTicket/:id",
    name: "EventBuyTicket",
    component: () =>
      import("@modules/platforms/events/views/EventBuyTicket.vue"),
    meta: {
      layout: "none",
      permission: "log"
    },
  },
  */

  /*NEW*/

  {
    path: "/events",
    name: "Events",
    component: () => import("@modules/platforms/events/Events.vue"),
    meta: {
      layout: "Reave",
      permission: "log"
    },
  },

  {
    path: "/shards",
    name: "Shards",
    component: () => import("@modules/platforms/shards/Shards.vue"),
    meta: {
      layout: getLayoutFromCookie(),
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
    component: () => import("@modules/systems/maps/Maps.vue"),
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


function getLayoutFromCookie() {
  const { cookies } = useCookies();
  const token = cookies.get("userSession");
  if (token) {
    return "Reave";
  } else {
    return "Visitor";
  }
}