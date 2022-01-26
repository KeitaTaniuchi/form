<template>
  <button
    type="button"
    class="mt-3 mx-3 btn btn-primary"
    @click="() => $router.push(path)"
  >
    前に戻る >
  </button>
</template>

<script>
export default {
  data() {
    return {
      path: "",
    };
  },
  mounted() {
    if (this.$route.path === "/") this.path = "/STEP4";
    else if (this.$route.path === "/STEP2") this.path = "/";
    else if (this.$route.path === "/STEP3") this.path = "/STEP2";
    else this.path = "/STEP3";
  },
};
</script>