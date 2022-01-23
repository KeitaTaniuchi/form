const state = {
  /* 各STEPのラジオボタンのラベル */
  step1Q1Label: "",
  step2Q1Label: "現在、生命保険に加入されていますか？",
  step2Q2Label: "現在、入院中ですか？ または,最近3ヶ月以内に医師の診察・検査の結果、入院・手術を勧められたことはありますか？",
  step2Q3Label: "過去5年以内に病気や怪我で手術を受けたこと、または継続して7日以上の入院をしたことがありますか？",

  /* 各STEPのラジオボタンの値 */
  step1Q1Value: false,
  step2Q1Value: false,
  step2Q2Value: false,
  step2Q3Value: false,

  /* 各STEPのラジオボタンのオプション(選択肢) */
  step2Options: [
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
  /* 各STEPのラジオボタンの値をstateから取得 */
  step2Q1Value: (state) => state.step2Q1Value,
  step2Q2Value: (state) => state.step2Q2Value,
  step2Q3Value: (state) => state.step2Q3Value,

  /* 各STEPのラジオボタンのラベルをstateから取得 */
  step2Q1Label: (state) => state.step2Q1Label,
  step2Q2Label: (state) => state.step2Q2Label,
  step2Q3Label: (state) => state.step2Q3Label,

  /* 各STEPのラジオボタンのオプション(選択肢)をstateから取得 */
  step2Options: (state) => state.step2Options,
};

const mutations = {
  updateStep2Q1Value(state, value) {
    state.step2Q1Value = value;
  },
};

export default {
  state,
  getters,
  mutations,
};
