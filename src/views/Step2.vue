<template>
  <QuestionBorder
    :id_number="idNumber"
    :question_detail="questionDetail"
    :step_number="stepNumber"
  >
    <section>
      <div>
        <p class="mt-3">現在、生命保険に加入されていますか？</p>
        <RadioBtn
          v-model="q1CheckFlg"
          :name="step2Q1"
          :options="options"
        ></RadioBtn>
      </div>

      <div class="mt-4" v-show="q1CheckFlg">
        <p>
          現在、入院中ですか？
          または,最近3ヶ月以内に医師の診察・検査の結果、入院・手術を勧められたことはありますか？
        </p>
        <RadioBtn
          v-model="q2CheckFlg"
          :name="step2Q2"
          :options="options"
        ></RadioBtn>
      </div>

      <div class="mt-4" v-show="q2CheckFlg">
        <p>
          過去5年以内に病気や怪我で手術を受けたこと、または継続して7日以上の入院をしたことがありますか？
        </p>
        <RadioBtn :name="step2Q3" :options="options"></RadioBtn>
      </div>

      <Btn label="前に戻る" href="/" @click="() => $router.push('/')" />
      <Btn
        label="次に進む"
        href="/STEP3"
        @click="() => $router.push('/STEP3')"
      />
    </section>
  </QuestionBorder>
</template>

<script>
import RadioBtn from "../components/RadioBtn.vue";
import QuestionBorder from "../components/QuestionBorder.vue";
import Btn from "../components/Btn.vue";
export default {
  name: "step2",
  components: { RadioBtn, QuestionBorder, Btn },
  data() {
    return {
      idNumber: "step2",
      questionDetail: "以下にお答えください",
      stepNumber: "STEP2",
      step2Q1: "step2-q1",
      step2Q2: "step2-q2",
      step2Q3: "step2-q3",
      q1CheckFlg: false,
      q2CheckFlg: false,
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