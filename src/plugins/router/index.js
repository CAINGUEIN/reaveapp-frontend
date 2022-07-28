import { createRouter, createWebHistory } from "vue-router";
import useStoreAuth from "@stores/auth";
import useStoreData from "@stores/data";
import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();

let routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/waiting",
    name: "Waiting",
    component: () => import("@core/components/page/Waiting.vue"),
  },
];

import routesAuth from "@router/routes/authRoute";
import personalRoute from "@router/routes/personalRoute";
import friendsRoute from "@router/routes/friendsRoute";
import socialRoute from "@router/routes/socialRoute";
import playRoute from "@router/routes/playRoute";
import academyRoute from "@router/routes/academyRoute";
import bootcampsRoute from "@router/routes/bootcampsRoute";
import jobsRoute from "@router/routes/jobsRoute";
import leagueRoute from "@router/routes/leagueRoute";
import nftRoute from "@router/routes/nftRoute";
import newRoute from "@router/routes/newRoute";

routes = routes.concat(
  routesAuth,
  personalRoute,
  friendsRoute,
  socialRoute,
  playRoute,
  academyRoute,
  bootcampsRoute,
  jobsRoute,
  leagueRoute,
  nftRoute,
  newRoute
);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from) => {

  const store = useStoreAuth();
  const storeData = useStoreData();

  console.log("avant le login", store);

  // mise en pause de la navigation
  // si pas de donné de connection
  if (store.isLogin === "") {
    if (await store.feedDataAccount()) {
      console.log("apres le feed");
      if (storeData.data === "") {
        await storeData.feedData();
      }
    } else {
      cookies.remove("userSession"); //return this
      console.log("removeCooki");
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
      return { name: "PersonalMessages" };
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
