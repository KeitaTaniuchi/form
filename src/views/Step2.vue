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
            @input="updateQ1Value"
          ></b-form-radio-group>
        </b-form-group>

        <b-form-group class="mt-5" v-show="q2Show" :label="q2Label">
          <b-form-radio-group
            v-model="q3Show"
            :options="options"
            @input="updateQ2Value"
          ></b-form-radio-group>
        </b-form-group>

        <b-form-group class="mt-5" v-show="q3Show" :label="q3Label">
          <b-form-radio-group
            :options="options"
            @input="updateQ3Value"
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
    this.q1Label = this.$store.getters["step2/q1Label"];
    this.q2Label = this.$store.getters["step2/q2Label"];
    this.q3Label = this.$store.getters["step2/q3Label"];

    /* ラジオボタンのオプション(選択肢)をストアのstateから取得 */
    this.options = this.$store.getters["step2/options"];
  },
  methods: {
    /* 質問の値をストアのstateに代入 */
    updateQ1Value(e) {
      this.$store.commit("step2/updateQ1Value", e);
    },
    updateQ2Value(e) {
      this.$store.commit("step2/updateQ2Value", e);
    },
    updateQ3Value(e) {
      this.$store.commit("step2/updateQ3Value", e);
    },
  },
};
</script>