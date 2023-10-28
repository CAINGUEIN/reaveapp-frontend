export default [
  {
    path: "/space",
    name: "Space",
    component: () => import("@modules/space/views/space.vue"),
    meta: { layout: "Space", permission: "log" },
    children: [
      {
        path: "/conceptor",
        name: "Conceptor",
        component: () => import("@modules/tools/conceptor/Conceptor.vue"),
      },
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
