export default [
  {
    path: "/space",
    name: "Space",
    component: () => import("@modules/space/views/space.vue"),
    meta: { layout: "Reave", permission: "log" },
    children: [
      {
        path: "/friends",
        name: "SpaceFriendsChat",
        component: () => import("@modules/friends/views/FriendsChat.vue"),
      },
      {
        path: "/friendsCalendar",
        name: "SpaceFriendsCalendar",
        component: () => import("@modules/friends/views/FriendsCalendar.vue"),
      },
    ],
  },
];
