<template>
  <div>
    <QuestionContainer
      idNumber="step3"
      questionDetail="ご相談内容をご記入ください"
      stepNumber="STEP3"
    >
      <section>
        <b-form-group label="-ご相談内容-">
          <b-form-textarea
            rows="10"
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