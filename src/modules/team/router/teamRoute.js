export default [
    {
      path: "/team/:id",
      name: "Team",
      component: () => import("../views/TeamLayout.vue"),
      meta: { layout: "Reave", permission: "log" },
      children: [
        {
          path: "space",
          name: "TeamSpace",
          component: () => import("../views/TeamSpacePage.vue"),
          meta: { layout: "Reave", permission: "log" },
        },
      ],
    },
    {
      path: "/team/message",
      name: "TeamMessage",
      component: () => import("../views/TeamMessagePage.vue"),
      meta: { layout: "Reave", permission: "log" },
    },
  ];
  