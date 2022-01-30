<template>
  <div>
    <QuestionContainer
      idNumber="step4"
      questionDetail="以下の内容をご確認ください"
      stepNumber="STEP4"
    >
      <section>
        <p>{{ step1Q1Label }}</p>
        <p>{{ step1Q1Value }}</p>

        <p>{{ step1Q2Label }}</p>
        <p>
          <span>{{ step1Q2Year }}年</span>
          <span class="mx-2">{{ step1Q2Month }}月</span>
          <span>{{ step1Q2Date }}日</span>
        </p>

        <p>{{ step2Q1Label }}</p>
        <p>{{ step2Q1Value }}</p>

        <p>{{ step2Q2Label }}</p>
        <p>{{ step2Q2Value }}</p>

        <p>{{ step2Q3Label }}</p>
        <p>{{ step2Q3Value }}</p>

        <p>{{ step3Q1Label }}</p>
        <p>{{ step3Q1Value }}</p>
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

<style scoped>
p:nth-of-type(odd) {
  color: rgba(0, 123, 255);
  margin: 30px 0 5px 0;
}
</style>

<script>
import QuestionContainer from "../components/QuestionContainer.vue";
import screenTransitionBtn from "../utilities/screen-transition-btn";
import { mapGetters } from "vuex";
export default {
  name: "step4",
  components: { QuestionContainer },
  computed: {
    /* 各STEPの質問のラベルと値をストアのstateから取得 */
    ...mapGetters("step1", [
      "step1Q1Label",
      "step1Q2Label",
      "step1Q1Value",
      "step1Q2Year",
      "step1Q2Month",
      "step1Q2Date",
    ]),
    ...mapGetters("step2", [
      "step2Q1Label",
      "step2Q2Label",
      "step2Q3Label",
      "step2Q1Value",
      "step2Q2Value",
      "step2Q3Value",
    ]),
    ...mapGetters("step3", ["step3Q1Label", "step3Q1Value"]),
  },
  methods: {
    /* 「次に進む」ボタンを押した際、次のページに進む関数 */
    goNextPage() {
      const nextPagePath = screenTransitionBtn.getNextPagePath(
        this.$route.path
      );
      this.$router.push(nextPagePath);
    },

    /* 「前に戻る」ボタンを押した際、前のページに戻る関数 */
    backToPrevPage() {
      const prevPagePath = screenTransitionBtn.getPrevPagePath(
        this.$route.path
      );
      this.$router.push(prevPagePath);
    },
  },
};
</script>
