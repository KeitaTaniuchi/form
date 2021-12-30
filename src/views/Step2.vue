<template>
  <div class="STEP2">
    <h1>STEP2</h1>
    <p>以下にお答えください</p>

    <p>現在、生命保険に加入されていますか？</p>
    <YesNoBtn />
    <div id="q2" v-show="q2CheckFlg">
      <p>
        現在、入院中ですか？
        または,最近3ヶ月以内に医師の診察・検査の結果、入院・手術を勧められたことはありますか？
      </p>
      <YesNoBtn />
    </div>
    <div id="q3" v-show="q3CheckFlg">
      <p>
        過去5年以内に病気や怪我で手術を受けたこと、または継続して7日以上の入院をしたことがありますか？
      </p>
      <YesNoBtn />
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
import YesNoBtn from "../components/YesNoBtn.vue";
export default {
  data() {
    return {
      q2CheckFlg: false,
      q3CheckFlg: false,
    };
  },
  components: { YesNoBtn },
};
</script>
