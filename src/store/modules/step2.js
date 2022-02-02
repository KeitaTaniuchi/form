"use strict";

const state = {
  step2Q1Value: "",
  step2Q2Value: "",
  step2Q3Value: "",
};

const getters = {
  step2Q1Value: (state) => state.step2Q1Value,
  step2Q2Value: (state) => state.step2Q2Value,
  step2Q3Value: (state) => state.step2Q3Value,
};

const mutations = {
  updateStep2Q1Value(state, value) {
    state.step2Q1Value = value;
  },
  updateStep2Q2Value(state, value) {
    state.step2Q2Value = value;
  },
  updateStep2Q3Value(state, value) {
    state.step2Q3Value = value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
