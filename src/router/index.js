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
  {
    path: "/edit-vehicle/:id",
    name: "Edit Vehicle",
    component: () => import("../views/EditVehicle.vue"),
  },
  {
    path: "/car-detail/:id",
    name: "Car Detail",
    component: () => import("../views/CarDetail.vue"),
  },

  {
    path: "/add-vehicle-part/:id",
    name: "Add Vehicle Part",
    component: () => import("../views/VehiclePart.vue"),
  },
  {
    path: "/edit-part/:id",
    name: "Edit Part",
    component: () => import("../views/EditPart.vue"),
  },
  {
    path: "/add-parts",
    name: "Add Parts",
    component: () => import("../views/AddParts.vue"),
  },
  {
    path: "/add-vehicle",
    name: "Add Vehicle",
    component: () => import("../views/AddVehicle.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
