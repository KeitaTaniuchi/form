<template>
  <b-form-group :label="label">
    <b-form-radio-group
      :options="options"
      @input="updateCheckFlg"
    ></b-form-radio-group>
  </b-form-group>
</template>

<script>
export default {
  props: {
    label: { type: String, required: true },
    options: { type: Array, required: true },
  },
  methods: {
    updateCheckFlg: function (event) {
      this.$emit("input", event);
    },
  },
};
</script>