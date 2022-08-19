import { createRouter, createWebHistory } from "vue-router";

// view components
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";

import { auth } from "../firebase/config";

// route guard
const requireAuth = (to, from, next) => {
  if (auth.currentUser) {
    next();
  } else {
    next({ name: "Login" });
  }
};
const requireNoAuth = (to, from, next) => {
  if (!auth.currentUser) {
    next();
  } else {
    next({ name: "Home" });
  }
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: requireAuth,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: requireNoAuth,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
    beforeEnter: requireNoAuth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
