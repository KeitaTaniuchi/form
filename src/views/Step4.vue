<template>
  <div>
    <QuestionContainer
      idNumber="step4"
      questionDetail="以下の内容をご確認ください"
      stepNumber="STEP4"
    >
      <section>
          <p>テスト</p>
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
  name: "step4",
  components: { BackToPrevBtn, GoNextBtn, QuestionContainer },
  data() {
    return {
      prevStepNumber: "STEP3",
      nextStepNumber: "",
    };
  },
};
</script>
