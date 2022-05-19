import { createRouter, createWebHistory } from "vue-router";
import useStoreAuth from "../stores/auth";
import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();

let routes = [
  {
    path: "/",
    redirect: "/login",
  },
];

import routesAuth from "../../modules/auth/router/authRoute";
import personalRoute from "../../modules/personal/router/personalRoute";
//import spaceRoute from "../../modules/space/router/spaceRoute";
import friendsRoute from "../../modules/friends/router/friendsRoute"
routes = routes.concat(routesAuth, personalRoute, /* spaceRoute, */ friendsRoute);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from) => {
  const store = useStoreAuth();

  console.log("avant le login", store);

  // mise en pause de la navigation
  // si pas de donné de connection
  if (store.isLogin === "") {
    if (await store.feedDataAccount()) {
      console.log("apres le feed");
    } else {
      cookies.remove("userSession"); //return this
    }
  }

  console.log("aprés le login", store.isLogin);

  // si connecté
  if (store.isLogin) {
    console.log("si login", store);
    //si pas de match de page
    if (to.matched.length === 0) {
      return { name: "Personal" };
    }
    // verifiaction si les droits de la page sont accesible par le user
    if (store[to.meta.permission] === false) {
      return { name: "/" };
    } else if (to.meta.permission === "noLog") {
      return { name: "PersonalMessage" };
    }
  }
  // si pas connecté
  if (!store.isLogin) {
    console.log("si pas login", to.meta.permission, to);
    //si pas de match de page
    if (to.matched.length === 0) {
      return { name: "Login" };
    }
    // verification des droits de la page
    if (to.meta.permission !== "noLog" && to.meta.permission !== undefined) {
      return { name: "Login" };
    }
  }
});

export default router;
