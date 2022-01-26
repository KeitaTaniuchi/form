"use strict";

const state = {
  /* 質問のラベル */
  q1Label: "-性別-",
  q2Label: "-生年月日-",

  /* 質問の値 */
  q1Value: "",
  q2Year: "",
  q2Month: "",
  q2Date: "",

  /* ラジオボタンのオプション(選択肢) */
  options: [
    {
      text: "男性",
      value: "男性",
    },
    {
      text: "女性",
      value: "女性",
    },
  ],
};

const getters = {
  /* 質問のラベルをstateから取得 */
  q1Label: (state) => state.q1Label,
  q2Label: (state) => state.q2Label,

  /* 質問の値をstateから取得 */
  q2Year: (state) => state.q2Year,
  q2Month: (state) => state.q2Month,
  q2Date: (state) => state.q2Date,

  /* ラジオボタンのオプション(選択肢)をstateから取得 */
  options: (state) => state.options,
};

const mutations = {
  /* 質問の値をstateに代入 */
  updateQ1Value(state, value) {
    state.q1Value = value;
  },
  updateQ2Year(state, value) {
    state.q1Year = value;
  },
  updateQ2Month(state, value) {
    state.q1Month = value;
  },
  updateQ2Date(state, value) {
    state.q1Date = value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
