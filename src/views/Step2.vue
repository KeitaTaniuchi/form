<template>
  <b-container class="mt-5 border border-info rounded">
    <div id="step2">
      <p id="test" class="bg-info bg-opacity-25 border-bottom border-info">
        以下にお答えください
      </p>
      <p id="step-number">STEP2</p>

      <div id="question-container">
        <p>現在、生命保険に加入されていますか？</p>
        <RadioBtn
          v-model="q1CheckFlg"
          :name="step2Q1"
          :options="options"
        ></RadioBtn>
      </div>

      <div id="question-container" v-show="q1CheckFlg">
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

      <div id="question-container" v-show="q2CheckFlg">
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
    </div>
  </b-container>
</template>

<style scoped>
#test {
  font-size: 20px;
  margin: 0;

}

#step-number {
  font-size: 20px;
}
</style>

<script>
import RadioBtn from "../components/RadioBtn.vue";
import Btn from "../components/Btn.vue";
export default {
  name: "step2",
  components: { RadioBtn, Btn },
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
