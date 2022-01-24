const state = {
  /* 質問のラベル */
  step1Q1Label: "-性別-",
  step1Q2Label: "-生年月日-",

  /* 質問の値 */
  step1Q1Value: "",
  step1Q2Year: "",
  step1Q2Month: "",
  step1Q2Date: "",

  /* ラジオボタンのオプション(選択肢) */
  step1Options: [
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
  step1Q1Label: (state) => state.step1Q1Label,
  step1Q2Label: (state) => state.step1Q2Label,

  /* 質問の値をstateから取得 */
  step1Q2Year: (state) => state.step1Q2Year,
  step1Q2Month: (state) => state.step1Q2Month,
  step1Q2Date: (state) => state.step1Q2Date,

  /* ラジオボタンのオプション(選択肢)をstateから取得 */
  step1Options: (state) => state.step1Options,
};

const mutations = {
  /* 質問の値をstateに代入 */
  updateStep1Q1Value(state, value) {
    state.step1Q1Value = value;
  },
  updateStep1Q2Year(state, value) {
    state.step1Q1Year = value;
  },
  updateStep1Q2Month(state, value) {
    state.step1Q1Month = value;
  },
  updateStep1Q2Date(state, value) {
    state.step1Q1Date = value;
  },
};

export default {
  state,
  getters,
  mutations,
};
