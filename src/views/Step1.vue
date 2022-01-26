<template>
  <div>
    <QuestionContainer
      idNumber="step1"
      questionDetail="お客様の情報を入力してください"
      stepNumber="STEP1"
    >
      <section>
        <b-form-group :label="step1Q1Label">
          <b-form-radio-group
            :options="step1Options"
            @input="updateStep1Q1Value"
          ></b-form-radio-group>
        </b-form-group>

        <b-form-group class="mt-5" :label="step1Q2Label">
          <b-form-select
            v-model="step1Q2Year"
            :options="yearsArr"
            @input="updateStep1Q2Year"
          ></b-form-select>

          <b-form-select
            class="my-3"
            v-model="step1Q2Month"
            :options="monthsArr"
            @input="updateStep1Q2Month"
          ></b-form-select>

          <b-form-select
            v-model="step1Q2Date"
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
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "step1",
  components: { GoNextBtn, QuestionContainer },
  data() {
    return {
      /* セレクトボックスのオプション(選択肢) */
      yearsArr: [],
      monthsArr: [],
      datesArr: [],

      /* routerのパス */
      nextStepNumber: "STEP2",
    };
  },
  mounted() {
    /* セレクトボックスのオプション(選択肢)作成用関数をdefinitionから取得 */
    this.yearsArr = definition.createYears();
    this.monthsArr = definition.createMonths();
    this.datesArr = definition.createDates(this.yearValue, this.monthValue);
  },
  computed: {
    ...mapGetters("step1", [
      /* 質問のラベルをストアのstateから取得 */
      "step1Q1Label",
      "step1Q2Label",

      /* 年・月・日の値をストアのstateから取得 */
      "step1Q2Year",
      "step1Q2Month",
      "step1Q2Date",

      /* ラジオボタンのオプション(選択肢)をストアのstateから取得 */
      "step1Options",
    ]),
  },
  methods: {
    ...mapMutations("step1", [
      /* 質問の値をストアのstateに代入 */
      "updateStep1Q1Value",
      "updateStep1Q2Year",
      "updateStep1Q2Month",
      "updateStep1Q2Date",
    ]),
  },

  /* 年と月変更時に、datesArrを再作成
  現在選択中の日が変更後の月に存在しない場合、dateにnullを代入*/

  /* watch: {
    step1Q2Year() {
      this.stepQ2Date = definition.createDates(
        this.step1Q2Year,
        this.step1Q2Month
      );
      if (this.stepQ2Date >= this.datesArr.length) this.stepQ2Date = null;
    },
    step1Q2Month() {
      this.stepQ2Date = definition.createDates(
        this.step1Q2Year,
        this.step1Q2Month
      );
      if (this.stepQ2Date >= this.datesArr.length) this.stepQ2Date = null;
    },
  }, */
};
</script>