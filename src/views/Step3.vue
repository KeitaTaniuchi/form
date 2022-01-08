<template>
  <QuestionBorder
    :id_number="idNumber"
    :question_detail="questionDetail"
    :step_number="stepNumber"
  >
    <section>
      <p>インプットを作成する</p>
      <Btn
        label="前に戻る"
        href="/STEP2"
        @click="() => $router.push('/STEP2')"
      />
      <Btn
        label="次に進む"
        href="/STEP3"
        @click="() => $router.push('/STEP3')"
      />
    </section>
  </QuestionBorder>
</template>

<style scoped>
</style>

<script>
import Btn from "../components/Btn.vue";
import QuestionBorder from "../components/QuestionBorder.vue";
export default {
  name: "step3",
  components: { Btn, QuestionBorder },
  data() {
    return {
      idNumber: "step3",
      questionDetail: "-ご相談内容-",
      stepNumber: "STEP3",
    };
  },
};
</script>