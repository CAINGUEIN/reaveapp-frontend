export default [
  {
    path: "/SpacePrivate",
    name: "SpacePrivate",
    component: () => import("@modules/space/views/space.vue"),
    meta: { layout: "Space", permission: "log" },
    children: [
      {
        path: "conceptor",
        name: "Conceptor",
        component: () => import("@modules/tools/conceptor/Conceptor.vue"),
      },
      {
        path: "friends",
        name: "SpaceFriendsChat",
        component: () => import("@modules/friends/views/FriendsChat.vue"),
      },
      {
        path: "friendsCalendar",
        name: "SpaceFriendsCalendar",
        component: () => import("@modules/friends/views/FriendsCalendar.vue"),
      },
      {
        path: "operator/:target?/:view?",
        name: "Operator",
        component: () => import("@modules/operator/Operator.vue"),
        meta: { layout: "Space", permission: "log" },
      },
      {
        path: "operator/projectId/:id",
        name: "ProjectId",
        component: () =>
          import("@modules/operator/eventPageOperator/OperatorProjectId.vue"),
        meta: { layout: "Space", permission: "log" },
      },
      {
        path: "operator/venueId/:id",
        name: "VenueId",
        component: () =>
          import("@modules/operator/venuePageOperator/OperatorVenueId.vue"),
        meta: { layout: "Space", permission: "log" },
      },
    ],
  },
];
