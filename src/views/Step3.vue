<template>
  <div>
    <QuestionContainer
      idNumber="step3"
      questionDetail="ご相談内容をご記入ください"
      stepNumber="STEP3"
    >
      <section>
        <b-form-group :label="step3Q1Label">
          <b-form-textarea
            rows="15"
            :value="step3Q1Value"
            @update="updateStep3Q1Value"
          ></b-form-textarea>
        </b-form-group>
      </section>
    </QuestionContainer>

    <div class="text-center">
      <BackToPrevBtn />
      <GoNextBtn />
    </div>
  </div>
</template>

<script>
import BackToPrevBtn from "../components/BackToPrevBtn.vue";
import GoNextBtn from "../components/GoNextBtn.vue";
import QuestionContainer from "../components/QuestionContainer.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "step3",
  components: { BackToPrevBtn, GoNextBtn, QuestionContainer },
  computed: {
    ...mapGetters("step3", [
      /* 質問のラベルをストアのstateから取得 */
      "step3Q1Label",

      /* 質問の値をストアのstateから取得 */
      "step3Q1Value",
    ]),
  },
  methods: {
    ...mapMutations("step3", [
      /* 質問の値をストアのstateに代入 */
      "updateStep3Q1Value",
    ]),
  },
};
</script>