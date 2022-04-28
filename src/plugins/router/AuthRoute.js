export default [
  {
    path: "/login",
    name: "Login",
    component: () => import("../../views/Auth/LoginPage.vue"),
  },
  {
    path: "/resetPassword",
    name: "ResetPassword",
    component: () => import("../../views/Auth/ResetPasswordPage.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("../../views/Auth/SignupPage.vue"),
  },
  {
    path: "/logout",
    name: "Logout",
    component: () => import("../../views/Auth/LogoutPage.vue"),
  },
];
