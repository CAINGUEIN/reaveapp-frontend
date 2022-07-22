export default [
    {
      path: "/space/friends/:id?",
      name: "Friends",
      component: () => import("@modules/friends/views/FriendsLayout.vue"),
      meta: { layout: "Reave", permission: "log" }
    },
  ];
  