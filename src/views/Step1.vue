<template>
  <div>
    <QuestionContainer
      idNumber="step1"
      questionDetail="お客様の情報を入力してください"
      stepNumber="STEP1"
    >
      <section>
        <b-form-group :label="q1Label">
          <b-form-radio-group
            :options="options"
            @input="updateStep1Q1Value"
          ></b-form-radio-group>
        </b-form-group>

        <b-form-group class="mt-5" :label="q2Label">
          <b-form-select
            class="mb-3"
            v-model="yearValue"
            :options="yearsArr"
            @input="updateStep1Q2Year"
          ></b-form-select>

          <b-form-select
            class="mb-3"
            v-model="monthValue"
            :options="monthsArr"
            @input="updateStep1Q2Month"
          ></b-form-select>

          <b-form-select
            v-model="dateValue"
            :options="datesArr"
            @input="updateStep1Q2Date"
          ></b-form-select>
        </b-form-group>
      </section>
    </QuestionContainer>

    <div class="text-center">
      <GoNextBtn :stepNumber="nextStepNumber" />
    </div>
  </div>
</template>

<script>
import GoNextBtn from "../components/GoNextBtn.vue";
import QuestionContainer from "../components/QuestionContainer.vue";
import definition from "../utilities/definition";
export default {
  name: "step1",
  components: { GoNextBtn, QuestionContainer },
  data() {
    return {
      /* 質問のラベル */
      q1Label: "",
      q2Label: "",

      /* セレクトボックスの現在選択している値 */
      yearValue: null,
      monthValue: null,
      dateValue: null,

      /* セレクトボックスのオプション(選択肢) */
      yearsArr: [],
      monthsArr: [],
      datesArr: [],

      /* ラジオボタンのオプション(選択肢) */
      options: [],

      /* routerのパス */
      nextStepNumber: "STEP2",
    };
  },
  mounted() {
    /* 質問のラベルをストアのstateから取得 */
    this.q1Label = this.$store.getters.step1Q1Label;
    this.q2Label = this.$store.getters.step1Q2Label;

    /* ラジオボタンのオプション(選択肢)をストアのstateから取得 */
    this.options = this.$store.getters.step1Options;

    /* セレクトボックスのオプション(選択肢)作成用関数をdefinitionから取得 */
    this.yearsArr = definition.createYears();
    this.monthsArr = definition.createMonths();
    this.datesArr = definition.createDates(this.yearValue, this.monthValue);
  },
  methods: {
    /* 質問の値をストアのstateに代入 */
    updateStep1Q1Value(e) {
      this.$store.commit("updateStep1Q1Value", e);
    },
    updateStep1Q2Year(e) {
      this.$store.commit("updateStep1Q2Year", e);
    },
    updateStep1Q2Month(e) {
      this.$store.commit("updateStep1Q2Month", e);
    },
    updateStep1Q2Date(e) {
      this.$store.commit("updateStep1Q2Date", e);
    },
  },

  /* 年と月変更時に、datesArrを再作成
  現在選択中の日が変更後の月に存在しない場合、dateにnullを代入*/
  watch: {
    yearValue() {
      this.datesArr = definition.createDates(this.yearValue, this.monthValue);
      if (this.dateValue >= this.datesArr.length) this.dateValue = null;
    },
    monthValue() {
      this.datesArr = definition.createDates(this.yearValue, this.monthValue);
      if (this.dateValue >= this.datesArr.length) this.dateValue = null;
    },
  },
};
</script>