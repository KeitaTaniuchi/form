<template>
  <div>
    <QuestionContainer
      idNumber="step1"
      questionDetail="お客様の情報を入力してください"
      stepNumber="STEP1"
    >
      <section>
        <RadioBtn label="-性別-" :options="options" />

        <b-form-group class="mt-5" label="-生年月日-">
          <b-form-select
            v-model="year"
            :options="yearsArr"
            class="mb-3"
          ></b-form-select>
          <b-form-select
            v-model="month"
            :options="monthsArr"
            class="mb-3"
          ></b-form-select>
          <b-form-select
            v-model="date" 
            :options="datesArr"
          ></b-form-select>
        </b-form-group>
      </section>
    </QuestionContainer>

    <div class="text-center">
      <GoNextBtn :stepNumber="nextStepNumber" />
    </div>
  </div>
</template>

<script>
import GoNextBtn from "../components/GoNextBtn.vue";
import QuestionContainer from "../components/QuestionContainer.vue";
import RadioBtn from "../components/RadioBtn.vue";
import definition from "../utilities/definition";
export default {
  name: "step1",
  components: { GoNextBtn, QuestionContainer, RadioBtn },
  data() {
    return {
      nextStepNumber: "STEP2",
      year: null,
      month: null,
      date: null,
      yearsArr: [],
      monthsArr: [],
      datesArr: [],
      options: [
        {
          text: "男性",
          value: "男性",
        },
        {
          text: "女性",
          value: "女性",
        },
      ],
    };
  },
  mounted() {
    this.yearsArr = definition.createYears();
    this.monthsArr = definition.createMonths();
    this.datesArr = definition.createDates(this.year, this.month);
  },
  
  /* 年と月変更時に、datesArrを再作成
  現在選択中の日が変更後の月に存在しない場合、dateにnullを代入*/
  watch: {
    year: function () {
      this.datesArr = definition.createDates(this.year, this.month);
      if (this.date >= this.datesArr.length) this.date = null;
    },
    month: function () {
      this.datesArr = definition.createDates(this.year, this.month);
      if (this.date >= this.datesArr.length) this.date = null;
    },
  },
};
</script>