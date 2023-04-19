export default [
  {
    path: "/pspace/:view",
    name: "Personal",

    component: () => import("@modules/personal/views/PersonalLayout.vue"),
    meta: { layout: "Reave", permission: "log" },
  },
  {
    path: "/operator/:target?/:view?",
    name: "Operator",
    component: () => import("@modules/operator/Operator.vue"),
    meta: { layout: "none", permission: "log" },
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
    path: "/operator/projectId/:id",
    name: "ProjectId",
    component: () =>
      import("@modules/operator/eventPageOperator/OperatorProjectId.vue"),
    meta: { layout: "none", permission: "log" },
  },
  {
    path: "/profile/:view",
    name: "Profile",
    component: () => import("@modules/personal/views/ProfileMain.vue"),
    meta: { layout: "Reave", permission: "log" },
  },
  {
    path: "/spacePrivate",
    name: "SpacePrivate",
    component: () => import("@modules/spacePrivate/SpacePrivateLayout.vue"),
    meta: { layout: "Reave", permission: "log" },
  },
];
