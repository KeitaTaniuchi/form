<template>
  <button
    type="button"
    class="mt-3 mx-3 btn btn-primary"
    @click="() => $router.push(`/${stepNumber}`)"
  >
    次に進む >
  </button>
</template>

<script>
export default {
  props: {
    stepNumber: {
      type: String,
      required: true,
    },
  },
};
</script>