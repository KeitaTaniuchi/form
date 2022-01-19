const state = {
  step1Q1: false,
  step2Q1: 1,
  step2Q2: false,
  step2Q3: false,
};

const mutations = {
  updateStep2Q1(state, value) {
    state.step2Q1 = value;
  },
};

export default {
  state,
  mutations,
};
