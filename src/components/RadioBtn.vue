<template>
  <fieldset>
    <template v-for="(option, index) in options">
      <label :key="index">
        <input
          type="radio"
          :value="option.value"
          :name="name"
          @change="updateValue"
        />{{ option.label }}
      </label>
    </template>
  </fieldset>
</template>

<style scoped>
fieldset {
  border: none;
}
</style>

<script>
export default {
  props: {
    options: { type: Array, required: true },
    name: { type: String, required: true },
  },
  methods: {
    updateValue: function (event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>