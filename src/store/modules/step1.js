"use strict";

const state = {
  step1Q1Value: "",
  step1Q2Year: null,
  step1Q2Month: null,
  step1Q2Date: null,
};

const getters = {
  step1Q1Value: (state) => state.step1Q1Value,
  step1Q2Year: (state) => state.step1Q2Year,
  step1Q2Month: (state) => state.step1Q2Month,
  step1Q2Date: (state) => state.step1Q2Date,
};

const mutations = {
  updateStep1Q1Value(state, value) {
    state.step1Q1Value = value;
  },
  updateStep1Q2Year(state, value) {
    state.step1Q2Year = value;
  },
  updateStep1Q2Month(state, value) {
    state.step1Q2Month = value;
  },
  updateStep1Q2Date(state, value) {
    state.step1Q2Date = value;
  },
  assignNullStep1Q2Date(state) {
    state.step1Q2Date = null;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
