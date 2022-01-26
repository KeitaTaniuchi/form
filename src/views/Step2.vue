<template>
  <div>
    <QuestionContainer
      idNumber="step2"
      questionDetail="以下にお答えください"
      stepNumber="STEP2"
    >
      <section>
        <b-form-group :label="step2Q1Label">
          <b-form-radio-group
            :value="step2Q1Value"
            :options="step2Options"
            @input="updateStep2Q1Value"
          ></b-form-radio-group>
        </b-form-group>

        <b-form-group class="mt-5" v-show="step2Q1Value" :label="step2Q2Label">
          <b-form-radio-group
            :value="step2Q2Value"
            :options="step2Options"
            @input="updateStep2Q2Value"
          ></b-form-radio-group>
        </b-form-group>

        <b-form-group class="mt-5" v-show="step2Q2Value" :label="step2Q3Label">
          <b-form-radio-group
            :value="step2Q3Value"
            :options="step2Options"
            @input="updateStep2Q3Value"
          ></b-form-radio-group>
        </b-form-group>
      </section>
    </QuestionContainer>

    <div class="text-center">
      <BackToPrevBtn :stepNumber="prevStepNumber" />
      <GoNextBtn :stepNumber="nextStepNumber" />
    </div>
  </div>
</template>

<script>
import BackToPrevBtn from "../components/BackToPrevBtn.vue";
import GoNextBtn from "../components/GoNextBtn.vue";
import QuestionContainer from "../components/QuestionContainer.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "step2",
  components: { BackToPrevBtn, GoNextBtn, QuestionContainer },
  data() {
    return {
      /* routerのパス */
      prevStepNumber: "",
      nextStepNumber: "STEP3",
    };
  },
  computed: {
    ...mapGetters("step2", [
      /* 質問のラベルをストアのstateから取得 */
      "step2Q1Label",
      "step2Q2Label",
      "step2Q3Label",

      /* 質問の値をストアのstateから取得 */
      "step2Q1Value",
      "step2Q2Value",
      "step2Q3Value",

      /* ラジオボタンのオプション(選択肢)をストアのstateから取得 */
      "step2Options",
    ]),
  },
  methods: {
    ...mapMutations("step2", [
      /* 質問の値をストアのstateに代入 */
      "updateStep2Q1Value",
      "updateStep2Q2Value",
      "updateStep2Q3Value",
    ]),
  },
};
</script>