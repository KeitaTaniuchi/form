<template>
  <div id="step2">
    <h1>STEP2</h1>
    <p>以下にお答えください</p>

    <div id="question-container">
      <p>現在、生命保険に加入されていますか？</p>
      <RadioBtn v-model="q1CheckFlg" :name="step2Q1" :options="options"></RadioBtn>
    </div>

    <div id="question-container" v-show="q1CheckFlg">
      <p>
        現在、入院中ですか？
        または,最近3ヶ月以内に医師の診察・検査の結果、入院・手術を勧められたことはありますか？
      </p>
      <RadioBtn v-model="q2CheckFlg" :name="step2Q2" :options="options"></RadioBtn>
    </div>
    
    <div id="question-container" v-show="q2CheckFlg">
      <p>
        過去5年以内に病気や怪我で手術を受けたこと、または継続して7日以上の入院をしたことがありますか？
      </p>
      <RadioBtn :name="step2Q3" :options="options"></RadioBtn>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
import RadioBtn from "../components/RadioBtn.vue";
export default {
  name: "step2",
  components: { RadioBtn },
  data() {
    return {
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
