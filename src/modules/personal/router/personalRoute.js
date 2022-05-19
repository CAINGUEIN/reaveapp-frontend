export default [
  {
    path: "/personal",
    name: "Personal",
    component: () => import("../views/PersonalLayout.vue"),
    meta: { layout: "Reave", permission: "log" },
    children: [
      {
        path: "space",
        name: "PersonalSpace",
        component: () => import("../views/PersonalSpacePage.vue"),
        meta: { layout: "Reave", permission: "log" },
      },
      {
        path: "settings",
        name: "PersonalSettings",
        component: () => import("../views/PersonnalSettings.vue"),
        meta: { layout: "Reave", permission: "log" },
      },
    ],
  },
  {
    path: "/personal/messages",
    name: "PersonalMessages",
    component: () => import("../views/PersonalMessagePage.vue"),
    meta: { layout: "Reave", permission: "log" },
  },
];
