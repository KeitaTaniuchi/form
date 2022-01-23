<template>
  <div>
    <QuestionContainer
      idNumber="step2"
      questionDetail="以下にお答えください"
      stepNumber="STEP2"
    >
      <section>
        <b-form-group :label="q1Label">
          <b-form-radio-group
            v-model="q1"
            :options="options"
            @input="updateData"
          ></b-form-radio-group>
        </b-form-group>

        <b-form-group class="mt-5" v-show="q1" :label="q2Label">
          <b-form-radio-group
            v-model="q2"
            :options="options"
            @input="updateData"
          ></b-form-radio-group>
        </b-form-group>

        <b-form-group class="mt-5" v-show="q2" :label="q3Label">
          <b-form-radio-group
            v-model="q3"
            :options="options"
            @input="updateData"
          ></b-form-radio-group>
        </b-form-group>
      </section>
    </QuestionContainer>

    <div class="text-center">
      <BackToPrevBtn :stepNumber="prevStepNumber" />
      <GoNextBtn :stepNumber="nextStepNumber" />
    </div>
  </div>
</template>

<script>
import BackToPrevBtn from "../components/BackToPrevBtn.vue";
import GoNextBtn from "../components/GoNextBtn.vue";
import QuestionContainer from "../components/QuestionContainer.vue";
export default {
  name: "step2",
  components: { BackToPrevBtn, GoNextBtn, QuestionContainer },
  data() {
    return {
      q1: "",
      q2: "",
      q3: "",
      options: "",
      prevStepNumber: "",
      nextStepNumber: "STEP3",
    };
  },
  mounted() {
    /* ラジオボタンのラベルをストアから取得 */
    this.q1Label = this.$store.getters.step2Q1Label;
    this.q2Label = this.$store.getters.step2Q2Label;
    this.q3Label = this.$store.getters.step2Q3Label;

    /* ラジオボタンのオプション(選択肢)をストアから取得 */
    this.options = this.$store.getters.step2Options;
  },
  methods: {
    updateData: function (event) {
      this.$emit("input", event);
    },
  },

  /*  computed: {
    q1: {
      set(event) {
        this.$store.commit("updateStep2Q1Value", event);
      },
      get() {
        return this.$store.getters.getStep2Q1Value;
      },
    },
  }, */
};
</script>