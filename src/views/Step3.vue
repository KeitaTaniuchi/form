<template>
  <b-container class="mt-5 border border-info rounded">
    <div id="step3">
      <p>STEP3</p>
      <p>-ご相談内容 -</p>

      <Btn
        label="前に戻る"
        href="/STEP2"
        @click="() => $router.push('/STEP2')"
      />
      <Btn
        label="次に進む"
        href="/STEP3"
        @click="() => $router.push('/STEP3')"
      />
    </div>
  </b-container>
</template>

<style scoped>
</style>

<script>
import Btn from "../components/Btn.vue";
export default {
  name: "step3",
  components: { Btn },
};
</script>