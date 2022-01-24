<template>
  <div>
    <QuestionContainer
      idNumber="step2"
      questionDetail="以下にお答えください"
      stepNumber="STEP2"
    >
      <section>
        <b-form-group :label="q1Label">
          <b-form-radio-group
            v-model="q2Show"
            :options="options"
            @input="updateStep2Q1Value"
          ></b-form-radio-group>
        </b-form-group>

        <b-form-group class="mt-5" v-show="q2Show" :label="q2Label">
          <b-form-radio-group
            v-model="q3Show"
            :options="options"
            @input="updateStep2Q2Value"
          ></b-form-radio-group>
        </b-form-group>

        <b-form-group class="mt-5" v-show="q3Show" :label="q3Label">
          <b-form-radio-group
            :options="options"
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
export default {
  name: "step2",
  components: { BackToPrevBtn, GoNextBtn, QuestionContainer },
  data() {
    return {
      /* Q2とQ3をv-showで表示 */
      q2Show: false,
      q3Show: false,

      /* 質問のラベル */
      q1Label: "",
      q2Label: "",
      q3Label: "",

      /* ラジオボタンのオプション(選択肢) */
      options: [],

      /* routerのパス */
      prevStepNumber: "",
      nextStepNumber: "STEP3",
    };
  },
  mounted() {
    /* 質問のラベルをストアのstateから取得 */
    this.q1Label = this.$store.getters.step2Q1Label;
    this.q2Label = this.$store.getters.step2Q2Label;
    this.q3Label = this.$store.getters.step2Q3Label;

    /* ラジオボタンのオプション(選択肢)をストアのstateから取得 */
    this.options = this.$store.getters.step2Options;
  },
  methods: {
    /* 質問の値をストアのstateに代入 */
    updateStep2Q1Value(e) {
      this.$store.commit("updateStep2Q1Value", e);
    },
    updateStep2Q2Value(e) {
      this.$store.commit("updateStep2Q2Value", e);
    },
    updateStep2Q3Value(e) {
      this.$store.commit("updateStep2Q3Value", e);
    },
  },
};
</script>