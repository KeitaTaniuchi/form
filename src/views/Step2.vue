<template>
  <div>
    <QuestionContainer
      idNumber="step2"
      questionDetail="以下にお答えください"
      stepNumber="STEP2"
    >
      <section>
        <RadioBtn
          v-model="q1CheckFlg"
          label="現在、生命保険に加入されていますか？"
          :options="options"
        />
        <RadioBtn
          class="mt-5"
          v-show="q1CheckFlg"
          v-model="q2CheckFlg"
          label="現在、入院中ですか？
            または,最近3ヶ月以内に医師の診察・検査の結果、入院・手術を勧められたことはありますか？"
          :options="options"
        />
        <RadioBtn
          class="mt-5"
          v-show="q2CheckFlg"
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
      q1CheckFlg: false,
      q2CheckFlg: false,
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
};
</script>