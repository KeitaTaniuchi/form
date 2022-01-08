<template>
  <b-container class="mt-5 border border-info rounded" style="width: 70%">
    <div :id="id_number">
      <p
        class="
          p-2
          text-center
          bg-info bg-opacity-25
          border-bottom border-info
          rounded
          position-relative
        "
      >
        {{ question_detail }}
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
          >{{ step_number }}</span
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
    id_number: { type: String, required: true },
    question_detail: { type: String, required: true },
    step_number: { type: String, required: true },
  },
};
</script>