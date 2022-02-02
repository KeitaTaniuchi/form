"use strict";

const state = {
  step3Q1Value: "",
};

const getters = {
  step3Q1Value: (state) => state.step3Q1Value,
};

const mutations = {
  updateStep3Q1Value(state, value) {
    state.step3Q1Value = value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
