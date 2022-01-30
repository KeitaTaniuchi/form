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
import screenTransitionBtn from "../utilities/screen-transition-btn";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "step3",
  components: { QuestionContainer },
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