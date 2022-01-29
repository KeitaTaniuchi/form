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
            @blur="$v.step1Q1Value.$touch()"
          ></b-form-radio-group>
          <p class="mt-1 text-danger" v-show="$v.step1Q1Value.$error">
            性別を選択してください
          </p>
        </b-form-group>

        <b-form-group class="mt-5" :label="step1Q2Label">
          <b-form-select
            :value="step1Q2Year"
            :options="step1YearsArr"
            @input="updateStep1Q2Year"
            @blur="$v.step1Q2Year.$touch()"
          ></b-form-select>
          <p class="mt-1 text-danger" v-show="$v.step1Q2Year.$error">
            年を選択してください
          </p>

          <b-form-select
            class="mt-3"
            :value="step1Q2Month"
            :options="step1MonthsArr"
            @input="updateStep1Q2Month"
            @blur="$v.step1Q2Month.$touch()"
          ></b-form-select>
          <p class="mt-1 text-danger" v-show="$v.step1Q2Month.$error">
            月を選択してください
          </p>

          <b-form-select
            class="mt-3"
            :value="step1Q2Date"
            :options="step1DatesArr"
            @input="updateStep1Q2Date"
            @blur="$v.step1Q2Date.$touch()"
          ></b-form-select>
          <p class="mt-2 text-danger" v-show="$v.step1Q2Date.$error">
            日を選択してください
          </p>
        </b-form-group>
      </section>
    </QuestionContainer>

    <div class="text-center">
      <GoNextBtn @click="validateTest" />
      <button @click="validateTest">validateテスト</button>
    </div>
  </div>
</template>

<script>
import GoNextBtn from "../components/GoNextBtn.vue";
import QuestionContainer from "../components/QuestionContainer.vue";
import { mapGetters, mapMutations } from "vuex";
import { required } from "vuelidate/lib/validators";
export default {
  name: "step1",
  components: { GoNextBtn, QuestionContainer },
  computed: {
    ...mapGetters("step1", [
      /* 質問のラベルをストアのstateから取得 */
      "step1Q1Label",
      "step1Q2Label",

      /* 質問の値をストアのstateから取得 */
      "step1Q1Value",
      "step1Q2Year",
      "step1Q2Month",
      "step1Q2Date",

      /* ラジオボタンのオプション(選択肢)をストアのstateから取得 */
      "step1Options",

      /* セレクトボックスのオプション(選択肢)をストアのstateから取得 */
      "step1YearsArr",
      "step1MonthsArr",
      "step1DatesArr",
    ]),
  },
  methods: {
    ...mapMutations("step1", [
      /* 質問の値をストアのstateに代入 */
      "updateStep1Q1Value",
      "updateStep1Q2Year",
      "updateStep1Q2Month",
      "updateStep1Q2Date",
    ]),
    validateTest() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log("バリデーションエラー");
      } else {
        // データ登録の処理をここに記述
        console.log("submit");
      }
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