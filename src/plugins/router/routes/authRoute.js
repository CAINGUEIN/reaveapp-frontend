export default [
  {
    path: "/login",
    name: "Login",
    component: () => import("@modules/auth/views/LoginPage.vue"),
    meta: { layout: "Auth", permission: "noLog" },
  },
  {
    path: "/resetPassword",
    name: "ResetPassword",
    component: () => import("@modules/auth/views/ResetPasswordPage.vue"),
    meta: { layout: "Auth", permission: "noLog" },
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("@modules/auth/views/SignupPage.vue"),
    meta: { layout: "Auth", permission: "noLog" },
  },
  {
    path: "/logout",
    name: "Logout",
    component: () => import("@modules/auth/views/LogoutPage.vue"),
    meta: { layout: "Auth", },
  },
];
