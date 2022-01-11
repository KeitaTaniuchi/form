<template>
  <button
    type="button"
    class="mt-3 mx-3 btn btn-primary"
    @click="() => $router.push(`/${step_number}`)"
  >
    次に進む >
  </button>
</template>

<script>
export default {
  props: {
    step_number: {
      type: String,
      required: true,
    },
  },
};
</script>