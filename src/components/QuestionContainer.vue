<template>
  <b-container
    fluid
    class="pb-4 mt-5 border border-info rounded"
    style="width: 70%"
  >
    <div :id="idNumber">
      <p
        class="
          py-3
          mb-4
          text-center
          bg-info bg-opacity-25
          border-bottom border-info
          rounded
          position-relative
        "
      >
        {{ questionDetail }}
        <span
          class="
            px-2
            text-center text-light
            bg-primary bg-opacity-75
            rounded
            position-absolute
            top-0
            start-0
          "
          >{{ stepNumber }}</span
        >
      </p>
      <slot></slot>
    </div>
  </b-container>
</template>

<style scoped>
p[class*="position-relative"] {
  margin: 0 -15px;
}
</style>

<script>
export default {
  props: {
    idNumber: { type: String, required: true },
    questionDetail: { type: String, required: true },
    stepNumber: { type: String, required: true },
  },
};
</script>