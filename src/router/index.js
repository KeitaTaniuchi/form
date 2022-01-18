import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "STEP1",
    component: () => import("../views/Step1.vue"),
  },
  {
    path: "/STEP2",
    name: "STEP2",
    component: () => import("../views/Step2.vue"),
  },
  {
    path: "/STEP3",
    name: "STEP3",
    component: () => import("../views/Step3.vue"),
  },
  {
    path: "/STEP4",
    name: "STEP4",
    component: () => import("../views/Step4.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
