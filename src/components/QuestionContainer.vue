<template>
  <b-container
    fluid
    class="pb-3 mt-5 border border-primary rounded"
    style="width: 70%"
  >
    <div :id="idNumber" class="position-relative">
      <span
        class="
          px-2
          text-center text-light
          bg-primary
          rounded
          position-absolute
          top-0
          start-0
        "
      >
        {{ stepNumber }}
      </span>
      <p class="py-3 mb-4 text-center border-bottom border-primary rounded">
        {{ questionDetail }}
      </p>
      <slot></slot>
    </div>
  </b-container>
</template>

<style scoped>
p[class*="rounded"],
span[class*="rounded"] {
  margin: 0 -15px;
}

span + p {
  background-color: rgba(0, 123, 255, 0.3);
  font-size: 20px;
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