export default [
  {
    path: "/personal",
    name: "Personal",
    component: () => import("@modules/personal/views/PersonalLayout.vue"),
    meta: { layout: "Reave", permission: "log" },
  },
  {
    path: "/personalMessages",
    name: "PersonalMessages",
    component: () => import("@modules/personal/views/PersonalMessagePage.vue"),
    meta: { layout: "Reave", permission: "log" },
  },
  {
    path: "/matchSummary",
    name: "MatchSummary",
    component: () => import("@core/components/MatchSummary/MatchSummaryPage.vue"),
    meta: { layout: "Reave", permission: "log" },
  },

];
