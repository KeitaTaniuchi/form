<template>
  <div>
    <QuestionContainer
      id_number="step3"
      question_detail="ご相談内容をご記入ください"
      step_number="STEP3"
    >
      <section>
        <p class="text-primary">-ご相談内容-</p>
        
      </section>
    </QuestionContainer>

    <div class="text-center">
      <BackToPrevBtn :step_number="prevStepNumber" />
      <GoNextBtn :step_number="nextStepNumber" />
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
import BackToPrevBtn from "../components/BackToPrevBtn.vue";
import GoNextBtn from "../components/GoNextBtn.vue";
import QuestionContainer from "../components/QuestionContainer.vue";
export default {
  name: "step3",
  components: { BackToPrevBtn, GoNextBtn, QuestionContainer },
  data() {
    return {
      prevStepNumber: "STEP2",
      nextStepNumber: "",
    };
  },
};
</script>