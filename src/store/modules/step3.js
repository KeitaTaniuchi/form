"use strict";

const state = {
  /* 質問のラベル */
  q1Label: "-ご相談内容-",

  /* 質問の値 */
  q1Value: "",
};

const getters = {
  /* 質問のラベルをstateから取得 */
  q1Label: (state) => state.q1Label,
};

const mutations = {
  /* 質問の値をstateに代入 */
  updateQ1Value(state, value) {
    state.q1Value = value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
