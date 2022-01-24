<template>
  <div>
    <QuestionContainer
      idNumber="step3"
      questionDetail="ご相談内容をご記入ください"
      stepNumber="STEP3"
    >
      <section>
        <b-form-group :label="q1Label">
          <b-form-textarea
            rows="15"
            @update="updateStep3Q1Value"
          ></b-form-textarea>
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
  name: "step3",
  components: { BackToPrevBtn, GoNextBtn, QuestionContainer },
  data() {
    return {
      /* 質問のラベル */
      q1Label: "",

      /* routerのパス */
      prevStepNumber: "STEP2",
      nextStepNumber: "STEP4",
    };
  },
  mounted() {
    /* 質問のラベルをストアのstateから取得 */
    this.q1Label = this.$store.getters.step3Q1Label;
  },
  methods: {
    /* 質問の値をストアのstateに代入 */
    updateStep3Q1Value(e) {
      this.$store.commit("updateStep3Q1Value", e);
    },
  },
};
</script>