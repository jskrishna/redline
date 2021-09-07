import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Login from "../auth/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/car-list",
    name: "Car list",
    component: () => import("../views/CarList.vue"),
  },
  {
    path: "/part-list",
    name: "Part list",
    component: () => import("../views/PartList.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
