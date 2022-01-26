"use strict";

import definition from "../../utilities/definition";

const state = {
  /* 質問のラベル */
  step1Q1Label: "-性別-",
  step1Q2Label: "-生年月日-",

  /* 質問の値 */
  step1Q1Value: "",
  step1Q2Year: null,
  step1Q2Month: null,
  step1Q2Date: null,

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

  /* セレクトボックスのオプション(選択肢) */
  step1YearsArr: definition.createYears(),
  step1MonthsArr: definition.createMonths(),
  step1DatesArr: definition.createDates(),
};

const getters = {
  /* 質問のラベルをstateから取得 */
  step1Q1Label: (state) => state.step1Q1Label,
  step1Q2Label: (state) => state.step1Q2Label,

  /* 質問の値をstateから取得 */
  step1Q1Value: (state) => state.step1Q1Value,
  step1Q2Year: (state) => state.step1Q2Year,
  step1Q2Month: (state) => state.step1Q2Month,
  step1Q2Date: (state) => state.step1Q2Date,

  /* ラジオボタンのオプション(選択肢)をstateから取得 */
  step1Options: (state) => state.step1Options,

  /* セレクトボックスのオプション(選択肢)をstateから取得 */
  step1YearsArr: (state) => state.step1YearsArr,
  step1MonthsArr: (state) => state.step1MonthsArr,
  step1DatesArr: (state) => state.step1DatesArr,
};

const mutations = {
  /* 質問の値をstateに代入 */
  updateStep1Q1Value(state, value) {
    state.step1Q1Value = value;
  },
  updateStep1Q2Year(state, value) {
    updateStep1DatesArr(state, value, state.step1Q2Month);
    state.step1Q2Year = value;
  },
  updateStep1Q2Month(state, value) {
    updateStep1DatesArr(state, state.step1Q2Year, value);
    state.step1Q2Month = value;
  },
  updateStep1Q2Date(state, value) {
    state.step1Q2Date = value;
  },
};

const updateStep1DatesArr = (state, year, month) => {
  /* 年もしくは月変更時にstep1DatesArrを再作成 */
  if (year !== state.step1Q2Year || month !== state.step1Q2Month)
    state.step1DatesArr = definition.createDates(year, month);

  /* 現在選択中の日が変更後の月に存在しない場合、step1Q2Dateにnullを代入 */
  if (state.step1Q2Date >= state.step1DatesArr.length) state.step1Q2Date = null;
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
