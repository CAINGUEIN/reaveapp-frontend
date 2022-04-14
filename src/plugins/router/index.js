import { createRouter, createWebHistory } from "vue-router";
import routesAuth from "./AuthRoute";

let routes = [
  {
    path: "/",
    name: "Home",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../../App.vue"),
  },
];

routes = routes.concat(routesAuth);

console.log(routes, routesAuth);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
