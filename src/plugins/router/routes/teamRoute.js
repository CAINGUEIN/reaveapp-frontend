export default [
    {
      path: "/team/:id",
      name: "Team",
      component: () => import("@modules/team/views/TeamLayout.vue"),
      meta: { layout: "Reave", permission: "log" },
      children: [
        {
          path: "space",
          name: "TeamSpace",
          component: () => import("@modules/team/views/TeamSpacePage.vue"),
          meta: { layout: "Reave", permission: "log" },
        },
      ],
    },
    {
      path: "/team/message",
      name: "TeamMessage",
      component: () => import("@modules/team/views/TeamMessagePage.vue"),
      meta: { layout: "Reave", permission: "log" },
    },
  ];
  