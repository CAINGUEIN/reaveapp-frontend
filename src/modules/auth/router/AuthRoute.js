export default [
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/LoginPage.vue"),
    meta: { layout: "Auth", permission: "noLog" },
  },
  {
    path: "/resetPassword",
    name: "ResetPassword",
    component: () => import("../views/ResetPasswordPage.vue"),
    meta: { layout: "Auth", permission: "noLog" },
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("../views/SignupPage.vue"),
    meta: { layout: "Auth", permission: "noLog" },
  },
  {
    path: "/logout",
    name: "Logout",
    component: () => import("../views/LogoutPage.vue"),
    meta: { layout: "Auth", },
  },
];
