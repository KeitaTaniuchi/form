<template>
  <div>
    <QuestionContainer
      idNumber="step1"
      questionDetail="お客様の情報を入力してください"
      stepNumber="STEP1"
    >
      <section>
        <b-form-group label="-性別-">
          <RadioBtn :options="options" />
        </b-form-group>

        <b-form-group class="mt-5" label="-生年月日-">
          <b-form-select v-model="year" :options="yearsArr"></b-form-select>年
          <b-form-select v-model="month" :options="monthsArr"></b-form-select>月
          <b-form-select v-model="date" :options="datesArr"></b-form-select>日
        </b-form-group>
      </section>
    </QuestionContainer>

    <div class="text-center">
      <GoNextBtn class="text-center" :stepNumber="nextStepNumber" />
    </div>
  </div>
</template>

<script>
import GoNextBtn from "../components/GoNextBtn.vue";
import QuestionContainer from "../components/QuestionContainer.vue";
import RadioBtn from "../components/RadioBtn.vue";
export default {
  name: "step1",
  components: { GoNextBtn, QuestionContainer, RadioBtn },
  data() {
    return {
      nextStepNumber: "STEP2",
      year: "",
      month: "",
      date: "",
      yearsArr: [],
      monthsArr: [],
      datesArr: [],
      options: [
        {
          text: "男性",
          value: "1",
        },
        {
          text: "女性",
          value: "2",
        },
      ],
    };
  },
  mounted() {
    this.yearsArr = this.createYears();
    this.monthsArr = this.createMonths();
    this.datesArr = this.createDates();
  },
  methods: {
    createYears() {
      const yearsArr = [];
      let getNowYear = new Date().getFullYear();
      for (let i = getNowYear; i >= getNowYear - 100; i--) {
        if (i > 2018) {
          yearsArr.push({ value: i, text: `${i}年 (令和${i - 2018})` });
        } else if (i > 1988) {
          yearsArr.push({ value: i, text: `${i}年 (平成${i - 1988})` });
        } else if (i > 1925) {
          yearsArr.push({ value: i, text: `${i}年 (昭和${i - 1925})` });
        } else if (i > 1911) {
          yearsArr.push({ value: i, text: `${i}年 (大正${i - 1911})` });
        }
      }
      return yearsArr;
    },
    createMonths() {
      const monthsArr = [];
      for (let i = 1; i <= 12; i++) {
        monthsArr.push({ value: i, text: i });
      }
      return monthsArr;
    },
    createDates() {
      const datesArr = [];
      for (let i = 1; i <= 31; i++) {
        datesArr.push({ value: i, text: i });
      }
      return datesArr;
    },
  },
};
</script>