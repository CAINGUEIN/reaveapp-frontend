export default [
    {
      path: "/space/friends/:id?",
      name: "Friends",
      component: () => import("../views/FriendsLayout.vue"),
      meta: { layout: "Reave", permission: "log" }
    },
  ];
  