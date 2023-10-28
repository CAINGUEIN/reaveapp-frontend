export default [{
    path: "/updatePosition",
    name: "UpdatePosition",
    component: () => import("@modules/maps/maps.vue"),
    meta: {
        layout: "Reave",
        permission: "log"
    }

}];