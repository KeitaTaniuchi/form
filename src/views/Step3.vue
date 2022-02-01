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
            placeholder="ご相談内容があれば、こちらに入力してください"
            :value="step3Q1Value"
            @update="updateStep3Q1Value"
          ></b-form-textarea>
        </b-form-group>
      </section>
    </QuestionContainer>

    <div class="mt-3 text-center">
      <b-button class="mx-2" b-button variant="primary" @click="backToPrevPage"
        >前に戻る >
      </b-button>
      <b-button class="mx-2" b-button variant="primary" @click="goNextPage"
        >次に進む >
      </b-button>
    </div>
  </div>
</template>

<script>
import QuestionContainer from "../components/QuestionContainer.vue";
import questionLabels from "../utilities/question-labels";
import screenTransitionBtn from "../utilities/screen-transition-btn";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "step3",
  components: { QuestionContainer },
  data() {
    return {
      step3Q1Label: "",
    };
  },
  mounted() {
    this.step3Q1Label = questionLabels.questionLabels.step3.q1;
  },
  computed: {
    ...mapGetters("step3", ["step3Q1Value"]),
  },
  methods: {
    ...mapMutations("step3", ["updateStep3Q1Value"]),
    goNextPage() {
      const nextPagePath = screenTransitionBtn.getNextPagePath(
        this.$route.path
      );
      this.$router.push(nextPagePath);
    },
    backToPrevPage() {
      const prevPagePath = screenTransitionBtn.getPrevPagePath(
        this.$route.path
      );
      this.$router.push(prevPagePath);
    },
  },
};
</script>