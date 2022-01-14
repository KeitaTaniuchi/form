<template>
  <b-form-radio-group
    :options="options"
    @input="updateCheckFlg"
  ></b-form-radio-group>
</template>

<script>
export default {
  props: {
    options: { type: Array, required: true },
  },
  methods: {
    updateCheckFlg: function (event) {
      this.$emit("input", event);
    },
  },
};
</script>