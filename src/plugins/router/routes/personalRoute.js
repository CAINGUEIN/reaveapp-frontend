export default [
  {
    path: "/pspace/:view",
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
    component: () =>
      import("@core/components/MatchSummary/MatchSummaryPage.vue"),
    meta: { layout: "Reave", permission: "log" },
  },
  {
    path: "/settings/:view",
    name: "Settings",
    component: () => import("@modules/settings/views/SettingsLayout.vue"),
    meta: { layout: "none", permission: "log" },
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("@modules/personal/views/ProfileMain.vue"),
    meta: { layout: "Reave", permission: "log" },
  },
];
