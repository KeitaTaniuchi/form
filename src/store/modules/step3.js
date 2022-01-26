"use strict";

const state = {
  /* 質問のラベル */
  step3Q1Label: "-ご相談内容-",

  /* 質問の値 */
  step3Q1Value: "",
};

const getters = {
  /* 質問のラベルをstateから取得 */
  step3Q1Label: (state) => state.step3Q1Label,

  /* 質問の値をstateから取得 */
  step3Q1Value: (state) => state.step3Q1Value,
};

const mutations = {
  /* 質問の値をstateに代入 */
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
