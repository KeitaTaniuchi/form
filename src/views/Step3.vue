<template>
  <div id="step3">
    <h1>STEP3</h1>
    <p>-ご相談内容 -</p>

    <Btn label="前に戻る" href="/STEP2" @click="() => $router.push('/STEP2')" />
    <Btn label="次に進む" href="/STEP3" @click="() => $router.push('/STEP3')" />
  </div>
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