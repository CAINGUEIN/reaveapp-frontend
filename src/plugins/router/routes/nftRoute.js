export default [
    {
      path: "/nft",
      name: "Nft",
      component: () => import("@modules/nft/views/Nft.vue"),
      meta: { layout: "Reave", permission: "log" }
    },
  ];