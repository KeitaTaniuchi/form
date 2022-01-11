<template>
  <div>
    <QuestionContainer
      id_number="step2"
      question_detail="以下にお答えください"
      step_number="STEP2"
    >
      <section>
        <div>
          <p class="text-primary">現在、生命保険に加入されていますか？</p>
          <RadioBtn v-model="q1CheckFlg" :options="options"></RadioBtn>
        </div>

        <div class="mt-5" v-show="q1CheckFlg">
          <p class="text-primary">
            現在、入院中ですか？
            または,最近3ヶ月以内に医師の診察・検査の結果、入院・手術を勧められたことはありますか？
          </p>
          <RadioBtn v-model="q2CheckFlg" :options="options"></RadioBtn>
        </div>

        <div class="mt-5" v-show="q2CheckFlg">
          <p class="text-primary">
            過去5年以内に病気や怪我で手術を受けたこと、または継続して7日以上の入院をしたことがありますか？
          </p>
          <RadioBtn :options="options"></RadioBtn>
        </div>
      </section>
    </QuestionContainer>

    <div class="text-center">
      <BackToPrevBtn :step_number="prevStepNumber" />
      <GoNextBtn :step_number="nextStepNumber" />
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
          label: "はい",
          value: "1",
        },
        {
          label: "いいえ",
          value: "2",
        },
      ],
    };
  },
};
</script>