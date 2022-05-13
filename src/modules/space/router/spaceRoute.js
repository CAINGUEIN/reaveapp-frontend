export default [
  {
    path: "/space",
    name: "Space",
    component: () => import("../views/space.vue"),
    meta: { layout: "Reave", permission: "log" },
    children: [
      {
        path: "friends",
        name: "SpaceFriendsChat",
        component: () => import("../../friends/views/friendsChat.vue"),
      },
      {
        path: "friendsCalendar",
        name: "SpaceFriendsCalendar",
        component: () => import("../../friends/views/friendsCalendar.vue"),
      },
    ],
  },
];
