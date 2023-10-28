import { createRouter, createWebHistory } from "vue-router";
import useStoreAuth from "@stores/auth";
import useStoreData from "@stores/data";
import useStoreSpace from "@stores/storeSpace";
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
import productsRoute from "@router/routes/productsRoute";
import spaceRoute from "@router/routes/spaceRoute";
import newRoute from "@router/routes/newRoute";

routes = routes.concat(
  routesAuth,
  personalRoute,
  friendsRoute,
  socialRoute,
  spaceRoute,
  productsRoute,
  newRoute
);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from) => {
  const store = useStoreAuth();
  const storeData = useStoreData();
  const storeSpace = useStoreSpace();

  console.log("dans le beforeEach");
  if (storeData.data === "") {
    console.log("ici si pas de data pour recup les datas de base");
    await storeData.feedData();
    console.log("pinia data load");
  }
  // mise en pause de la navigation
  // si pas de donné de connection
  if (store.isLogin === "") {
    console.log("si pas de login");
    if (await store.feedDataAccount()) {
      console.log(
        "ici si on a un token valide et que on a recup les datas user"
      );
      if (await storeSpace.feedDataSpace()) {
        console.log(
          "et que on a recup les datas space"
        );
      }
    } else {
      cookies.remove("userSession"); //return this
      console.log("ici si pas de token ou token invalide");
    }
  }

  console.log("aprés le login");

  // si connecté
  if (store.isLogin) {
    console.log("si login");
    //si pas de match de page
    if (to.matched.length === 0) {
      console.log("redirect si pas de match");
      return { name: "Personal", params: { view: "dashboard" } };
    }
    // verifiaction si les droits de la page sont accesible par le user
    if (store[to.meta.permission] === false) {
      console.log("pour le moment pas use");
      return { name: "/" };
    } else if (to.meta.permission === "noLog") {
      console.log("redirect si on est log mais que la page est en nolog");
      return { name: "PersonalMessages" };
    }
  }
  // si pas connecté
  if (!store.isLogin) {
    console.log("si pas login");
    //si pas de match de page
    if (to.matched.length === 0) {
      console.log("redirect si pas de match");
      return { name: "Login" };
    }
    // verification des droits de la page
    if (to.meta.permission !== "noLog" && to.meta.permission !== undefined) {
      console.log("redirect si on est nolog mais que la page est pas nolog");
      return { name: "Login" };
    }
  }
});

export default router;
