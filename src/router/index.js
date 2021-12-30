import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/STEP1",
    name: "STEP1",
    component: () => import("../views/Step1.vue"),
  },
  {
    path: "/STEP2",
    name: "STEP2",
    component: () => import("../views/Step2.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
