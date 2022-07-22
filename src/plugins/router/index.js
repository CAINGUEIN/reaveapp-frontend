import { createRouter, createWebHistory } from "vue-router";
import useStoreAuth from "../stores/auth";
import useStoreData from '../stores/data'
import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();

let routes = [
  {
    path: "/",
    redirect: "/login",
  },
];

import routesAuth from "src/modules/auth/router/authRoute";
import personalRoute from "src/modules/personal/router/personalRoute";
import friendsRoute from "src/modules/friends/router/friendsRoute";
import socialRoute from "src/modules/social/router/socialRoute";
import playRoute from "src/modules/play/router/playRoute";
import academyRoute from "src/modules/academy/router/academyRoute";
import bootcampsRoute from "src/modules/bootcamps/router/bootcampsRoute";
import jobsRoute from "src/modules/jobs/router/jobsRoute";
import leagueRoute from "src/modules/league/router/leagueRoute";
import nftRoute from "src/modules/nft/router/nftRoute";
import newRoute from "src/modules/new/router/newRoute"

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
  const storeData = useStoreData()

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

  if (storeData.data === "") {
    await storeData.feedData()
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
