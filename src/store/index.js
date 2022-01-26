import Vue from "vue";
import Vuex from "vuex";
import step1 from "./modules/step1";
import step2 from "./modules/step2";
import step3 from "./modules/step3";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    step1,
    step2,
    step3,
  },
});
