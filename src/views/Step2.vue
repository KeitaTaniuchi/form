<template>
  <div>
    <QuestionContainer
      idNumber="step2"
      questionDetail="以下にお答えください"
      stepNumber="STEP2"
    >
      <section>
        <b-form-group :label="step2Q1Label">
          <b-form-radio-group
            :checked="step2Q1Value"
            :options="step2Options"
            @input="updateStep2Q1Value"
          ></b-form-radio-group>
          <p class="mt-2 text-danger" v-show="$v.step2Q1Value.$error">
            どちらかを選択してください
          </p>
        </b-form-group>

        <b-form-group class="mt-5" v-show="step2Q1Value" :label="step2Q2Label">
          <b-form-radio-group
            :checked="step2Q2Value"
            :options="step2Options"
            @input="updateStep2Q2Value"
          ></b-form-radio-group>
          <p class="mt-2 text-danger" v-show="$v.step2Q2Value.$error">
            どちらかを選択してください
          </p>
        </b-form-group>

        <b-form-group class="mt-5" v-show="step2Q2Value" :label="step2Q3Label">
          <b-form-radio-group
            :checked="step2Q3Value"
            :options="step2Options"
            @input="updateStep2Q3Value"
          ></b-form-radio-group>
          <p class="mt-2 text-danger" v-show="$v.step2Q3Value.$error">
            どちらかを選択してください
          </p>
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
import { required } from "vuelidate/lib/validators";
export default {
  name: "step2",
  components: { QuestionContainer },
  data() {
    return {
      step2Q1Label: "",
      step2Q2Label: "",
      step2Q3Label: "",

      /* ラジオボタンのオプション(選択肢) */
      step2Options: [
        {
          text: "はい",
          value: "はい",
        },
        {
          text: "いいえ",
          value: "いいえ",
        },
      ],
    };
  },
  mounted() {
    this.step2Q1Label = questionLabels.questionLabels.step2.q1;
    this.step2Q2Label = questionLabels.questionLabels.step2.q2;
    this.step2Q3Label = questionLabels.questionLabels.step2.q3;
  },
  computed: {
    ...mapGetters("step2", ["step2Q1Value", "step2Q2Value", "step2Q3Value"]),
  },
  methods: {
    ...mapMutations("step2", [
      "updateStep2Q1Value",
      "updateStep2Q2Value",
      "updateStep2Q3Value",
    ]),
    goNextPage() {
      this.$v.$touch();
      /* 全ての質問に回答していた場合のみ次のページに進む */
      if (!this.$v.$invalid) {
        const nextPagePath = screenTransitionBtn.getNextPagePath(
          this.$route.path
        );
        this.$router.push(nextPagePath);
      }
    },
    backToPrevPage() {
      const prevPagePath = screenTransitionBtn.getPrevPagePath(
        this.$route.path
      );
      this.$router.push(prevPagePath);
    },
  },
  validations: {
    step2Q1Value: { required },
    step2Q2Value: { required },
    step2Q3Value: { required },
  },
};
</script>