export default [
    {
      path: "/nft",
      name: "Nft",
      component: () => import("../views/Nft.vue"),
      meta: { layout: "Reave", permission: "log" }
    },
  ];