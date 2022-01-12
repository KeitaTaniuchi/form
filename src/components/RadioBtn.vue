<template>
  <b-form-radio-group
    class="mx-1"
    :options="options"
    @change="updateCheckFlg"
  ></b-form-radio-group>
</template>

<script>
export default {
  props: {
    options: { type: Array, required: true },
  },
  methods: {
    updateCheckFlg: function (event) {
      this.$emit("change", event.target.checked);
    },
  },
};
</script>