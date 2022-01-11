<template>
  <b-form-radio-group
    class="mx-1"
    :options="options"
    value-field="value"
    text-field="label"
    :value="value"
    @input="updateCheckFlg"
  ></b-form-radio-group>
</template>

<script>
export default {
  props: {
    options: { type: Array, required: true },
    value: { type: Boolean },
  },
  methods: {
    updateCheckFlg: function (event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>