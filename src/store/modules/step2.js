"use strict";

const state = {
  /* 質問のラベル */
  q1Label: "現在、生命保険に加入されていますか？",
  q2Label:
    "現在、入院中ですか？ または,最近3ヶ月以内に医師の診察・検査の結果、入院・手術を勧められたことはありますか？",
  q3Label:
    "過去5年以内に病気や怪我で手術を受けたこと、または継続して7日以上の入院をしたことがありますか？",

  /* 質問の値 */
  q1Value: "",
  q2Value: "",
  q3Value: "",

  /* ラジオボタンのオプション(選択肢) */
  options: [
    {
      text: "はい",
      value: "はい",
    },
    {
      text: "いいえ",
      value: "いいえ",
    },
  ],
};

const getters = {
  /* 質問のラベルをstateから取得 */
  q1Label: (state) => state.q1Label,
  q2Label: (state) => state.q2Label,
  q3Label: (state) => state.q3Label,

  /* 質問の値をstateから取得 */
  q1Value: (state) => state.q1Value,
  q2Value: (state) => state.q2Value,
  q3Value: (state) => state.q3Value,

  /* ラジオボタンのオプション(選択肢)をstateから取得 */
  options: (state) => state.options,
};

const mutations = {
  /* 質問の値をstateに代入 */
  updateQ1Value(state, value) {
    state.q1Value = value;
  },
  updateQ2Value(state, value) {
    state.q2Value = value;
  },
  updateQ3Value(state, value) {
    state.q3Value = value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
