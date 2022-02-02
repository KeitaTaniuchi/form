<template>
  <div>
    <QuestionContainer
      idNumber="step1"
      questionDetail="お客様の情報を入力してください"
      stepNumber="STEP1"
    >
      <section>
        <b-form-group :label="step1Q1Label">
          <b-form-radio-group
            :checked="step1Q1Value"
            :options="step1Options"
            @input="updateStep1Q1Value"
          ></b-form-radio-group>
          <p class="mt-2 text-danger" v-show="$v.step1Q1Value.$error">
            性別を選択してください
          </p>
        </b-form-group>

        <b-form-group class="mt-5" :label="step1Q2Label">
          <b-form-select
            :value="step1Q2Year"
            :options="step1YearsArr"
            @input="updateStep1Q2Year"
          ></b-form-select>
          <p class="mt-2 text-danger" v-show="$v.step1Q2Year.$error">
            年を選択してください
          </p>

          <b-form-select
            class="mt-3"
            :value="step1Q2Month"
            :options="step1MonthsArr"
            @input="updateStep1Q2Month"
          ></b-form-select>
          <p class="mt-2 text-danger" v-show="$v.step1Q2Month.$error">
            月を選択してください
          </p>

          <b-form-select
            class="mt-3"
            :value="step1Q2Date"
            :options="step1DatesArr"
            @input="updateStep1Q2Date"
          ></b-form-select>
          <p class="mt-2 text-danger" v-show="$v.step1Q2Date.$error">
            日を選択してください
          </p>
        </b-form-group>
      </section>
    </QuestionContainer>

    <div class="mt-3 text-center">
      <b-button b-button variant="primary" @click="goNextPage"
        >次に進む >
      </b-button>
    </div>
  </div>
</template>

<script>
import QuestionContainer from "../components/QuestionContainer.vue";
import screenTransitionBtn from "../utilities/screen-transition-btn";
import questionLabels from "../utilities/question-labels";
import definition from "../utilities/definition";
import { mapGetters, mapMutations } from "vuex";
import { required } from "vuelidate/lib/validators";
export default {
  name: "step1",
  components: { QuestionContainer },
  data() {
    return {
      step1Q1Label: "",
      step1Q2Label: "",

      /* ラジオボタンのオプション(選択肢) */
      step1Options: [
        {
          text: "男性",
          value: "男性",
        },
        {
          text: "女性",
          value: "女性",
        },
      ],

      /* セレクトボックスのオプション(選択肢) */
      step1YearsArr: [],
      step1MonthsArr: [],
      step1DatesArr: [],
    };
  },
  mounted() {
    this.step1Q1Label = questionLabels.questionLabels.step1.q1;
    this.step1Q2Label = questionLabels.questionLabels.step1.q2;
    this.step1YearsArr = definition.createYears();
    this.step1MonthsArr = definition.createMonths();
    this.step1DatesArr = definition.createDates();
  },
  computed: {
    ...mapGetters("step1", [
      "step1Q1Value",
      "step1Q2Year",
      "step1Q2Month",
      "step1Q2Date",
    ]),
  },
  methods: {
    ...mapMutations("step1", [
      "updateStep1Q1Value",
      "updateStep1Q2Year",
      "updateStep1Q2Month",
      "updateStep1Q2Date",
    ]),
    goNextPage() {
      this.$v.$touch();
      /* 全ての質問に回答していた場合のみ次のページに進む */
      if (!this.$v.$invalid) {
        const nextPagePath = screenTransitionBtn.getNextPagePath(
          this.$route.path
        );
        this.$router.push(nextPagePath);
      }
    },
  },
  watch: {
    step1Q2Year: function () {
      this.step1DatesArr = definition.createDates(
        this.step1Q2Year,
        this.step1Q2Month
      );
      /* 現在選択中の日が変更後の月に存在しない場合、ストアのstateにnullを代入する関数を呼び出す*/
      if (this.step1Q2Date >= this.step1DatesArr.length)
        this.$store.commit("step1/assignNullStep1Q2Date");
    },
    step1Q2Month: function () {
      this.step1DatesArr = definition.createDates(
        this.step1Q2Year,
        this.step1Q2Month
      );
      /* 現在選択中の日が変更後の月に存在しない場合、ストアのstateにnullを代入する関数を呼び出す*/
      if (this.step1Q2Date >= this.step1DatesArr.length)
        this.$store.commit("step1/assignNullStep1Q2Date");
    },
  },
  validations: {
    step1Q1Value: { required },
    step1Q2Year: { required },
    step1Q2Month: { required },
    step1Q2Date: { required },
  },
};
</script>