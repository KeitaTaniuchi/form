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
            :value="step1Q1Value"
            :options="step1Options"
            @input="updateStep1Q1Value"
          ></b-form-radio-group>
        </b-form-group>

        <b-form-group class="mt-5" :label="step1Q2Label">
          <b-form-select
            :value="step1Q2Year"
            :options="step1YearsArr"
            @input="updateStep1Q2Year"
          ></b-form-select>

          <b-form-select
            class="my-3"
            :value="step1Q2Month"
            :options="step1MonthsArr"
            @input="updateStep1Q2Month"
          ></b-form-select>

          <b-form-select
            :value="step1Q2Date"
            :options="step1DatesArr"
            @input="updateStep1Q2Date"
          ></b-form-select>
        </b-form-group>
      </section>
    </QuestionContainer>

    <div class="text-center">
      <GoNextBtn />
    </div>
  </div>
</template>

<script>
import GoNextBtn from "../components/GoNextBtn.vue";
import QuestionContainer from "../components/QuestionContainer.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "step1",
  components: { GoNextBtn, QuestionContainer },
  computed: {
    ...mapGetters("step1", [
      /* 質問のラベルをストアのstateから取得 */
      "step1Q1Label",
      "step1Q2Label",

      /* 質問の値をストアのstateから取得 */
      "step1Q1Value",
      "step1Q2Year",
      "step1Q2Month",
      "step1Q2Date",

      /* ラジオボタンのオプション(選択肢)をストアのstateから取得 */
      "step1Options",

      /* セレクトボックスのオプション(選択肢)をストアのstateから取得 */
      "step1YearsArr",
      "step1MonthsArr",
      "step1DatesArr",
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
};
</script>