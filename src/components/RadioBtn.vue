<template>
  <b-form-group>
    <b-form-radio-group
      :options="options"
      @input="updateCheckFlg"
    ></b-form-radio-group>
  </b-form-group>
</template>

<script>
export default {
  props: {
    options: { type: Array, required: true },
  },
  methods: {
    updateCheckFlg: function (e) {
      this.$emit("input", e);
    },
  },
};
</script>