<template>
  <div>
    <QuestionContainer
      idNumber="step2"
      questionDetail="以下にお答えください"
      stepNumber="STEP2"
    >
      <section>
        <RadioBtn
          v-model="step2Q1"
          label="現在、生命保険に加入されていますか？"
          :options="options"
        />
      <p v-show="step2Q1"> テスト</p>
        <RadioBtn
          class="mt-5"
          v-show="step2Q1"
          v-model="step2Q2"
          label="現在、入院中ですか？ï
            または,最近3ヶ月以内に医師の診察・検査の結果、入院・手術を勧められたことはありますか？"
          :options="options"
        />
        <RadioBtn
          class="mt-5"
          v-show="step2Q2"
          v-model="step2Q3"
          label="過去5年以内に病気や怪我で手術を受けたこと、または継続して7日以上の入院をしたことがありますか？"
          :options="options"
        />
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
import RadioBtn from "../components/RadioBtn.vue";
export default {
  name: "step2",
  components: { BackToPrevBtn, GoNextBtn, QuestionContainer, RadioBtn },
  data() {
    return {
      /* step2Q1: false, */
      step2Q2: false,
      step2Q3: false,
      prevStepNumber: "",
      nextStepNumber: "STEP3",
      options: [
        {
          text: "はい",
          value: "1",
        },
        {
          text: "いいえ",
          value: "2",
        },
      ],
    };
  },
  mounted() {},
  computed: {
    step2Q1: {
      get() {
        return this.$store.state.step2Q1;
      },
      set(value) {
        this.$store.commit("updateStep2Q1", value);
      },
    },
  },
};
</script>